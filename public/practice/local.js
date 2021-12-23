console.log('********* Local Scope *********');
// **********************************
// ******* Function example 1 *******
const helloWorld = () => {
    const hello = 'Hello World!';
    console.log(hello);
}

helloWorld();
//console.log(hello);//Generates an error

// **********************************
// ********* Lexical scope **********
// ******** (Ambito lexico) *********
var scope = "Im Global!";
const functionScope = () => {
    var scope = "Iam just a Local";
    const printScope = () => {
        return scope;
    }
    console.log(printScope());
};
functionScope();
console.log(scope);
console.log('*******************************');