// ******************************
console.log('******** Var variables ********');
var hello = 'Hello!';
console.log(hello);
console.log('*******************************');

console.log('Re-assign "Var" variable is bad practice!');
var hello = 'Hello ++!';//Bad practice

// ******************************
//******** Let variables ********
let world = 'World!';
//let world = 'World x2!'; //Generates an error

// *******************************
// ******* Const variables *******
const helloWorld = 'Hello World!';


// ******************************
console.log('********** Functions **********');
const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}
anotherFunction();
console.log('*******************************');
// ******************************

// ******************************
// Functions (Bad practices)
console.log('Calling a variable outside the function, which was dimensioned inside, is bad practice');
const globalFunction = () => {
    globalVar = 'Im global'
}
globalFunction()
console.log(globalVar);

const otherGlobalFunction = () => {
    var localVar = globalVar = 'Im global';
}
globalFunction()
console.log(globalVar);
console.log('*******************************');