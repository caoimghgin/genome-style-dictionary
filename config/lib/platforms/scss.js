const { ENV } = require('../../../package.json')
const name = "scss" // name defined in package.json/ENV/PLATFORMS array
const transformGroup = "csms/tokens-scss"
const format = "scss/variables"
const ext = "scss"
let result = {}

module.exports = (brand, platform) => {
    result[name] = {
        transformGroup: transformGroup,
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