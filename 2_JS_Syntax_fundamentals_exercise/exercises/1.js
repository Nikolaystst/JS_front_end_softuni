function NSS(age) {
    let final = '';

    if (age < 0) {
        final = 'out of bounds'
    } else if (age >= 66) {
        final = 'elder'
    } else if (age >= 20) {
        final = 'adult'
    } else if (age >= 14) {
        final = 'teenager'
    } else if (age >= 3) {
        final = 'child'
    } else if (age >= 0) {
        final = 'baby'
    }

    console.log(final)
}

NSS(20)
NSS(1)
NSS(100)
NSS(-1)