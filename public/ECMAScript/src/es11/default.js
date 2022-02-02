console.log('##########################################################################################################');
console.log('############################################ Big Numbers #################################################');

// Exceeds the maximum value of Javascript which is 2^53

const aBigNumber = 9001992737737373n;
const anotherBigNumber = BigInt(9001992737737373);

console.log(aBigNumber);
console.log(anotherBigNumber);

console.log('##########################################################################################################');
console.log('########################################## Promise all set ###############################################');
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled

const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 3"));
const promise4 = new Promise((resolve, reject) => setTimeout(() => resolve("resolve 4"), 3000));

Promise.allSettled([promise1, promise2, promise3, promise4])
    .then(response => console.log(response));

const promise5 = Promise.resolve(3);
const promise6 = 42;
const promise7 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});

Promise.all([promise2, promise3, promise4, promise5, promise6, promise7]).then((values) => {
    console.log(values);
});

console.log('##########################################################################################################');
console.log('############################################ GlobalThis ##################################################');
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis

//console.log(window); // ReferenceError: window is not defined => This error is happened because this application is not running into browser
//console.log(self); // ReferenceError: self is not defined => This error is happened because this application is not running into browser
//console.log(frames); // ReferenceError: frames is not defined => This error is happened because this application is not running into browser
//console.log(this); // undefined => This error is happened because this application is not running into browser
console.log(globalThis);

console.log('##########################################################################################################');
console.log('########################################### null elements ################################################');

const fo = null ?? 'default string';
console.log(fo);

console.log('##########################################################################################################');
console.log('######################################### Optional chaining (?.) #########################################');
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining

const user = {};
console.log(user?.profile?.email);
// If you don't use optional chaining, you have the error: TypeError: Unable to read property 'email' of undefined,
// however, if you use optional chaining you have 'Undefined', we can validate it and doesn't stop the application.
if (user?.profile?.email)  {
    console.log('email');
} else {
    console.log('fail');
}