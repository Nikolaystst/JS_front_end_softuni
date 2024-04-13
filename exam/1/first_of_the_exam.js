function NSS(array) {
    let heroes = {};
    let times = Number(array.shift());

    for (let i = 0; i < times; i++) {
        let known = array.shift();
        known = known.split(' ');
        heroes[known[0]] = {
            HP: Number(known[1]),
            bullets: Number(known[2]),
        }

        // console.log(heroes)
    }

    for (let y of array) {
        if (y === "Ride Off Into Sunset") {
            break;
        }

        let command = y.split(' - ');
        // console.log(command)
        let toDo = command[0];

        if (toDo === 'FireShot') {
            let name = command[1];
            if (heroes[name].bullets > 1) {
                heroes[name].bullets -= 1;
                console.log(`${name} has successfully hit ${command[2]} and now has ${heroes[name].bullets} bullets!`)
            } else {
                console.log(`${name} doesn't have enough bullets to shoot at ${command[2]}!`)
            }
        } else if (toDo === 'TakeHit') {
            let name = command[1];
            let dmg = Number(command[2]);
            let atacker = command[3];

            if (heroes[name].HP > dmg) {
                heroes[name].HP -= dmg;
                console.log(`${name} took a hit for ${dmg} HP from ${atacker} and now has ${heroes[name].HP} HP!`)
            } else {
                delete heroes[name];
                console.log(`${name} was gunned down by ${atacker}!`)
            }
        } else if (toDo === 'Reload') {
            let name = command[1];

            if (heroes[name].bullets < 6) {
                console.log(`${name} reloaded ${6 - heroes[name].bullets} bullets!`);
                heroes[name].bullets = 6;
            } else {
                console.log(`${name}'s pistol is fully loaded!`)
            }
        } else if (toDo === 'PatchUp') {
            let name = command[1];
            let amount = Number(command[2]);
            let amount2 = 0;

            if (heroes[name].HP < 100) {
                if (100 - heroes[name].HP < amount) {
                    amount = 100 - heroes[name].HP;
                }
                // console.log(heroes[name].HP)
                console.log(`${name} patched up and recovered ${amount} HP!`);
                heroes[name].HP += amount
                // console.log(heroes[name].HP)
            } else {
                console.log(`${name} is in full health!`)
            }
        }
    }

    for (let newOne in heroes){
        console.log(`${newOne}\n HP: ${heroes[newOne].HP}\n Bullets: ${heroes[newOne].bullets}`)
    }
}

// NSS(["2",
//     "Gus 100 0",
//     "Walt 100 6",
//     "FireShot - Gus - Bandit",
//     "TakeHit - Gus - 100 - Bandit",
//     "Reload - Walt",
//     "Ride Off Into Sunset"])


// NSS(["2",
//     "Jesse 100 4",
//     "Walt 100 5",
//     "FireShot - Jesse - Bandit",
//     "TakeHit - Walt - 30 - Bandit",
//     "PatchUp - Walt - 20",
//     "Reload - Jesse",
//     "Ride Off Into Sunset"])

// NSS(["2",
//    "Gus 100 4",
//    "Walt 100 5",
//    "FireShot - Gus - Bandit",
//    "TakeHit - Walt - 100 - Bandit",
//    "Reload - Gus",
//    "Ride Off Into Sunset"])

