/* 
    OBJECT HAS TWO PROPERTIES:
        1) PROPERTIES
        2) ACTION / FUNCTION OR "METHOD"

     ==> WE CALLED ACTION IN JAVASCRIPT AS A 'METHOD'

    --------------------------------------------------------------
    
    1) 'in' OPERATOR IN OBJECT IS USED TO IDENTIFY THE PROPERTY EXIST IN THE OBJECT OR NOT

    2) WE DON'T KNOW HOW MANY PROPERTIES AN OBJECT CONTAINS, THEN IN ORDER TO ACCESS ALL THOSE PROPERTIES ONE BY ONE THEN WE USE IN OPERATOR INSIDE THE FOOR LOOP TO ITERATE.
        ==> FOR IN LOOP: IN OPERATOR INSIDE FOOR LOOP
        ==> TO ACCESS ALL PROPERTIES OF AN OBJECT ONE BY ONE
        
    SYNTAX: 
        for(let Variable_Name in Obj_Name)
        {
            console.log(Variable_Name); // ONLY PRINT NAME OF PROPERTIES

            console.log(Obj_Name[Variable_Name]); // PRINT VALUE OF PROPERTIES
        }

    --------------------------------------------------------------

     :: OBJECT WITH RESPECT TO HUMAN ::

    1) PROPERTIES (TO DEFINE UNIQUELY THE OBJECT)
        1. NAME
        2. ADDRESS
        3. HEIGHT
        4. SURNAME
        5. MOBILE NUMBER

    2) ACTION (ACTION PERFORMED ON HIM OR ACTION PERFORMED BY HIM)
        1. WALK           
        2. TALK 
        3. RUN
        4. STUDY
        5. EAT

    --------------------------------------------------------------

    OBJECT IN PROGRAMMING
    ---

    1) STUDENT, TEACHER, COURSE AS AN OBJECT IN SCHOOL MANAGEMENT SYSTEM.

    2) ACCOUNT, ACCOUNT HOLDER, BANK MANAGER, CASHIER AS AN OBJECT IN BANK MANAGEMENT SYSTEM.

    3) BOOK, DEPARTMENT, STUDENT AS AN OBJECT IN BIBRARY MANAGEMENT SYSTEM.

     --------------------------------------------------------------
     --------------------------------------------------------------

     OBJECT = KEY : VALUE PAIR

     SYNTAX:        
            LET OBJ_NAME = 
            {
                KEY 1 : VALUE 1,
                KEY 2 : VALUE 2,
                ---
                KEY n : VALUE n; 
            };

    ACCESS: 
            CONSOLE.LOG(OBJ_NAME.KEY_NAME); 

    RESULT (OUTPUT): 'VALUE' RELATED TO KEY

    NOTE: 
         IF THE NAME OF THE KEY IS NOT MATCHED WITH OBJECT PROPERTY OR NOT AVAILABLE IN THE OBJECT PROPERTY THEN IT WILL GIVE OUTPUT AS 'UNDEFINED'.
*/

let person = 
    {
        // PROPERTIES
        Fname: "Nehal",
        Lname: "Panchal",

        // SPACE BETWEEN THE WORDS IN KEY => NOT RECOMMANDED 
        'Middle name': "Kamleshkumar", // ONLY ACCESS USING ARRAY NOTATION

        // UNDERSCORE BETWEEN THE WORDS IN KEY
        mother_name: "Ilaben", // SNAKE CASE 

        RollNo: "16bce166", // CAMEL CASE
        City: "Chikhli",
        MobNo: 123,
        Male: true,
        Female: false,
        Height: 5.6
    };

// ------> MODIFICATION OF OBJECT'S PROPERTIES <------

// VIEW : ACCESS    
console.log(person); // ALL OBJECT'S PROPERTIES
console.log(person.Fname); // Nehal : DOT NOTATION
console.log(person['Lname']); // Panchal : ARRAY NOTATION
console.log( "Type of an Object: " + typeof person); // Object
console.log(person["Middle name"]); // Kamleshkumar
console.log(person.mother_name); // Ilaben
console.log(person['mother_name']); // Ilaben

// UPDATE
// CHANGE THE VALUE OF PROPERTY AFTER DECLARATION
person.MobNo = 234;
console.log("Updated Mobile Number is: " + person.MobNo); // Ilaben

// DELETE
// REMOVE PROPERTY FROM AN OBJECT

delete person.RollNo;

// ADD
// ADD NEW PROPERTY TO EXISITNG OBJECT
person.age = 25;
console.log("Newly added age is: " + person.age);


// IDENTIFY WHETHER THE PROPERTY IN THE OBJECT EXIST OR NOT?
// USING 'IN' OPERATOR
// CASE SENSITIVE
// RETURN BOOLEAN VALUE
console.log("City" in person); // TRUE
console.log("city" in person); // FALSE


// FOR IN LOOP TO ACCESS ALL THE PROPERTIES OF AN OBJECT:
// TO ACCESS THE VALUE OF PROPERTY, WE MUST USE ARRAY NOTATION INSTEAD OF DOT NOTATION. (DOT NOTATION WILL NOT WORK)
// person[temp]: I DID NOT DEFINE TEMP AS A STRING  INSIDE THE ARRAY NOTATION BECUSE TEMP IS A VARIABLE, NOT A PROPERTY.

for(let temp in person){
    console.log(temp + " : " + person[temp]); 
}

/* 
AFTER MAKING ALL MODIFICATIONS, ALL PROPERTIES OF AN OBJECT HAS BEEN MODIFIED IN A SINGLE OBJECT AND WE CAN ACCESS ALL THESE PROPERTIES USING THE NAME OF AN OBJECT

    EX: console.log(person);
 */



/* 
WE CAN ACCESS PROPERTIES OF AN OBJECT USING TWO WAYS:

1) DOT NOTATION:
console.log(person.Fname); // Nehal : DOT NOTATION

2) ARRAY NOTATION: ['STRING']
console.log(person['Lname']); // Panchal 
console.log(person['Middle name']); // Kamleshkumar
*/



// ARRAY 
let color = ["red", "green"]; // ARRAY

document.write("Type of an Array : " +typeof color); // Object
document.write("<br>" + color[1]); // Green
