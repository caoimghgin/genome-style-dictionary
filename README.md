# genome-style-dictionary
This project is a demonstration of a setup of [Style Dictionary](https://github.com/amzn/style-dictionary) for the transformation of Figma plugin generated design tokens into platform specific code for multiple brands and dark-mode support.

Genome Style Dictionary builds upon the excellent work of [Cristiano Rastelli](https://medium.com/@didoo) whose 2018 [Medium article](https://medium.com/@didoo/how-to-manage-your-design-tokens-with-style-dictionary-98c795b938aa) shares his experiences in setting up Style Dictionary for the [Cosmos Design System](http://medium.com/badoo-developers/from-zero-to-cosmos-part-1-2d080fe35bf2) in Badoo. If you haven't read it, don't delay! This repo will still be here when you get back.

Code in genome-style-dictionary is leveraged from Cristianos GitHub repo [didoo/style-dictionary-demo](https://github.com/didoo/style-dictionary-demo) but is significantly refactored to ensure classes and functions are manageable and easy to read. Original code is prefixed with csms/ to give credit to the Cosmos Design System which it was created for. New code is prefixed with gnm/ to denote it is genome specific.

## Demo
The Genome Style Dictionary demo is based on a fictionalized future world (dystopian?) where a new mega-corporation named FANG buys Facebook, Amazon, Apple, Netflix. and Google. 

The CEO of FANG Corp. has chosen the Genome Design System to align all brands and decreed all companies must adopt, or else! The system needs to accommodate all brands and platforms with minimal impact to each organizations unique look/feel and must support dark-mode as well.

While neither FANG Corp. or Genome Design System exists, this extreme scenario highlights all the edge cases Design Systems Professionals will encounter when building white-label design systems. It also shows the need for excellent naming convention standards to customize Style Dictionary so we can take advantage of automated token.json output from Figma (rather than hand typing to match the desired CTI structure of Style Dictionary).


## Initial setup
Install the project dependencies via the CLI command:

```
npm install
```

## Project structure
The project is made of these files and folders:

* `/tokens` contains the design tokens input files (in JSON format) that contains brand folders (AMZN, AAPL, GOOG, etc.)
* `/build` contains the generated output files (for different brands/formats)
* `build.js` is the entry point used to generate the output files
* `/extensions/lib` contains customizable parsers, transforms, transformGroups, filters, formats, actions and headers
* `/config/lib/platforms` contains platform specific transforms (css, scss, es6, js, pList, compose, swift, etc)


## Running the project
You can build the design tokens from the `/tokens/[BRAND]/` folders using the CLI command:

```
yarn build
```

The generated tokens are saved in the `/build` folder, and organised by brand/platform.

## License

This project is under [MIT license](https://github.com/didoo/style-dictionary-demo/blob/master/LICENSE).

