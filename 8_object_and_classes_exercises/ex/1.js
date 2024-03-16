function NSS(array) {
    array.map(name => ({name, personalNum: name.length})).forEach(person => console.log(`Name: ${person.name} -- Personal Number: ${person.personalNum}`))
}

NSS(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal'])

NSS(['Samuel Jackson', 'Will Smith', 'Bruce Willis', 'Tom Holland'])