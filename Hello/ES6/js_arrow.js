/*
With arrow functions, you don't have to type the function keyword, the return keyword, and the curly brackets.

Arrow functions are not supported in IE11 or earlier.
*/
const x = (x, y) => x * y;{
document.getElementById("demo").innerHTML = x(5, 5);
}