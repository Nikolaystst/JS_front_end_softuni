

function NSS(num) {
    function getThePercent(num) {
        let n1 = num / 10
        let final = '['
        final += '%'.repeat(n1)
        final += '.'.repeat(10 - n1)
        final += ']'
        return final
    }

    function getTheNum(num) {
        let final = num.toString()
        final += '%'
        return final
    }
    let check100Percent = num => num === 100;

    if (check100Percent(num)) {
        console.log('100% Complete!\n[%%%%%%%%%%]')
    } else {
        console.log(`${getTheNum(num)} ${getThePercent(num)}\nStill loading...`)
    }
}

NSS(30)
NSS(50)
NSS(100)