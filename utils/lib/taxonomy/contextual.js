const CONTEXTUAL = [

    //
    // Contextual specific always defines an 'item' or component it is created to be used for
    //
    {type: "bkg", item: "paper", variant: undefined, subitem: undefined, state: "default", context: undefined}, // bkg-paper-default
    {type: "bkg", item: "paper", variant: undefined, subitem: undefined, state: "hushed", context: undefined}, // bkg-paper-hushed
    {type: "bkg", item: "paper", variant: undefined, subitem: undefined, state: "muted", context: undefined}, // bkg-paper-muted

    //
    // Contextual specific always defines an 'item' or component it is created to be used for
    //
    {type: "bkg", item: "button", variant: "primary", subitem: undefined, state: "default", context: "onPaper"}, // bkg-primary-button-default-onPaper
    {type: "bkg", item: "button", variant: "primary", subitem: undefined, state: "hover", context: "onPaper"},   // bkg-primary-button-hover-onPaper
    {type: "bkg", item: "button", variant: "primary", subitem: undefined, state: "active", context: "onPaper"},  // bkg-primary-button-active-onPaper
    {type: "bkg", item: "button", variant: "primary", subitem: undefined, state: "disabled", context: "onPaper"}, // bkg-primary-button-disabled-onPaper

    //
    // Contextual colors with "item: undefined" are non-specific to any particular component. These example
    // tokens are for any typographic element. The state defines the contrast level and context describes the
    // background the element is on. If the background is 'paper'. A "variant: undefined" assumes a neutral treatment.
    //
    {type: "txt", item: undefined, variant: undefined, subitem: undefined, state: "800", context: "onPaper"}, // -txt-800-onPaper
    {type: "txt", item: undefined, variant: undefined, subitem: undefined, state: "600", context: "onPaper"}, // -txt-600-onPaper
    {type: "txt", item: undefined, variant: undefined, subitem: undefined, state: "400", context: "onPaper"}, // -txt-200-onPaper
    {type: "txt", item: undefined, variant: undefined, subitem: undefined, state: "200", context: "onPaper"}, // -txt-200-onPaper

    {type: "txt", item: undefined, variant: undefined, subitem: undefined, state: "800", context: "onLight"}, // -txt-800-onLight
    {type: "txt", item: undefined, variant: undefined, subitem: undefined, state: "600", context: "onLight"}, // -txt-600-onLight
    {type: "txt", item: undefined, variant: undefined, subitem: undefined, state: "400", context: "onLight"}, // -txt-400-onLight
    {type: "txt", item: undefined, variant: undefined, subitem: undefined, state: "200", context: "onLight"}, // -txt-200-onLight

    {type: "txt", item: undefined, variant: undefined, subitem: undefined, state: "800", context: "onDark"},  // -txt-800-onDark
    {type: "txt", item: undefined, variant: undefined, subitem: undefined, state: "600", context: "onDark"},  // -txt-600-onDark
    {type: "txt", item: undefined, variant: undefined, subitem: undefined, state: "400", context: "onDark"},  // -txt-400-onDark
    {type: "txt", item: undefined, variant: undefined, subitem: undefined, state: "200", context: "onDark"},  // -txt-200-onDark
]

module.exports = { CONTEXTUAL }