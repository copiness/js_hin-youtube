const user = {
    username: "aklanta",
    price: 1999,

    welcomeMessage: function() {
        console.log(`${this.username},welcome to website`);
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this);

// function chai(){
//     console.log(this);
// }

// chai()

const chai = () => {
    let username = "aklanta"
    console.log(this.username);
}

//chai()

// const addTwo = (num1,num2) => {
//     return num1+num2
// }

// const addTwo = (num1,num2) => num1+num2

// const addTwo = (num1,num2) => (num1+num2)

const addTwo = (num1,num2) => ({username: "aklanta"})
console.log(addTwo(3,4));

// const myArray = [2,3,4,5,6]

// myArray.forEach()