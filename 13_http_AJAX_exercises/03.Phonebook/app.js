function attachEvents() {
    let getPostUrl = 'http://localhost:3030/jsonstore/phonebook';
    let personInput = document.getElementById('person');
    let phoneInput = document.getElementById('phone');

    let getLoadButtonElement = document.getElementById('btnLoad');
    getLoadButtonElement.addEventListener('click', getInfo);

    let getUListElement = document.getElementById('phonebook');

    let getCreateButtonEl = document.getElementById('btnCreate');
    getCreateButtonEl.addEventListener('click', createPerson);

    async function getInfo(event) {
        getUListElement.innerHTML = '';
        let phoneBookResponse = await fetch(getPostUrl);
        let phoneBook = await phoneBookResponse.json();
        // console.log(phoneBook)

        for (let phoneInfo of Object.entries(phoneBook)) {
            console.log(phoneInfo)
            let key = phoneInfo[0];
            let person = phoneInfo[1];

            let li = document.createElement('li');
            let del = document.createElement('button');
            del.textContent = 'Delete';
            del.addEventListener('click', deletePhone)

            li.textContent = `${person.person}: ${person.phone}`
            li.appendChild(del)
            console.log(li)
            getUListElement.appendChild(li)

            async function deletePhone(event) {
                await fetch(getPostUrl + `/${person._id}`, {
                    method: 'DELETE'
                })

                li.remove()
            }
        }


    }

    async function createPerson(event) {
        let newPerson = {
            person: personInput.value,
            phone: phoneInput.value,
        }

        await fetch(getPostUrl, {
            method: 'POST',
            body: JSON.stringify(newPerson)
        })

        personInput.value = '';
        phoneInput.value = '';
        await getInfo();
    }


}

attachEvents();