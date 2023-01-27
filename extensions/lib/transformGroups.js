/*
// Transform Groups

https://amzn.github.io/style-dictionary/#/transform_groups

Transform Groups are a way to easily use multiple transforms at once. They are an array 
of transforms. You can define a custom transform group with the registerTransformGroup.

You use transformGroups in your config file under platforms > [platform] > transformGroup
*/

const StyleDictionary = require('style-dictionary');

StyleDictionary.registerTransformGroup({
    name: `csms/styleguide`,
    transforms: ["attribute/cti", "name/cti/kebab", "size/px", "color/css"] 
});

StyleDictionary.registerTransformGroup({
    name: "csms/tokens-json",
    transforms: ["attribute/cti", "name/cti/kebab", "size/px", "color/css"]
});