function NSS(array1, array2) {
    let productQuantity = {};
    for (let i = 0; i < array1.length; i += 2) {
        productQuantity[array1[i]] = Number(array1[i + 1])
    }

    for (let i = 0; i < array2.length; i += 2) {
        if (!productQuantity[array2[i]]) {
            productQuantity[array2[i]] = 0;
        }

        productQuantity[array2[i]] += Number(array2[i + 1])
    }

    for (let each in productQuantity) {
        console.log(`${each} -> ${productQuantity[each]}`)
    }

}

NSS([
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)

NSS([
        'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
    ],
    [
        'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]
)