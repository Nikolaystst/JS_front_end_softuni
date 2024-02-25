function NSS(num, ...ops) {
    num = Number(num)

    for (let i = 0; i < ops.length; i++) {
        if (ops[i] === 'chop') {
            num /= 2
        } else if (ops[i] === 'dice') {
            num = Math.sqrt(num)
        } else if (ops[i] === 'spice') {
            num += 1
        } else if (ops[i] === 'bake') {
            num *= 3
        } else if (ops[i] === 'fillet') {
            num *= 0.8
        }
        console.log(num)
    }


}

NSS('32', 'chop', 'chop', 'chop', 'chop', 'chop')
NSS('9', 'dice', 'spice', 'chop', 'bake', 'fillet')