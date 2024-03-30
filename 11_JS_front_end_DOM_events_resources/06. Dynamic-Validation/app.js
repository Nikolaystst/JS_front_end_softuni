function validate() {
    let inputElement = document.getElementById('email');
    let pattern =/[a-z]+@[a-z]+\.[a-z]+/

    inputElement.addEventListener('change', function (event) {
        let isIt = pattern.test(event.target.value);

        if (!isIt) {
            event.target.classList.add('error');
        } else {
            event.target.classList.remove('error');
        }
    })
}