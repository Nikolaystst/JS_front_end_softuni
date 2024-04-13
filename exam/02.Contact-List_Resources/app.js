window.addEventListener("load", solve);

function solve() {
    let getAddButtonElement = document.getElementById('add-btn');
    let nameInputElement = document.getElementById('name');
    let phoneNumInputElement = document.getElementById('phone');
    let categoryInputElement = document.getElementById("category");
    let ulCheckListElement = document.getElementById('check-list');
    let ulContactListEl = document.getElementById('contact-list');

    getAddButtonElement.addEventListener('click', () => {

        let editBTNElement = document.createElement('button');
        editBTNElement.classList.add('edit-btn');

        let saveBTNElement = document.createElement('button');
        saveBTNElement.classList.add('save-btn');

        let divButtonClassElement = document.createElement('div');
        divButtonClassElement.classList.add('buttons');
        divButtonClassElement.appendChild(editBTNElement);
        divButtonClassElement.appendChild(saveBTNElement);

        let pNameInputElement = document.createElement('p');
        pNameInputElement.textContent = `name:${nameInputElement.value}`;
        // console.log(pNameInputElement.textContent)

        let pNumInputElement = document.createElement('p');
        pNumInputElement.textContent = `phone:${phoneNumInputElement.value}`;
        // console.log(pNumInputElement.textContent)

        let category2InputElement = document.createElement('p');
        let category22InputElement = document.getElementById("category").selectedIndex;
        // console.log(categoryInputElement.options[category22InputElement].value)
        category2InputElement.textContent = `category:${categoryInputElement.options[category22InputElement].value}`
        // console.log(category2InputElement.textContent)

        let name = nameInputElement.value;
        let phoneNum = phoneNumInputElement.value;
        let cat = categoryInputElement.options[category22InputElement].value;

        let articleElement = document.createElement('article');
        articleElement.appendChild(pNameInputElement);
        articleElement.appendChild(pNumInputElement);
        articleElement.appendChild(category2InputElement);

        let liElement = document.createElement('li');
        liElement.appendChild(articleElement);
        liElement.appendChild(divButtonClassElement);

        ulCheckListElement.appendChild(liElement);
        nameInputElement.value = '';
        phoneNumInputElement.value = '';
        categoryInputElement.value = '';


        editBTNElement.addEventListener('click', () => {
            nameInputElement.value = name;
            phoneNumInputElement.value = phoneNum;
            categoryInputElement.value = cat;

            liElement.remove()
        })

        saveBTNElement.addEventListener('click', () => {
            ulCheckListElement.removeChild(liElement);
            liElement.removeChild(divButtonClassElement);
            let delButtonEl = document.createElement('button');
            delButtonEl.classList.add('del-btn')
            liElement.appendChild(delButtonEl);
            ulContactListEl.appendChild(liElement)

            delButtonEl.addEventListener("click", () => {
                liElement.remove()
            })

        })
    })
}
  