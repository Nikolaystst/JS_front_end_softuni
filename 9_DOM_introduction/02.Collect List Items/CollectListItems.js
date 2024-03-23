function extractText() {
    let theText = document.getElementById('items').textContent
    let theFinalEL = document.getElementById('result')
    theFinalEL.value = theText
}