function search() {
   let listTownElements = document.getElementById('towns');
   let searchBoxElement = document.getElementById('searchText');
   let resultElement = document.getElementById('result');
   let matches = 0;

   for (let town of Array.from(listTownElements.children)) {
       if (town.textContent.toLowerCase().includes(searchBoxElement.value.toLowerCase())) {
           town.style.textDecoration = 'underline';
           town.style.fontWeight = 'bold';
           matches += 1;
       }
   }
   resultElement.textContent = `${matches} matches found`
}
