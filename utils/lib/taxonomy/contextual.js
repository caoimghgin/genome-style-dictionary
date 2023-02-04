const { PREFIX, CATEGORY } = require('./_index')
const system_category = {system: PREFIX, category: CATEGORY.CONTEXTUAL}

const CONTEXTUAL = [

    //
    // Contextual specific always defines an 'item' or component it is created to be used for
    //
    {...system_category, type: "bkg", item: "paper", variant: null, subitem: null, state: "default", context: null}, // bkg-paper-default
    {...system_category, type: "bkg", item: "paper", variant: null, subitem: null, state: "hushed", context: null}, // bkg-paper-hushed
    {...system_category, type: "bkg", item: "paper", variant: null, subitem: null, state: "muted", context: null}, // bkg-paper-muted

    //
    // Contextual specific always defines an 'item' or component it is created to be used for
    //
    {...system_category, type: "bkg", item: "button", variant: "primary", subitem: null, state: "default", context: "onPaper"}, // bkg-primary-button-default-onPaper
    {...system_category, type: "bkg", item: "button", variant: "primary", subitem: null, state: "hover", context: "onPaper"},   // bkg-primary-button-hover-onPaper
    {...system_category, type: "bkg", item: "button", variant: "primary", subitem: null, state: "active", context: "onPaper"},  // bkg-primary-button-active-onPaper
    {...system_category, type: "bkg", item: "button", variant: "primary", subitem: null, state: "disabled", context: "onPaper"}, // bkg-primary-button-disabled-onPaper

    //
    // Contextual colors with "item: null" are non-specific to any particular component. These example
    // tokens are for any typographic element. The state defines the contrast level and context describes the
    // background the element is on. If the background is 'paper'. A "variant: null" assumes a neutral treatment.
    //
    {...system_category, type: "txt", item: null, variant: null, subitem: null, state: "800", context: "onPaper"}, // -txt-800-onPaper
    {...system_category, type: "txt", item: null, variant: null, subitem: null, state: "600", context: "onPaper"}, // -txt-600-onPaper
    {...system_category, type: "txt", item: null, variant: null, subitem: null, state: "400", context: "onPaper"}, // -txt-200-onPaper
    {...system_category, type: "txt", item: null, variant: null, subitem: null, state: "200", context: "onPaper"}, // -txt-200-onPaper

    {...system_category, type: "txt", item: null, variant: null, subitem: null, state: "800", context: "onLight"}, // -txt-800-onLight
    {...system_category, type: "txt", item: null, variant: null, subitem: null, state: "600", context: "onLight"}, // -txt-600-onLight
    {...system_category, type: "txt", item: null, variant: null, subitem: null, state: "400", context: "onLight"}, // -txt-400-onLight
    {...system_category, type: "txt", item: null, variant: null, subitem: null, state: "200", context: "onLight"}, // -txt-200-onLight

    {...system_category, type: "txt", item: null, variant: null, subitem: null, state: "800", context: "onDark"},  // -txt-800-onDark
    {...system_category, type: "txt", item: null, variant: null, subitem: null, state: "600", context: "onDark"},  // -txt-600-onDark
    {...system_category, type: "txt", item: null, variant: null, subitem: null, state: "400", context: "onDark"},  // -txt-400-onDark
    {...system_category, type: "txt", item: null, variant: null, subitem: null, state: "200", context: "onDark"},  // -txt-200-onDark
]

module.exports = { CONTEXTUAL }