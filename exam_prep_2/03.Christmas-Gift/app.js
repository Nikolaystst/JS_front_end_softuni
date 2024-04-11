let URL = 'http://localhost:3030/jsonstore/gifts';

let loadPresentsButtonElement = document.getElementById('load-presents');
let divGiftListElement = document.getElementById('gift-list');
let presentInputElement = document.getElementById('gift');
let forInputElement = document.getElementById('for');
let priceInputElement = document.getElementById('price');
let addButtonElement = document.getElementById('add-present');
let editButtonElement = document.getElementById('edit-present');
let currentId

loadPresentsButtonElement.addEventListener('click', load);

addButtonElement.addEventListener('click', add);

editButtonElement.addEventListener("click", change);

async function load(event) {
    let loadResponse = await fetch(URL);
    let loadAllData = await loadResponse.json();
    divGiftListElement.innerHTML = '';

    for (let i of Object.entries(loadAllData)) {
        let present = i[1];
        console.log(i[1])
        let gift = present.gift;
        // console.log(gift);
        let for1 = present['for'];
        // console.log(for1);
        let price = present.price;
        // console.log(price);

        let buttonChangeElement = document.createElement('button');
        buttonChangeElement.classList.add('change-btn');
        buttonChangeElement.textContent = 'Change';

        let buttonDeleteElement = document.createElement('button');
        buttonDeleteElement.classList.add('delete-btn');
        buttonDeleteElement.textContent = 'Delete';

        let divButtonContainerElement = document.createElement('div');
        divButtonContainerElement.classList.add('buttons-container');
        divButtonContainerElement.appendChild(buttonChangeElement);
        divButtonContainerElement.appendChild(buttonDeleteElement);

        let pGiftElement = document.createElement('p');
        pGiftElement.textContent = gift;

        let pForElement = document.createElement('p');
        pForElement.textContent = for1;

        let pPriceElement = document.createElement('p');
        pPriceElement.textContent = price;

        let divClassContentElement = document.createElement('div');
        divClassContentElement.classList.add('content');
        divClassContentElement.appendChild(pGiftElement);
        divClassContentElement.appendChild(pForElement);
        divClassContentElement.appendChild(pPriceElement);

        let divGiftSockElement = document.createElement('div');
        divGiftSockElement.classList.add('gift-sock');

        divGiftSockElement.appendChild(divClassContentElement);
        divGiftSockElement.appendChild(divButtonContainerElement);

        divGiftListElement.appendChild(divGiftSockElement);

        buttonChangeElement.addEventListener('click', () => {
            currentId = present._id;

            presentInputElement.value = present.gift;
            forInputElement.value = present['for'];
            priceInputElement.value = present.price;

            addButtonElement.setAttribute('disabled', 'disabled');
            editButtonElement.removeAttribute('disabled');
            divGiftSockElement.remove();
        })

        buttonDeleteElement.addEventListener("click", async () => {
            currentId = present._id

            await fetch(`${URL}/${currentId}`, {
                method: 'DELETE'
            });

            divGiftSockElement.remove();
        });
    }
}

async function add(event) {
    let present = presentInputElement.value;
    let for1 = forInputElement.value;
    let price = priceInputElement.value;

    let newPresent = {
        gift: present,
        for: for1,
        price: price,
    }

    let response = await fetch(URL, {
        method: 'POST',
        body: JSON.stringify(newPresent),
    });

    if (!response.ok) {
        return;
    };

    presentInputElement.value = '';
    forInputElement.value = '';
    priceInputElement.value = '';
    await load();
}

async function change(event) {
    let present = presentInputElement.value;
    let for1 = forInputElement.value;
    let price = priceInputElement.value;

    let response = await fetch(`${URL}/${currentId}`, {
        method: 'PUT',
        body: JSON.stringify({
            _id: currentId,
            gift: present,
            for: for1,
            price: price,
        })
    })

    await load();
    presentInputElement.value = '';
    forInputElement.value = '';
    priceInputElement.value = '';
    editButtonElement.setAttribute('disabled', 'disabled');
    addButtonElement.removeAttribute('disabled');

}