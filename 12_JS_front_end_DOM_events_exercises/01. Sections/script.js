function create(words) {
    // let children = [];
    let divContentElement = document.querySelector('#content')
    for (let word of words) {
        let newDivElement = document.createElement('div');
        let newPElement = document.createElement('p');

        newPElement.textContent = word;
        newPElement.style.display = 'none';
        newDivElement.appendChild(newPElement)

        newDivElement.addEventListener('click', (event) => {
            event.target.firstChild.style.display = 'block';
        });
        divContentElement.appendChild(newDivElement);
    }

    // divContentElement.append(...children);

}