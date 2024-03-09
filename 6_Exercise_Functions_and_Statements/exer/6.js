function NSS(string) {
    let isValid = true
    let seeLength = string => string.length > 5 && string.length < 11;
    let seeAlphaNum = string => /^[a-zA-Z0-9]+$/.test(string);
    let twoDigits = string => string.split('').filter(char => Number.isInteger(Number(char))).length >= 2;

    if (!seeLength(string)) {
        isValid = false;
        console.log("Password must be between 6 and 10 characters");
    }

    if (!seeAlphaNum(string)) {
        console.log("Password must consist only of letters and digits");
        isValid = false;
    }

    if (!twoDigits(string)) {
        console.log("Password must have at least 2 digits");
        isValid = false;
    }

    if (isValid) {
        console.log("Password is valid")
    }
}

NSS('logIn')
NSS('MyPass123')
NSS('Pa$s$s')