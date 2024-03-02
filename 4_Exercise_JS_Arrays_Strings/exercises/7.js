function NSS(word, sentence) {
    let wordToSearch = word.toLowerCase()
    let arraySentence = sentence.split(' ')

    for (let w1 of arraySentence) {
        if (w1.toLowerCase() === wordToSearch) {
            return console.log(word)
        }
    }

    console.log(`${word} not found!`)
}

NSS('javascript', 'JavaScript is the best programming language')
NSS('python', 'JavaScript is the best programming language')