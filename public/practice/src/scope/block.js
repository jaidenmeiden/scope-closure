//Global Scope (Block 1)
const fruits = () => {
    // Function scope (Block 2)
    if (true) {
        // Validation scope (Block 3)
        var fruit1 = 'Apple';
        let fruit2 = 'Orange';
        const fruit3 = 'Kiwi';
        console.log(fruit2);
        console.log(fruit3);
    }

    console.log(fruit1);
}

fruits();
console.log('*******************************');

let x = 1;
{
    let x = 2;
    console.log(x);
}
console.log(x);
console.log('*******************************');
const anotherFunction = () => {
    console.log('Show last i (Wrong algorithm)');
    for (var i = 0; i< 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000);
    }
    setTimeout(() => {
        console.log('-------------------------------');
        console.log('Shows all items (Correct algorithm)');
    }, 1000);
    for (let i = 0; i< 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000);
    }
}
anotherFunction();
setTimeout(() => {
    console.log('*******************************');
}, 1000);