/* 
    'NEW KEYWORD' IS USED TO CREATE AN OBJECT AND OBJECT CONSTRUCTOR IN JAVASCRIPT.

    ==> SYNTAX TO CREATE AN OBJECT.
        
        => let object_name = new Object();

    ==> SYNTAX TO CREATE A OBJECT CONSTRUCTOR USING NEW KEYWORD.

        => let object_name = new constructor_name("value 1", "value 2", ... );

    ==> WE CAN CREATE AN OBJECT USING TWO WAYS.

        1) KEY : VALUE PAIR
        2) USING NEW KEYWORD

*/

// ONE WAY TO CRETE AN OBJECT
let person = { name: "Nehal", age: 25 };  // KEY VALUE PAIR

// -------------

// SECOND WAY TO CREATE AN OBJECT USING NEW KEYWORD.
var car = new Object();

car.model = "Inova";
car.company = "Toyota";

console.log(car); // whole object
console.log(car.company); // dot notation: Toyota
console.log(car['model']) // array notation: Inova
console.log(car['']); // undefined