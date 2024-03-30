function deleteByEmail() {
    let getEmailElements = document.querySelectorAll('table#customers tbody tr');
    let getInputElement = document.querySelector('input[name=email]');
    let getResult = document.getElementById('result');

    let searchedElement = Array
        .from(getEmailElements)
        .find(el => el.children[1].textContent.includes(getInputElement.value));

    if (!searchedElement) {
        getResult.textContent = 'Not found.';
        getInputElement.value = '';
    } else {
        searchedElement.remove();
        getResult.textContent = 'Deleted.';
        getInputElement.value = '';
    }

}