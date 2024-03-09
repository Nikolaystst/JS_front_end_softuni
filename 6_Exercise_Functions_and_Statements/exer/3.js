function NSS(a, b) {
    let [start, end] = startEnd(a, b)
    console.log(whatToPrint(start, end).join(' '))

    function startEnd(a, b) {
        let [start, end] = [a, b].sort()
        start = start.charCodeAt()
        end = end.charCodeAt()
        return [start, end]
}

    function whatToPrint(a, b) {
        let final = []
        for (let i = a + 1; i < b; i++) {
            final.push(String.fromCharCode(i))
        }
        return final
    }

}

NSS('a', 'd')
NSS('#', ':')
NSS('C', '#')