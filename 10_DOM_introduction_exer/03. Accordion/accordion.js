function toggle() {
    let toggleButtonElement = document.querySelector('.head span.button');
    let extraContent = document.getElementById('extra');

    let currentToggleButton = toggleButtonElement.textContent;

    if (currentToggleButton === 'More') {
        toggleButtonElement.textContent = 'Less';
        extraContent.style.display = 'block';
    } else {
        toggleButtonElement.textContent = 'More';
        extraContent.style.display = 'none';
    }
}