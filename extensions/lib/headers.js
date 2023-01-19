/*
// File headers

https://amzn.github.io/style-dictionary/#/formats?id=file-headers


By default Style Dictionary adds a file header comment in the top of files built 
using built-in formats like this:

// Do not edit directly
// Generated on Sat, 01 Jan 2000 00:00:00 GMT

You can remove these comments with the option: showFileHeader: false if you do not
want them in your generated files. You can also create your own file header or extend 
the default one. This could be useful if you want to put a version number or hash of 
the source files rather than a timestamp.

Custom file headers can be added the same way you would add a custom format, either
by using the registerFileHeader function or adding the fileHeader object directly in 
the Style Dictionary configuration. Your custom file header can be used in built-in 
formats as well as custom formats. To use a custom file header in a custom format see 
the fileHeader format helper method.
*/

const StyleDictionary = require('style-dictionary');
const { ENV } = require('../../package.json')

StyleDictionary.registerFileHeader({
  name: `gnm/header/hello`,
  fileHeader: (defaultMessage) => {
    // defaultMessage are the 2 lines above that appear in the default file header
    // you can use this to add a message before or after the default message 👇

    // the fileHeader function should return an array of strings
    // which will be formatted in the proper comment style for a given format
    return [
      ...defaultMessage,
      `hello?`,
      `is it me you're looking for?`,
    ]
  }
});


