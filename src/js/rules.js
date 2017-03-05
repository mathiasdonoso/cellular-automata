export default class Rules {
    static calculateStatus(rules, index, cell, previousGeneration) {
        previousGeneration = previousGeneration.getDomRepresentation().childNodes

        let prevSelf = previousGeneration[index]
        let leftSibling = prevSelf.previousElementSibling || previousGeneration[previousGeneration.length - 1]
        let rightSibling = prevSelf.nextElementSibling || previousGeneration[0]

        for (let i = 0; i < rules.length; i++) {
            if (state(leftSibling) == rules[i][0] && state(prevSelf) == rules[i][1] && state(rightSibling) == rules[i][2]) {
                return stateBasedOnRule(rules[i][3])
            }
        }
    }
}

function stateBasedOnRule(response) {
    if (response == 1) {
        return 'live'
    }

    return 'dead'
}