let URL = 'http://localhost:3030/jsonstore/tasks';

let loadButtonMealsElement = document.getElementById('load-meals');
let divIdListElement = document.getElementById('list');
let addMealButtonElement = document.getElementById('add-meal');
let editMealButtonElement = document.getElementById('edit-meal');
let currentMealId;

loadButtonMealsElement.addEventListener('click', fetchdata);

addMealButtonElement.addEventListener('click', populateData);

editMealButtonElement.addEventListener('click', edit);

async function fetchdata(event) {
    divIdListElement.innerHTML = '';

    let responseServ = await fetch(URL);
    let allData = await responseServ.json();

    for (let el of Object.values(allData)) {
        console.log(el)
        let changeMealButton = document.createElement('button');
        changeMealButton.classList.add('change-meal');
        changeMealButton.textContent = 'Change';

        let deleteMealButton = document.createElement('button');
        deleteMealButton.classList.add('delete-meal');
        deleteMealButton.textContent = 'Delete';

        let divElement = document.createElement('div');
        divElement.id = 'meal-buttons';
        divElement.appendChild(changeMealButton);
        divElement.appendChild(deleteMealButton);

        let h3CaloriesElement = document.createElement('h3');
        h3CaloriesElement.textContent = el.calories;

        let h3TimeElement = document.createElement('h3');
        h3TimeElement.textContent = el.time;

        let h2FoodElement = document.createElement('h2');
        h2FoodElement.textContent = el.food;

        let divMealElement = document.createElement('div');
        divMealElement.classList.add('meal');
        divMealElement.appendChild(h2FoodElement);
        divMealElement.appendChild(h3TimeElement);
        divMealElement.appendChild(h3CaloriesElement);
        divMealElement.appendChild(divElement);
        divIdListElement.appendChild(divMealElement);

        changeMealButton.addEventListener("click", () => {
            currentMealId = el._id;

            let getFoodInputValue = document.querySelector('input[id=food]')
            let getTimeInputValue = document.querySelector('input[id=time]');
            let getCaloriesInputValue = document.querySelector('input[id=calories]');

            getFoodInputValue.value = el.food;
            getTimeInputValue.value = el.time;
            getCaloriesInputValue.value = el.calories;

            addMealButtonElement.setAttribute('disabled', 'disabled');
            editMealButtonElement.removeAttribute('disabled');

            divMealElement.remove();
        })

        deleteMealButton.addEventListener("click", async () => {
            currentMealId = el._id

            await fetch(`${URL}/${currentMealId}`, {
                method: 'DELETE'
            });

            divMealElement.remove();
        });
    }
}

async function populateData(event) {
    let getFoodInputValue = document.querySelector('input[id=food]')
    let getTimeInputValue = document.querySelector('input[id=time]');
    let getCaloriesInputValue = document.querySelector('input[id=calories]');

    let newFood = {
        food: getFoodInputValue.value,
        time: getTimeInputValue.value,
        calories: getCaloriesInputValue.value,
    }

    let response = await fetch(URL, {
        method: 'POST',
        body: JSON.stringify(newFood)
    });

    if (!response.ok) {
        return;
    };

    getFoodInputValue.value = '';
    getTimeInputValue.value = '';
    getCaloriesInputValue.value = '';
    await fetchdata();
}

async function edit(event) {
    let getFoodInputValue = document.querySelector('input[id=food]')
    let getTimeInputValue = document.querySelector('input[id=time]');
    let getCaloriesInputValue = document.querySelector('input[id=calories]');

    let response = await fetch(`${URL}/${currentMealId}`, {
        method: 'PUT',
        body: JSON.stringify({
            _id: currentMealId,
            food: getFoodInputValue.value,
            time: getTimeInputValue.value,
            calories: getCaloriesInputValue.value,
        })
    });

    await fetchdata();
    editMealButtonElement.setAttribute('disabled', 'disabled');
    addMealButtonElement.removeAttribute('disabled');
    getFoodInputValue.value = '';
    getTimeInputValue.value = '';
    getCaloriesInputValue.value = '';
};