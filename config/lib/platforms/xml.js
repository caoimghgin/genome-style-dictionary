const { ENV } = require('../../../package.json')
const name = "xml" // name defined in package.json/ENV/PLATFORMS array
const transform = "csms/tokens-android"
const format = "csms/android/xml"
const ext = "xml"
let result = {}

module.exports = (brand, platform) => {
    result[name] = {
        transformGroup: transform,
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

