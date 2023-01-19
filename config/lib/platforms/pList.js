const { ENV } = require('../../../package.json')
const name = "pList" // name defined in package.json/ENV/PLATFORMS array
const transform = "csms/tokens-ios"
const format = "csms/ios/plist"
const ext = "pList"
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