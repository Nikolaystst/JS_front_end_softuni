function NSS(string, wordToReplace) {
    // let wordOfshits = '';
    // for (el of wordToReplace) {
    //     wordOfshits += '*'
    // }

    // let final = string.replace(wordToReplace, wordOfshits)

    // console.log(final)

    // let censored = ''
    // censored = replace(wordToReplace)
    // function replace(w) {
    //     let final = ''
    //     for (el of w) {
    //         final += '*'
    //     }
    //     return final
    // }

    // string = string.replace(wordToReplace, censored)

    // console.log(string)

    let censored = string.replace(wordToReplace, repeat(wordToReplace))
    while (censored.includes(wordToReplace)) {
        censored = censored.replace(wordToReplace, repeat(wordToReplace))
    }

    function repeat(word) {
        let times = word.length;
        let final = ''
        for (i = 0; i < times; i++) {
            final += '*'
        }
        return final
    }

    console.log(censored)
}

NSS('A small sentence with some words', 'small')
NSS('Find the hidden word', 'hidden')