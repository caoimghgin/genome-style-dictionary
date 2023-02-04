const { ENV } = require('../../../package.json')
const system = ENV.PREFIX.toLowerCase()
const category = "palette"

const SEMANTIC = [
    {system: system, category: category, type: null, item: null, variant: "primary", subitem: null, state: "015", context: null}, // primary-015
    {system: system, category: category, type: null, item: null, variant: "primary", subitem: null, state: "025", context: null}, // primary-025
    {system: system, category: category, type: null, item: null, variant: "primary", subitem: null, state: "050", context: null}, // primary-050
    {system: system, category: category, type: null, item: null, variant: "primary", subitem: null, state: "075", context: null}, // primary-075
    {system: system, category: category, type: null, item: null, variant: "primary", subitem: null, state: "085", context: null}, // primary-085
    {system: system, category: category, type: null, item: null, variant: "primary", subitem: null, state: "100", context: null}, // primary-100
    {system: system, category: category, type: null, item: null, variant: "primary", subitem: null, state: "200", context: null}, // primary-200
    {system: system, category: category, type: null, item: null, variant: "primary", subitem: null, state: "300", context: null}, // primary-300
    {system: system, category: category, type: null, item: null, variant: "primary", subitem: null, state: "400", context: null}, // primary-400
    {system: system, category: category, type: null, item: null, variant: "primary", subitem: null, state: "500", context: null}, // primary-500
    {system: system, category: category, type: null, item: null, variant: "primary", subitem: null, state: "600", context: null}, // primary-600
    {system: system, category: category, type: null, item: null, variant: "primary", subitem: null, state: "700", context: null}, // primary-700
    {system: system, category: category, type: null, item: null, variant: "primary", subitem: null, state: "800", context: null}, // primary-800
    {system: system, category: category, type: null, item: null, variant: "primary", subitem: null, state: "900", context: null}, // primary-900


    {system: system, category: category, type: null, item: null, variant: "secondary", subitem: null, state: "015", context: null}, // secondary-015
    {system: system, category: category, type: null, item: null, variant: "secondary", subitem: null, state: "025", context: null}, // secondary-025
    {system: system, category: category, type: null, item: null, variant: "secondary", subitem: null, state: "050", context: null}, // secondary-050
    {system: system, category: category, type: null, item: null, variant: "secondary", subitem: null, state: "075", context: null}, // secondary-075
    {system: system, category: category, type: null, item: null, variant: "secondary", subitem: null, state: "085", context: null}, // secondary-085
    {system: system, category: category, type: null, item: null, variant: "secondary", subitem: null, state: "100", context: null}, // secondary-100
    {system: system, category: category, type: null, item: null, variant: "secondary", subitem: null, state: "200", context: null}, // secondary-200
    {system: system, category: category, type: null, item: null, variant: "secondary", subitem: null, state: "300", context: null}, // secondary-300
    {system: system, category: category, type: null, item: null, variant: "secondary", subitem: null, state: "400", context: null}, // secondary-400
    {system: system, category: category, type: null, item: null, variant: "secondary", subitem: null, state: "500", context: null}, // secondary-500
    {system: system, category: category, type: null, item: null, variant: "secondary", subitem: null, state: "600", context: null}, // secondary-600
    {system: system, category: category, type: null, item: null, variant: "secondary", subitem: null, state: "700", context: null}, // secondary-700
    {system: system, category: category, type: null, item: null, variant: "secondary", subitem: null, state: "800", context: null}, // secondary-800
    {system: system, category: category, type: null, item: null, variant: "secondary", subitem: null, state: "900", context: null}, // secondary-900


    {system: system, category: category, type: null, item: null, variant: "tertiary", subitem: null, state: "015", context: null}, // tertiary-015
    {system: system, category: category, type: null, item: null, variant: "tertiary", subitem: null, state: "025", context: null}, // tertiary-025
    {system: system, category: category, type: null, item: null, variant: "tertiary", subitem: null, state: "050", context: null}, // tertiary-050
    {system: system, category: category, type: null, item: null, variant: "tertiary", subitem: null, state: "075", context: null}, // tertiary-075
    {system: system, category: category, type: null, item: null, variant: "tertiary", subitem: null, state: "085", context: null}, // tertiary-085
    {system: system, category: category, type: null, item: null, variant: "tertiary", subitem: null, state: "100", context: null}, // tertiary-100
    {system: system, category: category, type: null, item: null, variant: "tertiary", subitem: null, state: "200", context: null}, // tertiary-200
    {system: system, category: category, type: null, item: null, variant: "tertiary", subitem: null, state: "300", context: null}, // tertiary-300
    {system: system, category: category, type: null, item: null, variant: "tertiary", subitem: null, state: "400", context: null}, // tertiary-400
    {system: system, category: category, type: null, item: null, variant: "tertiary", subitem: null, state: "500", context: null}, // tertiary-500
    {system: system, category: category, type: null, item: null, variant: "tertiary", subitem: null, state: "600", context: null}, // tertiary-600
    {system: system, category: category, type: null, item: null, variant: "tertiary", subitem: null, state: "700", context: null}, // tertiary-700
    {system: system, category: category, type: null, item: null, variant: "tertiary", subitem: null, state: "800", context: null}, // tertiary-800
    {system: system, category: category, type: null, item: null, variant: "tertiary", subitem: null, state: "900", context: null}, // tertiary-900


    {system: system, category: category, type: null, item: null, variant: "positive", subitem: null, state: "015", context: null}, // positive-015
    {system: system, category: category, type: null, item: null, variant: "positive", subitem: null, state: "025", context: null}, // positive-025
    {system: system, category: category, type: null, item: null, variant: "positive", subitem: null, state: "050", context: null}, // positive-050
    {system: system, category: category, type: null, item: null, variant: "positive", subitem: null, state: "075", context: null}, // positive-075
    {system: system, category: category, type: null, item: null, variant: "positive", subitem: null, state: "085", context: null}, // positive-085
    {system: system, category: category, type: null, item: null, variant: "positive", subitem: null, state: "100", context: null}, // positive-100
    {system: system, category: category, type: null, item: null, variant: "positive", subitem: null, state: "200", context: null}, // positive-200
    {system: system, category: category, type: null, item: null, variant: "positive", subitem: null, state: "300", context: null}, // positive-300
    {system: system, category: category, type: null, item: null, variant: "positive", subitem: null, state: "400", context: null}, // positive-400
    {system: system, category: category, type: null, item: null, variant: "positive", subitem: null, state: "500", context: null}, // positive-500
    {system: system, category: category, type: null, item: null, variant: "positive", subitem: null, state: "600", context: null}, // positive-600
    {system: system, category: category, type: null, item: null, variant: "positive", subitem: null, state: "700", context: null}, // positive-700
    {system: system, category: category, type: null, item: null, variant: "positive", subitem: null, state: "800", context: null}, // positive-800
    {system: system, category: category, type: null, item: null, variant: "positive", subitem: null, state: "900", context: null}, // positive-900


    {system: system, category: category, type: null, item: null, variant: "negative", subitem: null, state: "015", context: null}, // negative-015
    {system: system, category: category, type: null, item: null, variant: "negative", subitem: null, state: "025", context: null}, // negative-025
    {system: system, category: category, type: null, item: null, variant: "negative", subitem: null, state: "050", context: null}, // negative-050
    {system: system, category: category, type: null, item: null, variant: "negative", subitem: null, state: "075", context: null}, // negative-075
    {system: system, category: category, type: null, item: null, variant: "negative", subitem: null, state: "085", context: null}, // negative-085
    {system: system, category: category, type: null, item: null, variant: "negative", subitem: null, state: "100", context: null}, // negative-100
    {system: system, category: category, type: null, item: null, variant: "negative", subitem: null, state: "200", context: null}, // negative-200
    {system: system, category: category, type: null, item: null, variant: "negative", subitem: null, state: "300", context: null}, // negative-300
    {system: system, category: category, type: null, item: null, variant: "negative", subitem: null, state: "400", context: null}, // negative-400
    {system: system, category: category, type: null, item: null, variant: "negative", subitem: null, state: "500", context: null}, // negative-500
    {system: system, category: category, type: null, item: null, variant: "negative", subitem: null, state: "600", context: null}, // negative-600
    {system: system, category: category, type: null, item: null, variant: "negative", subitem: null, state: "700", context: null}, // negative-700
    {system: system, category: category, type: null, item: null, variant: "negative", subitem: null, state: "800", context: null}, // negative-800
    {system: system, category: category, type: null, item: null, variant: "negative", subitem: null, state: "900", context: null}, // negative-900


    {system: system, category: category, type: null, item: null, variant: "highlight", subitem: null, state: "015", context: null}, // highlight-015
    {system: system, category: category, type: null, item: null, variant: "highlight", subitem: null, state: "025", context: null}, // highlight-025
    {system: system, category: category, type: null, item: null, variant: "highlight", subitem: null, state: "050", context: null}, // highlight-050
    {system: system, category: category, type: null, item: null, variant: "highlight", subitem: null, state: "075", context: null}, // highlight-075
    {system: system, category: category, type: null, item: null, variant: "highlight", subitem: null, state: "085", context: null}, // highlight-085
    {system: system, category: category, type: null, item: null, variant: "highlight", subitem: null, state: "100", context: null}, // highlight-100
    {system: system, category: category, type: null, item: null, variant: "highlight", subitem: null, state: "200", context: null}, // highlight-200
    {system: system, category: category, type: null, item: null, variant: "highlight", subitem: null, state: "300", context: null}, // highlight-300
    {system: system, category: category, type: null, item: null, variant: "highlight", subitem: null, state: "400", context: null}, // highlight-400
    {system: system, category: category, type: null, item: null, variant: "highlight", subitem: null, state: "500", context: null}, // highlight-500
    {system: system, category: category, type: null, item: null, variant: "highlight", subitem: null, state: "600", context: null}, // highlight-600
    {system: system, category: category, type: null, item: null, variant: "highlight", subitem: null, state: "700", context: null}, // highlight-700
    {system: system, category: category, type: null, item: null, variant: "highlight", subitem: null, state: "800", context: null}, // highlight-800
    {system: system, category: category, type: null, item: null, variant: "highlight", subitem: null, state: "900", context: null}, // highlight-900


    {system: system, category: category, type: null, item: null, variant: "attention", subitem: null, state: "015", context: null}, // attention-015
    {system: system, category: category, type: null, item: null, variant: "attention", subitem: null, state: "025", context: null}, // attention-025
    {system: system, category: category, type: null, item: null, variant: "attention", subitem: null, state: "050", context: null}, // attention-050
    {system: system, category: category, type: null, item: null, variant: "attention", subitem: null, state: "075", context: null}, // attention-075
    {system: system, category: category, type: null, item: null, variant: "attention", subitem: null, state: "085", context: null}, // attention-085
    {system: system, category: category, type: null, item: null, variant: "attention", subitem: null, state: "100", context: null}, // attention-100
    {system: system, category: category, type: null, item: null, variant: "attention", subitem: null, state: "200", context: null}, // attention-200
    {system: system, category: category, type: null, item: null, variant: "attention", subitem: null, state: "300", context: null}, // attention-300
    {system: system, category: category, type: null, item: null, variant: "attention", subitem: null, state: "400", context: null}, // attention-400
    {system: system, category: category, type: null, item: null, variant: "attention", subitem: null, state: "500", context: null}, // attention-500
    {system: system, category: category, type: null, item: null, variant: "attention", subitem: null, state: "600", context: null}, // attention-600
    {system: system, category: category, type: null, item: null, variant: "attention", subitem: null, state: "700", context: null}, // attention-700
    {system: system, category: category, type: null, item: null, variant: "attention", subitem: null, state: "800", context: null}, // attention-800
    {system: system, category: category, type: null, item: null, variant: "attention", subitem: null, state: "900", context: null}, // attention-900


    {system: system, category: category, type: null, item: null, variant: "info", subitem: null, state: "015", context: null}, // info-015
    {system: system, category: category, type: null, item: null, variant: "info", subitem: null, state: "025", context: null}, // info-025
    {system: system, category: category, type: null, item: null, variant: "info", subitem: null, state: "050", context: null}, // info-050
    {system: system, category: category, type: null, item: null, variant: "info", subitem: null, state: "075", context: null}, // info-075
    {system: system, category: category, type: null, item: null, variant: "info", subitem: null, state: "085", context: null}, // info-085
    {system: system, category: category, type: null, item: null, variant: "info", subitem: null, state: "100", context: null}, // info-100
    {system: system, category: category, type: null, item: null, variant: "info", subitem: null, state: "200", context: null}, // info-200
    {system: system, category: category, type: null, item: null, variant: "info", subitem: null, state: "300", context: null}, // info-300
    {system: system, category: category, type: null, item: null, variant: "info", subitem: null, state: "400", context: null}, // info-400
    {system: system, category: category, type: null, item: null, variant: "info", subitem: null, state: "500", context: null}, // info-500
    {system: system, category: category, type: null, item: null, variant: "info", subitem: null, state: "600", context: null}, // info-600
    {system: system, category: category, type: null, item: null, variant: "info", subitem: null, state: "700", context: null}, // info-700
    {system: system, category: category, type: null, item: null, variant: "info", subitem: null, state: "800", context: null}, // info-800
    {system: system, category: category, type: null, item: null, variant: "info", subitem: null, state: "900", context: null}, // info-900


    {system: system, category: category, type: null, item: null, variant: "system", subitem: null, state: "015", context: null}, // system-015
    {system: system, category: category, type: null, item: null, variant: "system", subitem: null, state: "025", context: null}, // system-025
    {system: system, category: category, type: null, item: null, variant: "system", subitem: null, state: "050", context: null}, // system-050
    {system: system, category: category, type: null, item: null, variant: "system", subitem: null, state: "075", context: null}, // system-075
    {system: system, category: category, type: null, item: null, variant: "system", subitem: null, state: "085", context: null}, // system-085
    {system: system, category: category, type: null, item: null, variant: "system", subitem: null, state: "100", context: null}, // system-100
    {system: system, category: category, type: null, item: null, variant: "system", subitem: null, state: "200", context: null}, // system-200
    {system: system, category: category, type: null, item: null, variant: "system", subitem: null, state: "300", context: null}, // system-300
    {system: system, category: category, type: null, item: null, variant: "system", subitem: null, state: "400", context: null}, // system-400
    {system: system, category: category, type: null, item: null, variant: "system", subitem: null, state: "500", context: null}, // system-500
    {system: system, category: category, type: null, item: null, variant: "system", subitem: null, state: "600", context: null}, // system-600
    {system: system, category: category, type: null, item: null, variant: "system", subitem: null, state: "700", context: null}, // system-700
    {system: system, category: category, type: null, item: null, variant: "system", subitem: null, state: "800", context: null}, // system-800
    {system: system, category: category, type: null, item: null, variant: "system", subitem: null, state: "900", context: null}, // system-900


    {system: system, category: category, type: null, item: null, variant: "neutral", subitem: null, state: "000", context: null}, // neutral-015
    {system: system, category: category, type: null, item: null, variant: "neutral", subitem: null, state: "015", context: null}, // neutral-015
    {system: system, category: category, type: null, item: null, variant: "neutral", subitem: null, state: "025", context: null}, // neutral-025
    {system: system, category: category, type: null, item: null, variant: "neutral", subitem: null, state: "050", context: null}, // neutral-050
    {system: system, category: category, type: null, item: null, variant: "neutral", subitem: null, state: "075", context: null}, // neutral-075
    {system: system, category: category, type: null, item: null, variant: "neutral", subitem: null, state: "085", context: null}, // neutral-085
    {system: system, category: category, type: null, item: null, variant: "neutral", subitem: null, state: "100", context: null}, // neutral-100
    {system: system, category: category, type: null, item: null, variant: "neutral", subitem: null, state: "200", context: null}, // neutral-200
    {system: system, category: category, type: null, item: null, variant: "neutral", subitem: null, state: "300", context: null}, // neutral-300
    {system: system, category: category, type: null, item: null, variant: "neutral", subitem: null, state: "400", context: null}, // neutral-400
    {system: system, category: category, type: null, item: null, variant: "neutral", subitem: null, state: "500", context: null}, // neutral-500
    {system: system, category: category, type: null, item: null, variant: "neutral", subitem: null, state: "600", context: null}, // neutral-600
    {system: system, category: category, type: null, item: null, variant: "neutral", subitem: null, state: "700", context: null}, // neutral-700
    {system: system, category: category, type: null, item: null, variant: "neutral", subitem: null, state: "800", context: null}, // neutral-800
    {system: system, category: category, type: null, item: null, variant: "neutral", subitem: null, state: "900", context: null}, // neutral-900
    {system: system, category: category, type: null, item: null, variant: "neutral", subitem: null, state: "950", context: null}, // neutral-950


    {system: system, category: category, type: null, item: null, variant: "lighten", subitem: null, state: "05a", context: null}, // lighten-05a
    {system: system, category: category, type: null, item: null, variant: "lighten", subitem: null, state: "10a", context: null}, // lighten-10a
    {system: system, category: category, type: null, item: null, variant: "lighten", subitem: null, state: "20a", context: null}, // lighten-20a
    {system: system, category: category, type: null, item: null, variant: "lighten", subitem: null, state: "30a", context: null}, // lighten-30a
    {system: system, category: category, type: null, item: null, variant: "lighten", subitem: null, state: "40a", context: null}, // lighten-40a
    {system: system, category: category, type: null, item: null, variant: "lighten", subitem: null, state: "50a", context: null}, // lighten-50a
    {system: system, category: category, type: null, item: null, variant: "lighten", subitem: null, state: "60a", context: null}, // lighten-60a
    {system: system, category: category, type: null, item: null, variant: "lighten", subitem: null, state: "70a", context: null}, // lighten-70a
    {system: system, category: category, type: null, item: null, variant: "lighten", subitem: null, state: "80a", context: null}, // lighten-400
    {system: system, category: category, type: null, item: null, variant: "lighten", subitem: null, state: "90a", context: null}, // lighten-90a
    {system: system, category: category, type: null, item: null, variant: "lighten", subitem: null, state: "95a", context: null}, // lighten-95a


    {system: system, category: category, type: null, item: null, variant: "darken", subitem: null, state: "05a", context: null}, // darken-05a
    {system: system, category: category, type: null, item: null, variant: "darken", subitem: null, state: "10a", context: null}, // darken-10a
    {system: system, category: category, type: null, item: null, variant: "darken", subitem: null, state: "20a", context: null}, // darken-20a
    {system: system, category: category, type: null, item: null, variant: "darken", subitem: null, state: "30a", context: null}, // darken-30a
    {system: system, category: category, type: null, item: null, variant: "darken", subitem: null, state: "40a", context: null}, // darken-40a
    {system: system, category: category, type: null, item: null, variant: "darken", subitem: null, state: "50a", context: null}, // darken-50a
    {system: system, category: category, type: null, item: null, variant: "darken", subitem: null, state: "60a", context: null}, // darken-60a
    {system: system, category: category, type: null, item: null, variant: "darken", subitem: null, state: "70a", context: null}, // darken-70a
    {system: system, category: category, type: null, item: null, variant: "darken", subitem: null, state: "80a", context: null}, // darken-400
    {system: system, category: category, type: null, item: null, variant: "darken", subitem: null, state: "90a", context: null}, // darken-90a
    {system: system, category: category, type: null, item: null, variant: "darken", subitem: null, state: "95a", context: null}, // darken-95a

]

module.exports = { SEMANTIC }