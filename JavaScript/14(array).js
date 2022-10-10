/*  
    ==> (TYPEOF ARRAY) = OBJECT
    ==> 'LENGTH' OF AN ARRAY STARTS FROM 1
    ==> 'INDEX' OF AN ARRAY STARTS FROM 0
    ==> LAST ELEMENT OF AN ARRAY IS 'UNDEFINED' (NULL)

    NOTE: MEMORY WASTAGE: DIFFERENT VARIABLES & DIFFERENT STATEMENTS

    //ONE VARIABLE CAN STORE SINGLE VALUE AT A TIME WHILE IN ARRAY YOU CAN STORE MULTIPLE VALUES IN A SINGLE VARIABLE, WHICH IS AN ARRAY.

    let book1 = "Math";
    let book2 = "Science";
    let book3 = "Physics";
    let book4 = "English";

    document.write(book1);
    document.write(book2);
    document.write(book3);
    document.write(book4);
    

    -----------------------------------------------------------------
    SOLUTION => ARRAY: COLLECTION OF VARIABLES OF DIFFERENT DATA TYPES:

    // ARRAY LENGTH = 4
    // INDEX STARTS WITH 0
    let books = ['Math','Science','Physics','English'];
    console.log(books); // PRINT WHOLE ARRAY
    console.log(books[0]); // Math

    NOTE: THERE IS NO ANY RESTRICTION IN ARRAY TO STORE MULTIPLE VALUES OF SAME DATA TYPES AS WE CAN STORE VALUES OF DIFFERENT DATA TYPE IN A SAME ARRAY;

    EX: let person = ["nehal", 25, "single", true]; // DIFFERENT DATATPES

    -------------------------------------------------------------------
    ==> THERE ARE TWO WAYS TO REPRESENT THE ARRAY:

    //1ST WAY : [..] BRACKET
    let books = ['math','science','physics','english'];

    //2ND WAY : (..) BRACKET
    let books1 = new Array('math','science','physics','english');

    --------------------------------------------------------------------

    ==> UPDATE ARRAY ELEMENT:

    let books = ['Math','Science','Physics','English'];
    books[1] = "Bio";
    alert(books); // MATH, BIO, PHYSICS, ENGLISH

*/

/* ------------------------------------------------------------------
=====================OPERATIONS ON ARRAY=============================
------------------------------------------------------------------- */

/* 
    1) array.length : (START FROM 1)
    2) array1.concat(array2) : MERGE ARRAY2 AT THE END OF ARRAY1
    3) array.splice(index of an element, how many elements)
*/

let books = ['Math','Science','English','Bio'];
let books2 = ['Physics', 'Chemistry'];
let myVar = "nehal";

console.log(books.length); // 4
console.log(books.concat(books2)); // BOOKS ARRAY + BOOKS2 ARRAY
console.log(books.includes("Math")); // TRUE OR FALSE

console.log(books.push("Phycology")); // ADD IT AT THE END OF ARRAY
console.log(books.unshift("Nehal")); // ADD IT IN BEGINNING OF ARRAY
console.log(books.pop()); // DELETE ELEMENT AT THE END OF ARRAY
console.log(books.shift()); // DELETE AN ELEMENT FROM BEGINNING OF ARRAY
console.log(books.splice(1, 1));// DELETE ONE ELEMENT IN BETWEEN OF AN ARRAY

console.log(books.indexOf('English')); // 1: RETURN THE INDEX OF ENGLISH

console.log(Array.isArray(myVar)); // RETURN TRUE OR FALSE; TRUE IF IT IS ARRAY OTHERWISE FALSE ==> FALSE BECAUSE IT IS NOT AN ARRAY
console.log(Array.isArray(books));// TRUE BECAUSE IT IS ARRAY

books = []; // 1st WAY TO MAKE AN ARRAY EMPTY
books.length = 0; // 2nd WAY TO MAKE AN ARRAY EMPTY

console.log(books);

// CONVERT WHOLE STRING INTO AN ARRAY USING SLIPT IT:
let text = "This is a random text";
let temp = text.split(" "); // SPLIT THE STRING THROUGH SPACE
let temp1 = text.split("s"); // SPLIT THE STRING THROUGH 'S'
console.log(temp); // STORE INTO AN ARRAY USING SPLITTED TEXTS


// CONVERT WHOLE ARRAY INTO A STRING:
let myArray = ['This','is','a','random','text'];
let demo = myArray.join("-"); // JOIN THE ARRAY USING - IN BETWEEN
console.log(demo);


// MULTI DIMENTIONAL ARRAY: ARRAY INTO AN ARRAY
let ar1 = ['A',1,'B',2];
let ar2 = [ar1, 'C', 3]; // ARRAY INTO AN ARRAY

console.log(ar2); // 0:AR1, 1:C, 2:3
console.log(ar2[0]); // PRINT WHOLE AR1
console.log(ar2[0][1]); // PRINT 1


// MULTIPLE ARRAYS INTO AN ARRAY:
let arrs = [/* 0 */[1,"A"],
            /* 1 */[2,"B"],
            /* 2 */[3,"C", ["Good","Better","Best"]]
            ];

console.log(arrs); // PRINT WHOLE ARRAY:ARRS => 3 ELEMENTS
console.log(arrs[2]); // PRINT 3,'C'
console.log(arrs[2][1]); // PRINT C
console.log(arrs[2][2][1]); // PRINT BETTER

//---------------------------------------------------------------------

//LOOP FOR AN ARRAY AND ITS LENGTH: 
// ARRAY CONTAINS UNDEFINED (NULL) AT IT'S LAST INDEX:

let myArr = ["Nehal", "Kamlesh","Ila", "Hinal", "Ankit"];

for(let i = 0; i<= myArr.length ; i++){
    document.write(` ${myArr[i]} is at position <b>${i}</b> <br>`);
}
document.write(" <br> Length of an array is: "+ myArr.length); // 5