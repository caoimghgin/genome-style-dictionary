/*
// Parsers

https://amzn.github.io/style-dictionary/#/parsers

Starting in version 3.0, you can define custom parsers to parse design token files. 
This allows you to define your design token files in any language you like as long 
as you can write a parser for it.

A custom parser matches design token files based on a file path regular expression. 
It will get the contents of a file as a string and should return an object of the data.

Custom parsers can be used to keep design token files in other languages like YAML, but 
they can also be used to add extra metadata or modify the design tokens themselves before 
they get to Style Dictionary. For example, you could modify the token object based on its 
file path or programmatically generate tokens based on the data in certain files.
*/

const StyleDictionary = require('style-dictionary');

StyleDictionary.registerParser({
    pattern: /\.json$/,
    parse: ({ contents, filePath }) => {
        // replace "$value" with "value" and "$description" with "comment"
        // contents = contents.replace(/"$value"/g, '"value"').replace(/"$description"/g, '"comment"')
        // contents = contents.replace(/"description"/g, '"comment"')
        return JSON.parse(contents);
    }
})