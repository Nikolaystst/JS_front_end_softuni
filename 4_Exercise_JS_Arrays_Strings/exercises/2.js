// function NSS(array, nthElement) {
//     let count = 0
//     let newArray = [array[count]]
//     let range = Math.floor((array.length - 1) / nthElement)
//     for (i = 1; i <= range; i++) {
//         count += nthElement;
//         newArray.push(array[count])
//     }
//     return newArray
//
// }

function NSS(array, NthElement) {
    return array.filter((element, index) => index % NthElement === 0)
}

console.log(NSS(['5','20', '31', '4', '20'], 2))
console.log(NSS(['dsa', 'asd', 'test', 'tset'], 2))
console.log(NSS(['1', '2', '3', '4', '5'], 6))