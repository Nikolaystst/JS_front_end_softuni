window.addEventListener("load", solve);

function solve() {
    let expenseFieldElement = document.getElementById('expense');
    let amountFieldElement = document.getElementById('amount');
    let dateFieldElement = document.getElementById('date');
    let addButtonElement = document.getElementById('add-btn');
    let ulPreviewListElement = document.getElementById('preview-list');
    let ulExpenseListElement = document.getElementById('expenses-list');
    let delButton = document.querySelector('.btn.delete')

    addButtonElement.addEventListener('click', function (event) {
        let expenseValue = expenseFieldElement.value;
        let amountValue = amountFieldElement.value;
        let dateValue = dateFieldElement.value;

        if (!expenseValue || !amountValue || !dateValue) {
            return;
        }

        let buttonEdit = document.createElement('button');
        buttonEdit.classList.add('btn', 'edit');
        buttonEdit.textContent = 'EDIT';

        let buttonOk = document.createElement('button');
        buttonOk.classList.add('btn', 'ok');
        buttonOk.textContent = 'OK';

        let divClassButtons = document.createElement('div');
        divClassButtons.classList.add('buttons');

        divClassButtons.appendChild(buttonEdit);
        divClassButtons.appendChild(buttonOk);

        let pTypeElement = document.createElement('p');
        pTypeElement.textContent = `Type: ${expenseValue}`;

        let pAmountElement = document.createElement('p');
        pAmountElement.textContent = `Amount: ${amountValue}$`;

        let pDateElement = document.createElement('p');
        pDateElement.textContent = `Date: ${dateValue}`;

        let articleElement = document.createElement('article');
        articleElement.appendChild(pTypeElement);
        articleElement.appendChild(pAmountElement);
        articleElement.appendChild(pDateElement);

        let liElement = document.createElement('li');
        liElement.classList.add('expense-item');
        liElement.appendChild(articleElement);
        liElement.appendChild(divClassButtons);
        ulPreviewListElement.appendChild(liElement);
        addButtonElement.setAttribute('disabled', 'disabled');
        expenseFieldElement.value = '';
        amountFieldElement.value = '';
        dateFieldElement.value = '';

        buttonEdit.addEventListener('click', function (event) {
            expenseFieldElement.value = expenseValue;
            amountFieldElement.value = amountValue;
            dateFieldElement.value = dateValue;
            addButtonElement.removeAttribute('disabled');
            liElement.remove()
        })

        buttonOk.addEventListener('click', function (event) {
            divClassButtons.remove();

            ulPreviewListElement.childNodes.forEach(node => {
                ulExpenseListElement.appendChild(node.cloneNode(true));
            });

            addButtonElement.removeAttribute('disabled');
            liElement.remove()
        })
    })

    delButton.addEventListener('click', function (event) {
        history.go()
    })
}
