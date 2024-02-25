function NSS(speed, area) {

    let speedLimit = 0;

    if (area === 'motorway') {
        speedLimit = 130
    } else if (area === 'interstate') {
        speedLimit = 90
    } else if (area === 'city') {
        speedLimit = 50
    } else if (area === 'residential') {
        speedLimit = 20
    }

    if (speedLimit >= speed) {
        return console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
    }

    let status = '';

    if (speed - speedLimit <= 20) {
        status = 'speeding';
    } else if (speed - speedLimit <= 40) {
        status = 'excessive speeding';
    } else {
        status = 'reckless driving'
    }

    console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
}

NSS(40, 'city')
NSS(21, 'residential')
NSS(120, 'interstate')