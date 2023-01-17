const StyleDictionary = require('style-dictionary');
const config = require('./config')
const { ENV } = require('./package.json')
const { getDirectories } = require('./utils')

require('./extensions')

console.log('Build started...');

['web', 'ios', 'android'].map(function(platform) {
    ['brand#1', 'brand#2', 'brand#3'].map(function(brand) {

        console.log('\n==============================================');
        // console.log(`\nProcessing: [${platform}] [${brand}]`);
        // console.log("ENV === ", ENV.SOURCE_DIR)
        // console.log("DIRS === ", getDirectories(ENV.SOURCE_DIR))

        const StyleDictionaryConfig = StyleDictionary.extend(config(brand, platform));

        if (platform === 'web') {
            StyleDictionaryConfig.buildPlatform('web/js');
            StyleDictionaryConfig.buildPlatform('web/json');
            StyleDictionaryConfig.buildPlatform('web/scss');
        } else if (platform === 'ios') {
            StyleDictionaryConfig.buildPlatform('ios');
        } else if (platform === 'android') {
            StyleDictionaryConfig.buildPlatform('android');
        }
        StyleDictionaryConfig.buildPlatform('styleguide');

        console.log('\nEnd processing');

    })
})

console.log('\n==============================================');
console.log('\nBuild completed!');