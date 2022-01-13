console.log('##########################################################################################################');
console.log('############################################### propagation ##############################################');
// ES6
let name = 'Jaiden'
let age = 37;


obj1 = {name: name, age:age};
//ES6
obj2 = {name, age};

console.log(obj1);
console.log(obj2);

console.log('##########################################################################################################');
console.log('############################################# Arrow functions ############################################');

const names = [
    {name: 'Jaiden', age: 37},
    {name: 'Diana', age: 27}
];

// Before ES6
console.log('Before ES6:');
let listOfNames1 = names.map(function (item){
   console.log(item.name);
});
// ES6

//Example 1
console.log('Example 1:');
let listOfNames2 = names.map(item => console.log(item.name));

//Example 2
console.log('Example 2:')
const listOfNames3 = (name, age) => {
    console.log(name, age)
}
listOfNames3('Jaiden', 37)
//Example 3
console.log('Example 3:')
const listOfNames4 = name => {
    console.log(name)
}
listOfNames4('Jaiden');
//Example 4
const square = num => num * num;
console.log('Example 4:', square(7));

console.log('##########################################################################################################');
console.log('######################################## Asynchronism (Promises)  ########################################');

const myPromise = (request) => {
    return new Promise((resolve, reject) => {
        if(request){
            resolve('Good way!')
        } else {
            reject('No way!')
        }
    })
}

myPromise(true)
    .then(response => console.log(response))
    .then(() => console.log('Great experiment!'))
    .catch(error => console.error(error))

myPromise(false)
    .then(response => console.log(response))
    .then(()=> console.log('Great experiment!'))
    .catch(error => console.error(error))