function NSS(name, surName, age) {
    let person = {'firstName': name, 'lastName': surName, 'age': age};
    console.log(`${Object.keys(person)[0]}: ${person.firstName}\n${Object.keys(person)[1]}: ${person.lastName}\n${Object.keys(person)[2]}: ${person.age}`);
    return person;
}

NSS("Peter",
    "Pan",
    "20"
)

NSS("George",
    "Smith",
    "18"
)