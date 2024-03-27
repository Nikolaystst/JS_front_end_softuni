function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {
        let searchFieldPhrase = document.getElementById('searchField');
        let studentsElements = document.querySelectorAll('tbody tr');

        for (let student of studentsElements) {
            let allStudentElements = student.querySelectorAll('td');
            let isSelected = false;
            student.classList.remove('select');

            for (let element of allStudentElements) {
                if (element.textContent.includes(searchFieldPhrase.value)) {
                    isSelected = true;
                    break;
                }
            }

            if (isSelected === true) {
                student.className = 'select';
            }
        }
        searchFieldPhrase.value = '';
    }
}