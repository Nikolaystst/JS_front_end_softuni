function NSS(word, sentence) {
    let sentenceArray = sentence.split(' ')
    let wordArray = word.split(', ')

    for (i = 0; i < sentenceArray.length; i++) {
        if (sentenceArray[i].startsWith('*')) {
            let lenOfSentenceWord = sentenceArray[i].length
            for (j = 0; j < wordArray.length; j++) {
                if (lenOfSentenceWord === wordArray[j].length) {
                    sentenceArray[i] = wordArray[j]
                }
            }
        }
    }
    console.log(sentenceArray.join(' '))
}

NSS('great', 'softuni is ***** place for learning new programming languages')
NSS('great, learning', 'softuni is ***** place for ******** new programming languages')