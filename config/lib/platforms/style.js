const { ENV } = require('../../../package.json')
const { CATEGORY } = require('../../../utils/lib/constants')
const utils = require('../../../utils')

const name = "style" // name defined in package.json/ENV/PLATFORMS array

const transforms = [
    "attribute/cti",
    "gnm/attribute/meta",
    "gnm/attribute/ctv",
]
const fileHeader = "gnm/header"
const format = "json"
const ext = "json"

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
            all(),
        ],
    }
    return result
}

function all() {
    return {
        destination: `${ENV.PREFIX}Styleguide.${ext}`,
        format: format,
    }
}