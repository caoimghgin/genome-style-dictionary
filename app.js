const utils = require("./utils")
const { CATEGORY, SEMANTIC, CONTEXTUAL } = require("./utils/lib/constants")

module.exports = {

    semantic: undefined,
    contextual: undefined,

    //
    // Lazy load semantic taxonomy array into getter
    //
    getSemantic: () => { 
        if (!utils.isValid(this.semantic)) {
            this.semantic = utils.parseAttributes(SEMANTIC, CATEGORY.SEMANTIC)
        }
        return this.semantic 
    },

    //
    // Lazy load contextual taxonomy array into getter
    //
    getContextual: () => {         
        if (!utils.isValid(this.contextual)) {
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
        if (result.length === 1) return result[0]
        if (result.length > 1) { 
            throw new Error(`"${result}" has more than one value for tokenAttributesForKey. 
            One or more taxonomy definitions need to be unique.`);
        }
        return 
    },

}


