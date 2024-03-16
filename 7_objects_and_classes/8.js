class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    meow() {
        return 'Meow'
    }
}

function makeCats(name, age, array) {
    array.push(new Cat(name, age))
    return array
}

function print(cat) {
    console.log(`${cat.name}, age ${cat.age} says ${cat.meow()}`)
}

function NSS(array) {
    let cats = [];

    for (let catAge of array) {
        let [name, age] = catAge.split(' ')
        makeCats(name, age, cats)
    }

    for (let cat of cats) {
        print(cat)
    }
}

NSS(['Mellow 2', 'Tom 5'])