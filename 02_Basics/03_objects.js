// singleton
// Object.create

// object literals

const mySum = Symbol("key1")

const JsUser = {
    name :"aklanta",
    "full name" : "aklanta bhukta",
    [mySum]: "mykey1",
    age: 18,
    location: "Odisha",
    email: "akla@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
} 


// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(typeof JsUser.mySum);
// console.log(JsUser[mySum]);


JsUser.email = "ab@gamil.com"  //change the email by = sign
//Object.freeze(JsUser)          //freze the all elements cant be change
JsUser.email = "hu@gamil.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());
//console.log(JsUser.greeting);
console.log(JsUser.greetingTwo());
