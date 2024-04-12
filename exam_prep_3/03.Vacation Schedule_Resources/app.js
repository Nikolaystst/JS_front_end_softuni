let URL = 'http://localhost:3030/jsonstore/tasks';
let currentID;

let loadVacationsButtonElement = document.getElementById('load-vacations');
let nameInputButtonElement = document.getElementById('name');
let numInputButtonElement = document.getElementById('num-days');
let dateInputButtonElement = document.getElementById('from-date');
let divListElement = document.getElementById('list');
let addVacationButtonElement = document.getElementById('add-vacation');
let editVacationButtonElement = document.getElementById('edit-vacation');

loadVacationsButtonElement.addEventListener('click', NSS);

addVacationButtonElement.addEventListener('click', newVacation);

editVacationButtonElement.addEventListener('click', editfetch);

async function NSS(event) {
    let servResponse = await fetch(URL);
    let response = await servResponse.json();

    divListElement.innerHTML = '';

    for (let obj of Object.entries(response)) {
        console.log(obj[1])

        let vacation = obj[1];
        let name = vacation.name;
        let num = vacation.days;
        let date = vacation.date;

        let buttonChangeElement = document.createElement('button');
        buttonChangeElement.classList.add('change-btn');
        buttonChangeElement.textContent = 'Change';

        let buttonDoneElement = document.createElement('button');
        buttonDoneElement.classList.add('done-btn');
        buttonDoneElement.textContent = 'Done';

        let h2NameElement = document.createElement('h2');
        h2NameElement.textContent = name;

        let h3DateElement = document.createElement('h3');
        h3DateElement.textContent = date;

        let h3DaysElement = document.createElement('h3');
        h3DaysElement.textContent = num;

        let divContainerClassElement = document.createElement('div');
        divContainerClassElement.classList.add('container');

        divContainerClassElement.appendChild(h2NameElement);
        divContainerClassElement.appendChild(h3DateElement);
        divContainerClassElement.appendChild(h3DaysElement);
        divContainerClassElement.appendChild(buttonChangeElement);
        divContainerClassElement.appendChild(buttonDoneElement);

        divListElement.appendChild(divContainerClassElement);

        buttonChangeElement.addEventListener('click', () => {
            currentID = vacation._id;
            nameInputButtonElement.value = name;
            numInputButtonElement.value = num;
            dateInputButtonElement.value = date;

            addVacationButtonElement.setAttribute('disabled', 'disabled');
            editVacationButtonElement.removeAttribute('disabled');

            divContainerClassElement.remove();
        })

        buttonDoneElement.addEventListener('click', async () => {
            currentID = vacation._id;

            await fetch(`${URL}/${currentID}`, {
                method: 'DELETE'
            });

            divContainerClassElement.remove();
            await NSS();
        })
    }
}

async function newVacation(event) {
    let name = nameInputButtonElement.value;
    let days = numInputButtonElement.value;
    let date = dateInputButtonElement.value;

    let newVac = {
        name,
        date,
        days,
    }

    let response = await fetch(URL, {
        method: 'POST',
        body: JSON.stringify(newVac),
    })

    if (!response.ok) {
        return;
    }
    ;

    nameInputButtonElement.value = '';
    numInputButtonElement.value = '';
    dateInputButtonElement.value = '';
    await NSS();
}

async function editfetch(event) {
    let name = nameInputButtonElement.value;
    let num = numInputButtonElement.value;
    let date = dateInputButtonElement.value;

    let response = await fetch(`${URL}/${currentID}`, {
        method: 'PUT',
        body: JSON.stringify({
            _id: currentID,
            name: name,
            days: num,
            date: date,
        })
    })
    await NSS();
    editVacationButtonElement.setAttribute('disabled', 'disabled');
    addVacationButtonElement.removeAttribute('disabled');
    nameInputButtonElement.value = '';
    numInputButtonElement.value = '';
    dateInputButtonElement.value = '';
}