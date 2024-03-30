function addItem() {
    let getULListElement = document.getElementById('items');
    let createNewLIEl = document.createElement('li');
    let getTheInputEl = document.getElementById('newItemText');

    createNewLIEl.textContent = getTheInputEl.value;

    let getDeletedEl = document.createElement('a');
    getDeletedEl.textContent = '[Delete]';
    getDeletedEl.href = '#';
    getDeletedEl.addEventListener('click', () => {
        createNewLIEl.remove();
    })

    createNewLIEl.appendChild(getDeletedEl)

    getULListElement.appendChild(createNewLIEl);
    getTheInputEl.value = '';
}