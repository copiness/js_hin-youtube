// const tinderUser = new Object()

const tinderUser = {}

 tinderUser.id = "123abc"
 tinderUser.name = "Sammy"
 tinderUser.isLoggedIn = false


//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "aklanta",
            lastname: "bhukta"
        }
    }
}

//console.log(regularUser.fullname);
//console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1, obj2}

//const obj3 = Object.assign(obj1,obj2)
// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1, ...obj2}
//console.log(obj3);

const users = [
    {

    }
]

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //check property
// console.log(tinderUser.hasOwnProperty('isLogged'));



const course = {
    coursename: "js in hindi",
    price: "1999",
    courseInstructor: "aklanta"
}

// course.courseInstructor 

//const {courseInstructor} = course
const {courseInstructor: instructor} = course

//console.log(courseInstructor);
console.log(instructor);

// {
//     name: "aklanta",
//     coursename: "js in hindi",
//     price:"free"
// }



// const navbar = ({compaany}) => {  //destructuring

// }

// navbar(compaany ="aklanta")