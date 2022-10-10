
// 1) IF YOU WANT TO PASS 'N' NUMBER AS AN ARGUMENTS THEN USE ARGUMENT OBJECT.

// 2) THERE IS NO ANY PARAMETER IN FUNCTION DEFINE.

// 3) THERE IS AN OBJECT LIKE AN ARRAY AND IT WILL BE GENERATED AUTOMATICALLY INSIDE THE FUNCTION.

// 4) WHEN WE DEFINE THE FUNCTION, WE GET AN ARRAY WITH THE NAME OF AN ARGUMENT. IN THAT ARGUMENT ARRAY, WE CAN GET ALL THE ARGUMENTS THAT WE PASSED DURING FUNCTION CALLING.

/*  5) ARRAY TYPE: OBJECT, 
       ARRAY NAME: ARGUMENTS
//  */

// 6) WHEN EXECUTION REACHES THE RETURN STATEMENT INSIDE THE FUNCTION DEFINE BLOCK, IT WILL IMMEDIATELY RETURN WITHOUT EXECUTING THE CODE AFTER RETURN IN THE SAME BLOCK.
/* // EX: function myFun(){
        retuern 200; // IT WILL RETURN 200 WITHOUT EXECUTING OTHER TWO LINES
        console.log(arguments);
        return arguments[1];
}
    let a = myFun(1,2,3,4,5); // a = 200;
 */

// function add(){ // NO PARAMETERS
//     console.log(arguments); // NAME OF AN ARRAY IS: 'ARGUMENT'
//     console.log(arguments.length); // 6
//     console.log(typeof arguments); // Object
//     console.log(arguments[1]); // 2 : ACCESS LIKE AN ARRAY
//     console.log(arguments[10]); // UNDEFINED : OUT OF INDEX

//     for(let i = 0; i <= arguments.length ; i++){
//         document.write(`at <B> Index ${i} </B> is ${arguments[i]} <br>`);
//     }
// }

// add(1,2,3,4,5,6); // PASS ANY NUMBER OF ARGUMENTS // IT WILL TREAT LIKE AN ARRAY


// // ===== FUNCTION FOR ADDITION OF NUMBERS USING ARGUMENT OBJECT =====


function myFun(){

    if (arguments.length == 0){
        console.log(arguments); // ARRAY WITHOUT AN ELEMENT
        console.log(arguments[0]); // UNDEFINED
        console.log(arguments.length); // 0 : BECAUSE OF LAST ELEMENT : UNDEFINED (NULL)
        console.log("There is no argument passed in a function call!");

    }else{
        let temp = 0;
        for(let i = 0; i < arguments.length ; i++){
            temp += arguments[i];
        }
        return temp; // RETURN BACK TO FUNCTION CALL
    }
}

// myFun(); // NO ARGUMENTS PASSED (IF CASE)
let getValue = myFun(100,10,90); // ADD THESE NUMBERS WITH ARGUMENTS OBJECT (ELSE CASE)  || STORE THE FUNCTION INTO A VARIABLE (GetValue)
alert(getValue);


// ========= STORING FUNCTION INTO A VARIABLE ==========

let addition = myFun; // 'myFun()' IS ADDED INTO A VARIABLE 'addition':
// let addition = myFun(); // VALID SYNTAX
// let addition = myFun(1); // VALID SYNTAX

// NOW WE CAN CALL THE FUNCTION USING THE NAME OF A VARIABLE:

let myVar = addition(20,20); // CALL FUNCTION USING ITS VARIABLE NAME
alert(myVar);