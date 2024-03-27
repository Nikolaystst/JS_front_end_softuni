function solve() {
    let getInput = document.getElementById('text');
    let getCase = document.getElementById('naming-convention');
    let final = document.getElementById('result');


    let convert = (text) => text.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('')

    let convention = {
        'Camel Case': (convert2) => convert(convert2).charAt(0).toLowerCase() + convert(convert2).slice(1),
        'Pascal Case': convert,
    };

    if (!convention[getCase.value]) {
        final.textContent = 'Error!';
        return
    }

    final.textContent = convention[getCase.value](getInput.value);
}