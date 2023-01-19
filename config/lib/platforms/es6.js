const { ENV } = require('../../../package.json')
const name = "es6" // name defined in package.json/ENV/PLATFORMS array
const transform = "csms/tokens-js"
const ext = "js"
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
        destination: `es6/colors/semantic/${ENV.PREFIX}SemanticColors.${ext}`,
        format: "javascript/es6",
    }
}