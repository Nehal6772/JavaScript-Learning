/* 
    USAGE: SAME BLOCK OF CODE REPEATIDELY PERFORM IN A SAME PROGRAM SO WE WILL MAKE THE FUNCTION OF THAT CODE AND WHENEVER WE WANT TO PERFORM IT, WE JUST CALL THE FUNCTION INSTEAD OF WHOLE BLOCK OF CODE.

    ADVANTAGES: LESS CODE, PERFORM MORE
                MEMORY SAVING
                EXECUTION FAST
                COMPILER FRIENDLY CODE

     FIRST, WE NEED TO 'DECLARE' THE FUNCTION AND THEN WE HAVE TO 'CALL' IT TO EXECUTE.
     1) DECLARATION OF A FUNCTION
     2) FUNCTION CALLING

    THERE ARE TWO TYPES OF FUNCTIONS:
    1) PRE DEFINED FUNCTION (IN BUILT)
    2) USER DEFINED FUNCTION (USER MAKE IT MANUAALY)

*/


// MULTIPLICATION TABLE:
function mulTable(f,s){ // PARAMETERS
    for(let i = 1; i<=s; i++){
        document.write(`${f} * ${i} = ` + f * i + "<br>");
    }
}
let first = prompt("Enter the digit of table you want");
let second = prompt("Enter the digit till you want");

mulTable(first, second); // ARGUMRNTS 



/* THIS IS LOGIC FOR MULTIPLICATION TABLE 

for(let i = 1; i<=second; i++){
    document.write(`${first} * ${i} = ` + first * i + "<br>");
} 

 WE WILL CODE IT INSIDE THE FUNCTION TO REDUCE THE LINE OF CODE AND WHEN WE WANT THIS TABLE THEN WE WILL SIMPLE CALL THE FUNCTION, NOT THIS CODE:
*/


// ================== ARGUMENTS & PARAMETER =======================

/* 
    ARGUMENTS : YOU CAN 'PASS' THE VALUE WHILE 'CALLING' THE FUNCTION:
    PARAMETER : YOU CAN 'GET' THE VALUE IN VARIABLE WHILE 'DEFINING' THE FUNCTION:
*/



// ============== ARGUMENTS PASSED & PARAMETER RETURNS =========

function add(n1,n2){
    return n1 + n2; // RETURN PARAMETER VALUE
}

let temp = add(5,5) // PASSED AS A ARGUMENT AND GET RETURNED VALUE
console.log(temp);

// NUMBER OF ARGUMENTS AND NUMBER OF PARAMETERS BOTH SHOULD BE MATCHED OTHERWISE IT WILL GIVE 'NaN'.

// IF YOU WANT TO PASS 'N' NUMBER AS AN ARGUMENTS THEN USE ARGUMENT OBJECT.