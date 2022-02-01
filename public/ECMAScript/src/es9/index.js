console.log('##########################################################################################################');
console.log('############################################## Rest operator #############################################');

const obj = {
    name: 'Jaiden',
    age: 37,
    country: 'CO'
}

console.log(obj)

let {name, ...all1} = obj;
console.log(name, all1);

let {country, ...all2} = obj;
console.log(all2);

console.log('##########################################################################################################');
console.log('################################ Join elements (Propagation properties) ##################################');

const obj1 = {
    name: 'Jaiden',
    age: 37
}

const obj2 = {
    ...obj1,
    country: 'CO'
}

console.log(obj2);

console.log('##########################################################################################################');
console.log('################################################## regex #################################################');

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2022-07-23');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);

console.log('##########################################################################################################');
console.log('############################################# promise.finally ############################################');

const information1 = () => {
    return new Promise((resolve, reject) => {
        (true) ? resolve('Information delivered!') : reject(new Error('Test error!'));
    });
}

const information2 = () => {
    return new Promise((resolve, reject) => {
        (true) ? setTimeout(() => resolve('Information delivered!'), 3000) : reject(new Error('Test error!'));
    });
}

information1()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log("Finish!"));

information2()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log("Finish setTimeout()!"));