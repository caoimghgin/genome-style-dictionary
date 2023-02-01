
const { NEW_CONTEXTUAL } = require("./lib/contextual")
const { ENV } = require('../package.json')
const { parseAttributes, attributes, parseAttributesPath, parseAttributesName, parseAttributesKey } = require("./index")
const { CATEGORY } = require('./lib/constants')

let semantic = []
let contextual = []

module.exports = {

    init: () => {

        contextual = parseAttributes(contextualTaxonomy, CATEGORY.CONTEXTUAL)
        semantic = parseAttributes(semanticTaxonomy, CATEGORY.SEMANTIC)

        const foundItfoundIt = contextual.filter(obj => obj.key.endsWith("TXT800ONLIGHT"));
        console.log("FOUND IT!!!", foundItfoundIt)


        const asdf = semantic.filter(obj => obj.key.endsWith("PRIMARY015"));
        console.log("FOUND IT!!!", asdf)

    },

    contextual: () => { return contextual },
    semantic: () => { return semantic }

}

const contextualTaxonomy = [
    //
    // Contextual specific always defines an 'item' or component it is created to be used for
    //
    {type: "bkg", variant: "primary", item: "button", state: "default", context: "onPaper"}, // bkg-primary-button-default-onPaper
    {type: "bkg", variant: "primary", item: "button", state: "hover", context: "onPaper"},   // bkg-primary-button-hover-onPaper
    {type: "bkg", variant: "primary", item: "button", state: "active", context: "onPaper"},  // bkg-primary-button-active-onPaper
    {type: "bkg", variant: "primary", item: "button", state: "disabled", context: "onPaper"}, // bkg-primary-button-disabled-onPaper

    //
    // Contextual non-specific does not define an item
    //
    {type: "txt", variant: undefined, item: undefined, state: "800", context: "onPaper"}, // -txt-800-onPaper
    {type: "txt", variant: undefined, item: undefined, state: "600", context: "onPaper"}, // -txt-600-onPaper
    {type: "txt", variant: undefined, item: undefined, state: "400", context: "onPaper"}, // -txt-200-onPaper
    {type: "txt", variant: undefined, item: undefined, state: "200", context: "onPaper"}, // -txt-200-onPaper

    {type: "txt", variant: undefined, item: undefined, state: "800", context: "onLight"}, // -txt-800-onLight
    {type: "txt", variant: undefined, item: undefined, state: "600", context: "onLight"}, // -txt-600-onLight
    {type: "txt", variant: undefined, item: undefined, state: "400", context: "onLight"}, // -txt-400-onLight
    {type: "txt", variant: undefined, item: undefined, state: "200", context: "onLight"}, // -txt-200-onLight

    {type: "txt", variant: undefined, item: undefined, state: "800", context: "onDark"},  // -txt-800-onDark
    {type: "txt", variant: undefined, item: undefined, state: "600", context: "onDark"},  // -txt-800-onDark
    {type: "txt", variant: undefined, item: undefined, state: "400", context: "onDark"},  // -txt-800-onDark
    {type: "txt", variant: undefined, item: undefined, state: "200", context: "onDark"},  // -txt-800-onDark
]

const semanticTaxonomy = [

    {type: "primary", variant: undefined, item: undefined, state: "015", context: undefined}, // primary-015
    {type: "primary", variant: undefined, item: undefined, state: "025", context: undefined}, // primary-025
    {type: "primary", variant: undefined, item: undefined, state: "050", context: undefined}, // primary-050
    {type: "primary", variant: undefined, item: undefined, state: "075", context: undefined}, // primary-075
    {type: "primary", variant: undefined, item: undefined, state: "085", context: undefined}, // primary-085
    {type: "primary", variant: undefined, item: undefined, state: "100", context: undefined}, // primary-100
    {type: "primary", variant: undefined, item: undefined, state: "200", context: undefined}, // primary-200
    {type: "primary", variant: undefined, item: undefined, state: "300", context: undefined}, // primary-300
    {type: "primary", variant: undefined, item: undefined, state: "400", context: undefined}, // primary-400
    {type: "primary", variant: undefined, item: undefined, state: "500", context: undefined}, // primary-500
    {type: "primary", variant: undefined, item: undefined, state: "600", context: undefined}, // primary-600
    {type: "primary", variant: undefined, item: undefined, state: "700", context: undefined}, // primary-700
    {type: "primary", variant: undefined, item: undefined, state: "800", context: undefined}, // primary-800
    {type: "primary", variant: undefined, item: undefined, state: "900", context: undefined}, // primary-900


    {type: "secondary", variant: undefined, item: undefined, state: "015", context: undefined}, // secondary-015
    {type: "secondary", variant: undefined, item: undefined, state: "025", context: undefined}, // secondary-025
    {type: "secondary", variant: undefined, item: undefined, state: "050", context: undefined}, // secondary-050
    {type: "secondary", variant: undefined, item: undefined, state: "075", context: undefined}, // secondary-075
    {type: "secondary", variant: undefined, item: undefined, state: "085", context: undefined}, // secondary-085
    {type: "secondary", variant: undefined, item: undefined, state: "100", context: undefined}, // secondary-100
    {type: "secondary", variant: undefined, item: undefined, state: "200", context: undefined}, // secondary-200
    {type: "secondary", variant: undefined, item: undefined, state: "300", context: undefined}, // secondary-300
    {type: "secondary", variant: undefined, item: undefined, state: "400", context: undefined}, // secondary-400
    {type: "secondary", variant: undefined, item: undefined, state: "500", context: undefined}, // secondary-500
    {type: "secondary", variant: undefined, item: undefined, state: "600", context: undefined}, // secondary-600
    {type: "secondary", variant: undefined, item: undefined, state: "700", context: undefined}, // secondary-700
    {type: "secondary", variant: undefined, item: undefined, state: "800", context: undefined}, // secondary-800
    {type: "secondary", variant: undefined, item: undefined, state: "900", context: undefined}, // secondary-900


    {type: "tertiary", variant: undefined, item: undefined, state: "015", context: undefined}, // tertiary-015
    {type: "tertiary", variant: undefined, item: undefined, state: "025", context: undefined}, // tertiary-025
    {type: "tertiary", variant: undefined, item: undefined, state: "050", context: undefined}, // tertiary-050
    {type: "tertiary", variant: undefined, item: undefined, state: "075", context: undefined}, // tertiary-075
    {type: "tertiary", variant: undefined, item: undefined, state: "085", context: undefined}, // tertiary-085
    {type: "tertiary", variant: undefined, item: undefined, state: "100", context: undefined}, // tertiary-100
    {type: "tertiary", variant: undefined, item: undefined, state: "200", context: undefined}, // tertiary-200
    {type: "tertiary", variant: undefined, item: undefined, state: "300", context: undefined}, // tertiary-300
    {type: "tertiary", variant: undefined, item: undefined, state: "400", context: undefined}, // tertiary-400
    {type: "tertiary", variant: undefined, item: undefined, state: "500", context: undefined}, // tertiary-500
    {type: "tertiary", variant: undefined, item: undefined, state: "600", context: undefined}, // tertiary-600
    {type: "tertiary", variant: undefined, item: undefined, state: "700", context: undefined}, // tertiary-700
    {type: "tertiary", variant: undefined, item: undefined, state: "800", context: undefined}, // tertiary-800
    {type: "tertiary", variant: undefined, item: undefined, state: "900", context: undefined}, // tertiary-900


    {type: "positive", variant: undefined, item: undefined, state: "015", context: undefined}, // positive-015
    {type: "positive", variant: undefined, item: undefined, state: "025", context: undefined}, // positive-025
    {type: "positive", variant: undefined, item: undefined, state: "050", context: undefined}, // positive-050
    {type: "positive", variant: undefined, item: undefined, state: "075", context: undefined}, // positive-075
    {type: "positive", variant: undefined, item: undefined, state: "085", context: undefined}, // positive-085
    {type: "positive", variant: undefined, item: undefined, state: "100", context: undefined}, // positive-100
    {type: "positive", variant: undefined, item: undefined, state: "200", context: undefined}, // positive-200
    {type: "positive", variant: undefined, item: undefined, state: "300", context: undefined}, // positive-300
    {type: "positive", variant: undefined, item: undefined, state: "400", context: undefined}, // positive-400
    {type: "positive", variant: undefined, item: undefined, state: "500", context: undefined}, // positive-500
    {type: "positive", variant: undefined, item: undefined, state: "600", context: undefined}, // positive-600
    {type: "positive", variant: undefined, item: undefined, state: "700", context: undefined}, // positive-700
    {type: "positive", variant: undefined, item: undefined, state: "800", context: undefined}, // positive-800
    {type: "positive", variant: undefined, item: undefined, state: "900", context: undefined}, // positive-900


    {type: "negative", variant: undefined, item: undefined, state: "015", context: undefined}, // negative-015
    {type: "negative", variant: undefined, item: undefined, state: "025", context: undefined}, // negative-025
    {type: "negative", variant: undefined, item: undefined, state: "050", context: undefined}, // negative-050
    {type: "negative", variant: undefined, item: undefined, state: "075", context: undefined}, // negative-075
    {type: "negative", variant: undefined, item: undefined, state: "085", context: undefined}, // negative-085
    {type: "negative", variant: undefined, item: undefined, state: "100", context: undefined}, // negative-100
    {type: "negative", variant: undefined, item: undefined, state: "200", context: undefined}, // negative-200
    {type: "negative", variant: undefined, item: undefined, state: "300", context: undefined}, // negative-300
    {type: "negative", variant: undefined, item: undefined, state: "400", context: undefined}, // negative-400
    {type: "negative", variant: undefined, item: undefined, state: "500", context: undefined}, // negative-500
    {type: "negative", variant: undefined, item: undefined, state: "600", context: undefined}, // negative-600
    {type: "negative", variant: undefined, item: undefined, state: "700", context: undefined}, // negative-700
    {type: "negative", variant: undefined, item: undefined, state: "800", context: undefined}, // negative-800
    {type: "negative", variant: undefined, item: undefined, state: "900", context: undefined}, // negative-900


    {type: "highlight", variant: undefined, item: undefined, state: "015", context: undefined}, // highlight-015
    {type: "highlight", variant: undefined, item: undefined, state: "025", context: undefined}, // highlight-025
    {type: "highlight", variant: undefined, item: undefined, state: "050", context: undefined}, // highlight-050
    {type: "highlight", variant: undefined, item: undefined, state: "075", context: undefined}, // highlight-075
    {type: "highlight", variant: undefined, item: undefined, state: "085", context: undefined}, // highlight-085
    {type: "highlight", variant: undefined, item: undefined, state: "100", context: undefined}, // highlight-100
    {type: "highlight", variant: undefined, item: undefined, state: "200", context: undefined}, // highlight-200
    {type: "highlight", variant: undefined, item: undefined, state: "300", context: undefined}, // highlight-300
    {type: "highlight", variant: undefined, item: undefined, state: "400", context: undefined}, // highlight-400
    {type: "highlight", variant: undefined, item: undefined, state: "500", context: undefined}, // highlight-500
    {type: "highlight", variant: undefined, item: undefined, state: "600", context: undefined}, // highlight-600
    {type: "highlight", variant: undefined, item: undefined, state: "700", context: undefined}, // highlight-700
    {type: "highlight", variant: undefined, item: undefined, state: "800", context: undefined}, // highlight-800
    {type: "highlight", variant: undefined, item: undefined, state: "900", context: undefined}, // highlight-900


    {type: "attention", variant: undefined, item: undefined, state: "015", context: undefined}, // attention-015
    {type: "attention", variant: undefined, item: undefined, state: "025", context: undefined}, // attention-025
    {type: "attention", variant: undefined, item: undefined, state: "050", context: undefined}, // attention-050
    {type: "attention", variant: undefined, item: undefined, state: "075", context: undefined}, // attention-075
    {type: "attention", variant: undefined, item: undefined, state: "085", context: undefined}, // attention-085
    {type: "attention", variant: undefined, item: undefined, state: "100", context: undefined}, // attention-100
    {type: "attention", variant: undefined, item: undefined, state: "200", context: undefined}, // attention-200
    {type: "attention", variant: undefined, item: undefined, state: "300", context: undefined}, // attention-300
    {type: "attention", variant: undefined, item: undefined, state: "400", context: undefined}, // attention-400
    {type: "attention", variant: undefined, item: undefined, state: "500", context: undefined}, // attention-500
    {type: "attention", variant: undefined, item: undefined, state: "600", context: undefined}, // attention-600
    {type: "attention", variant: undefined, item: undefined, state: "700", context: undefined}, // attention-700
    {type: "attention", variant: undefined, item: undefined, state: "800", context: undefined}, // attention-800
    {type: "attention", variant: undefined, item: undefined, state: "900", context: undefined}, // attention-900


    {type: "info", variant: undefined, item: undefined, state: "015", context: undefined}, // info-015
    {type: "info", variant: undefined, item: undefined, state: "025", context: undefined}, // info-025
    {type: "info", variant: undefined, item: undefined, state: "050", context: undefined}, // info-050
    {type: "info", variant: undefined, item: undefined, state: "075", context: undefined}, // info-075
    {type: "info", variant: undefined, item: undefined, state: "085", context: undefined}, // info-085
    {type: "info", variant: undefined, item: undefined, state: "100", context: undefined}, // info-100
    {type: "info", variant: undefined, item: undefined, state: "200", context: undefined}, // info-200
    {type: "info", variant: undefined, item: undefined, state: "300", context: undefined}, // info-300
    {type: "info", variant: undefined, item: undefined, state: "400", context: undefined}, // info-400
    {type: "info", variant: undefined, item: undefined, state: "500", context: undefined}, // info-500
    {type: "info", variant: undefined, item: undefined, state: "600", context: undefined}, // info-600
    {type: "info", variant: undefined, item: undefined, state: "700", context: undefined}, // info-700
    {type: "info", variant: undefined, item: undefined, state: "800", context: undefined}, // info-800
    {type: "info", variant: undefined, item: undefined, state: "900", context: undefined}, // info-900


    {type: "neutral", variant: undefined, item: undefined, state: "000", context: undefined}, // neutral-015
    {type: "neutral", variant: undefined, item: undefined, state: "015", context: undefined}, // neutral-015
    {type: "neutral", variant: undefined, item: undefined, state: "025", context: undefined}, // neutral-025
    {type: "neutral", variant: undefined, item: undefined, state: "050", context: undefined}, // neutral-050
    {type: "neutral", variant: undefined, item: undefined, state: "075", context: undefined}, // neutral-075
    {type: "neutral", variant: undefined, item: undefined, state: "085", context: undefined}, // neutral-085
    {type: "neutral", variant: undefined, item: undefined, state: "100", context: undefined}, // neutral-100
    {type: "neutral", variant: undefined, item: undefined, state: "200", context: undefined}, // neutral-200
    {type: "neutral", variant: undefined, item: undefined, state: "300", context: undefined}, // neutral-300
    {type: "neutral", variant: undefined, item: undefined, state: "400", context: undefined}, // neutral-400
    {type: "neutral", variant: undefined, item: undefined, state: "500", context: undefined}, // neutral-500
    {type: "neutral", variant: undefined, item: undefined, state: "600", context: undefined}, // neutral-600
    {type: "neutral", variant: undefined, item: undefined, state: "700", context: undefined}, // neutral-700
    {type: "neutral", variant: undefined, item: undefined, state: "800", context: undefined}, // neutral-800
    {type: "neutral", variant: undefined, item: undefined, state: "900", context: undefined}, // neutral-900
    {type: "neutral", variant: undefined, item: undefined, state: "950", context: undefined}, // neutral-950


    {type: "system", variant: undefined, item: undefined, state: "015", context: undefined}, // system-015
    {type: "system", variant: undefined, item: undefined, state: "025", context: undefined}, // system-025
    {type: "system", variant: undefined, item: undefined, state: "050", context: undefined}, // system-050
    {type: "system", variant: undefined, item: undefined, state: "075", context: undefined}, // system-075
    {type: "system", variant: undefined, item: undefined, state: "085", context: undefined}, // system-085
    {type: "system", variant: undefined, item: undefined, state: "100", context: undefined}, // system-100
    {type: "system", variant: undefined, item: undefined, state: "200", context: undefined}, // system-200
    {type: "system", variant: undefined, item: undefined, state: "300", context: undefined}, // system-300
    {type: "system", variant: undefined, item: undefined, state: "400", context: undefined}, // system-400
    {type: "system", variant: undefined, item: undefined, state: "500", context: undefined}, // system-500
    {type: "system", variant: undefined, item: undefined, state: "600", context: undefined}, // system-600
    {type: "system", variant: undefined, item: undefined, state: "700", context: undefined}, // system-700
    {type: "system", variant: undefined, item: undefined, state: "800", context: undefined}, // system-800
    {type: "system", variant: undefined, item: undefined, state: "900", context: undefined}, // system-900


    {type: "neutral", variant: undefined, item: undefined, state: "000", context: undefined}, // neutral-015
    {type: "neutral", variant: undefined, item: undefined, state: "015", context: undefined}, // neutral-015
    {type: "neutral", variant: undefined, item: undefined, state: "025", context: undefined}, // neutral-025
    {type: "neutral", variant: undefined, item: undefined, state: "050", context: undefined}, // neutral-050
    {type: "neutral", variant: undefined, item: undefined, state: "075", context: undefined}, // neutral-075
    {type: "neutral", variant: undefined, item: undefined, state: "085", context: undefined}, // neutral-085
    {type: "neutral", variant: undefined, item: undefined, state: "100", context: undefined}, // neutral-100
    {type: "neutral", variant: undefined, item: undefined, state: "200", context: undefined}, // neutral-200
    {type: "neutral", variant: undefined, item: undefined, state: "300", context: undefined}, // neutral-300
    {type: "neutral", variant: undefined, item: undefined, state: "400", context: undefined}, // neutral-400
    {type: "neutral", variant: undefined, item: undefined, state: "500", context: undefined}, // neutral-500
    {type: "neutral", variant: undefined, item: undefined, state: "600", context: undefined}, // neutral-600
    {type: "neutral", variant: undefined, item: undefined, state: "700", context: undefined}, // neutral-700
    {type: "neutral", variant: undefined, item: undefined, state: "800", context: undefined}, // neutral-800
    {type: "neutral", variant: undefined, item: undefined, state: "900", context: undefined}, // neutral-900
    {type: "neutral", variant: undefined, item: undefined, state: "950", context: undefined}, // neutral-950


    {type: "lighten", variant: undefined, item: undefined, state: "05a", context: undefined}, // lighten-05a
    {type: "lighten", variant: undefined, item: undefined, state: "10a", context: undefined}, // lighten-10a
    {type: "lighten", variant: undefined, item: undefined, state: "20a", context: undefined}, // lighten-20a
    {type: "lighten", variant: undefined, item: undefined, state: "30a", context: undefined}, // lighten-050
    {type: "lighten", variant: undefined, item: undefined, state: "40a", context: undefined}, // lighten-40a
    {type: "lighten", variant: undefined, item: undefined, state: "50a", context: undefined}, // lighten-50a
    {type: "lighten", variant: undefined, item: undefined, state: "60a", context: undefined}, // lighten-60a
    {type: "lighten", variant: undefined, item: undefined, state: "70a", context: undefined}, // lighten-70a
    {type: "lighten", variant: undefined, item: undefined, state: "80a", context: undefined}, // lighten-80a
    {type: "lighten", variant: undefined, item: undefined, state: "90a", context: undefined}, // lighten-90a
    {type: "lighten", variant: undefined, item: undefined, state: "95a", context: undefined}, // lighten-95a


    {type: "darken", variant: undefined, item: undefined, state: "05a", context: undefined}, // darken-05a
    {type: "darken", variant: undefined, item: undefined, state: "10a", context: undefined}, // darken-10a
    {type: "darken", variant: undefined, item: undefined, state: "20a", context: undefined}, // darken-20a
    {type: "darken", variant: undefined, item: undefined, state: "30a", context: undefined}, // darken-050
    {type: "darken", variant: undefined, item: undefined, state: "40a", context: undefined}, // darken-40a
    {type: "darken", variant: undefined, item: undefined, state: "50a", context: undefined}, // darken-50a
    {type: "darken", variant: undefined, item: undefined, state: "60a", context: undefined}, // darken-60a
    {type: "darken", variant: undefined, item: undefined, state: "70a", context: undefined}, // darken-70a
    {type: "darken", variant: undefined, item: undefined, state: "80a", context: undefined}, // darken-80a
    {type: "darken", variant: undefined, item: undefined, state: "90a", context: undefined}, // darken-90a
    {type: "darken", variant: undefined, item: undefined, state: "95a", context: undefined}, // darken-95a

]