function NSS(array) {
    let words = array.map(JSON.parse);
    let finalDict = {};

    for (let each of words) {
        let word = Object.keys(each)[0]
        finalDict[word] = each[word]
    }

    Object.entries(finalDict).sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(([ingredient, info]) => console.log(`Term: ${ingredient} => Definition: ${info}`))

}

NSS([
        '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
        '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
        '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
        '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
        '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
)