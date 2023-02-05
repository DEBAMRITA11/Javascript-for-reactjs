// var, let, const
// var:
// var firstName = "Amrita"; 
// console.log(firstName);
// firstName ="Joya";
// console.log(firstName);

// let:
// let lastName = "Deb";
// console.log(lastName);
// lastName = "Naha";
// console.log (lastName);

// const
// const firstName = "Amrita";
// console.log(firstName);
// firstName = "Joya"; 
// console.log(firstName);

// Arrow function:
// // example 1:
// function showText(text) {
//     console.log(text);
// }
// showText("Javascript Text");

// // arrow function example 1:
// const showTheText = (text) => {
//     console.log(text);
// };
// showTheText("Arrow Function Text");

// // arrow function example 2:
// const showTheText2 = () => {
//     console.log("Normal Test");
// };
// showTheText2();

// // arrow function example 3:
// const showResult = (number) => {
//     return number * 2;
// };
// // showResult(2);
// console.log(showResult(2));

// arrow function example 3 write just one line:
// const showResult = (number) => number * 2;
// console.log(showResult(2));

// spread operator:
// array example:
// const num1 = [1,2,3,4];
// console.log(num1);

// const num2 = [...num1,5,6];
// console.log(num2);

// object example:
// const user1 = {
//     fName:"amrita",
//     lName:"deb",
// };
// console.log(user1);
// const user2 = {
//     ...user1,
//     age: 29,
// };
// console.log(user2);

// another example: using for unlimited or undefine paramiter. 
// const getNumber = (...number) => {
//     console.log(number(2));
// };
// getNumber(2,4,6);

// Destructuring:
// Array example
// const num1 = [1,2,3];
// // const n1 = num1[0];
// // const n2 = num1[1];
// // const n3 = num1[2];
// const [n1,n2,n3] = num1;
// console.log(n1);
// console.log(n2);
// console.log(n3);

// object destructuring:
// const user2 = {
//     fName: "amrita",
//     lName: "deb",
//     age:29,
// };

// // const fName = user2.fName;
// // console.log(fName);
// // const lName = user.lName;
// // console.log(lastName); 

// // destrucuring: Here, age, fName and lName those are using as key component, not a paramiter. so, we have no need to maintain serial here. 

// const{age, fName, lName} = user2;
// console.log(age); 

// array Write: [] 3rd bracket
// array destrucuring: [] 3rd bracket

// object write: {} 2nd bracket
// object destrucuring: {} 2nd bracket

// Array Map:
// const num1 = [2,4,6,8];
// num1.map(num => {
//     console.log(num * 2);
// });

// Filter:


// Reduce:


// Javascript Classes:
// class Car {
//     constructor(name,year){
//         this.name = name;
//         this.year = year; 
//     }
//     age() {
//         return 2023 - this.year;
//     }
// }
// const myCar = new Car("Tesla", "2020");
// console.log(myCar);

// const roniCar = new Car("Ford", "2023");
// console.log(roniCar); 

// console.log(myCar.age());

// Export and Import:

