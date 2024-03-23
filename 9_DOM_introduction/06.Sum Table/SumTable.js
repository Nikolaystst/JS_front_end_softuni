function sumTable() {
    let getEls = document.querySelectorAll('tr td:nth-child(2n):not(#sum)');
    let getSum = document.getElementById('sum');
    let sum = 0;

    for (let el of getEls) {
        sum += Number(el.textContent)
    }

    getSum.textContent = sum;
}