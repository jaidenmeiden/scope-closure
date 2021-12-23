console.log("Hoisting elevates statements");
a = 2;
var a;
console.log(a); // 2

console.log("**************************************");
console.log("Javascript uses hoisting on declarations and not on initializations");
console.log(b); // Undefined
var b = 2;

console.log("**************************************");
console.log("Example with functions:");
nameOfDog('Romulo y Remo');
function nameOfDog(name) {
    console.log(name);
}

