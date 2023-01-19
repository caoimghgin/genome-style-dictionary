const css = require('./platforms/css')
const scss = require('./platforms/scss')
const pList = require('./platforms/pList')
const js = require('./platforms/js')
const es6 = require('./platforms/es6')
const xml = require('./platforms/xml')

module.exports = (brand, platform) => {
    return Object.assign(
        css(brand, platform),
        scss(brand, platform),
        pList(brand, platform),
        js(brand, platform),
        es6(brand, platform),
        xml(brand, platform)
    )
}