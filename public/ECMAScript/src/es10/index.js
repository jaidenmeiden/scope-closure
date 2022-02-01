console.log('##########################################################################################################');
console.log('######################################## array.flat ######################################################');

let array1 = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array1.flat());
console.log(array1.flat(2));

console.log('##########################################################################################################');
console.log('####################################### array.flatMap ####################################################');

let array2 = [1,2,3,4,5];

console.log(array2.flatMap(value => [value, value * 2]));

console.log('##########################################################################################################');
console.log('############################################ trim ########################################################');

let chain1 = '                 this a fucking true story!';
console.log(chain1, chain1.length);
console.log(chain1.trimStart(), chain1.trimStart().length);

let chain2 = 'This a fucking true story!                         ';
console.log(chain2, chain2.length);
console.log(chain2.trimEnd(), chain2.trimEnd().length);

console.log('##########################################################################################################');
console.log('############################################ try/catch ###################################################');

// Classic structure
try {

} catch(error) {

}

// New possible structure ES10
try {

} catch {

}

console.log('##########################################################################################################');
console.log('########################################### fromEntries ##################################################');

let entries = [["name", "Jaiden"],["age", 37]];

console.log(entries);
console.log(Object.fromEntries(entries));

console.log('##########################################################################################################');
console.log('########################################## Symbol object #################################################');

let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);