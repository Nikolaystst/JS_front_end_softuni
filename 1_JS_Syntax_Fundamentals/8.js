function doCircle(num) {
    let result;
    if (typeof (num) == "number") {
        result = (Math.PI * (num ** 2)).toFixed(2)
    } else {
        result = `We can not calculate the circle area, because we receive a ${typeof (num)}.`
    }
    console.log(result)
}

doCircle(5)
doCircle('name')

