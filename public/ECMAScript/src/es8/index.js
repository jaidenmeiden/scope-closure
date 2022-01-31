console.log('##########################################################################################################');
console.log('############################################# Object.entries #############################################');

// Transform object to Matrix (Object.entries )

const data = {
    leader: 'Jaiden',
    frontend1: 'Luis',
    frontend2: 'Adrian',
    backend1: 'Ivan',
    backend2: 'Alejo',
    design: 'Nicky'
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

console.log('##########################################################################################################');
console.log('############################################# Object.values #############################################');

// Transform object to Strings Array (Object.values

const values = Object.values(data);
console.log(values);
console.log(values.length);

console.log('##########################################################################################################');
console.log('################################################ Padding #################################################');

//Padding

const string = 'Jaiden';
console.log(string.padStart(14, 'You are '));
console.log(string.padEnd(19, ' is developer'));
console.log('Mr Meiden'.padEnd(22, ' is developer'));

console.log('##########################################################################################################');
console.log('################################################# commas #################################################');

const obj = {
    name: 'Jaiden',
}