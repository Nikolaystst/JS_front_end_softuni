function NSS(array) {
    let times = Number(array.shift());
    let baristas = array.slice(0, times);
    let commands = array.slice(times);
    let ppl = {};

    for (let i = 0; i < times; i++) {
        let [name, shift, drinks] = baristas[i].split(' ');
        ppl[name] = {
            shift,
            drinks,
        }
    }

    for (let command of commands) {
        if (command === 'Closed') {
            break;
        }

        command = command.split(' / ')
        let toDo = command[0];
        let name = command[1];

        if (toDo === 'Prepare') {
            if (!ppl[name] || ppl[name].shift !== command[2] || !ppl[name].drinks.includes(command[3])) {
                console.log(`${name} is not available to prepare a ${command[3]}.`);
            } else {
                console.log(`${name} has prepared a ${command[3]} for you!`);
            }
        } else if (toDo === 'Change Shift') {
            ppl[name].shift = command[2];
            console.log(`${name} has updated his shift to: ${command[2]}`);
        } else if (toDo === 'Learn') {
            if (ppl[name].drinks.includes(command[2])) {
                console.log(`${name} knows how to make ${command[2]}.`)
            } else {
                ppl[name].drinks += `,${command[2]}`;
                console.log(`${name} has learned a new coffee type: ${command[2]}.`)
            }
        }
    }

    for (let man in ppl) {
        console.log(`Barista: ${man}, Shift: ${ppl[man].shift}, Drinks: ${ppl[man].drinks.split(',').join(', ')}`)
    }
}

// NSS([
//     '3',
//     'Alice day Espresso,Cappuccino',
//     'Bob night Latte,Mocha',
//     'Carol day Americano,Mocha',
//     'Prepare / Alice / day / Espresso',
//     'Change Shift / Bob / night',
//     'Learn / Carol / Latte',
//     'Learn / Bob / Latte',
//     'Prepare / Bob / night / Latte',
//     'Closed']
// )

// NSS(['4',
//     'Alice day Espresso,Cappuccino',
//     'Bob night Latte,Mocha',
//     'Carol day Americano,Mocha',
//     'David night Espresso',
//     'Prepare / Alice / day / Espresso',
//     'Change Shift / Bob / day',
//     'Learn / Carol / Latte',
//     'Prepare / Bob / night / Latte',
//     'Learn / David / Cappuccino',
//     'Prepare / Carol / day / Cappuccino',
//     'Change Shift / Alice / night',
//     'Learn / Bob / Mocha',
//     'Prepare / David / night / Espresso',
//     'Closed']
// )