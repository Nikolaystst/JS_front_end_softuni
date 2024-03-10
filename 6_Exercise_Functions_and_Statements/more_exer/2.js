function firstNums(string, num) {
    num += Number(string)
    return num
}

function numberModification(num) {
    let final = 0;
    let numArray = num.toString().split('');
    for (let el of numArray) {
        final = firstNums(el, final)
    }

    if (final / numArray.length > 5) {
        return console.log(num)
    } else {
        while (final / numArray.length < 5) {
            numArray.push('9')
            final = firstNums('9', final)
        }
        console.log(Number(numArray.join('')))
    }
}

numberModification(101)
numberModification(5835)