const { PREFIX, CATEGORY } = require('./constants')

const system_category = {system: PREFIX, category: CATEGORY.CONTEXTUAL}

const CONTEXTUAL = [

    {key: null, value: {...system_category, type: "bkg", item: "paper", variant: null, subitem: null, state: "default", context: null}}, // bkg-paper-default
    {key: null, value: {...system_category, type: "bkg", item: "paper", variant: null, subitem: null, state: "hushed", context: null}}, // bkg-paper-hushed
    {key: null, value: {...system_category, type: "bkg", item: "paper", variant: null, subitem: null, state: "muted", context: null}}, // bkg-paper-muted

    {key: null, value: {...system_category, type: "bkg", item: "button", variant: "primary", subitem: null, state: "default", context: "onPaper"}}, // bkg-primary-button-default-onPaper
    {key: null, value: {...system_category, type: "bkg", item: "button", variant: "primary", subitem: null, state: "hover", context: "onPaper"}},   // bkg-primary-button-hover-onPaper
    {key: null, value: {...system_category, type: "bkg", item: "button", variant: "primary", subitem: null, state: "active", context: "onPaper"}},  // bkg-primary-button-active-onPaper
    {key: null, value: {...system_category, type: "bkg", item: "button", variant: "primary", subitem: null, state: "disabled", context: "onPaper"}}, // bkg-primary-button-disabled-onPaper

    {key: "txtonpaper800", value: {...system_category, type: "txt", item: null, variant: null, subitem: null, state: "800", context: "onPaper"}}, // -txt-800-onPaper
    {key: "txtonpaper600", value: {...system_category, type: "txt", item: null, variant: null, subitem: null, state: "600", context: "onPaper"}}, // -txt-600-onPaper
    {key: "txtonpaper400", value: {...system_category, type: "txt", item: null, variant: null, subitem: null, state: "400", context: "onPaper"}}, // -txt-200-onPaper
    {key: "txtonpaper200", value: {...system_category, type: "txt", item: null, variant: null, subitem: null, state: "200", context: "onPaper"}}, // -txt-200-onPaper

    {key: "txtonLight800", value: {...system_category, type: "txt", item: null, variant: null, subitem: null, state: "800", context: "onLight"}}, // -txt-800-onLight
    {key: "txtonLight600", value: {...system_category, type: "txt", item: null, variant: null, subitem: null, state: "600", context: "onLight"}}, // -txt-600-onLight
    {key: "txtonLight400", value: {...system_category, type: "txt", item: null, variant: null, subitem: null, state: "400", context: "onLight"}}, // -txt-400-onLight
    {key: "txtonLight200", value: {...system_category, type: "txt", item: null, variant: null, subitem: null, state: "200", context: "onLight"}}, // -txt-200-onLight

    {key: null, value: {...system_category, type: "txt", item: null, variant: null, subitem: null, state: "800", context: "onDark"}},  // -txt-800-onDark
    {key: null, value: {...system_category, type: "txt", item: null, variant: null, subitem: null, state: "600", context: "onDark"}},  // -txt-600-onDark
    {key: null, value: {...system_category, type: "txt", item: null, variant: null, subitem: null, state: "400", context: "onDark"}},  // -txt-400-onDark
    {key: null, value: {...system_category, type: "txt", item: null, variant: null, subitem: null, state: "200", context: "onDark"}},  // -txt-200-onDark
    
]

module.exports = { CONTEXTUAL }