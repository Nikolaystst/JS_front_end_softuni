function NSS(word) {
    let wordArray = word.split('')
    let final = []
    let wordToPush = ''

    for (let letter of wordArray) {
        if (isUpperCase(letter)) {
            final.push(wordToPush)
            wordToPush = letter
        } else {
            wordToPush += letter
        }
    }
    final.push(wordToPush)
    final.shift()
    console.log(final.join(', '))

    function isUpperCase(str) {
    return str === str.toUpperCase();
    }

}

NSS('SplitMeIfYouCanHaHaYouCantOrYouCan')
NSS('HoldTheDoor')
NSS('ThisIsSoAnnoyingToDo')