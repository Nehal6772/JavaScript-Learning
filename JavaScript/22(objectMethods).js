/* 
                FUNCTION + OBJECT = METHOD


    1) PROVIDE AN ACTION TO AN OBJECT: OBJECT WILL PERFORM AN ACTION.

    2) ASSIGN A FUNCTION TO AN OBJECT TO PERFORM SOME ACTIONS IS CALLED 'METHOD' IN JAVASCRIPT.

    3) METHOD: FUNCTION WHICH IS ASSOCIATED WITH AN OBJECT.
    (FUNCTION OF AN OBJECT IS METHOD)


*/


/* 
    WE CAN CREATE METHOD THROUGH 4 WAYS IN JAVASCRIPT.

    1) USING NORMAL FUNCTION. ASSIGN FUNCTION TO A METHOD
        EX: FUNCTION FUN_NAME()
        {
            FUNCTION BODY
        }
        
    
    TO CALL THIS: OBJ_NAME.METHOD_NAME = FUNCTION_NAME();
                        OR
                 OBJ_NAME.METHOD_NAME = FUNCTION_NAME;
                 OBJ_NAME.METHOD_NAME();
    
--------------------------------------------------------------

    2) USING ANONYMOUS FUNCTION.
        EX: OBJ_NAME.METHOD_NAME = FUNCTION ()
            {
                FUNCTION BODY
            }

    TO CALL THIS: OBJ_NAME.METHOD_NAME();

--------------------------------------------------------------

    3) INSIDE THE OBJECT: WITH OTHER PROPERTIES USING ANONYMOUS FUNCTION
        EX: 
        LET OBJECT_NAME = {
                            METHOD_NAME = FUNCTION ()
                            {
                                FUNCTION BODY
                            }
                        }

    TO CALL THIS: OBJECT_NAME.METHOD_NAME();


--------------------------------------------------------------
*/

let person = {
    firstName : "Nehal", // CAMEL CASE
    middle_name: "Kamleshkumar", // SNAKE CASE
    "last name": "Panchal", // ACCESS USING ARRAY NOTATION 

    // 3RD WAY TO CREATE MEDTHOD
    Third : function (){
        alert("Hello to Third way of creating a method of an object.!!");    
    },

    // 4TH WAY TO CREATE METHOD
    Forth (){
        alert("Hello to Forth way of creating a method of an object.!!")
    },
};






// ==================== 1ST WAY =====================================

// 1) USING NORMAL FUNCTION
// SAPERATE NORMAL FUNCTION AND SEPARATE METHOD
// ASSIGN THE NORMAL FUNCTION TO A METHOD

function firstWay(){
alert("Hello to First way of creating a method of an object.!!");
}

// DIRECT APPROCH
person.First = firstWay(); // VALID

// OR

// ALSO VALID APPROCH
person.First = firstWay;
person.First()


// ========================= 2ND WAY =============================== 

// 2) USING ANONYMOUS FUNCTION DIRECTLY ASSIGN TO METHOD OF AN OBJECT
person.Second = function (){
alert("Hello to Second way of creating a method of an object.!!");
}

// CALL THIS FUNCTION USING NAME OF A METHOD
person.Second(); // VALID
person.Second; // INVALID


// ========================= 3RD WAY =============================== 

/* 
1) THIS WAY IS INSIDE THE OBJECT ALONG WITH OTHER PROPERTIES.

2) METHOD IS CREATED IN THIS WAY USE ANONMOUS FUNCTION ISIDE THE OBJECT.

3) ASSIGN ANONMOUS FUNCTION TO A METHOD INSIDE THE OBJECT:

4) HERE METHOD NAME IS LIKE ONE PROPERTY OF AN OBJECT.

4) SYNTAXT: 
LET OBJECT_NAME = {
                    KEY 1: VALUE 1,
                    KEY 2: VALUE 2,

                    METHOD_NAME = FUNCTION (){
                        FUNCTION BODY
                    }
                }

TO CALL IT: OBJECT_NAME.METHOD_NAME()
*/
person.Third(); // CALL THE FUNCTION OF 3RD WAY

// ========================= 4TH WAY =============================== 

/* 
1) THIS IS PART OF ES6 - ECMAA SCRIPT 6

2) MODIFICATION IN 3RD WAY TO CREATE A METHOD.

3) WE DON'T NEED ANY FUNCTION FOR IT. BECAUSE WE DIRECTLY MAKE METHOD AS A FUNCTION ISNDIE THE OBJECT ALONG WITH OTHER PROPERTIES.

4) SYNTAXT: 
LET OBJECT_NAME = {
                    KEY 1: VALUE 1,
                    KEY 2: VALUE 2,

                    METHOD_NAME (){
                        FUNCTION BODY
                    }
                }

TO CALL IT: OBJECT_NAME.METHOD_NAME()
                

*/
person.Forth(); // CALL THE FUNCTION OF 4TH WAY