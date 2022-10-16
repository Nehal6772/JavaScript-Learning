/* 
    MOSTLY USED 'NEW KEYWORD' TO CREATE AN OBJECT IN JAVASCRIPT.

    WE CAN CREATE AN OBJECT USING TWO WAYS.

*/

// ONE WAY TO CRETE AN OBJECT
let person = { name: "Nehal", age: 25 };

// -------------

// SECOND WAY TO CREATE AN OBJECT.
var car = new Object();

car.model = "Inova";
car.company = "Toyota";

console.log(car); // whole object
console.log(car.company); // dot notation: Toyota
console.log(car['model']) // array notation: Inova
console.log(car['']); // undefined