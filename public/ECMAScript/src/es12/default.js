console.log('##########################################################################################################');
console.log('############################################## Replace All ###############################################');

const message1 = "JavaScript is wonderful and we can create the future of web. Some space from the future is for JavaScript. JavaScript is great!";

// Replace
const replacedString1 = message1.replace("JavaScript", "Python");
console.log(replacedString1);

const replacedString2 = message1.replaceAll("JavaScript", "Python");
console.log(replacedString2);

console.log('##########################################################################################################');
console.log('######################################## Private class features ##########################################');
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields

class Message {
    #privateField;

    constructor() {
        this.#privateField = 73;
    }

    static #PRIVATE_STATIC_FIELD;

    static #privateStaticMethod() {
        return 'I am private, look up me!';
    };

    #privateMethod(val) {
        console.log("I got " + val + "!");
    };

    publicMethod(val) {
        console.log(val);
    };

    getPrivateField() {
        return this.#privateField;
    }

    getPrivateStaticMethod() {
        return Message.#privateStaticMethod();
    }

    getPrivateMethod(val) {
        return this.#privateMethod(val);
    }

    static publicStaticMethod() {
        Message.#PRIVATE_STATIC_FIELD = 37;
        return Message.#PRIVATE_STATIC_FIELD;
    }

}

class SubMessage extends Message {
    #subPrivateField;

    constructor() {
        super();
        this.#subPrivateField = 23;
    }

    getSubPrivateField() {
        return this.#subPrivateField;
    }
}

const message2 = new Message();
message2.publicMethod('Amazing!');
console.log(message2.getPrivateMethod('you'));

const subMessage1 = new SubMessage();
console.log(subMessage1.getPrivateField());
console.log(subMessage1.getSubPrivateField());
console.log('Static:');
console.log(Message.publicStaticMethod());
console.log(SubMessage.publicStaticMethod());
console.log(subMessage1.getPrivateStaticMethod());
console.log(subMessage1.getPrivateStaticMethod());

console.log('##########################################################################################################');
console.log('############################################## Operators #################################################');
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators

console.log('Arithmetic operators in JavaScript');

let x = 5;
let y = 3;

// addition
console.log('x + y = ', x + y);  // 8

// subtraction
console.log('x - y = ', x - y);  // 2

// multiplication
console.log('x * y = ', x * y);  // 15

// division
console.log('x / y = ', x / y);  // 1.6666666666666667

// remainder
console.log('x % y = ', x % y);   // 2

// increment
console.log('++x = ', ++x); // x is now 6
console.log('x++ = ', x++); // prints 6 and then increased to 7
console.log('x = ', x);     // 7

// decrement
console.log('--x = ', --x); // x is now 6
console.log('x-- = ', x--); // prints 6 and then decreased to 5
console.log('x = ', x);     // 5

//exponentiation
console.log('x ** y =', x ** y);

console.log('Comparison operators in JavaScript');

// equal operator
console.log('2 == 2', 2 == 2); // true
console.log('2 == "2"', 2 == "2"); // true

// not equal operator
console.log('3 != 2', 3 != 2); // true
console.log('"hello" != "Hello"', "hello" != "Hello"); // true

// strict equal operator
console.log('2 === 2', 2 === 2); // true
console.log('2 === "2"', 2 === "2"); // false

// strict not equal operator
console.log('2 !== "2"', 2 !== "2"); // true
console.log('2 !== 2', 2 !== 2); // false

console.log('Logical Operators in JavaScript');

// logical AND
console.log('true && true', true && true); // true
console.log('true && false', true && false); // false

// logical OR
console.log('true || false', true || false); // true

// logical NOT
console.log('!true', !true); // false

let a = 12;
let  b = 25;
console.log('Bitwise AND Operator');

let result = a & b;
console.log('a & b', result);

console.log('Bitwise OR Operator');

result = a | b;
console.log('a | b', result); // 29

console.log('Bitwise XOR Operator');

result = a ^ b;
console.log('a ^ b', result); // 21

console.log('Bitwise NOT Operator');
b = 12;
result = ~b;

console.log('~b', result); // -13

console.log('Left shift');
a = 8;
b = 1;

result = a << b;

// 1 ( 00000000000000000000000000010000 )
console.log('a << b', result);

console.log('Sign-propagating right shift');

// 11111111111111111111111111111101
a = 8;
b = 1;
let c = -3;

result = a >> b;
let result1 = c >> b;

// 4 (00000000000000000000000000000100)
console.log('a >> b', result);

// -1 (11111111111111111111111111111111)
console.log('c >> b', result1);

console.log('Zero-fill right shift');
a = 8;
b = 1;
// 11111111111111111111111111111101
c = -3;

result = a >>> b;
result1 = c >>> b;

// 4 (00000000000000000000000000000100)
console.log('a >>> b', result);

// 1073741823 (00111111111111111111111111111111)
console.log('c >>> b', result1);
console.log('Assignment operators');
let isTrue = true;
let isFalse = false;
console.log('isTrue &&= isFalse', isTrue &&= isFalse);
console.log('isTrue ||= isFalse', isTrue ||= isFalse);
isTrue = undefined;
console.log('isTrue ??= isFalse', isTrue ??= isFalse);

console.log('##########################################################################################################');
console.log('############################################# Promise Any ################################################');
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any

const promise1 = new Promise((resolve, reject) => reject("reject 1"));
const promise2 = new Promise((resolve, reject) => resolve("resolve 2"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 3"));
const promise4 = new Promise((resolve, reject) => setTimeout(() => resolve("resolve 4"), 3000));

Promise.any([promise1, promise2, promise3, promise4])
    .then(response => console.log(response));