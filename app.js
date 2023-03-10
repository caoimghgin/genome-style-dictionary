const utils = require("./utils")
const { CATEGORY } = require("./utils/lib/constants")
const { PALETTE } = require("./utils/lib/palette")
const { CONTEXTUAL } = require("./utils/lib/contextual")

module.exports = {

    semantic: undefined,
    contextual: undefined,

    //
    // Lazy load semantic taxonomy array into getter
    //
    getSemantic: () => {
        if (!(this.semantic)) {
            this.semantic = utils.parseAttributes(PALETTE, CATEGORY.SEMANTIC)
        }
        return this.semantic
    },

    //
    // Lazy load contextual taxonomy array into getter
    //
    getContextual: () => {
        if (!(this.contextual)) {
            this.contextual = utils.parseAttributes(CONTEXTUAL, CATEGORY.CONTEXTUAL)
        }
        return this.contextual
    },

    //
    // Return taxonomy attributes where path ends with known key
    //
    tokenPropertiesForKey: (data, key) => {
        const result = data.filter(obj => key.endsWith(obj.key))
        if (result.length === 0) return undefined
        if (result.length === 1) return scrubber(result[0])
        if (result.length > 1) {
            throw new Error(`"${result}" has more than one value for tokenAttributesForKey. 
            All taxonomy definitions need to be unique.`);
        }
        return
    },

}

//
// Remove default names to make variable names easier to read
//
const scrubber = (data) => {
    data.path = data.path.filter(function (value, index, arr) {
        return (value !== "default") && (value !== "onPaper")
    });
    return data

}


