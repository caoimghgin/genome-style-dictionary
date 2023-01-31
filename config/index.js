const { ENV } = require('../package.json')
const platforms = require('./lib')
const SingletonFactory = require('../utils/SingletonFactory')
// import MyClass from '../utils/SingletonFactory'

module.exports = (brand, platform) => {

    var test = SingletonFactory();

    return {
        source:[`${ENV.SOURCE_DIR}/${brand}/**/*.json`],
        platforms: platforms(brand, platform)
    }
} 

