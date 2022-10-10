/* 

THE SCOPE OF 'GLOBAL VARIABLE' IS FOR WHOLE THE PROGRAM. 
&
THE SCOPE OF 'LOCAL VARIABLE' IS FOR THE BLOCK OF A FUNCTION INSIDE IT IS WRITTERN.

IF WE TRY TO ACCESS LOCAL VARIBALE OUT SIDE ITS BLOCK THEN IT WILL GIVE THE ERROR THAT THE 'VARIABLE IS NOT DEFINED'.

GLOBAL VARIABLE OCCUPIES MORE MEMORY WHILE LOCAL VARIABLE OCCUPIES LESS MEMORY AND EFFICIENT EXECUTION.
*/

let fname = "Nehal"; // GLOBAL VARIABLE
// WE CAN ACCESS THE GLOBAL VARIABLE 'FNAME' INSIDE AS WELL AS OUTSIDE THE FUNCTION. (INSIDE THE WHOLE PROGRAM)

function demo()
{ // VARIABLE 'AGE' WILL CREATE IN THE STORAGE CLASS AT START OF BLOCK

    let age = 25; // LOCAL VARIABLE OF FUNCTION DEMO()

    // WE CAN ACCESS VARIABLE AGE ISNIDE THE FUNCTION ONLY
    // WE CANNOT ACCESS THE VARIABLE AGE OUT SIDE THE FUNCTION OTHERWISE IT WILL GIVE AN ERROR: AGE IS NOT DEFINED

    console.log(age);
    alert(fname); // VALID: GLOBAL VARIABLE INSIDE THE LOCAL BLOCK

} // VARIABLE 'AGE' WILL DELETE AUTOMATICALLY FROM STORAGE CLASS AT THE END OF THE BLOCK
// THIS LOCAL VARIABLE CAN BE REUSABLE AFTER DELETEING FROM THE STORAGE CLASS: IT CAN BE USE ISNIDE THE ANOTHER FUNCTION.
// WHILE GLOCAL VARIABLE CANNOT DECLARE AGAIN THROUGHT THE WHOLE PROGRAM; AS IT CAN ONLY BE ACCESSED/USE THROUGHT THE WHOLE PROGRAM.

function temp()
{ // LOCAL VARIABLE 'AGE' WILL CREATE
    let age = 25 // LOCAL VARIABLE
    // IT CAN BE RE-USE INSIDE THE ANOTHER FUNCTION (TEMP())
    alert(fname); // VALID: GLOBAL VARIABLE ACCESS INSIDE THE LOCAL SCOPE
    
} // LOCAL VARIABLE 'AGE' WILL DELETE

demo(); // FUNCTION CALL: ONLY THEN VARIABLES 'AGE' AND 'FNAME' WILL PRINT
temp(); //  // FUNCTION CALL: ONLY THEN VARIABLES 'AGE' AND 'FNAME' WILL PRINT

console.log(age); // INVALID: LOCAL VARIABLE INSIDE THE GLOBAL SCOPE

/* 
SCOPE OF GLOBAL VARIABLE: FROM LINE NO 15 TO 40
SCOPE OF LOCAL VARIABLE: FROM LINE NO 15 TO 25
*/