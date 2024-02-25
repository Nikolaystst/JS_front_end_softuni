function NSS(age) {
    if (age % 4 === 0 && (age % 100 !== 0 || age % 400 === 0)) {
        return console.log('yes')
    }

    console.log('no')
}

NSS(1984)
NSS(2003)
NSS(4)