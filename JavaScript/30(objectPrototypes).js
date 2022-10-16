/* 

1) EVERY OBJECT IN JAVASCRIPT HAS BUILT-IN PROPERTY WHICH IS CALLED PROTOTYPE.

2) PROTOTYPE ITSELF IS 'AN OBJECT'. 

3) WHEN WE CREATE A FUNCTION OR METHOD, JAVASCRIPT ADDED PROTOTYPE PROPERTY TO THAT FUNCTION OR METHOD.

4) PROTOTYPE HAS ITS OWN PROTOTYPE AND LIKEWISE IT MAINTAINS THE WHOLE CHAIN.

5) WHEN WE ADD PROPERTY OR A METHOD TO AN OBJECT, WE DON'T NEED PROTOTYPE.

6) PROTOTYPE IS ONLY USED WHEN WE WANT TO ADD METHOD OR A PROPERTY TO OBJECT CONSTRUCTOR.

7) PROTOTYPE HELPS US TO ACHIEVE THE INHERITANCE

<------------------------------------------------------------------>

[Whenever we create a JavaScript function, JavaScript adds a prototype property to that function. A prototype is an object, where it can add new variables and methods to the existing object. i.e., Prototype is a base class for all the objects, and it helps us to achieve the inheritance.]

<----------------------------------------------------------------->

WHEN WE FORGOT TO ADD THE PROPERTY INTO THE CONSTRUCTOR IN THE BEGINING AND LATER WE REALISED IT, THEN WE MUST USE PROTOTYPE TO ADD THOSE PROPERTIES LATER TO THE CONSTRUCTOR.

SOLUTION:  
---------

USING PROTOTYPE, WE CAN ADD PROPERTIES AND METHODS OUTSIDE THE CONSTRUCTOR. (EXTERNALLY)

PROTOTYPE IS A SUPER CLASS CREATED BY DEFAULT AND OTHER CLASSES INHERIT THAT PROTOTYPE CLASS.

SYSTEM DEFAULT CLASSES AND USER DEFINE CLASSES ALL ARE COME UNDER PROTOTYPE CLASS.

SYNTAX: 
OBJ_CONSTRUCTOR_NAME.PROTOTYPE.PROPERTY_NAME = "PROPERTY VALUE";

*/

function Student(Fname, Lname, age)
{
    this.firstName = Fname;
    this.lastName = Lname;
    this.stuAge = age;
}


let stu1 = new Student("Nehal", "Panchal", 25);

console.log(stu1); // PROTOTYPE WILL ALSO APPLY IN THIS OBJECT.

/* 
    WE CAN ASSIGN THE PROPERTY TO AN OBJECT EXTERNALLY BUT WE CANNOT SET THE PROPERTY OF THE CONSTRCTOR EXTERNALLY.

EX: 
    // ADD PROPERTY TO STUDENT1 OBJECT EXTERNALLY.
    stu1.school = "LMP"; // THIS IS VALUD // 'STU1' IS OBJECT
    console.log(stu1);

    // YOU CANNOT SET PROPERTY INTO CONSTRUCTOR EXTERNALLY.
    // 'Student' IS CONSTRUCTOR
    Student.school = "AB"; // THIS IS INVALID 

*/

// SOLUTION USING PROTOTYPE
// THIS WILL BECOME THE PROPERTY OF STUDENT CONSTRCTOR AND IT WILL ADD INTO ALL THE OBJECT WHICH IS CREATED USING THAT CONSTRUCTOR. 
// THIS PROPETY WILL NOT APPLY ALONG WITH THE OTHER PROPERTIES, IT WILL APPLY AND DISPLAY SAPERATELY INTO '__PROTO__: OBJECT' OPTION BELOW.

Student.prototype.school = "AB";

let stu2 = new Student("Hardik", "Lodhari", 26);
let stu3 = new Student("Karan", "Thakkar", 27);

console.log(stu1);
console.log(stu2);
console.log(stu3);

// WE CAN TREAT THIS PROPERTY LIKE OTHER PROPERTY, ALTHOUGH IT WILL NOT DISPLAY ALONG WITH OTHER PROPERTY BECAUSE IT WILL INSIDE '__PROTO__: OBJECT' OPTION.
// PROPERTY: SCHOOL = 'AB' WILL ADD AUTOMATICALLY INTO ALL OBJECTS CREATED USING 'Student' CONSTRUCTOR.
console.log(stu1.school);


// PRINT ALL PROPERTIES WHICH IS DECLARED WHILE CREATING THE CONSTRUCTOR. (BUT NOT THOSE WHICH ARE IN PROTOTYPE!!)
console.log(Student); 


// ADD METHOD TO CONSTRUCTOR USING PROTOTYPE:
// THIS METHOD WILL ADD INTO ALL OBJECT AND ANY STUDENT OBJECT CAN GET THEIR NAME USING THIS METHOD.
Student.prototype.getName = function (){
    return this.firstName + " " + this.lastName;   
}

console.log(stu3.getName());