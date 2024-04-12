window.addEventListener("load", solve);

function solve() {
    let studentNameInputElement = document.getElementById('student');
    let universityInputElement = document.getElementById('university');
    let scoreNameInputElement = document.getElementById('score');
    let nextButtonElement = document.getElementById('next-btn');
    let uLPreviewListElement = document.getElementById('preview-list');
    let uLCandidatesListElement = document.getElementById('candidates-list');

    nextButtonElement.addEventListener('click', () => {
        let name = studentNameInputElement.value;
        let uni = universityInputElement.value;
        let score = scoreNameInputElement.value;

        if (!name || !uni || !score) {
            return;
        }

        let buttonEditElement = document.createElement('button');
        buttonEditElement.classList.add('action-btn', 'edit');
        buttonEditElement.textContent = 'edit';

        let buttonApplyElement = document.createElement('button');
        buttonApplyElement.classList.add('action-btn', 'apply');
        buttonApplyElement.textContent = 'apply';

        let articleElement = document.createElement('article');

        let h4NameElement = document.createElement('h4');
        h4NameElement.textContent = name;

        let pUniElement = document.createElement('p');
        pUniElement.textContent = `University: ${uni}`;

        let pScoreElement = document.createElement('p');
        pScoreElement.textContent = `Score: ${score}`;

        articleElement.appendChild(h4NameElement);
        articleElement.appendChild(pUniElement);
        articleElement.appendChild(pScoreElement);

        let liElement = document.createElement('li');
        liElement.classList.add('application')
        liElement.appendChild(articleElement);
        liElement.appendChild(buttonEditElement);
        liElement.appendChild(buttonApplyElement);

        uLPreviewListElement.appendChild(liElement);
        nextButtonElement.setAttribute('disabled', 'disabled');
        studentNameInputElement.value = '';
        universityInputElement.value = '';
        scoreNameInputElement.value = '';

        buttonEditElement.addEventListener('click', () => {
            studentNameInputElement.value = name;
            universityInputElement.value = uni;
            scoreNameInputElement.value = score;

            liElement.remove();

            nextButtonElement.removeAttribute('disabled');
        });

        buttonApplyElement.addEventListener("click", () => {
            uLPreviewListElement.removeChild(liElement);
            liElement.removeChild(buttonEditElement);
            liElement.removeChild(buttonApplyElement);
            uLCandidatesListElement.appendChild(liElement);

            nextButtonElement.removeAttribute('disabled');
        })

    })
}
  