function NSS(array) {

    let newArray = []
    let smallest = 0;
    let largest = 0;
    let times = array.length / 2

    for (i = 0; i < times; i++){
        array.sort((a, b) => b - a);
        smallest = array.pop();
        array.sort((a, b) => a - b);
        largest = array.pop();
        newArray.push(smallest);
        newArray.push(largest)
    }

    return newArray

}

console.log(NSS([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))