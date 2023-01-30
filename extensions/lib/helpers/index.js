const { CATEGORY, SEMANTIC, CONTEXTUAL } = require('../../../utils/lib/constants')
const { ENV } = require('../../../package.json')
const { isColor } = require('../../../utils');
const _ = require("lodash");

module.exports = {

    parseCtvAttributes: (token) => {
        let result = attributes(token)
        if (isColor(token.value)) {
            result = parseSemanticColors(token, result)
            if (!isSemantic(result)) {
                result = parseContextualColors(token, result)
            }
        }
        return result
    },
}

const parseSemanticColors = (token, attrs) => {

    let result = attrs

    SEMANTIC.every(item => {
        if (parseFullName(token).endsWith(item.toUpperCase())) {
            result.taxonomy.system = `${ENV.PREFIX}`
            result.taxonomy.category = CATEGORY.SEMANTIC
            result.taxonomy.type = parseColorType(item)
            result.taxonomy.state = parseColorState(item)
            result.path = parsePath(result)
            result.name = parseName(result)
            return false; // exit loop
        }
        return true; // continue loop
    });
    return result
}

const parseContextualColors = (token, attrs) => {

    let result = attrs

    CONTEXTUAL.every(item => {
        if (parseFullName(token).endsWith(item.toUpperCase())) {
            let zzz  = item.split(/(?=[A-Z])/)
            result.mode = token.path.includes("dark") ? "dark" : "light"

             //system, category, type, item, state

            result.taxonomy.system = `${ENV.PREFIX}`
            result.taxonomy.category = CATEGORY.CONTEXTUAL
            result.taxonomy.type = zzz.includes("bkg") ? "bkg" : undefined
            result.taxonomy.item = zzz.includes("Paper") ? "paper" : undefined
            result.taxonomy.state = zzz.includes("Default") ? "default" : result.taxonomy.state 
            result.taxonomy.state = zzz.includes("Hushed") ? "hushed" : result.taxonomy.state 
            result.taxonomy.state = zzz.includes("Muted") ? "muted" : result.taxonomy.state 

            result.path = parsePath(result)
            result.name = parseName(result)

            

            console.log("FOUND CONTEXTUAL COLOR...", zzz, result)


            return false; // exit loop
        }
        return true; // continue loop
    });
    return result

}


const parseFullName = (token) => {
    return token.path.join('').toUpperCase()
}

const parseName = (obj) => {
    return obj.path.join('-')
}

const parsePath = (obj) => {
    let result = Object.keys(_.pickBy(obj.taxonomy, v => v !== undefined))
        .map(function (key) {
            return obj.taxonomy[key];
        });
    return result.length ? result : undefined
}

const parseBrand = (token) => {
    return token.filePath.split('/')[1]
}

const parseColorType = (obj) => {
    let arr = obj.match(/[^\d]+|\d+/g)
    return arr[0];
}

const parseColorState = (obj) => {
    let arr = obj.match(/[^\d]+|\d+/g)
    return arr.slice(-arr.length + 1).join('')
}

const attributes = (token) => {
    return {
        name: undefined,
        path: undefined,
        mode: undefined,
        taxonomy: {
            system: parseBrand(token),
            category: undefined,
            type: undefined,
            variety: undefined,
            item: undefined,
            state: undefined,
            context: undefined,
        },
    }
};

const isSemantic = (attrs) => {
    attrs.taxonomy.category === CATEGORY.CONTEXTUAL ? true : false
}