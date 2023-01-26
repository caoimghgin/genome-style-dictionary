const { ENV } = require('../../../package.json')
const name = "css" // name defined in package.json/ENV/PLATFORMS array
const transforms = [
    'attribute/cti',
    'gnm/attribute/cti',
    'name/cti/kebab',
    'time/seconds',
    'content/icon',
    'size/rem',
    'color/css',
    "gnm/console/log" 
  ]
const format = "css/variables"
const ext = "css"
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
        format: format,
    }
}