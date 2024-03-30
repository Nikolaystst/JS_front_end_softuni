function lockedProfile() {
    let getAllProfiles = document.querySelectorAll('.profile')

    for (let profile of getAllProfiles) {
        let getButton = profile.querySelector('button');
        let getLockValidation = profile.querySelector('input[type=radio][value=lock]');
        let getMoreInfo = getButton.previousElementSibling;

        getButton.addEventListener('click', function (event) {
            if (getLockValidation.checked) {
                return;
            }
            if (getButton.textContent === 'Show more') {
                getMoreInfo.style.display = 'block';
                getButton.textContent = 'Hide it';
            } else {
                getMoreInfo.style.display = 'none';
                getButton.textContent = 'Show more';
            }
        })
    }
}