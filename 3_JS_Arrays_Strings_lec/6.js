function NSS(string, wordToCount) {
    let ar1 = string.split(' ');
    let counter = 0;
    for (let el of ar1) {
        if (el === wordToCount) {
            counter += 1
        }
    }
    console.log(counter)
}

NSS('This is a word and it also is a sentence', 'is')
NSS('softuni is great place for learning new programming languages', 'softuni')