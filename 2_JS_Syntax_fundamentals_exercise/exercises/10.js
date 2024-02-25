function NSS(number) {
    let isTrueOrFalse = true;
    let sum = 0;

    number = number.toString()

    for (let i = 0; i < number.length; i++) {
        if (number[0] !== number[i]) {isTrueOrFalse = false}
        sum += Number(number[i])
    }
    console.log(isTrueOrFalse)
    console.log(sum)
}

NSS(2222222)
NSS(1234)