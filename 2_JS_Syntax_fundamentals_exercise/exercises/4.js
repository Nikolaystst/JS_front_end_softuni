function NSS(start, end) {
    let sum = 0;
    let final = '';

    for (let i = start; i <= end; i++) {
        final += i.toString() + ' '
        sum += i
    }
    console.log(final)
    console.log(`Sum: ${sum}`)
}

NSS(5, 10)
NSS(0, 26)