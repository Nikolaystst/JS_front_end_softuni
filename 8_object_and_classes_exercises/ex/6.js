function NSS(array) {
    let words = array.shift().split(' ')
    let wordsDict = {};
    for (let each of words) {
        wordsDict[each] = 0;
        for (let everyWord of array) {
            if (each === everyWord) {
                wordsDict[each] += 1
            }
        }
    }

    Object.entries(wordsDict)
        .sort((a, b) => b[1] - a[1])
        .forEach(([word, repeats]) => console.log(`${word} - ${repeats}`))

}

NSS([
        'this sentence',
        'In', 'this', 'sentence', 'you', 'have', 'to', 'count',
        'the', 'occurrences', 'of', 'the', 'words', 'this', 'and',
        'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
)

NSS([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another',
    'the', 'And', 'finally', 'the', 'the', 'sentence']
)