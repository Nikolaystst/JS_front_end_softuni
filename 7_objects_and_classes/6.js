function NSS(array) {
    let meets = {};

    for (let i of array) {

        let [day, name] = i.split(' ')

        if (meets[day]) {
            console.log(`Conflict on ${day}!`)
        } else {
            meets[day] = name
            console.log(`Scheduled for ${day}`)
        }
    }

    for (let met in meets) {
        console.log(`${met} -> ${meets[met]}`)
    }
}

NSS(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
)

NSS(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']
)