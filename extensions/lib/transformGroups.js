/*
// Transform Groups

https://amzn.github.io/style-dictionary/#/transform_groups

Transform Groups are a way to easily use multiple transforms at once. They are an array 
of transforms. You can define a custom transform group with the registerTransformGroup.

You use transformGroups in your config file under platforms > [platform] > transformGroup
*/

const StyleDictionary = require('style-dictionary');
const { ENV } = require('../../package.json')

StyleDictionary.registerTransformGroup({
    name: `${ENV.PREFIX}/styleguide`,
    transforms: ["attribute/cti", `${ENV.PREFIX}/attribute/meta`, "name/cti/kebab", "size/px", "color/css"] // , `${ENV.PREFIX}/console/log`
});

StyleDictionary.registerTransformGroup({
    name: `${ENV.PREFIX}/tokens-js`,
    transforms: ["name/cti/constant", "size/px", "color/hex"]
});

StyleDictionary.registerTransformGroup({
    name: `${ENV.PREFIX}/tokens-json`,
    transforms: ["attribute/cti", "name/cti/kebab", "size/px", "color/css"]
});

// To see the pre-defined "scss" transformation use: console.log(StyleDictionaryPackage.transformGroup['scss']);
StyleDictionary.registerTransformGroup({
    name: `${ENV.PREFIX}/tokens-scss`,
    transforms: [ "name/cti/kebab", "time/seconds", "size/px", "color/css" ]
});

// To see the pre-defined "ios" transformation use: console.log(StyleDictionaryPackage.transformGroup['ios']);
StyleDictionary.registerTransformGroup({
    name: `${ENV.PREFIX}/tokens-ios`,
    transforms: [ "attribute/cti", "name/cti/camel", `${ENV.PREFIX}/size/pxToPt`] 
});

// To see the pre-defined "android" transformation use: console.log(StyleDictionaryPackage.transformGroup['android']);
StyleDictionary.registerTransformGroup({
    name: `${ENV.PREFIX}/tokens-android`,
    transforms: [ "attribute/cti", "name/cti/camel", `${ENV.PREFIX}/size/pxToDp`,
]
});