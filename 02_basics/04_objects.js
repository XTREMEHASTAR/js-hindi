//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123aa"
tinderUser.name = "Veer"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "veer@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Veer",
            lastname: "Dubey"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
console.log(obj3);

//user[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));






