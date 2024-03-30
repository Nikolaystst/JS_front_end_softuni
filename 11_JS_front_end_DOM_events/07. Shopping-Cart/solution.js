function solve() {
    let allAddButtons = document.querySelectorAll('button.add-product');
    let textAreaElement = document.querySelector('textarea');
    let checkoutButtonElement = document.querySelector('.checkout');
    let total = 0;
    let final = {};

    Array
        .from(allAddButtons)
        .forEach(el => el.addEventListener('click', function () {
            let curPrice = Number(el.parentElement.parentElement.querySelector('.product-line-price').textContent);
            let curName = el.parentElement.parentElement.querySelector('.product-title').textContent;

            textAreaElement.textContent += `Added ${curName} for ${curPrice.toFixed(2)} to the cart.\n`
            total += curPrice;
            final[curName] = true;
        }))

    checkoutButtonElement.addEventListener('click', function (event) {
        Array
            .from(allAddButtons)
            .forEach(button => button.setAttribute('disabled', 'disabled'));
        event.target.setAttribute('disabled', 'disabled');
        let list = Object.keys(final).join(', ');

        textAreaElement.textContent += `You bought ${list} for ${total.toFixed(2)}.`
    })
}