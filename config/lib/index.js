const css = require('./platforms/css')
const scss = require('./platforms/scss')
const pList = require('./platforms/pList')
const js = require('./platforms/js')
const es6 = require('./platforms/es6')
const xml = require('./platforms/xml')
const style = require('./platforms/style')
const swiftUI = require('./platforms/swiftUI')

module.exports = (brand, platform) => {
    return Object.assign(
        style(brand, platform),
        css(brand, platform),
        scss(brand, platform),
        pList(brand, platform),
        js(brand, platform),
        es6(brand, platform),
        xml(brand, platform),
        swiftUI(brand, platform),
    )
}