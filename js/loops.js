console.log('****************LOOPS****************');
console.log('==>For In Loop');
const userObject = {
    name: 'John',
    age: 30,
    isMarried: false,
}
for (let key in userObject) {
    console.log(`   The key is ${key} and the value is ${userObject[key]}`);
}

console.log('==>For Of Loop');

let names = ['John', 'Jane', 'Mary'];
for (let name of names) {
    console.log(`   ${name}`);
}

console.log('==>Break and continue');
console.log('   =>Break');
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(`   ${i}`);
}

console.log('   =>Continue');
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(`   ${i}`);
}
console.log('****************LOOPs****************');