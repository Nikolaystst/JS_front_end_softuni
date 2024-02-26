function NSS(x1, y1, x2, y2) {
    const x3 = 0;
    const y3 = 0;

    let firstLine = Math.sqrt((x1-x3)**2 + (y1-y3)**2)
    let secondLine = Math.sqrt((x2-x3)**2 + (y2-y3)**2)
    let thirdLine = Math.sqrt((x2-x1)**2 + (y2-y1)**2)

    if (Number.isInteger(firstLine)) {
        console.log(`{${x1}, ${y1}} to {${x3}, ${y3}} is valid`)
    } else {console.log(`{${x1}, ${y1}} to {${x3}, ${y3}} is invalid`)}

    if (Number.isInteger(secondLine)) {
        console.log(`{${x2}, ${y2}} to {${x3}, ${y3}} is valid`)
    } else {console.log(`{${x2}, ${y2}} to {${x3}, ${y3}} is invalid`)}

    if (Number.isInteger(thirdLine)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    } else {console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)}
}

NSS(3, 0, 0, 4)
NSS(2, 1, 1, 1)