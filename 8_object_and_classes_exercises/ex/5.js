function NSS(array) {
    let final = [];

    for (let each of array) {
        let [name, lvl, items] = each.split(' / ')
        let hero = {
            Hero: name,
            level: Number(lvl),
            items: items,
        }
        final.push(hero)
    }

    final
        .sort((a, b) => a.level - b.level)
        .forEach(hero => console.log(`Hero: ${hero.Hero}\nlevel => ${hero.level}\nitems => ${hero.items}`));

}

NSS([
        'Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara'
    ]
)
// NSS([
//         'Batman / 2 / Banana, Gun',
//         'Superman / 18 / Sword',
//         'Poppy / 28 / Sentinel, Antara'
//     ]
// )