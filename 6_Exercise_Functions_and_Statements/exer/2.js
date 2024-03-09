function NSS(first, second, third) {
    function sum(first, second) {
        return first + second
    }

    function subtract(first, second) {
        return first - second
    }

    console.log(subtract(sum(first, second), third))
}

NSS(23,
    6,
    10
)
NSS(1,
    17,
    30
)
NSS(42,
    58,
    100
)