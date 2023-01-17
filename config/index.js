const { ENV } = require('../package.json')

module.exports = (brand, platform) => {
    
    return {
        "source": [
            `${ENV.SOURCE_DIR}/brands/${brand}/*.json`,
            `${ENV.SOURCE_DIR}/globals/**/*.json`,
            `${ENV.SOURCE_DIR}/platforms/${platform}/*.json`
        ],
        "platforms": {
            "web/js": {
                "transformGroup": `${ENV.PREFIX}/tokens-js`,
                "buildPath": `${ENV.BUILD_DIR}/web/${brand}/`,   
                "prefix": `${ENV.PREFIX}`,
                "files": [
                    {
                        "destination": "tokens.module.js",
                        "format": "javascript/module",
                        "options": {
                            "showFileHeader": false,
                            "outputReferences": false
                          }
                    },
                    {
                        "destination": "tokens.object.js",
                        "format": "javascript/object",
                        "options": {
                            "showFileHeader": false,
                            "outputReferences": false
                          }
                    },
                    {
                        "destination": "tokens.es6.js",
                        "format": "javascript/es6",
                        "options": {
                            "showFileHeader": false,
                            "outputReferences": false
                          }
                    }
                ]
            },
            "web/json": {
                "transformGroup": `${ENV.PREFIX}/tokens-json`,
                "buildPath": `${ENV.BUILD_DIR}/web/${brand}/`,
                "prefix": `${ENV.PREFIX}`,
                "files": [
                    {
                        "destination": "tokens.json",
                        "format": "gnm/json/flat",
                        "options": {
                            "showFileHeader": false,
                            "outputReferences": false
                          }
                    }
                ]
            },
            "web/scss": {
                "transformGroup": `${ENV.PREFIX}/tokens-scss`,
                "buildPath": `${ENV.BUILD_DIR}/web/${brand}/`,
                "prefix": `${ENV.PREFIX}`,
                "files": [
                    {
                        "destination": "tokens.scss",
                        "format": "scss/variables"
                    }
                ]
            },
            "styleguide": {
                "transformGroup":`${ENV.PREFIX}/styleguide`,
                "buildPath": `${ENV.BUILD_DIR}/styleguide/`,
                "prefix": `${ENV.PREFIX}`,
                "files": [
                    {
                        "destination": `${platform}_${brand}.json`,
                        "format": "gnm/json/flat",
                        "options": {
                            "showFileHeader": false,
                            "outputReferences": false
                          }
                    },
                    {
                        "destination": `${platform}_${brand}.scss`,
                        "format": "scss/variables",
                        "options": {
                            "showFileHeader": false,
                            "outputReferences": false
                          }
                    }
                ]
            },
            // there are different possible formats for iOS (JSON, PLIST, etc.) so you will have to agree with the iOS devs which format they prefer
            "ios": {
                // I have used custom formats for iOS but keep in mind that Style Dictionary offers some default formats/templates for iOS,
                // so have a look at the documentation before creating custom templates/formats, maybe they already work for you :)
                "transformGroup": `${ENV.PREFIX}/tokens-ios`,
                "buildPath": `${ENV.BUILD_DIR}/ios/${brand}/`,
                "prefix": `${ENV.PREFIX}`,
                "files": [
                    {
                        "destination": "tokens-all.plist",
                        "format": "gnm/ios/plist",
                        "options": {
                            "showFileHeader": false,
                            "outputReferences": false
                          }
                    },
                    {
                        "destination": "tokens-colors.plist",
                        "format": "gnm/ios/plist",
                        "options": {
                            "showFileHeader": false,
                            "outputReferences": false
                          },
                        "filter": {
                            "type": "color"
                        }
                    }
                ]
            },
            "android": {
                // I have used custom formats for Android but keep in mind that Style Dictionary offers some default formats/templates for Android,
                // so have a look at the documentation before creating custom templates/formats, maybe they already work for you :)
                "transformGroup": `${ENV.PREFIX}/tokens-android`,
                "buildPath": `${ENV.BUILD_DIR}/android/${brand}/`,
                "prefix": `${ENV.PREFIX}`,
                "files": [
                    {
                        "destination": "tokens-all.xml",
                        "format": "gnm/android/xml",
                        "options": {
                            "showFileHeader": false,
                            "outputReferences": false
                          }
                    },
                    {
                        "destination": "tokens-colors.xml",
                        "format": "gnm/android/colors",
                        "options": {
                            "showFileHeader": false,
                            "outputReferences": false
                          },
                        "filter": {
                            "type": "color"
                        }
                    }
                ]
            }
        }
    };
}