const { CONTEXTUAL } = require('./taxonomy/contextual')
const { SEMANTIC } = require('./taxonomy/semantic')

const CATEGORY = Object.freeze({
	SEMANTIC: "palette",
	CONTEXTUAL: "color",
    DEFINITIVE: "definitive",
	TYPOGRAPHY: "typography",
})

const MODE = Object.freeze({
	LIGHT: "light",
	DARK: "dark"
})

module.exports = {
    CATEGORY,
    MODE,
    SEMANTIC,
    CONTEXTUAL,
}