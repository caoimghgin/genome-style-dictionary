const StyleDictionary = require('style-dictionary');
const config = require('./config')
const { ENV } = require('./package.json')
const { getDirectories } = require('./utils')
require('./extensions')

const brands = getDirectories(ENV.TOKENS_DIR)
const platforms = ENV.PLATFORMS

brands.map(brand => {
    platforms.map(platform => {
        StyleDictionary.extend(config(brand, platform))
        .buildPlatform(platform)
    })
})