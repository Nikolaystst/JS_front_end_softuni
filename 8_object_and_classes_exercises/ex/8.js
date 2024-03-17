function NSS(array) {
    let garage = {};

    for (let each of array) {
        let [inOut, numPlate] = each.split(', ')
        if (inOut === 'IN') {
            garage[numPlate] = true
        } else {
            delete garage[numPlate]
        }
    }

    Object.keys(garage)
        .sort((a, b) => a.localeCompare(b))
        .forEach(car => console.log(car));
}

NSS(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
)

// NSS(['IN, CA2844AA',
//     'IN, CA1234TA',
//     'OUT, CA2844AA',
//     'OUT, CA1234TA']
// )