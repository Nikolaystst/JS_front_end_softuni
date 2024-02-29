//    function sum1(total, value) {
//     return total + value
// }

function NSS(array) {
    function sum1(total, value) {
    return total + value
}
    let evenNums = array.filter(num => num % 2 === 0);
    let oddNums = array.filter(num => num % 2 !== 0);
    let sumEven = 0
    let sumOdd = 0
    let final = 0
    if (evenNums.length > 0) {
       sumEven = evenNums.reduce(sum1)
    }
    if (oddNums.length > 0) {
        sumOdd = oddNums.reduce(sum1)
    }

    if (sumEven !== undefined && sumOdd !== undefined) {
        final = sumEven - sumOdd
    }

    console.log(final)
}

NSS([1,2,3,4,5,6])
NSS([3,5,7,9])
NSS([2,4,6,8,10])