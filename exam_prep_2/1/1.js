function NSS(array) {
    let codedWord = array.shift();
    let takeEvenWord = '';
    // console.log(codedWord)
    // console.log(array)

    for (let word of array) {
        if (word === 'Buy') {
            break;
        }

        if (word === 'TakeEven') {
            for (let i = 0; i < codedWord.length; i += 2) {
                takeEvenWord += codedWord[i]
            }
            codedWord = takeEvenWord;
            takeEvenWord = '';
            console.log(codedWord)
            continue;
        }

        word = word.split('?');

        if (word[0] === 'ChangeAll') {
            for (let i = 0; i < codedWord.length; i++) {
                codedWord = codedWord.replace(word[1], word[2])
            }
            console.log(codedWord)
        } else if (word[0] === 'Reverse') {
            if (!codedWord.includes(word[1])) {
                console.log('error');
            } else {
                codedWord = codedWord.replace(word[1], '');
                codedWord += word[1].split('').reverse().join('');
                console.log(codedWord)
            }
        }
    }

    console.log(`The cryptocurrency is: ${codedWord}`)

}


NSS(["z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs",
    "TakeEven",
    "Reverse?!nzahc",
    "ChangeAll?m?g",
    "Reverse?adshk",
    "ChangeAll?z?i",
    "Buy"]
)