function NSS(num1, operator, num2) {
    let final = 0;
    if (operator === '+') {
        final = num1 + num2
    } else if (operator === '-') {
        final = num1 - num2
    } else if (operator === '/') {
        final = num1 / num2
    } else if (operator === '*') {
        final = num1 * num2
    }

    console.log(final.toFixed(2))
}

NSS(5,
    '+',
    10
)
NSS(25.5,
    '-',
    3
)