function encodeAndDecodeMessages() {
    let textAreaForCoding = document.querySelector('textarea:first-of-type');
    let textAreaForDecoding = document.querySelector('#main div:nth-child(2) textarea');
    let buttonCode = document.querySelector('button:first-of-type');
    let buttonDecode = document.querySelector('#main div:nth-child(2) button');

    buttonCode.addEventListener('click', function (event) {
        let theCode = textAreaForCoding.value.split('');
        let final = [];

        for (let char of theCode) {
            let num = char.charCodeAt(0);
            num += 1;
            let charF = String.fromCharCode(num);
            final.push(charF);
        }
        final = final.join('')

        textAreaForDecoding.value = final;
        textAreaForCoding.value = '';
    })

    buttonDecode.addEventListener('click', function (event) {
        let theCode2 = textAreaForDecoding.value.split('');
        let final2 = [];

        for (let char of theCode2) {
            let num2 = char.charCodeAt(0);
            num2 -= 1;
            let charF2 = String.fromCharCode(num2);
            final2.push(charF2);
        }
        final2 = final2.join('')

        textAreaForCoding.value = '';
        textAreaForDecoding.value = final2;
    })
}