function NSS(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let brokenHelmet = Math.floor(lostFights / 2);
    let brokenSword = Math.floor(lostFights / 3);
    let brokenShield = Math.floor(lostFights / 6);
    let brokeArmor = Math.floor(lostFights / 12);
    let final = (brokenHelmet * helmetPrice) + (swordPrice * brokenSword) + (shieldPrice * brokenShield) + (armorPrice * brokeArmor);
    console.log(`Gladiator expenses: ${final.toFixed(2)} aureus`)
}

NSS(7,
    2,
    3,
    4,
    5
)
NSS(23,
    12.50,
    21.50,
    40,
    200
)