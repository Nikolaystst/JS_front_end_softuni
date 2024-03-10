

function iceThiker(array) {
    let wantedThikness = array.shift()
    for (let el of array) {
        let times = 0
        console.log(`Processing chunk ${el} microns`)

        let cuts = cut(wantedThikness, el)
        el = cuts[0]
        times = cuts[1]
        console.log(`Cut x${times}`)

        el = Math.floor(el)
        console.log('Transporting and washing')

        if (tryThis(wantedThikness, el) === `Finished crystal ${wantedThikness} microns`) {
            console.log(`Finished crystal ${wantedThikness} microns`)
            continue;
        }

        cuts = lap(wantedThikness, el)
        el = cuts[0]
        times = cuts[1]
        console.log(`Lap x${times}`)

        el = Math.floor(el)
        console.log('Transporting and washing')

        if (tryThis(wantedThikness, el) === `Finished crystal ${wantedThikness} microns`) {
            console.log(`Finished crystal ${wantedThikness} microns`)
            continue;
        }

        cuts = grind(wantedThikness, el)
        el = cuts[0]
        times = cuts[1]
        console.log(`Grind x${times}`)

        el = Math.floor(el)
        console.log('Transporting and washing')

        if (tryThis(wantedThikness, el) === `Finished crystal ${wantedThikness} microns`) {
            console.log(`Finished crystal ${wantedThikness} microns`)
            continue;
        }

        cuts = etch(wantedThikness, el)
        el = cuts[0]
        times = cuts[1]
        console.log(`Etch x${times}`)

        el = Math.floor(el)
        console.log('Transporting and washing')

        if (tryThis(wantedThikness, el) === `Finished crystal ${wantedThikness} microns`) {
            console.log(`Finished crystal ${wantedThikness} microns`)
            continue;
        }

        cuts = xRay(el)
        el = cuts[0]
        times = cuts[1]
        console.log(`X-ray x${times}`)

        return console.log(`Finished crystal ${el} microns`)
    }

    function cut(wantedThikness, iceThikness) {
        let counter = 0;
        while (iceThikness / 4 >= wantedThikness) {
            iceThikness /= 4;
            counter += 1;
        }
        return [iceThikness, counter]
    }

    function lap(wantedThikness, iceThikness) {
        let counter = 0;
        while (iceThikness * 0.8 >= wantedThikness) {
            iceThikness *= 0.8;
            counter += 1;
        }
        return [iceThikness, counter]
    }

    function grind(wantedThikness, iceThikness) {
        let counter = 0
        while (iceThikness >= wantedThikness + 20) {
            iceThikness -= 20;
            counter += 1
        }
        return [iceThikness, counter]
    }

    function etch(wantedThikness, iceThikness) {
        let counter = 0
        while (iceThikness >= wantedThikness + 1) {
            iceThikness -= 2;
            counter += 1
        }
        return [iceThikness, counter]
    }

    function tryThis(wantedThikness, iceThikness) {
        if (wantedThikness === iceThikness) {
            return `Finished crystal ${wantedThikness} microns`
        }
    }

    function xRay(iceThikness) {
        iceThikness += 1
        return [iceThikness, 1]
    }

}

iceThiker([1375, 50000])
iceThiker([1000, 4000, 8100])