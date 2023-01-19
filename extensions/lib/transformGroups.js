/*
// Transform Groups

https://amzn.github.io/style-dictionary/#/transform_groups

Transform Groups are a way to easily use multiple transforms at once. They are an array 
of transforms. You can define a custom transform group with the registerTransformGroup.

You use transformGroups in your config file under platforms > [platform] > transformGroup
*/

const StyleDictionary = require('style-dictionary');
const { ENV } = require('../../package.json')

const TransformGroups = {
	styleguide: "csms/styleguide",
	js: "csms/tokens-js",
	json: "csms/tokens-json",
	scss: "csms/tokens-scss",
    iOS: "csms/tokens-ios",
    android: "csms/tokens-android"
}

StyleDictionary.registerTransformGroup({
    name: `csms/styleguide`,
    transforms: ["attribute/cti", `gnm/attribute/meta`, "name/cti/kebab", "size/px", "color/css"] // , `gnm/console/log`
});

StyleDictionary.registerTransformGroup({
    name: `csms/tokens-js`,
    transforms: ["name/cti/constant", "size/px", "color/hex"]
});

StyleDictionary.registerTransformGroup({
    name: `csms/tokens-json`,
    transforms: ["attribute/cti", "name/cti/kebab", "size/px", "color/css"]
});

// To see the pre-defined "scss" transformation use: console.log(StyleDictionaryPackage.transformGroup['scss']);
StyleDictionary.registerTransformGroup({
    name: `csms/tokens-scss`,
    transforms: [ "name/cti/kebab", `gnm/attribute/meta`, "time/seconds", "size/px", "color/css", `gnm/console/log` ]
});

// To see the pre-defined "ios" transformation use: console.log(StyleDictionaryPackage.transformGroup['ios']);
StyleDictionary.registerTransformGroup({
    name: `csms/tokens-ios`,
    transforms: [ "attribute/cti", "name/cti/camel", `gnm/size/pxToPt`] 
});

// To see the pre-defined "android" transformation use: console.log(StyleDictionaryPackage.transformGroup['android']);
StyleDictionary.registerTransformGroup({
    name: `csms/tokens-android`,
    transforms: [ "attribute/cti", "name/cti/camel", `gnm/size/pxToDp`,
]
});