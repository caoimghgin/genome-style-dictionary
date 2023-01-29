const { ENV } = require('../../../package.json')
const { CATEGORY } = require('../../../utils/lib/constants')

const name = "xml" // name defined in package.json/ENV/PLATFORMS array
const transforms = [ 
    "attribute/cti",
    "gnm/attribute/ctv",
    "name/cti/camel", 
    "gnm/size/pxToDp"
]
const fileHeader = "gnm/header"
const format = "csms/android/xml"
const ext = "xml"

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

const all = () => {
    return {
        destination: `${ENV.PREFIX}Variables.${ext}`,
        format: format
    }
}

// const palette = () => {
//     return {
//         destination: `colors/semantic/${ENV.PREFIX}SemanticColors.${ext}`,
//         format: format
//     }
// }