function NSS(spice) {
    let mined = 0;
    let daysMined = 0;

    while (spice >= 0) {
        if (spice < 100) {
            return console.log(`${daysMined}\n${mined}`)
        }
        mined += spice
        spice -= 10
        daysMined += 1
        mined -= 26
        if (spice < 100) {
            mined -= 26
            if (mined < 0) {
                mined = 0
            }
            return console.log(`${daysMined}\n${mined}`)
        }
    }
}

NSS(111)
NSS(0)
NSS(450)