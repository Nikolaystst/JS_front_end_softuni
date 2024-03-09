function NSS(a, b) {
    console.log((factorial(a) / factorial(b)).toFixed(2))

    function factorial(num) {
        if (num === 1) {
            return 1
        }
        return num * factorial(num - 1)
    }
}

NSS(5, 2)
NSS(6, 2)