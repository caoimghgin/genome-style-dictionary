const { SEMANTIC } = require('./semantic')
const { CONTEXTUAL, NEW_CONTEXTUAL } = require('./contextual')

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
	NEW_CONTEXTUAL
}