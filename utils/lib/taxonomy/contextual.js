const CONTEXTUAL = [

    //
    // Contextual specific always defines an 'item' or component it is created to be used for
    //
    {type: "bkg", variant: undefined, item: "paper", state: "default", context: undefined}, // bkg-paper-default
    {type: "bkg", variant: undefined, item: "paper", state: "hushed", context: undefined}, // bkg-paper-hushed
    {type: "bkg", variant: undefined, item: "paper", state: "muted", context: undefined}, // bkg-paper-muted

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

module.exports = { CONTEXTUAL }