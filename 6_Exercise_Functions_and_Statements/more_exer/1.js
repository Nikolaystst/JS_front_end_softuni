function clean(score, nextMove) {
    if (nextMove === 'soap') {
        score += 10
    } else if (nextMove === 'water') {
        score *= 1.2
    } else if (nextMove === 'vacuum cleaner') {
        score *= 1.25
    } else if (nextMove === 'mud') {
        score *= 0.9
    }

    return score
}

function carWash(array) {
    let finalCleaning = 0

    for (let el of array) {
        finalCleaning = clean(finalCleaning, el)
    }

    console.log(`The car is ${finalCleaning.toFixed(2)}% clean.`)

}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])