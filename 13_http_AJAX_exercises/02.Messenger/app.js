function attachEvents() {
    let getPostUrl = 'http://localhost:3030/jsonstore/messenger';
    let getSubmitButtonEL = document.getElementById('submit');
    let getRefreshButtonEl = document.getElementById('refresh');
    let getTextAreaEl = document.getElementById('messages');

    getSubmitButtonEL.addEventListener('click', sendText);
    getRefreshButtonEl.addEventListener('click', refresh);

    async function sendText(event) {
        let newAutor = document.getElementsByName('author')[0];
        let newContent = document.getElementsByName('content')[0];

        let newMSG = {
            author: newAutor.value,
            content: newContent.value
        }

        await fetch(getPostUrl, {
            method: 'POST',
            body: JSON.stringify(newMSG)
        })

        newAutor.value = '';
        newContent.value = '';
    }

    async function refresh(event) {
        let refreshResponse = await fetch(getPostUrl);
        let refresh = await refreshResponse.json();
        let textareaArray = [];

        for (let i of Object.entries(refresh)) {
            let message = i[1];
            console.log(message)
            textareaArray.push(`${message.author}: ${message.content}`)
        }

        getTextAreaEl.textContent = textareaArray.join('\n')
    }

}

attachEvents();