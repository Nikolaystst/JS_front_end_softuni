function NSS(json) {
    let obj = JSON.parse(json)

    Object.keys(obj).forEach(key => console.log(`${key}: ${obj[key]}`))
}

NSS('{"name": "George", "age": 40, "town": "Sofia"}')
NSS('{"name": "Peter", "age": 35, "town": "Plovdiv"}')