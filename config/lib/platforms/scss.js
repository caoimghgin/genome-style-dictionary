const { ENV } = require('../../../package.json')
const { CATEGORY } = require('../../../utils/lib/constants')

const name = "scss" // name defined in package.json/ENV/PLATFORMS array
const transforms = [
    "attribute/cti", 
    "gnm/attribute/ctv", 
    "name/cti/kebab", 
    "time/seconds", 
    "size/px", 
    "color/css", 
]
const fileHeader = "gnm/header"
const format = "scss/variables"
const ext = "scss"

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
            all()
        ],
    }
    return result
}

function all() {
    return {
        destination: `colors/semantic/${ENV.PREFIX}SemanticColors.${ext}`,
        format: format
    }
}