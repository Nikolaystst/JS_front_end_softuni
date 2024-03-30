function addItem() {
    let getItemsElement = document.getElementById('items');
    let newElement = document.createElement('li');
    let userInputElement = document.getElementById('newItemText');

    newElement.textContent = userInputElement.value;
    getItemsElement.appendChild(newElement);
    userInputElement.value = '';
}