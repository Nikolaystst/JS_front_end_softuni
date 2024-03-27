function subtract() {
    let firstEl = document.getElementById('firstNumber');
    let secondEl = document.getElementById('secondNumber');
    let finalEl = document.getElementById('result');

    finalEl.textContent = Number(firstEl.value) - Number(secondEl.value);
}