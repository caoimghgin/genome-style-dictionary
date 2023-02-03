const { 
    parseAttributes, 
    CATEGORY,
    SEMANTIC_TAXONOMY, 
    CONTEXTUAL_TAXONOMY,
    SEMANTIC, 
    CONTEXTUAL,
} = require("./utils")

module.exports = {

    semantic: undefined,
    contextual: undefined,

    getContextual: () => { 
        if (this.contextual === undefined) {
            this.contextual = parseAttributes(CONTEXTUAL_TAXONOMY, CATEGORY.CONTEXTUAL)
        }
        return this.contextual 
    },

    getSemantic: () => { 
        if (this.semantic === undefined) {
            this.semantic = parseAttributes(SEMANTIC_TAXONOMY, CATEGORY.SEMANTIC)
        }
        return this.semantic 
    },

    tokenAttributesForKey: (data, key) => {
        const result = data.filter(obj => key.endsWith(obj.key))
        if (result.length === 1) return result[0] // "There can only be one" -- Connor MacLeod
        if (result.length > 1) { console.log("THROW ... COLOR ERROR") }
        return undefined
    },

}


