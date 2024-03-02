function NSS(array, count) {
    let range = count % array.length

    for (i = 0; i < range; i++) {
        let numToGoBack = array[0]
        array = array.slice(1, array.length)
        array.push(numToGoBack)
    }

    console.log(array.join(' '))
}

NSS([51, 47, 32, 61, 21], 2)
NSS([32, 21, 61, 1], 4)
NSS([2, 4, 15, 31], 5)