function NSS(array) {
    let final = {};

    for (let i of array) {
        let a = i.split(' ')
        final[a[0]] = a[1]
    }

    Object.keys(final).forEach(key => console.log(`${key} -> ${final[key]}`))
}

NSS(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
)

NSS(['George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344']
)