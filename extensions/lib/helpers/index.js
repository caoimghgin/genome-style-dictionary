const { CATEGORY, SEMANTIC } = require('../../../utils/lib/constants')
const { ENV } = require('../../../package.json')
const { isColor } = require('../../../utils');
const _ = require("lodash");

module.exports = {

    parseCtvAttributes: (token) => {

        let result = attributes(token)
        const fullName = token.path.join('')

        if (isColor(token.value)) {
            SEMANTIC.every(item => {
                if (fullName.endsWith(item)) {
                    const typeState = item.match(/[^\d]+|\d+/g);
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
        }

        return result
    },
}

const parsePath = (obj) => {
    let result = Object.keys(_.pickBy(obj.taxonomy, v => v !== undefined))
        .map(function (key) {
            return obj.taxonomy[key];
        });
    return result.length ? result : undefined
}

const parseName = (obj) => {
    return obj.path.join('-')
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