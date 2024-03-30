function attachEventsListeners() {
    let getDaysInput = document.querySelector('#days');
    let getDaysInputButton = document.querySelector('#daysBtn');
    let getHoursInput = document.querySelector('#hours');
    let getHoursInputButton = document.querySelector('#hoursBtn');
    let getMinutesInput = document.querySelector('#minutes');
    let getMinutesInputButton = document.querySelector('#minutesBtn');
    let getSecondsInput = document.querySelector('#seconds');
    let getSecondsInputButton = document.querySelector('#secondsBtn');

    getDaysInputButton.addEventListener('click', function (event) {
        let getVal = getDaysInput.value;
        getHoursInput.value = getVal * 24;
        getMinutesInput.value = getVal * 24 * 60;
        getSecondsInput.value = getVal * 24 * 60 * 60;
    });
    getHoursInputButton.addEventListener('click', function (event) {
        let getVal = getHoursInput.value;
        getDaysInput.value = getVal / 24;
        getMinutesInput.value = getVal * 60;
        getSecondsInput.value = getVal * 60 * 60;
    });
    getMinutesInputButton.addEventListener('click', function (event) {
        let getVal = getMinutesInput.value;
        getDaysInput.value = getVal / 24 / 60;
        getHoursInput.value = getVal / 60;
        getSecondsInput.value = getVal * 60;
    });
    getSecondsInputButton.addEventListener('click', function (event) {
        let getVal = getSecondsInput.value;
        getDaysInput.value = getVal / 24 / 60 / 60;
        getHoursInput.value = getVal / 60 / 60;
        getMinutesInput.value = getVal / 60;
    });
}