const { ENV } = require('../../../package.json')

const CATEGORY = Object.freeze({
	SEMANTIC: "palette",
	CONTEXTUAL: "color",
    DEFINITIVE: "definitive",
	TYPOGRAPHY: "typography",
})

const PREFIX = Object.freeze(
    ENV.PREFIX.toLowerCase()
)

const MODE = Object.freeze({
	LIGHT: "light",
	DARK: "dark"
})

module.exports = {
    CATEGORY,
    MODE,
    PREFIX
}