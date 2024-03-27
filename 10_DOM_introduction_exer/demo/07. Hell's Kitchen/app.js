function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick() {
        let textAreaArray = document.querySelector('textarea')
        textAreaArray = textAreaArray.value.replace('["', '')
        textAreaArray = textAreaArray.replace('"]', '')
        textAreaArray = textAreaArray.replace(/\n/g, '')
        textAreaArray = textAreaArray.split('\",\"')
        let bestRestauran = document.querySelector('#bestRestaurant p')
        let workers = document.querySelector('#workers p')

        let restaurants = {};

        for (let restaurantAndBoys of textAreaArray) {
            console.log(restaurantAndBoys)
            let [restaurantName, boys] = restaurantAndBoys.split(' - ')
            console.log(restaurantName)
            console.log(boys)
            let boysObjArray = [];
            boys = boys.split(', ')
            boys.forEach(pair => {
                let [name, salary] = pair.split(' ')

                boysObjArray.push({
                    name: name,
                    salary: salary
                })
            })
            boysObjArray.sort((a, b) => {return Number(b.salary) - Number(a.salary)})
            restaurants[restaurantName] = boysObjArray
        }

        let bestName = '';
        let averageSalary = 0;
        let bestWorker = '';
        let bestSalary = 0;
        let restaurantNames = '';


        for (let restaurant in restaurants) {
            // console.log(restaurants[restaurant])
            let average = 0;
            let counter = 0;
            let currentSalary = 0;
            let currentNamen = '';
            for (let pair of restaurants[restaurant]) {

                if (Number(pair['salary']) > currentSalary) {
                    currentSalary = Number(pair['salary']);
                    currentNamen = pair['name']
                }
                average += Number(pair['salary']);
                counter += 1;
            }
            if (averageSalary <= (average / counter) ) {
                averageSalary = (average / counter);
                bestName = restaurant;
                bestWorker = currentNamen;
                bestSalary = currentSalary;
                restaurantNames = restaurants[restaurant].map(person => `Name: ${person.name} With Salary: ${person.salary}`)

            }
            // console.log(restaurant)
            // console.log(restaurants[restaurant])
        }
        let haha = `Name: ${bestName} Average Salary: ${averageSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`
        bestRestauran.textContent = haha
        workers.textContent = restaurantNames.join(' ')
    }
}