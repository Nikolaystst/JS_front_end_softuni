window.addEventListener("load", solve);

function solve(event) {
    let placeInputElement = document.getElementById('place');
    let actionInputElement = document.getElementById('action');
    let personInputElement = document.getElementById('person');
    let addButtonElement = document.getElementById('add-btn');
    let ulElementTaskList = document.getElementById('task-list');
    let ulElementDoneList = document.getElementById('done-list');


    addButtonElement.addEventListener('click', function (event) {
        let one = placeInputElement.value;
        let two = actionInputElement.value;
        let three = personInputElement.value;

        let buttonEditElement = document.createElement('button');
        buttonEditElement.classList.add('edit');
        buttonEditElement.textContent = 'Edit';

        let buttonDoneElement = document.createElement('button');
        buttonDoneElement.classList.add('done');
        buttonDoneElement.textContent = 'Done';

        let divButtonsElement = document.createElement('div');
        divButtonsElement.classList.add('buttons');

        divButtonsElement.appendChild(buttonEditElement);
        divButtonsElement.appendChild(buttonDoneElement);

        let pPlaceElement = document.createElement('p');
        // pPlaceElement.textContent = `Place:${placeInputElement.value}`;
        pPlaceElement.textContent = `Place:${one}`;

        let pActionElement = document.createElement('p');
        // pActionElement.textContent = `Action:${actionInputElement.value}`;
        pActionElement.textContent = `Action:${two}`;

        let pPersonElement = document.createElement('p');
        // pPersonElement.textContent = `Action:${personInputElement.value}`;
        pPersonElement.textContent = `Action:${three}`;

        let articleElement = document.createElement('article');
        articleElement.appendChild(pPlaceElement);
        articleElement.appendChild(pActionElement);
        articleElement.appendChild(pPersonElement);

        let liCleanTaskElement = document.createElement('li');
        liCleanTaskElement.classList.add('clean-task');
        liCleanTaskElement.appendChild(articleElement);
        liCleanTaskElement.appendChild(divButtonsElement);

        ulElementTaskList.appendChild(liCleanTaskElement);

        placeInputElement.value = '';
        actionInputElement.value = '';
        personInputElement.value = '';

        buttonEditElement.addEventListener('click', () => {
            placeInputElement.value = one;
            actionInputElement.value = two;
            personInputElement.value = three;

            liCleanTaskElement.remove()
        })

        buttonDoneElement.addEventListener('click', () => {
            let pPlace2Element = document.createElement('p');
            // pPlaceElement.textContent = `Place:${placeInputElement.value}`;
            pPlace2Element.textContent = `Place:${one}`;

            let pAction2Element = document.createElement('p');
            // pActionElement.textContent = `Action:${actionInputElement.value}`;
            pAction2Element.textContent = `Action:${two}`;

            let pPerson2Element = document.createElement('p');
            // pPersonElement.textContent = `Action:${personInputElement.value}`;
            pPerson2Element.textContent = `Action:${three}`;

            let article2Element = document.createElement('article');
            article2Element.appendChild(pPlace2Element);
            article2Element.appendChild(pAction2Element);
            article2Element.appendChild(pPerson2Element);

            let deleteButtonElement = document.createElement('button');
            deleteButtonElement.classList.add('delete');
            deleteButtonElement.textContent = 'Delete';

            let newLiElement = document.createElement('li');
            newLiElement.appendChild(article2Element);
            newLiElement.appendChild(deleteButtonElement);

            ulElementDoneList.appendChild(newLiElement);

            liCleanTaskElement.remove()

            deleteButtonElement.addEventListener('click', () => {
                newLiElement.remove()
            })
        })
    })
}