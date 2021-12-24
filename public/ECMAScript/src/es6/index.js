// Function before ES6
function newFunction(name, age, country) {
    var name = name || 'Mr. Jaiden';
    var age = age || 17;
    var country = country || 'COL';
    console.log(name, age, country);
}
newFunction();

// Function with ES6
function newFunction1(name = 'Jaiden Meiden', age = 37, country = 'COL') {
    console.log(name, age, country);
}
newFunction1();
newFunction1('Iron Jaiden', 77, 'ES');

let hello = "Hello";
let world = "World!";
// Concatenation before ES6
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
// Concatenation with ES6
let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2);

// Multiline before ES6
let lorem = "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías  \n"
+ "o de borradores de diseño para probar el diseño visual antes de insertar el texto final."
console.log(lorem);
// Multiline with ES6
let lorem2 = `Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías 
o de borradores de diseño para probar el diseño visual antes de insertar el texto final.`
console.log(lorem2);

// The destructuring syntax is a JavaScript expression that allows you to unpack the values of arrays or properties of objects into different variables.
let person = {
    'name': 'Jaiden',
    'age': 37,
    'country': 'COL',
}