const { isColor } = require('../../../utils')
const { COLOR_TYPE, CATEGORY, PALETTE } = require('../../../utils/lib/constants')
const { ENV } = require('../../../package.json')


module.exports = {

    parseColorTaxonomy: (dict) => {
        dict.taxonomy.system = ENV.PREFIX.toLowerCase()
        dict.taxonomy.category = PALETTE.includes(dict.name) ? COLOR_TYPE.PALETTE : CATEGORY.COLOR

        if (dict.taxonomy.category === COLOR_TYPE.PALETTE) {
            //
            // I want to split off alpha and numeric values of the color name to create a path, if not already done
            //
            const semanticWeightSplit = dict.name.match(/[^\d]+|\d+/g);
            if (semanticWeightSplit.length === 2) {
                dict.taxonomy.type = semanticWeightSplit[0]
                dict.taxonomy.state = semanticWeightSplit[1]
            }
        }

        setPath(dict)

    },

    nameFromPath:(path) => {
       return path.slice(-1)[0] 
    }
}

const setPath = (dict) => {

    // get all values of the dictionary
    const values = Object.keys(dict.taxonomy).map(function (key) {
        return dict.taxonomy[key];
    });

    const path = values.filter(function (item) {
        return item !== undefined;
    });

    dict.path = path
}