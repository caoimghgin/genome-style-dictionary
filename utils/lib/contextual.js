// /$gnm-color-bkg-paper-default

const paper = [
    "bkgPaperDefault",
    "bkgPaperHushed",
    "bkgPaperMuted",
]

//$gnm-color-txt-800-onPaper
const txt = [
    "txt800onPaper",
    // [ 'color', 'contextual', 'dark', 'txt', 'onPaper', '800' ]
    // "txt-onPaper-800"
]

const paperXXX = [
    {type: "bkg", variant: undefined, item: "paper", state: "default", context: undefined}, // "bkg-paper-default"
    {type: "bkg", variant: undefined, item: "paper", state: "hushed", context: undefined}, // "bkg-paper-hushed"
    {type: "bkg", variant: undefined, item: "paper", state: "muted", context: undefined}, // "bkg-paper-muted"
]

const txtXXX = [
    {type: "txt", variant: undefined, item: undefined, state: "800", context: "onPaper"}, // "-txt-800-onPaper"
    {type: "txt", variant: undefined, item: undefined, state: "600", context: "onPaper"}, // "-txt-600-onPaper"
    {type: "txt", variant: undefined, item: undefined, state: "400", context: "onPaper"}, // "-txt-200-onPaper"
    {type: "txt", variant: undefined, item: undefined, state: "200", context: "onPaper"}, // "-txt-200-onPaper"

    {type: "txt", variant: undefined, item: undefined, state: "800", context: "onLight"}, // "-txt-800-onLight"
    {type: "txt", variant: undefined, item: undefined, state: "600", context: "onLight"}, // "-txt-600-onLight"
    {type: "txt", variant: undefined, item: undefined, state: "400", context: "onLight"}, // "-txt-400-onLight"
    {type: "txt", variant: undefined, item: undefined, state: "200", context: "onLight"}, // "-txt-200-onLight"

    {type: "txt", variant: undefined, item: undefined, state: "800", context: "onDark"},  // "-txt-800-onDark"
    {type: "txt", variant: undefined, item: undefined, state: "600", context: "onDark"},  // "-txt-800-onDark"
    {type: "txt", variant: undefined, item: undefined, state: "400", context: "onDark"},  // "-txt-800-onDark"
    {type: "txt", variant: undefined, item: undefined, state: "200", context: "onDark"},  // "-txt-800-onDark"

    {type: "bkg", variant: "primary", item: "button", state: "default", context: "onPaper"},
    {type: "bkg", variant: "primary", item: "button", state: "hover", context: "onPaper"},
    {type: "bkg", variant: "primary", item: "button", state: "active", context: "onPaper"},
    {type: "bkg", variant: "primary", item: "button", state: "disabled", context: "onPaper"},



// $gnm-color-bkg-primary-button-default-onPaper

    // {type: "txt", variant: undefined, item: undefined, state: "800", context: "onPaper"}, // txt-800-onPaper
    // {type: "txt", variant: undefined, item: undefined, state: "600", context: "onPaper"}, // txt-600-onPaper
    // {type: "txt", variant: undefined, item: undefined, state: "400", context: "onPaper"}, // txt-400-onPaper
    // {type: "txt", variant: undefined, item: undefined, state: "200", context: "onPaper"}, // txt-200-onPaper

]

const attributes = (name, path, mode, system, category, type, variant, item, state, context) => {
    return {
        name: name,
        path: path,
        mode: mode,
        taxonomy: {
            system: system,
            category: category,
            type: type,
            variant: variant,
            item: item,
            state: state,
            context: context,
        },
    }
};

module.exports = {
    CONTEXTUAL: [
        ...paper,
    ],
    NEW_CONTEXTUAL: [
        ...txtXXX
    ]
}