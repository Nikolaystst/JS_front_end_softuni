function colorize() {
    let elements = document.querySelectorAll('table tr:nth-child(2n)')

    for (let el of elements) {
        el.style.backgroundColor = 'Teal'
    }
}