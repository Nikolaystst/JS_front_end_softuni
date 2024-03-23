function extract(content) {
    let theTextElement = document.getElementById(content);
    let whatToCatchElements = /\(([a-zA-Z ]+)\)/g;
    let final = theTextElement.textContent.matchAll(whatToCatchElements);
    let print = [];

    for (let el of final) {
        print.push(el[1])
    }

    return print.join('; ')
}