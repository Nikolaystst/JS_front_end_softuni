function NSS(array) {
    let times = Number(array.shift());
    let drivers = {};

    for (let i = 0; i < times; i++) {
        let work = array.shift().split('|');
        let name = work[0];
        let fuelCapacity = Number(work[1]);
        let position = Number(work[2]);

        drivers[name] = {
            fuelCapacity,
            position
        }
    }

    for (let toDo of array) {
        if (toDo === 'Finish') {
            break;
        }

        toDo = toDo.split(' - ');
        let command = toDo[0];

        if (command === 'StopForFuel') {
            if (drivers[toDo[1]].fuelCapacity < Number(toDo[2])) {
                drivers[toDo[1]].position = Number(toDo[3]);
                console.log(`${toDo[1]} stopped to refuel but lost his position, now he is ${Number(toDo[3])}.`)
            } else {
                console.log(`${toDo[1]} does not need to stop for fuel!`)
            }
        } else if (command === 'Overtaking') {
            let pos2 = drivers[toDo[2]].position;
            let pos1 = drivers[toDo[1]].position;

            if (pos1 < pos2) {
                [drivers[toDo[1]].position, drivers[toDo[2]].position] = [drivers[toDo[2]].position, drivers[toDo[1]].position];
                console.log(`${toDo[1]} overtook ${toDo[2]}!`)
            }
        } else if (command === 'EngineFail') {
            delete drivers[toDo[1]];
            console.log(`${toDo[1]} is out of the race because of a technical issue, ${toDo[2]} laps before the finish.`);
        }
    }

    for (let i in drivers) {
        console.log(`${i}\n Final position: ${drivers[i].position}`)
    }
}

// NSS(["3",
//     "Valentino Rossi|100|1",
//     "Marc Marquez|90|2",
//     "Jorge Lorenzo|80|3",
//     "StopForFuel - Valentino Rossi - 50 - 1",
//     "Overtaking - Marc Marquez - Jorge Lorenzo",
//     "EngineFail - Marc Marquez - 10",
//     "Finish"]
// )

// NSS(["4",
//     "Valentino Rossi|100|1",
//     "Marc Marquez|90|3",
//     "Jorge Lorenzo|80|4",
//     "Johann Zarco|80|2",
//     "StopForFuel - Johann Zarco - 90 - 5",
//     "Overtaking - Marc Marquez - Jorge Lorenzo",
//     "EngineFail - Marc Marquez - 10",
//     "Finish"])
