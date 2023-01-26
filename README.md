# genome-style-dictionary
This project is a demonstration of a setup of [Style Dictionary](https://github.com/amzn/style-dictionary) for the transformation of Figma plugin generated design tokens to platform specific code.

Genome Style Dictionary builds upon the excellent work of [Cristiano Rastelli](https://medium.com/@didoo) who wrote [a Medium article](https://medium.com/@didoo/how-to-manage-your-design-tokens-with-style-dictionary-98c795b938aa) in 2018 shares his experiences in setting up Style Dictionary for the [Cosmos Design System](http://medium.com/badoo-developers/from-zero-to-cosmos-part-1-2d080fe35bf2) in Badoo.



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
npm run build
```
of you can automatically re-build the tokens at every change using the command:

```
npm run watch
```

The generated tokens are saved in the `/dist` folder, and organised by target platform.

## License

This project is under [MIT license](https://github.com/didoo/style-dictionary-demo/blob/master/LICENSE).

