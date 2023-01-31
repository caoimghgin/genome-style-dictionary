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
    },

    // getContextualColors: () => {
    //     let foo = []
    //     NEW_CONTEXTUAL.every(item => {
    //         let attr = attributes(token)
    //         attr.taxonomy = {...attr.taxonomy, ...item}
    //         attr.path = parseAttributesPath(attr)
    //         attr.name = parseAttributesName(attr)
    //         attr.key = parseAttributesKey(attr)
    //         attr.taxonomy.system = `${ENV.PREFIX}`
    //         attr.taxonomy.category = CATEGORY.CONTEXTUAL
    //         foo.push(attr)
    //         return true;
    //     });
    // }
 
    
}