function focused() {
    let allInputElements = document.querySelectorAll('input[type=text]');

    Array
        .from(allInputElements)
        .forEach(el => el.addEventListener('focus', function (event) {
            event.target.parentElement.classList.add('focused');
        } ))

    Array
        .from(allInputElements)
        .forEach(el => el.addEventListener('blur', function (event) {
            event.target.parentElement.classList.remove('focused')
        }))
}
