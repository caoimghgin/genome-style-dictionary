const tinycolor = require('tinycolor2');
const fs = require('fs');
const { ENV } = require('../package.json')
const { CATEGORY } = require('./lib/constants')

const _ = require("lodash");

var self = module.exports = {

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
                variety: undefined,
                item: undefined,
                state: undefined,
                context: undefined,
            },
        }
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
            attr.path = parseAttributesPath(attr)
            attr.name = parseAttributesName(attr)
            attr.key = parseAttributesKey(attr)
            attr.taxonomy.system = `${ENV.PREFIX}`
            attr.taxonomy.category = category
            result.push(attr)
        });
        return result
    }

}

const parseAttributesPath = (obj) => {
    let result = Object.keys(_.pickBy(obj.taxonomy, item => item !== undefined))
        .map(function (key) {
            return obj.taxonomy[key];
        });
    return result.length ? result : undefined
}

const parseAttributesName = (obj) => {
    return obj.path.join('-')
}

const parseAttributesKey = (obj) => {
    let key = obj.path.map(function (item) { return item.toUpperCase() })
    return key.join("")
}