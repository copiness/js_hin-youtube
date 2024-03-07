function sayMyName() {
    console.log("A");
    console.log("K");
    console.log("L");
    console.log("A");
    console.log("N");
    console.log("T");
    console.log("A");
}

//sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1+number2);
// }
//addTwoNumbers(3, 4)

function addTwoNumbers(number1, number2) {
    // let result = number1+number2
    // return result
    return number1+number2
}

const result = addTwoNumbers(3,5)

//console.log("Result: ", result);

function loginUserMessage(username = "sam") {
    if(!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`;
}

//console.log(loginUserMessage("aklanta"));
console.log(loginUserMessage(""));

function loginUserMessage2(username = "sam") {
    if(username === undefined) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}
console.log(loginUserMessage("aklanta"));
