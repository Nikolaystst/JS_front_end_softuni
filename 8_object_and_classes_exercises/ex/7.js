function NSS(string) {
    let wordsToCount = string.split(' ');
    let wordsDict = {};
    let final = [];

    for (let each of wordsToCount) {
        if (!wordsDict[each.toLowerCase()]) {
            wordsDict[each.toLowerCase()] = 0;
        }

        wordsDict[each.toLowerCase()] += 1;
    }

    Object.entries(wordsDict)
        .filter(([word, count]) => count % 2 !== 0)
        .forEach(([word, count]) => final.push(word))
    console.log(final.join(' '))
}

NSS('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
NSS('Cake IS SWEET is Soft CAKE sweet Food')