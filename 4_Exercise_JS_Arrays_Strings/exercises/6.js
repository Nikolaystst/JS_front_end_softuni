function NSS(string) {
    let pattern = /#([a-zA-Z]+)/g;
    let matches = string.matchAll(pattern)

    for (let hit of matches) {
        console.log(hit[1])
    }
}

NSS('Nowadays everyone uses # to tag a #special word in #socialMedia')
NSS('The symbol # is known #variously in English-speaking #regions as the #number sign')