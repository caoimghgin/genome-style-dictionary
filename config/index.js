const { ENV } = require('../package.json')
const platforms = require('./lib')

module.exports = (brand, platform) => {
    return {
        source:[`${ENV.TOKENS_DIR}/${brand}/**/*.json`],
        platforms: platforms(brand, platform)
    }
} 

