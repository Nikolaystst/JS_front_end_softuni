function addItem() {
    let textInputElement = document.getElementById('newItemText');
    let valueInputElement = document.getElementById('newItemValue');
    let selectMenuElement = document.getElementById('menu');
    // let inputButtonElement = document.querySelector('input[type=button]');

    let createNewOption = document.createElement('option');

    createNewOption.textContent = textInputElement.value;
    createNewOption.value = valueInputElement.value;
    selectMenuElement.appendChild(createNewOption);

    textInputElement.value = '';
    valueInputElement.value = '';
}