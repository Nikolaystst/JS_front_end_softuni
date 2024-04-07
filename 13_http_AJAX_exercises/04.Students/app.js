function attachEvents() {
    let url = 'http://localhost:3030/jsonstore/collections/students';
    let tBodyEl = document.querySelector('tbody');
    let submitButtonEl = document.getElementById('submit');
    submitButtonEl.addEventListener('click', addStudent)

    async function getAllInfo(event) {
        tBodyEl.innerHTML = '';
        let response = await fetch(url);
        let students = await response.json()

        for (let student of Object.entries(students)) {
            let st = student[1]
            console.log(st)

            let trEl = document.createElement('tr');
            let tdFirstName = document.createElement('td');
            let tdLastName = document.createElement('td');
            let tdFacultyNumber = document.createElement('td');
            let tdGrade = document.createElement('td');

            tdFirstName.textContent = st.firstName;
            tdLastName.textContent = st.lastName;
            tdFacultyNumber.textContent = st.facultyNumber;
            tdGrade.textContent = st.grade;

            trEl.appendChild(tdFirstName);
            trEl.appendChild(tdLastName);
            trEl.appendChild(tdFacultyNumber);
            trEl.appendChild(tdGrade);

            tBodyEl.appendChild(trEl)

        }
    }

    getAllInfo();

    async function addStudent(event) {
        let firstName = document.getElementsByName('firstName')[0]
        let lastName = document.getElementsByName('lastName')[0]
        let facultyNumber = document.getElementsByName('facultyNumber')[0]
        let grade = document.getElementsByName('grade')[0]

        let newStudent = {
            firstName: firstName.value,
            lastName: lastName.value,
            facultyNumber: facultyNumber.value,
            grade: grade.value,
        }

        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(newStudent),
        })

        getAllInfo();

        firstName.value = '';
        lastName.value = '';
        facultyNumber.value = '';
        grade.value = '';
    }
}

attachEvents();