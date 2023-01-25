const CATEGORY = Object.freeze({
	COLOR: "color",
	TYPOGRAPHY: "typography",
})

const COLOR_TYPE = Object.freeze({
	PALETTE: "palette",
	CONTEXTUAL: "contextual",
    DEFINITIVE: "definitive",
})

const PALETTE = Object.freeze([
"primary015", "primary025", "primary050", "primary075", "primary100", "primary200", "primary300", "primary400", "primary500", "primary600", "primary700", "primary800" , "primary900",
"secondary015", "secondary025", "secondary050", "secondary075", "secondary100", "secondary200", "secondary300", "secondary400", "secondary500", "secondary600", "secondary700", "secondary800" , "secondary900",
"tertiary015", "tertiary025", "tertiary050", "tertiary075", "tertiary100", "tertiary200", "tertiary300", "tertiary400", "tertiary500", "tertiary600", "tertiary700", "tertiary800" , "tertiary900",
"positive015", "positive025", "positive050", "positive075", "positive100", "positive200", "positive300", "positive400", "positive500", "positive600", "positive700", "positive800" , "positive900",
"negative015", "negative025", "negative050", "negative075", "negative100", "negative200", "negative300", "negative400", "negative500", "negative600", "negative700", "negative800" , "negative900",
"highlight015", "highlight025", "highlight050", "highlight075", "highlight100", "highlight200", "highlight300", "highlight400", "highlight500", "highlight600", "highlight700", "highlight800" , "highlight900",
"attention015", "attention025", "attention050", "attention075", "attention100", "attention200", "attention300", "attention400", "attention500", "attention600", "attention700", "attention800" , "attention900",
"info015", "info025", "info050", "info075", "info100", "info200", "info300", "info400", "info500", "info600", "info700", "info800" , "info900",
"system015", "system025", "system050", "system075", "system100", "system200", "system300", "system400", "system500", "system600", "system700", "system800" , "system900",
"neutral015", "neutral025", "neutral050", "neutral075", "neutral100", "neutral200", "neutral300", "neutral400", "neutral500", "neutral600", "neutral700", "neutral800" , "neutral900",
"neutral000", "neutral950"
])

module.exports = {
    CATEGORY,
    COLOR_TYPE,
	PALETTE
}