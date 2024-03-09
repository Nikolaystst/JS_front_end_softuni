function NSS(number) {
    // let numArrayEven = number.toString().split('').map(Number).filter(digit => digit % 2 === 0);
    // let numArrayOdd = number.toString().split('').map(Number).filter(digit => digit % 2 !== 0);
    // let sumEven = numArrayEven.reduce((acc, digit) => acc + digit, 0)
    // let sumOdd = numArrayOdd.reduce((acc, digit) => acc + digit, 0)

    function numArrayEven(number) {
        return number.toString().split('').map(Number).filter(digit => digit % 2 === 0);
    }

    function numArrayOdd(number) {
        return number.toString().split('').map(Number).filter(digit => digit % 2 !== 0);
    }

    function sumEven(arrayNum) {
        return arrayNum.reduce((acc, digit) => acc + digit, 0)
    }

    function sumOdd(arrayNum) {
        return arrayNum.reduce((acc, digit) => acc + digit, 0)
    }

    console.log(`Odd sum = ${sumOdd(numArrayOdd(number))}, Even sum = ${sumEven(numArrayEven(number))}`)
}

NSS(1000435)
NSS(3495892137259234)