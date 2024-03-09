

function NSS(array) {
    let palindromeArray = splitTheNums(array)

    for (let el of palindromeArray) {
        console.log(trueOrFalse(el))
    }

    function splitTheNums(array) {
        return array.toString().split(',')
    }

    function trueOrFalse(string) {
        let toDo = string.split('').reverse().join('')

        return string === toDo
    }
}

NSS([123,323,421,121])
NSS([32,2,232,1010])