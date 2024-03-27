function solve() {
    let textAreaElement = document.getElementById('input');
    let textArray = textAreaElement.value.split('. ');
    let whereToPrintElement = document.getElementById('output')
    let counter = 0;
    let newParagraph = [];
    let finalParagraph = [];

    for (let sentence of textArray) {
        counter += 1;
        sentence = sentence.replace('.', '')
        if (sentence.length === 0) {
            continue;
        }
        newParagraph.push(`${sentence}.`)
        if (counter === 3) {
            counter = 0;
            finalParagraph.push(`<p>${newParagraph.join(' ')}</p>`)
            newParagraph = [];
        }
    }
    newParagraph = `<p>${newParagraph.join(' ')}</p>`
    finalParagraph.push(newParagraph)
    whereToPrintElement.innerHTML = `${finalParagraph.join('\n')}`
}