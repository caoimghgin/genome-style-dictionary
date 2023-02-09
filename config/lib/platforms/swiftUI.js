const { ENV } = require('../../../package.json')
const { CATEGORY } = require('../../../utils/lib/constants')
const utils = require('../../../utils')

const name = "swiftUI" // name defined in package.json/ENV/PLATFORMS array

const transforms = [
    "attribute/cti",
    "gnm/attribute/ctv",
    "attribute/cti",
    "name/cti/camel",
    "color/UIColorSwift",
    "content/swift/literal",
    "asset/swift/literal",
    "size/swift/remToCGFloat",
    "font/swift/literal",
]
const fileHeader = "gnm/header"
const format = "ios-swift/any.swift"
const ext = "swift"

let result = {}

module.exports = (brand, platform) => {
    result[name] = {
        transforms: transforms,
        buildPath: `${ENV.BUILD_DIR}/${brand}/${platform}/`,
        options: {
            fileHeader: fileHeader,
            outputReferences: true,
        },
        files: [
            all(),
            palette(),
            contextualLight(),
            contextualDark(),
            definitive(brand)
        ],
    }
    return result
}

function all() {
    return {
        destination: `${ENV.PREFIX}Variables.${ext}`,
        format: format,
    }
}

function palette() {
    return {
        destination: `colors/palette/${ENV.PREFIX}PaletteColors.${ext}`,
        format: format,
        import: ['UIKit', 'OtherThink'],
        objectType: 'struct',
        accessControl: 'internal',
        filter: function (token) {

            if (token.attributes.hasOwnProperty('taxonomy')) {
                return token.attributes.taxonomy.category === CATEGORY.SEMANTIC
            } else {
                console.log("WHAT DOES NOT HAVE A TAXONOMY?", token)
            }
            return false

        }
    }
}

function definitive(brand) {
    return {
        destination: `colors/definitive/${brand}DefinitiveColors.${ext}`,
        format: format,
        filter: function (token) {
            return (token.attributes.taxonomy.category) ? false : true
        }
    }
}

function contextualLight() {
    return {
        destination: `colors/contextual/light/${ENV.PREFIX}ContextualColors.${ext}`,
        format: format,
        filter: function (token) {
            return ((token.attributes.taxonomy.category === CATEGORY.CONTEXTUAL) && (token.attributes.mode === "light"))
        }
    }
}

function contextualDark() {
    return {
        destination: `colors/contextual/dark/${ENV.PREFIX}ContextualColors.${ext}`,
        format: format,
        filter: function (token) {
            return ((token.attributes.taxonomy.category === CATEGORY.CONTEXTUAL) && (token.attributes.mode === "dark"))
        }
    }
}