let p = '["PizzaHut - Peter 500, George 300, Mark 800", "TheLake - Bob 1300, Joe 780, Jane 660"]';

// Remove the outer square brackets and split the string by commas
let arrString = p.substring(1, p.length - 1).split(', ');

// Parse each string element into an array of strings
let resultArray = arrString.map(str => str.replace(/\"/g, ''));

console.log(resultArray);
