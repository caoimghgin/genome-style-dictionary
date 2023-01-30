const { SEMANTIC } = require('./gnm-semantic')
const { CONTEXTUAL } = require('./gnm-contextual')

const CATEGORY = Object.freeze({
	SEMANTIC: "palette",
	CONTEXTUAL: "color",
    DEFINITIVE: "definitive",
	TYPOGRAPHY: "typography",
})

module.exports = {
    CATEGORY,
	SEMANTIC,
	CONTEXTUAL,
}