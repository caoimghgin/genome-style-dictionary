const { ENV } = require('../../../package.json')
const { CATEGORY } = require('../../../utils/lib/constants')

const name = "es6" // name defined in package.json/ENV/PLATFORMS array
const transforms = [
    "attribute/cti",
    "gnm/attribute/ctv",
    "name/cti/constant", 
    "size/px", 
    "color/hex"
]
const fileHeader = "gnm/header"
const format = "javascript/es6"
const ext = "js"

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
        destination: `es6/colors/semantic/${ENV.PREFIX}SemanticColors.${ext}`,
        format: format,
    }
}