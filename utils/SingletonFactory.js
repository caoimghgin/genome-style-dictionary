
const { CATEGORY, SEMANTIC_TAXONOMY, CONTEXTUAL_TAXONOMY } = require('./lib/constants')
const { parseAttributes } = require("./index")

// let semantic = []
// let contextual = []

module.exports = {

    semantic: [],
    contextual: [],

    init: () => {

        this.semantic = parseAttributes(SEMANTIC_TAXONOMY, CATEGORY.SEMANTIC)
        this.contextual = parseAttributes(CONTEXTUAL_TAXONOMY, CATEGORY.CONTEXTUAL)

        const foundSemantic = this.semantic.filter(obj => obj.key.endsWith("PRIMARY015"));
        console.log("foundSemantic", foundSemantic)

        const foundContextual = this.contextual.filter(obj => obj.key.endsWith("TXT800ONLIGHT"));
        console.log("foundContextual", foundContextual)

    },

    getContextual: () => { return this.contextual },
    getSemantic: () => { return this.semantic }

}
