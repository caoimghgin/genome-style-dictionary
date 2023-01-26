/*
// Transforms

https://amzn.github.io/style-dictionary/#/transforms

Transforms are functions that modify a token so that it can be understood by a specific 
platform. It can modify the name, value, or attributes of a token - enabling each platform 
to use the design token in different ways. A simple example is changing pixel values to 
point values for iOS and dp or sp for Android.

Transforms are isolated per platform; each platform begins with the same design token and
makes the modifications it needs without affecting other platforms. The order you use 
transforms matters because transforms are performed sequentially. Transforms are used in
 your configuration, and can be either pre-defined transforms supplied by Style Dictionary 
 or custom transforms.

Some platform configuration attributes apply a broader effect over the transforms applied.
For example, the size/remToDp transform will scale a number by 16, or by the value of 
options.basePxFontSize if it is present. Check individual transform documentation to 
see where this is applicable.
*/

const StyleDictionary = require('style-dictionary');
const { parseColorTaxonomy, nameFromPath, isColor } = require('./helpers')

/* 
All pre-defined transforms included use the CTI structure for matching tokens. If your 
design tokens are structured differently you will need to write custom transforms or 
make sure the proper CTIs are on the attributes of your design tokens.
*/

/*
Log to console the properties of tokens
*/
StyleDictionary.registerTransform({
    name: `gnm/console/log`,
    type: 'attribute',
    transformer: function (token) {
        console.log(token)
    }
})

/*
Add MetaData to attributes
*/
StyleDictionary.registerTransform({
    name: `gnm/attribute/cti`,
    type: 'attribute',
    transformer: function (token) {

        var result = {
                taxonomy: {
                    system: undefined,
                    category: undefined,
                    type: undefined,
                    item: undefined,
                    subItem: undefined,
                    state: undefined,
                    context: undefined,
            }, 
            name: undefined,
            path: undefined,
        };

        result.name = nameFromPath(token.path)

        if (isColor(token.value)) { parseColorTaxonomy(result) }

        const attributes = token.attributes || {};
        return Object.assign(result, attributes);
    }
})

StyleDictionary.registerTransform({
    name: `gnm/size/pxToPt`,
    type: 'value',
    matcher: function (prop) {
        return prop.value.match(/^[\d.]+px$/);
    },
    transformer: function (prop) {
        return prop.value.replace(/px$/, 'pt');
    }
});

StyleDictionary.registerTransform({
    name: `gnm/size/pxToDp`,
    type: 'value',
    matcher: function (prop) {
        return prop.value.match(/^[\d.]+px$/);
    },
    transformer: function (prop) {
        return prop.value.replace(/px$/, 'dp');
    }
});