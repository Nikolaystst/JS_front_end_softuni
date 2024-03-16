function NSS(array) {
    // let objArr = [];

    for (let each of array) {
        let [townName, latitude, longitude] = each.split(' | ')
        let town = {
            town: townName,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        }
        // objArr.push(town)
        console.log(town)
    }

    // for (let each of objArr) {
    //     console.log(each)
    // }
}

NSS(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625'])
