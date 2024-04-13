let URL = 'http://localhost:3030/jsonstore/games';
let currentID;

let loadGamesButtonEl = document.getElementById('load-games');
let divListElement = document.getElementById('games-list');
let addGameButton = document.getElementById('add-game');
let editGameButtonEl = document.getElementById('edit-game');
let gNameInputEl = document.getElementById('g-name');
let maxPlInputEl = document.getElementById('players');
let typeInputEl = document.getElementById('type');

loadGamesButtonEl.addEventListener("click", NSS);

addGameButton.addEventListener('click', newGame);

editGameButtonEl.addEventListener('click', editGame);

async function NSS(event) {
    let servResponse = await fetch(URL);
    let response = await servResponse.json();

    divListElement.innerHTML = '';

    for (let obj of Object.values(response)) {
        // console.log(obj)
        let name = obj.name;
        let players = obj.players;
        let type = obj.type;
        // console.log(name);
        // console.log(players);
        // console.log(type);

        let changeButtonEl = document.createElement('button');
        changeButtonEl.classList.add('change-btn');
        changeButtonEl.textContent = 'Change';

        let deleteButtonEl = document.createElement('button');
        deleteButtonEl.classList.add('delete-btn');
        deleteButtonEl.textContent = 'Delete';

        let divButtonsEl = document.createElement('div');
        divButtonsEl.classList.add('buttons-container');
        divButtonsEl.appendChild(changeButtonEl);
        divButtonsEl.appendChild(deleteButtonEl);

        let pNameEl = document.createElement('p');
        pNameEl.textContent = name;

        let playersEl = document.createElement('p');
        playersEl.textContent = players;

        let typeEl = document.createElement('p');
        typeEl.textContent = type;

        let divContentEl = document.createElement('div');
        divContentEl.classList.add('content')
        divContentEl.appendChild(pNameEl);
        divContentEl.appendChild(playersEl);
        divContentEl.appendChild(typeEl);

        let divBoardGameEl = document.createElement('div');
        divBoardGameEl.classList.add('board-game');
        divBoardGameEl.appendChild(divContentEl);
        divBoardGameEl.appendChild(divButtonsEl);

        divListElement.appendChild(divBoardGameEl);

        changeButtonEl.addEventListener('click', () => {
            currentID = obj._id;
            gNameInputEl.value = name;
            maxPlInputEl.value = players;
            typeInputEl.value = type;

            addGameButton.setAttribute('disabled', 'disabled');
            editGameButtonEl.removeAttribute('disabled');

            divBoardGameEl.remove();
        })

        deleteButtonEl.addEventListener('click', async () => {
            currentID = obj._id;

            await fetch(`${URL}/${currentID}`, {
                method: 'DELETE'
            });

            divBoardGameEl.remove();

            await NSS();
        })
    }

}

async function newGame(event) {
    let name = gNameInputEl.value;
    let players = maxPlInputEl.value;
    let type = typeInputEl.value;

    let newGame = {
        name: name,
        players: players,
        type: type,
    }

    let response = await fetch(URL, {
        method: 'POST',
        body: JSON.stringify(newGame),
    })

    if (!response.ok) {
        return;
    }

    gNameInputEl.value = '';
    maxPlInputEl.value = '';
    typeInputEl.value = '';

    await NSS();
}

async function editGame(event) {
    let name = gNameInputEl.value;
    let players = maxPlInputEl.value;
    let type = typeInputEl.value;

    let response = await fetch(`${URL}/${currentID}`, {
        method: 'PUT',
        body: JSON.stringify({
            _id: currentID,
            name: name,
            players: players,
            type: type,
        })
    })

    await NSS();
    editGameButtonEl.setAttribute('disabled', 'disabled');
    addGameButton.removeAttribute('disabled');
    gNameInputEl.value = '';
    maxPlInputEl.value = '';
    typeInputEl.value = '';

}