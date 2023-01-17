/*
// Filters

https://amzn.github.io/style-dictionary/#/formats?id=filtering-tokens

A special file configuration is filter, which will filter the tokens before they 
get to the format. This allows you to re-use the same format to generate multiple
files with different sets of tokens. Filtering tokens works by adding a filter 
attribute on the file object, where filter is:

--1. An object which gets passed to Lodash's filter method.

--2. A string that references the name of a registered filter, using the 
registerFilter method

--3. A function that takes a token and returns a boolean if the token should be 
included (true) or excluded (false). This is only available if you are defining
your configuration  in Javascript.
*/

// TBD