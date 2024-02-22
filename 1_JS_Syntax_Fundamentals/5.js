function doMath(num1, num2, toDo) {
    let result;
    switch (toDo) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '/': result = num1 / num2; break;
        case '*': result = num1 * num2; break;
        case '%': result = num1 % num2; break;
        case '**': result = num1 ** num2; break;
    }
    console.log(result)
}

doMath(5, 6, '+')
doMath(3, 5.5, '*')