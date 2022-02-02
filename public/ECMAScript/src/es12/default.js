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
console.log('############################################# Promise Any ################################################');
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any

const promise1 = new Promise((resolve, reject) => reject("reject 1"));
const promise2 = new Promise((resolve, reject) => resolve("resolve 2"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 3"));
const promise4 = new Promise((resolve, reject) => setTimeout(() => resolve("resolve 4"), 3000));

Promise.any([promise1, promise2, promise3, promise4])
    .then(response => console.log(response));