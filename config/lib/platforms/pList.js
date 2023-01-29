const { ENV } = require('../../../package.json')
const { CATEGORY } = require('../../../utils/lib/constants')

const name = "pList" // name defined in package.json/ENV/PLATFORMS array
const transforms = [
    "attribute/cti",
    "gnm/attribute/ctv",
    "name/cti/camel", 
    "gnm/size/pxToPt"
]
const fileHeader = "gnm/header"
const format = "csms/ios/plist"
const ext = "pList"

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