const { ENV } = require('../../../package.json')
const name = "xml" // name defined in package.json/ENV/PLATFORMS array
const transforms = [ 
    'attribute/cti',
    'gnm/attribute/cti',
    "name/cti/camel", 
    `gnm/size/pxToDp`
]
const format = "csms/android/xml"
const ext = "xml"
let result = {}

module.exports = (brand, platform) => {
    result[name] = {
        transforms: transforms,
        buildPath: `${ENV.BUILD_DIR}/${brand}/${platform}/`,
        prefix: `${ENV.PREFIX}`,
        options: {
            showFileHeader: false,
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

