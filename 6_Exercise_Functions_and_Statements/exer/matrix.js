function NSS(num) {
    let row = row => new Array(num).fill(num).join(' ')
    let final = final => new Array(num).fill(row).forEach(create => console.log(create(num)))
    final()
    // for (let i = 0; i < num; i++) {
    //     console.log(row())
    // }
}

NSS(7)