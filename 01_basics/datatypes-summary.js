// primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100 
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);


//const bigNumber = 34567832145896743n


// Reference (Non primitive) 

// Array, Objects, Functions,

const heros = ["shaktiman","nagaraj"]
let myObj = {
    name:"aklanta",
    age: 18,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof heros);