function solve() {
    let textAreaElement = document.querySelector('textarea:first-of-type');
    const getGenerateButton = document.querySelector('button:first-of-type');
    let textArea2Element = document.querySelector('#exercise textarea:last-of-type');
    const getBuyButton = document.querySelector('#exercise button:last-of-type');
    let getFurnitureElement = document.querySelector('.table tbody');

    getGenerateButton.addEventListener('click', function (event) {
        let text = JSON.parse(textAreaElement.value)

        for (let furniture of text) {
            let createImgEl = document.createElement('img');
            let tdImgEl = document.createElement('td');
            createImgEl.src = furniture['img'];
            tdImgEl.appendChild(createImgEl);

            let createPEl = document.createElement('p');
            let tdPel = document.createElement('td');
            createPEl.textContent = furniture['name'];
            tdPel.appendChild(createPEl);

            let createPricePEl = document.createElement('p');
            let tdPricePEl = document.createElement('td');
            createPricePEl.textContent = furniture['price'];
            tdPricePEl.appendChild(createPricePEl);

            let createDecFactorEl = document.createElement('p');
            let decFacel = document.createElement('td');
            createDecFactorEl.textContent = furniture['decFactor'];
            decFacel.appendChild(createDecFactorEl)

            let createInputEl = document.createElement('input');
            let tdInputEl = document.createElement('td');
            createInputEl.setAttribute('type', 'checkbox');
            tdInputEl.appendChild(createInputEl);

            let finalEl = document.createElement('tr');
            finalEl.appendChild(tdImgEl);
            finalEl.appendChild(tdPel);
            finalEl.appendChild(tdPricePEl);
            finalEl.appendChild(decFacel);
            finalEl.appendChild(tdInputEl);

            getFurnitureElement.appendChild(finalEl)
        }
    })

    getBuyButton.addEventListener('click', function (event) {
        let finalNames = [];
        let finalPrice = 0;
        let finalDecF = 0;
        let elementsCount = 0;
        let totalDone = '';

        Array
            .from(getFurnitureElement.children)
            .forEach(furniture => {
                let checked = furniture.querySelector('input[type=checkbox]');

                if (!checked.checked) {
                    return;
                }

                let name = furniture.children.item(1).textContent;
                let price = Number(furniture.children.item(2).textContent);
                let decF = Number(furniture.children.item(3).textContent);
                finalNames.push(name);
                finalPrice += price;
                finalDecF += decF;
                elementsCount++;
            })
        totalDone += `Bought furniture: ${finalNames.join(', ')}\n`;
        totalDone += `Total price: ${finalPrice.toFixed(2)}\n`;
        totalDone += `Average decoration factor: ${finalDecF / elementsCount}`;

        textArea2Element.textContent = totalDone
    })
}