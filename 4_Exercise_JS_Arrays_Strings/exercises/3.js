function NSS(array) {
    array.sort((a, b) => a.localeCompare(b));
    let a = 0;
    for (let el of array) {
        console.log(`${a += 1}.${el}`)
    }
}

NSS(["John", "Bob", "Christina", "Ema"])