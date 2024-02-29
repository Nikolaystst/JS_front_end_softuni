function NSS(num, array) {
    let final = array.slice(0, num).reverse().join(' ')
    console.log(final)
}

NSS(3, [10, 20, 30, 40, 50])
NSS(4, [-1, 20, 99, 5])
NSS(2, [66, 43, 75, 89, 47])