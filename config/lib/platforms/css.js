const { ENV } = require('../../../package.json')
const { CATEGORY } = require('../../../utils/lib/constants')

const name = "css" // name defined in package.json/ENV/PLATFORMS array
const transforms = [
    "attribute/cti",
    "gnm/attribute/ctv",
    "name/cti/kebab",
    "time/seconds",
    "content/icon",
    "size/rem",
    "color/css",
]
const fileHeader = "gnm/header"
const format = "css/variables"
const ext = "css"

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
        filter: function (token) {
            return token.attributes.taxonomy.category === CATEGORY.SEMANTIC
        }
    }
}

function definitive(brand) {
    return {
        destination: `colors/definitive/${brand}DefinitiveColors.${ext}`,
        format: format,
        filter: function (token) {
            console.log("CATEGORY.PALETTE",CATEGORY.SEMANTIC )
            console.log("CATEGORY.attributes.taxonomy.category",CATEGORY.PALETTE )

            return token.attributes.taxonomy.category !== CATEGORY.SEMANTIC
        }
    }
}