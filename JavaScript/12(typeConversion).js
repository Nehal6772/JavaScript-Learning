/* 
PLUS(+) OPERATOR DOES TWO THINGS:
1) ARITHMETIC ADDITION
2) CONCATENATION

-----------------------------------------------------------------
1) AUTOMATIC CONVERSION BY JAVASCRIPT:

=> FOR NUMBER, IT CONSIDERS NULL AS A ZERO
EX: let type = 5 + null; // AUTOMATIC NULL=0
    alert(type); // RETURN 5 + 0 = 5 => ADD 5 WITH 0
    alert(typeof type) // NUMBER

=> FOR STRING, IT CONSIDERS NULL AS A STRING
EX: let type = '5' + null; // AUTOMATIC NULL = 'NULL' (STRING)
    alert(type); // RETURN '5' + 'NULL' = 5null; => CONCATE '5' WITH 'NULL'
    alert(typeof type) // STRING

EX: let type = '5' + 2; // AUTOMATIC 2 = '2' (STRING)
    alert(type); // RETURN '5' + '2' = 52; => CONCATE '5' WITH '2'
    alert(typeof type) // STRING
--------------------------------------------------------------------

EX: let type = '5'-2; // NOW IT WILL CONSIDER '5' AS A NUMBER BECAUSE OF    MINUS SIGN IN BETWEEN => MINUS SIGN DOES ONLY ONE THING: SUBTRACT

    alert(type); // 3
    alert(typeof type); // NUMBER

    NOTE:  SAME WITH MULTIPLICATION, DIVISION, AND OTHER OPERATION OF MATHS

EX: let type = '5' * '2'; // CONSIDER BOTH AS A NUMBER BECAUSE OF (*)
    alert(type); // 10
    alert(typeof type); // NUMBER
 ---------------------------------------------------------------------

EX: let type = '5' * 'yes'; // CONFUSED BECAUSE OF (*) BETWEEN BOTH STRINGS 
    alert(type); // NaN (Not a Number)
    alert(typeof type); // NUMBER

NOTE: MULTIPLICATION SIGN (*) ONLY USE WITH NUMBER, NOT WITH STRING.
    NaN * WITH ANYTHING = NaN;

*/


// ==============================================================

/* 
    2) TYPE CONVERSION WITH THE HELP OF 3 FUNCTIONS:
        1) String(): input will convert into a string.
        2) Number(): input will convert into a number.
        3) Boolean(): input will convert into a boolean.
*/

//---------------------------------------------------
// 1) FROM STRING TO NUMBER

/* let str = "5";
let temp = Number(str);
alert(temp); // 5
alert(typeof str); // String
alert(typeof temp); //Number

let str1 = "nehal";
let temp1 = Number(str1);
alert(temp1); // NaN
alert(typeof str1); // String
alert(typeof temp1); //Number
 */
//--------------------------------------------------

// 2) FROM STRING TO BOOLEAN
 
/*
let str = "";
let temp = Boolean(str);

document.write(temp + "<br>"); // 'FALSE' BECAUSE THERE IS EMPTY STRING
document.write(typeof str + "<br>"); //string 
document.write(typeof temp + "<br>"); //boolean 
---
let str = "gghh";
let temp = Boolean(str);

document.write(temp + "<br>"); // 'TRUE' BECAUSE THERE IS A STRING
document.write(typeof str + "<br>"); //string 
document.write(typeof temp + "<br>"); //boolean */

// --------------------------------------------------------
// 3) FROM NUMBER TO STRING

/* let num = 5;
let temp = String(num);

document.write(temp + "<br>"); // 5
document.write(typeof num + "<br>"); // Number
document.write(typeof temp + "<br>"); // String 
 */

//-----------------------------------------------------------
// 4) FROM NUMBER TO BOOLEAN
// 1=TRUE AND 0=FALSE

/* let num = 0;
let temp = Boolean(num);

document.write(temp + "<br>"); // false
document.write(typeof num + "<br>"); // Number
document.write(typeof temp + "<br>"); // Boolean

let num = 1;
let temp = Boolean(num);

document.write(temp + "<br>"); // True
document.write(typeof num + "<br>"); // Number
document.write(typeof temp + "<br>"); // Boolean
 */

//-------------------------------------------------------------
// 5) FROM BOOLEAN TO STRING
/* 
let boo = true;
let temp = String(boo);

document.write(temp + "<br>"); // true
document.write(typeof boo + "<br>") // boolean
document.write(typeof temp + "<br>") // string

let boo = false;
let temp = String(boo);

document.write(temp + "<br>"); // false
document.write(typeof boo + "<br>") // boolean
document.write(typeof temp + "<br>") // string
 */ 

//-----------------------------------------------------------------
// 6) FROM BOOLEAN TO NUMBER
//1=TRUE & 0=FALSE

/* 
let boo = true;
let temp = Number(boo);

document.write(temp + "<br>"); // 1 = TRUE
document.write(typeof boo + "<br>"); //boolean
document.write(typeof temp + "<br>"); // number

let boo = false;
let temp = Number(boo);

document.write(temp + "<br>"); // 0 = FALSE
document.write(typeof boo + "<br>"); //boolean
document.write(typeof temp + "<br>"); // number */


// -----------------------------------------------------------------

let age = Number(prompt("Enter your age")); // BY DEFAULT IT WILL TAKE STRING FROM PROMPT BOX AND THEN TYPE CONVERSION INTO NUMBER.
alert(typeof age); // NUMBER