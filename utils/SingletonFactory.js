
const { CATEGORY, SEMANTIC_TAXONOMY, CONTEXTUAL_TAXONOMY } = require('./lib/constants')
const { parseAttributes } = require("./index")

module.exports = {

    semantic: undefined,
    contextual: undefined,

    // init: () => {

    //     this.semantic = parseAttributes(SEMANTIC_TAXONOMY, CATEGORY.SEMANTIC)
    //     this.contextual = parseAttributes(CONTEXTUAL_TAXONOMY, CATEGORY.CONTEXTUAL)

    //     // const foundSemantic = this.semantic.filter(obj => obj.key.endsWith("PRIMARY015"));
    //     // console.log("foundSemantic", foundSemantic)

    //     // const foundContextual = this.contextual.filter(obj => obj.key.endsWith("TXT800ONLIGHT"));
    //     // console.log("foundContextual", foundContextual)

    // },

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


