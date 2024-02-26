function NSS(word) {
    let final = '';
    final = word.replaceAll('\'', '');
    final = final.replaceAll('\,', '');
    final = final.replaceAll('\!', '');
    final = final.replaceAll('\?', '');
    final = final.replaceAll(' ', ', ');
    final = final.toUpperCase();
    console.log(final);
}

// function NSS(word) {
//     let final = '';
//     final = word.split(',').join('')
//     final = final.split('!').join('')
//     final = final.split('?').join('')
//     final = final.split('.').join(' ')
//     final = final.split('  ').join(' ')
//     final = final.split(' ').join(', ')
//     final = final.toUpperCase();
//     console.log(final)
// }
NSS('Functions in JS can be nested, i.e. hold other functions')
NSS('Hi, how are you?')
NSS('hello')