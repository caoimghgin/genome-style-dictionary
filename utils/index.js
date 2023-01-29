const tinycolor = require('tinycolor2');
const fs = require('fs');

module.exports = {

    // When tokens dir is populated with directories by brands
    // we can loop through each brand and generate tokens.
    getDirectories: (path) => {
        return fs.readdirSync(path).filter(function (file) {
            return fs.statSync(path + '/' + file).isDirectory();
        });
    },

    // Tinycolor method .isValid() determines if the value is a color 
    // which is more reliable that referencing the CTI structure alone. 
    isColor: (value) => {
        return tinycolor(value).isValid()
    }
    
}