const { CATEGORY, SEMANTIC_TAXONOMY, CONTEXTUAL_TAXONOMY, CONTEXTUAL, SEMANTIC } = require('./lib/constants')
const { ENV } = require('../package.json')
const tinycolor = require('tinycolor2');
const fs = require('fs');
const _ = require("lodash");

var self = module.exports = {

    CATEGORY,
    SEMANTIC_TAXONOMY,
    CONTEXTUAL_TAXONOMY,
    CONTEXTUAL,
    SEMANTIC,

    // An object which holds metaData needed to filter
    // and transform tokens into variables and files.
    attributes: () => {
        return {
            key: undefined,
            name: undefined,
            path: undefined,
            mode: undefined,
            taxonomy: {
                system: undefined,
                category: undefined,
                type: undefined,
                variant: undefined,
                item: undefined,
                state: undefined,
                context: undefined,
            },
        }
    },

    isDefined: (item) => {
       return item === undefined ? false : true
    },

    // When tokens dir is populated with directories by brands
    // we can loop through each brand and generate tokens.
    getDirectories: (path) => {
        return fs.readdirSync(path).filter(function (file) {
            return fs.statSync(path + '/' + file).isDirectory();
        });
    },

    // Tinycolor method .isValid() determines if the value is a color 
    // which is more reliable that referencing structure alone. 
    isColor: (value) => {
        return tinycolor(value).isValid()
    },

    // Populates path, name, and key given a taxonomy object.
    // which is more reliable that referencing structure alone. 
    parseAttributes: (taxonomy, category) => {
        result = []
        taxonomy.forEach((item) => {
            let attr = self.attributes()
            attr.taxonomy = { ...attr.taxonomy, ...item }
            attr.taxonomy.system = `${ENV.PREFIX}`.toLowerCase()
            attr.taxonomy.category = category
            attr.name = parseTaxonomyToName(attr.taxonomy)
            attr.path = parseTaxonomyToPath(attr.taxonomy)
            attr.key = parseTaxonomyToKey(attr.taxonomy)
            result.push(attr)
        });
        return result
    },

    parseKey: (token) => {
        return token.path.join('').toUpperCase()
    },

    parseBrand: (token) => {
        return token.filePath.split('/')[1]
    },

}

const parseTaxonomyToPath = (obj) => {
    let result = Object.keys(_.pickBy(obj, item => item !== undefined))
        .map(function (key) {
            return obj[key];
        });
    return result.length ? result : undefined
}

const parseTaxonomyToName = (obj) => {
    let taxonomy = {...obj}
    delete taxonomy.system
    delete taxonomy.category
    return parseTaxonomyToPath(taxonomy).join('-')
}

const parseTaxonomyToKey = (obj) => {
    let taxonomy = {...obj}
    delete taxonomy.system
    delete taxonomy.category
    let key = parseTaxonomyToPath(taxonomy).map(function (item) { return item.toUpperCase() })
    return key.join("")
}