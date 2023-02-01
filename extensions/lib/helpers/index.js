const { CATEGORY, SEMANTIC, CONTEXTUAL, NEW_CONTEXTUAL } = require('../../../utils/lib/constants')
const { ENV } = require('../../../package.json')
const { isColor } = require('../../../utils');
const _ = require("lodash");

module.exports = {

    parseCtvAttributes: (token) => {


        // console.log("My singleton firstName", singleton.firstName)

        let result = attributes(token)

        if (isColor(token.value)) {

            // let foo = []
            // NEW_CONTEXTUAL.every(item => {
            //     let attr = attributes(token)
            //     attr.taxonomy = {...attr.taxonomy, ...item}
            //     attr.path = parseAttributesPath(attr)
            //     attr.name = parseAttributesName(attr)
            //     attr.key = parseAttributesKey(attr)
            //     attr.taxonomy.system = `${ENV.PREFIX}`
            //     attr.taxonomy.category = CATEGORY.CONTEXTUAL
            //     foo.push(attr)
            //     return true;
            // });
            // const foundItfoundIt = foo.filter(obj => obj.key.endsWith("ONLIGHT"));
            // console.log(foundItfoundIt)


            result = parseSemanticColors(token, result)

            if (!isSemantic(result)) {
                result = parseContextualColors(token, result)
            }

            // if (result.taxonomy.category === undefined) {
            //     console.log(token)
            // }
        }

        if (result.taxonomy.system === undefined) { result.taxonomy.system = parseBrand(token) }
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
            result.path = parseAttributesPath(result)
            result.name = parseAttributesName(result)
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

            result.path = parseAttributesPath(result)
            result.name = parseAttributesName(result)

            return false; // exit loop
        }
        return true; // continue loop
    });
    return result

}


const parseFullName = (token) => {
    return token.path.join('').toUpperCase()
}

const parseAttributesName = (obj) => {
    return obj.path.join('-')
}

const parseAttributesPath = (obj) => {
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

const parseAttributesKey = (obj) => {
    let key = obj.path.map(function(x){ return x.toUpperCase(); })
    return key.join("")
    // console.log(key.join(""))
}

const attributes = (token) => {
    return {
        key: undefined,
        name: undefined,
        path: undefined,
        mode: undefined,
        taxonomy: {
            system: undefined,
            category: undefined,
            type: undefined,
            variant: undefined,
            item: undefined,
            state: undefined,
            context: undefined,
        },
    }
};

const isSemantic = (attrs) => {
    attrs.taxonomy.category === CATEGORY.CONTEXTUAL ? true : false
}