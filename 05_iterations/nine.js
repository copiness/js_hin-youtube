const myNums = [1,2,3,4]

// const myTotal = myNums.reduce(function (acc,currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce((acc,curr) => acc+curr,0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js corse",
        price: 345
    },
    {
        itemName: "java corse",
        price: 545
    },
    {
        itemName: "pyython corse",
        price: 999
    },
    {
        itemName: " mobile dev corse",
        price: 2990
    }
]

const priceToPay = shoppingCart.reduce((acc,item) => acc + item.price,0)

console.log(priceToPay);