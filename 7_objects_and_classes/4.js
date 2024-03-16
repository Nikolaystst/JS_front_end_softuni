function NSS(name, lastName, hairColor) {
    let obj = {
        name: name,
        lastName,
        hairColor
    }

    let jsonObj = JSON.stringify(obj)

    console.log(jsonObj)
}

NSS('George', 'Jones', 'Brown')
NSS('Peter', 'Smith', 'Blond')