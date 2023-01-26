const { ENV } = require('../../../package.json')
const name = "js" // name defined in package.json/ENV/PLATFORMS array
const transforms = [
    'attribute/cti',
    'gnm/attribute/cti',
    "name/cti/constant", 
    "size/px", 
    "color/hex",
    "gnm/console/log" 
]
const ext = "js"

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
            jsModule(), 
            jsObject()
        ],
    }

    return result
}

function jsModule() {
    return {
        destination: `module/colors/semantic/${ENV.PREFIX}SemanticColors.${ext}`,
        format: "javascript/module",
    }
}

function jsObject() {
    return {
        destination: `object/colors/semantic/${ENV.PREFIX}SemanticColors.${ext}`,
        format: "javascript/object",
    }
}