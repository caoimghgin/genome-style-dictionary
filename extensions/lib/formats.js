/*
// Formats

https://amzn.github.io/style-dictionary/#/formats?id=custom-formats

Formats define the output of your created files. For example, to use your styles in 
CSS you use the css/variables format. This will create a CSS file containing the 
variables from your style dictionary.

You can create custom formats using the registerFormat function or by directly 
including them in your configuration. A format has a name and a formatter function, 
which takes an object as the argument and should return a string which is then written 
to a file.
*/

const StyleDictionary = require('style-dictionary');
const _ = require('lodash');
const fs = require('fs');

StyleDictionary.registerFormat({
    name: 'csms/json/flat',
    formatter: function (dictionary) {
        return JSON.stringify(dictionary.allProperties, null, 2);
    }
});

StyleDictionary.registerFormat({
    name: 'csms/ios/plist',
    formatter: _.template(fs.readFileSync(__dirname + '/templates/ios-plist.template')),
});

StyleDictionary.registerFormat({
    name: 'csms/android/xml',
    formatter: _.template(fs.readFileSync(__dirname + '/templates/android-xml.template')),
});

StyleDictionary.registerFormat({
    name: 'csms/android/colors',
    formatter: _.template(fs.readFileSync( __dirname + '/templates/android-xml.template')),
  });