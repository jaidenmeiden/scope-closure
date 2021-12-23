const buildCount = (i) => {
    let count = i;
    return () => {
        console.log(count++);// Display Count
    }
}

console.log('*******************************');
const myCount = buildCount(1);
console.log('First scope');
myCount();
myCount();
myCount();

console.log('*******************************');
console.log('Second scope');
const myOtherCount = buildCount(10);
myOtherCount();
myOtherCount();
myOtherCount();