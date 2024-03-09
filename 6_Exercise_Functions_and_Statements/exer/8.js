function NSS(num) {
    function divisors(num) {
        let final = []
        for (let i = num - 1; i >= 0; i--) {
            if (num % i === 0) {
                final.push(i)
            }
        }
        return final
    }

    let calculateSum = numbers => numbers.reduce((a, b) => a + b, 0)
    let isPerfect = num => calculateSum(divisors(num)) === num

    if (isPerfect(num)) {
        console.log('We have a perfect number!')
    } else {
        console.log('It\'s not so perfect.')
    }
}

NSS(6)
NSS(28)
NSS(1236498)