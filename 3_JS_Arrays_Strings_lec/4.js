function NSS(string, startIndex, endIndex) {
    // let result = string.slice(startIndex, endIndex + 1)
    let result = string.substring(startIndex, startIndex + endIndex)
    console.log(result)
}

NSS('ASentence', 1, 8)
NSS('SkipWord', 4, 7)