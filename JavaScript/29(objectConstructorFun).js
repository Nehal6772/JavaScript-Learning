/* 
    SAME PROPERTIES BUT DIFFERENT OBJECT AND DIFFERENT VALUES:
    => TEDIOUS TASK (BORING)

    => FIRST LATER OF OBJECT CONSTRUCTOR FUNCTION SHOULD BE CAPITAL TO DIFFERENCIATE THE CONSTRUCTOR AND NORMAL FUNCTION AT THE SAME TIME.
        (THIS IS NOT MANDATORY BUT THIS IS PROFESSIONAL WAY)
        EX: function Student(firstname){
                this.Fname = firstname;
            }

    ==> OBJECT CONSTRACTOR IS LIKE CLASS IN JAVASCRIPT, BUT THIS IS THE FEATURE OF 'ES5' AND 'CLASS IN JAVASCRIPT' WILL PERFORM THE SAME TASK BUT IT IS THE FEATURE OF ES6.

    ==> WE CAN PEROFRM THE TASK OF 'OBJECT CONSTRUCTOR' USING 'CLASS' IN OTHER PROGRAMMING LANGUAGE.

    ==> WHEN 'CLASS' IN NOT THERE IN JAVASCRIPT BEFORE ECMA SCRIPT 6, WE USED 'OBJECT CONSTRUCTOR FUNCTION.

    ==> 'OBJECT CONSTRUCTOR FUNCTION' IS USED TO CREATE THE 'BLUE PRINT' OF AN OBJECT. (SAME PROPERTIES OF MULTIPLE OBJECTS)

    ==> CREATE CONSTRUCTOR USING THIS KEYWORD. (CONSTRUCTOR CAN CREATE USING FUNCTION LIKE WE CREATE A METHOD)

    ==> CREATE AN OBJECT USING ITS CONSTRUCTOR: OBJECT CONSTRUCTOR CALLING
            EX: let obj_name = new Constructor_name("value1", "value2", .. );
            // CREATE AN OBJECT AND PASS ITS VALUE BY CALLING ITS CONSTRUCTOR.

    ==> OBJECT CONSTRUCTOR IS FULLY ASSOCIATED WITH THIS KEYWORD. 
            EX: this.property_name = parameter_name; // IN OBJ CONSTRUCTOR
*/

/*  DIFFERENT OBJECTS WITH SAME PROPERTIES

    let stu1 = 
    {
        Fname: "Nehal",
        Lname: "Panchal",
        rollNo: 101,
    }

    let stu2 = 
    {
        Fname: "Hardik",
        Lname: "Lodhari",
        rollNo: 102,
    } 

     let stu3 = 
    {
        Fname: "Karan",
        Lname: "Thakkar",
        rollNo: 103,
    } 
*/

// ------------- SOLUTION -------------

// THIS IS CONSTRUCTOR NOT A FUNCTION
// WE CANNOT ADD PROPERTY EXTERNALLY INTO THIS CONSTRUCTOR!
function Student(Fname, Lname, rollNo, age) 
{
    //this.property_name = parameter_name
    this.firstName = Fname;
    this.lastName = Lname;
    this.rollNum = rollNo;
    this.stuAge = age;

    // ------ ADD DEFAULT VALUE AND METHOD TO CONSTRUCTOR FUNCTION -------


    // BY DEFAULT VALUE ADD IN EVERY OBJECTS
    // ANY OBJECT CREATED USING THIS CONSTRUCTOR WILL ADD THIS BY DEFAULT
    this.country = "India";

    // BY DEFAULT ADD METHOD TO EVERY OBJECT CREATED USING THIS CONSTRUCTOR AND DISPLAY WHOEVER WILL USE IT USING IT'S METHOD NAME
    this.sayHello = function () // USING ANONYMOUS FUNCTION
    {
        document.write("This Method is call by " + this.firstName + " " + this.lastName);
    };

}

// let obj_name = new Constructor_name(val1, val2, .. , valn);
let stu1 = new Student("Nehal", "Panchal", 101);

console.log(stu1); // WHOLE OBJECT 'STU1'
console.log(stu1.firstName); // Nehal
 
// IF YOU DON'T GIVE ALL ARGUMENTS THEN IT WILL GIVE UNDEFINED
let stu2 = new Student("Hardik", "Lodhari",102);
let stu3 = new Student("Karan", "Thakkar", 103);

console.log(stu2); // WHOLE OBJECT 'STU2'
console.log(stu2.firstName); // Hardik



// ADD PROPERTY INTO SPECIFIC OBJECT:
stu1.nationality = "Indian";
console.log(stu1); // ADD

// MODIFY PROPERTY OF SPECIFIC OBJECT:
stu2.rollNum = 200;
console.log(stu2); // UPDATE

// DELETE PROPERTY FROM SPECIFIC OBJECT:
delete stu3.lastName;
console.log(stu3); // DELETE PROPERTY

// DELETE METHOD FROM SPECIFIC OBJECT:
delete stu3.sayHello;
console.log(stu3); // DELETE METHOD



// ADD METHOD TO STU1 OBJECT EXTERNALLY. (USING ANONYMOUS FUNCTION)
stu1.sendName = function (){
    return this.firstName + " " +this.lastName;
}
let recName = stu1.sendName();
alert("Name of student1 is: " + recName);




// ADD METHOD TO STU2 OBJECT EXTERNALLY. (USING NORMAL FUNCTION)
function temp(){
    alert("Hello this is Student 2");
}
stu2.useIt = temp;
stu2.useIt();

// STUDENT 3 USE METHOD WHICH IS CREATED IN CONSTRUCTOR 
stu3.sayHello();




// 4TH WAY TO CREATE A METHOD IN OBJECT CONSTRUCTOR IS NOT POSSIBLE