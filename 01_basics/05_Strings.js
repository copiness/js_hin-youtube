const name = "aklanta"
const repoCount = 60

//console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);


const gameName = new String('aklan-ta')

// console.log(gameName[1]);
// console.log(gameName.__proto__);

// console.log(gameName.length);

// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('k'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-7,4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://akl.com/akl%20bhukta"
console.log(url.replace('%20', '-'));

console.log(url.includes('akl'));

console.log(gameName.split('-'))