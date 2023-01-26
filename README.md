# genome-style-dictionary
This project is a demonstration of a setup of [Style Dictionary](https://github.com/amzn/style-dictionary) for the transformation of Figma plugin generated design tokens to platform specific code.

Genome Style Dictionary builds upon the excellent work of [Cristiano Rastelli](https://medium.com/@didoo) whose 2018 [Medium article](https://medium.com/@didoo/how-to-manage-your-design-tokens-with-style-dictionary-98c795b938aa) shares his experiences in setting up Style Dictionary for the [Cosmos Design System](http://medium.com/badoo-developers/from-zero-to-cosmos-part-1-2d080fe35bf2) in Badoo.



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

## Initial setup
Install the project dependencies via the CLI command:

```
npm install
```

## Project structure
The project is made of these files and folders:

* `/src` contains the design tokens input files (in JSON format)
* `/templates` contains the templates used to generate the output files
* `/dist` contains the generated output files (in different formats)
* `build.js` is the script used to generate the output files

## Running the project
You can build the design tokens from the `/src/` folder using the CLI command:

```
yarn build
```

The generated tokens are saved in the `/build` folder, and organised by brand/platform.

## License

This project is under [MIT license](https://github.com/didoo/style-dictionary-demo/blob/master/LICENSE).

