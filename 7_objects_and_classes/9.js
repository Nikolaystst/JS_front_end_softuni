class Song {
    constructor(typeList, name, time) {
        this.typeList = typeList;
        this.name = name;
        this.time = time;
    }

    ifTypeListPrint(typeList) {
        if (this.typeList === typeList) {
            console.log(this.name)
        } else if (typeList === "all") {
            console.log(this.name)
        }
    }
}

function NSS(array) {
    let times = array.shift();
    let arrSongs = [];
    let finalType = array.pop()

    for (let i = 0; i < times; i++) {
        let [type, songName, duration] = array[i].split('_')
        arrSongs.push(new Song(type, songName, duration))
    }

    for (let each of arrSongs) {
        each.ifTypeListPrint(finalType)
    }

}

NSS([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
)

// NSS([4,
//     'favourite_DownTown_3:14',
//     'listenLater_Andalouse_3:24',
//     'favourite_In To The Night_3:58',
//     'favourite_Live It Up_3:48',
//     'listenLater']
// )

// NSS([2,
//     'like_Replay_3:15',
//     'ban_Photoshop_3:48',
//     'all']
// )