
const fs = require('fs');
const ENV = require('../package.json')
var tinycolor = require("tinycolor2")

// const semanticColors = require('../lib/LUT/semantic')
// const contextualColors = require('../lib/LUT/contextual')
// const brandContextualColors = require('../lib/LUT/brand-contextual')
// const typography = require('../lib/LUT/typography')

const _ = require('lodash');

const attributes = () => {
    return {
        key: null,
        name: null,
        path: null,
        mode: null,
        taxonomy: {
            system: null,
            category: null,
            type: null,
            item: null,
            variant: null,
            subitem: null,
            state: null,
            context: null,
        }
    }

}

const metaData = {
    $meta: {
        key: null,
        name: null,
        path: null,
        mode: null,
        taxonomy: {
            system: null,
            category: null,
            type: null,
            item: null,
            variant: null,
            subitem: null,
            state: null,
            context: null,
        }
    }
}

const parseKey = (token) => {
    return token.path.join('').toUpperCase()
}

const parseBrand = (token) => {
    return token.filePath.split('/')[1]
}

const parseTaxonomyToPath = (obj) => {
    let result = Object.keys(_.pickBy(obj, item => (item ? true : false)))
        .map(function (key) {
            return obj[key];
        });
    return result.length ? result : undefined
}

const parseTaxonomyToName = (obj) => {
    let taxonomy = { ...obj }
    delete taxonomy.system
    delete taxonomy.category
    return parseTaxonomyToPath(taxonomy).join('-')
}

const parseTaxonomyToKey = (obj, key) => {
    if (key) { return key.replace(/\s+/g, "").toUpperCase() }
    let taxonomy = { ...obj }
    delete taxonomy.system
    delete taxonomy.category
    let result = parseTaxonomyToPath(taxonomy).map(function (item) { return item.toUpperCase() })
    return result.join("")
}

const parseAttributes = (taxonomy) => {
    result = []
    taxonomy.forEach((item) => {
        let data = attributes()
        data.taxonomy = item.value
        data.name = parseTaxonomyToName(data.taxonomy)
        data.path = parseTaxonomyToPath(data.taxonomy)
        data.key = parseTaxonomyToKey(data.taxonomy, item.key)
        result.push(data)
    });
    return result
}

const parseMetaData = (taxonomy) => {
    result = []
    taxonomy.forEach((item) => {
        // let data = metaData
        data.$meta.taxonomy = item.value
        data.$meta.name = parseTaxonomyToName(data.$meta.taxonomy)
        data.$meta.path = parseTaxonomyToPath(data.$meta.taxonomy)
        data.$meta.key = parseTaxonomyToKey(data.$meta.taxonomy, item.key)
        result.push(data)
    });
    return result
}

const getDirectories = (path) => {
    return fs.readdirSync(path).filter(function (file) {
        return fs.statSync(path + '/' + file).isDirectory();
    });
}

const removeDuplicateItems = (path) => {
    let result = []
    for (let index = path.length - 1; index >= 0; index--) {
        const item = path[index];
        if (result.length === 0) {
            result.push(item)
        } else {
            const lastItem = result[result.length - 1]
            if (!lastItem.startsWith(item)) {
                result.push(item)
            }
        }
    }
    return result.reverse()
}

const removeExtraItems = (path) => {
    return path.filter(item => !ENV.REMOVE_ITEMS.includes(item))
}

const defineAsPalette = (path) => {
    path.splice(1, 0, "palette");
    return path
}

const normalizeBlackWhiteToken = (prop) => {
    var color = tinycolor(prop.value);
    if (tinycolor.equals(color, tinycolor("white"))) {
        return ['color', 'white']
    } else if (tinycolor.equals(color, tinycolor("black"))) {
        return ['color', 'black']
    } else {
        return prop.path
    }
}

const normalizeSemanticToPaletteToken = (path, name) => {
    path[path.indexOf("color")] = name;
    return path
}

const normalizePathForBlackAndWhite = (prop) => {
    var color = tinycolor(prop.value);
    if (color.isValid()) {
        if (prop.properties.type === "semantic") {
            if (tinycolor.equals(color, tinycolor("white"))) {
                prop.path = ['white']
            } else if (tinycolor.equals(color, tinycolor("black"))) {
                prop.path = ['black']
            }
        }
        prop.path.unshift("color")
    }
    return prop.path
}

const normalizePathToLowerCase = (arr) => {
    return arr.map(element => {
        return element.toLowerCase();
    });
}

// Figma path, 'color/palette/primary/primary400' would output as
// 'color-palette-primary-primary400' per token. Instead normalize  
// the path to output 'color-palette-primary400'
const normalizePathForDuplicates = (path) => {
    function trimDuplicates(arr) {
        let result = []
        for (var i = arr.length - 1; i >= 0; i--) {
            let item = arr[i].toLowerCase()
            let before = (arr[i - 1] !== undefined ? arr[i - 1].toLowerCase() : undefined)
            if (item.startsWith(before)) {
                arr[i] = arr[i].substring(before.length);
            }
            result.push(arr[i])
        }
        return result.filter(e => e !== '').reverse()
    }
    return trimDuplicates(path)
}

// There are directories in NewsKit Figma files (and probably others)
// Any directory that begins with 'NK-' should be excluded from the path
const normalizePathForNewsKitPrefix = (path) => {
    return path.filter(item => !item.toLowerCase().startsWith("nk-"));
}

// There are directories in NewsKit Figma files (and probably others)
// which only adds visual 'noise' for developers. An array of path items
// are 'black-listed' for removal. This code must be run AFTER the normalizeToLowerCase()
const normalizePathForExcludedItems = (path) => {
    return path.filter(item => !ENV.BLACK_LISTED_DIRS.includes(item))
}

const normalizePathForSemanticColor = (prop) => {
    if (prop.properties.type === "semantic") {
        prop.path[0] = ENV.PALETTE_KEY
        prop.path.unshift(ENV.PREFIX);
    }
    return prop.path
}

const normalizePathForContextualColor = (prop) => {
    if (prop.properties.type === "contextual") {
        prop.path.unshift(ENV.PREFIX);
    }
    return prop.path
}

const normalizePathForDefinitiveColor = (prop) => {
    if (prop.properties.type === "definitive") {
        let brand = prop.filePath.split("/")[1]
        prop.path.unshift(brand);
    }
    return prop.path
}

const normalizePathForLegacyColor = (prop) => {
    if (prop.properties.type === "legacy") {
        let brand = prop.filePath.split("/")[1]
        prop.path.unshift(brand);
    }
    return prop.path
}

const normalizePathForTypography = (prop) => {
    if (prop.properties.category === "typography") {
        if (prop.properties.version === 2) {
            prop.path.unshift(ENV.PREFIX);
        } else {
            prop.path.unshift(prop.filePath.split("/")[1]);
        }
    }
    return prop.path
}

const isTypography = (name) => {
    const typographyProperties = ["fontSize", "textDecoration", "fontFamily", "fontWeight", "fontStyle", "fontStretch", "letterSpacing", "lineHeight", "paragraphIndent", "paragraphSpacing", "textCase"]
    const result = typographyProperties.find(element => {
        return element.toLowerCase() === name.toLowerCase();
    });
    return ((result !== undefined) ? true : false)
}

const isDJTypography = (name) => {
    const result = typography().find(element => {
        return element.toLowerCase() === name.toLowerCase();
    });
    return ((result !== undefined) ? true : false)
}

const isSemanticColor = (colorName) => {
    const result = semanticColors().find(element => {
        return element.toLowerCase() === colorName.toLowerCase();
    });
    return ((result !== undefined) ? true : false)
}

const isContenxtualColor = (colorName) => {
    const result = contextualColors().find(element => {
        return element.toLowerCase() === colorName.toLowerCase();
    });
    return ((result !== undefined) ? true : false)
}

const isBrandContenxtualColor = (colorName) => {
    const result = brandContextualColors().find(element => {
        return element.toLowerCase() === colorName.toLowerCase();
    });
    return ((result !== undefined) ? true : false)
}

const isContextualDark = (prop) => {
    let key = "dark"
    let path = [...prop.path]
    path.pop()
    const endsWithDark = path.find(element => {
        return element.toLowerCase().endsWith(key.toLowerCase());
    });
    const startsWitDark = path.find(element => {
        return element.toLowerCase().startsWith(key.toLowerCase());
    });
    return (((endsWithDark !== undefined) || (startsWitDark !== undefined)) ? true : false)
}

//
// A definitive color is neither semantic or contextual.
// non-defined in the design system.
//
const isDefinitiveColor = (colorName) => {
    const result = semanticColors().find(element => {
        return element.toLowerCase() === colorName.toLowerCase();
    });

    result = contextualColors().find(element => {
        return element.toLowerCase() === colorName.toLowerCase();
    });

    return ((result !== undefined) ? true : false)
}

const isValidColor = (value) => {
    const color = tinycolor(value);
    return color.isValid()
}

module.exports = {
    attributes, metaData, parseKey, parseBrand, parseAttributes, parseMetaData, getDirectories, removeDuplicateItems, removeExtraItems, defineAsPalette,
    normalizeBlackWhiteToken, normalizeSemanticToPaletteToken, normalizePathForBlackAndWhite,
    normalizePathToLowerCase, normalizePathForDuplicates, normalizePathForNewsKitPrefix,
    normalizePathForExcludedItems, normalizePathForSemanticColor, normalizePathForContextualColor,
    normalizePathForDefinitiveColor, normalizePathForLegacyColor, normalizePathForTypography,
    isTypography, isDJTypography, isSemanticColor, isContenxtualColor, isBrandContenxtualColor,
    isContextualDark, isDefinitiveColor, isValidColor
}