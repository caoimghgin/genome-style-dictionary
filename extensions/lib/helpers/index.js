const { MODE, CATEGORY, SEMANTIC, CONTEXTUAL } = require('../../../utils/lib/constants')
const { isColor, isDefined, attributes } = require('../../../utils');
const { getContextual, getSemantic, tokenAttributesForKey } = require("../../../utils/SingletonFactory")
const _ = require("lodash");

module.exports = {

    parseCtvAttributes: (token) => {

        let result = undefined

        if (isColor(token.value)) {
            result = tokenAttributesForKey(getSemantic(), parseKey(token))
            if (!isDefined(result)) {
                result = tokenAttributesForKey(getContextual(), parseKey(token))
                if (isDefined(result)) {
                    result.mode = token.path.includes("dark") ? MODE.DARK : MODE.LIGHT
                }
            }
            if (!isDefined(result)) {
                result = attributes()
                result.taxonomy.system = parseBrand(token)
            }
        }
        return result
    },

    // parseCtvAttributes_OLD: (token) => {

    //     console.log("I AM NINJA!", foo)
    //     let result = attributes(token)
    //     if (isColor(token.value)) {

    //         const key = parseKey(token)
    //         const semantics = getSemantic()
    //         const showMe = tokenAttributesForKey(getSemantic(), parseKey(token))
    //         // const showMe = findSemantic(key)
    //         console.log("FOUND", key, showMe)

    //         // const asdf = semantics.filter(obj => obj.key.endsWith(key))
    //         // console.log("FOUND", key, asdf.key)



    //         result = parseSemanticColors(token, result)
    //         // const foundContextual = getContextual().filter(obj => obj.key.endsWith("TXT800ONLIGHT"));
    //         // console.log("foundContextual", foundContextual)
    //         if (!isSemantic(result)) {
    //             result = parseContextualColors(token, result)
    //         }
    //     }
    //     if (result.taxonomy.system === undefined) { result.taxonomy.system = parseBrand(token) }
    //     return result
    // },
}

// const parseSemanticColors = (token, attrs) => {

//     let result = attrs

//     SEMANTIC.every(item => {
//         if (parseFullName(token).endsWith(item.toUpperCase())) {
//             result.taxonomy.system = `${ENV.PREFIX}`
//             result.taxonomy.category = CATEGORY.SEMANTIC
//             result.taxonomy.type = parseColorType(item)
//             result.taxonomy.state = parseColorState(item)
//             result.path = parseAttributesPath(result)
//             result.name = parseAttributesName(result)
//             return false; // exit loop
//         }
//         return true; // continue loop
//     });
//     return result
// }

// const parseContextualColors = (token, attrs) => {

//     let result = attrs

//     CONTEXTUAL.every(item => {
//         if (parseFullName(token).endsWith(item.toUpperCase())) {
//             let zzz = item.split(/(?=[A-Z])/)
//             result.mode = token.path.includes("dark") ? "dark" : "light"

//             //system, category, type, item, state

//             result.taxonomy.system = `${ENV.PREFIX}`
//             result.taxonomy.category = CATEGORY.CONTEXTUAL
//             result.taxonomy.type = zzz.includes("bkg") ? "bkg" : undefined
//             result.taxonomy.item = zzz.includes("Paper") ? "paper" : undefined
//             result.taxonomy.state = zzz.includes("Default") ? "default" : result.taxonomy.state
//             result.taxonomy.state = zzz.includes("Hushed") ? "hushed" : result.taxonomy.state
//             result.taxonomy.state = zzz.includes("Muted") ? "muted" : result.taxonomy.state

//             result.path = parseAttributesPath(result)
//             result.name = parseAttributesName(result)

//             return false; // exit loop
//         }
//         return true; // continue loop
//     });
//     return result

// }


// const parseFullName = (token) => {
//     return token.path.join('').toUpperCase()
// }

const parseKey = (token) => {
    return token.path.join('').toUpperCase()
}

// const parseAttributesName = (obj) => {
//     return obj.path.join('-')
// }

// const parseAttributesPath = (obj) => {
//     let result = Object.keys(_.pickBy(obj.taxonomy, v => v !== undefined))
//         .map(function (key) {
//             return obj.taxonomy[key];
//         });
//     return result.length ? result : undefined
// }

const parseBrand = (token) => {
    return token.filePath.split('/')[1]
}

// const parseColorType = (obj) => {
//     let arr = obj.match(/[^\d]+|\d+/g)
//     return arr[0];
// }

// const parseColorState = (obj) => {
//     let arr = obj.match(/[^\d]+|\d+/g)
//     return arr.slice(-arr.length + 1).join('')
// }

// const parseAttributesKey = (obj) => {
//     let key = obj.path.map(function (x) { return x.toUpperCase(); })
//     return key.join("")
//     // console.log(key.join(""))
// }

// const attributes = (token) => {
//     return {
//         key: undefined,
//         name: undefined,
//         path: undefined,
//         mode: undefined,
//         taxonomy: {
//             system: undefined,
//             category: undefined,
//             type: undefined,
//             variant: undefined,
//             item: undefined,
//             state: undefined,
//             context: undefined,
//         },
//     }
// };

// const isSemantic = (attrs) => {
//     attrs.taxonomy.category === CATEGORY.CONTEXTUAL ? true : false
// }