const tinycolor = require('tinycolor2');
const fs = require('fs');
const { CATEGORY, COLOR_TYPE, PALETTE } = require('./lib/constants')

module.exports = {

    // Constants

    CATEGORY,
    COLOR_TYPE,
    PALETTE,
    
    // Functions

    getDirectories: (path) => {
        return fs.readdirSync(path).filter(function (file) {
            return fs.statSync(path + '/' + file).isDirectory();
        });
    },

    // Tinycolor method .isValid() determines if the value is a color 
    // which is more reliable that referencing the CTI structure alone. 
    // This method is used to populate the attributes.metaData.catagory 
    // and other use cases.
    isColor: (value) => {
        return tinycolor(value).isValid()
    }
    
}