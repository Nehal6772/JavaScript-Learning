/* 
    ====> STRING IS AN ARRAY OF CHARACTER::

    \n: NEW LINE 
    \t: SPACES EQUIVALENT TO TAB
    \: (BACK SLASH): ESCAPING SPECIAL CHARACTER
*/

/* 
    1) string.length : LENGTH OF THE STRING IN DIGIT
    2) string[index]: AT INDEX POSITION CHARACTER (FROM 0)
    3) string.concat(STRING2): MERGE STRINGS
    4) string.substring(FROM, TO): GIVEN POSITION CONTAIN IN A STRING
    5) string.indexOf(): POSITION OF A WORD IN A MAIN STRING
    6) string.lastIndexOf(): POSITION OF A WORD FROM LAST IN MAIN STRING
    7) string.trim(): REMOVE WHITE SPACE FROM START AND END OF THE MAIN STRING
    8) string.trimStart(): REMOVE WHITE SPACE FROM THE START
    9) string.trimEnd(): REMOVE WHITE SPACE FROM THE END
    10) string.toUpperCase(): CONVERT STRING TO UPPERCASE
    11) string.toLowerCase(): CONVERT STRING TO LOWERCASE
    12) string.replace(): REPLACE WORD FROM ANOTHER WORD IN STRING
    13) string.includes(): WEATHER STRING CONTAIN THE GIVEN WORD OR NOT
*/


/* 
    1) variable.length: IT WILL COUNT THE LENGTH OF A STRING.
    => IT WILL COUNT THE WHITE SPACE ALSO
    
    EX: let myName = "Nehal Panchal";
        alert(myName.length); // 13

    2) POSITION OF CHARACTER IN A STRING.
    => IT WILL START FROM 0 LIKE AN ARRAY

    EX: let myName = "Nehal Panchal";
        alert(myName[6]) // P

    3) CONCATENATE OF TWO STRING: 
    => THERE ARE TWO WAYS THROUGH WHICH YOU CAN MERGE TWO STRINGS
    
     ~~~ 1st WAY (USING PLUS OPERATOR)
    EX: let fName = "Nehal";
        let lName = "Panchal";
        alert(fName + " " +lName);

     ~~~ 2nd  WAY (USING PRE DEFINED FUNCTION concat()):
    EX:  let fName = "Nehal";
        let mName = "K.";
        let lName = "Panchal";

        let mergeStr = fName.concat(" "+mName+" "+lName);
        alert(mergeStr);

    4) COMPARE THE STRINGS: 
    => JAVASCRIPT IS CASE SENSITIVE
    => NEHAL, Nehal, nehal, neHAL; all are totally different.
    
    EX: let myName = "Nehal";
        if("Nehal" == myName){
            alert("Equals..") // THIS WILL PRINT IN THIS CASE
        }else{
            alert("Not Equals..")
        }

    5) SUBSTRING: GET THE PART OF A STRING:
    => SYNTAX: string.substring(from: position, to: position);
    EX: let myString = "Hi this is Nehal Panchal";
        let subString = myString.substring(11, 24); 
        alert(subString); // Nehal Panchal

    6) IDENTIFY STARTING POSITION OF A STRING:
    => MANUAL COUNT IS VERY DIFFICULT IN A LONG STRING:
    => TWO SAME WORDS IN THE STRING WILL GIVE POSITION OF FIRST  WORD

    EX: // KNOW THE POSITION OF NEHAL: FROM WHERE NEHAL STARTED.
        let myString = "Hi. This is Nehal Panchal's laptop";
        let position = myString.indexOf("Nehal");
        alert(position); // 12. FROM 13, NEHAL STARTED
    
    => IF WE WANT THE POSITION OF WORD WHICH COMES SECOND TIME IN A STRING THEN APPLY THE SECOND PARAMETER FROM WHERE IT WILL START SEARCHING.

    7) IDENTIFY THE POSITION OF A WORD FROM LAST:
    EX: let myString = "This is Nehal Panchal";
        let position = myString.lastIndexOf("Nehal");
        alert(position); // 8: search from last character

NOTE: IN INDEXOF() AND LASTINDEXOF() FUNCTIONS, IF WORD IS NOT PRESENT IN WHOLE STRING THEN IT WILL RETURN AND DISPLAY (-1). 

    8) REMOVING WHITE SPACE:

     EX: string.trim(); // REMOVE WHITE SPACE FROM START AND END OF THE STRING

     string.trimStart(); // REMOVE WHITE SPACE FROM START ONLY

     string.trimeEnd(); // REMOVE WHITE SPACE FROM END ONLY   

    9) UPPAR CASE AND LOWER CASE CONVERSION:
     EX: let myString = "nehal";
        alert(myString.toUpperCase()); // NEHAL

     EX: let myString = "NEHAL";
        alert(myString.toLowerCase());

    10) REPLACE THE WORD IN A STRING:
     EX: let myString  = "Nehal Kumar";
        let replaced = myString.replace('Kumar', 'Panchal');
        alert(replaced);

    11) IF THE WORD IS PRESENT IN THE MAIN STRING OR NOT:
     => IT WILL RETURN TRUE IF THE SUBSTRING IS PRESENT OTHERWISE NO 
     => THIS IS CASE SENSITIVE

     EX: let myString = "This is JavaScript Practice";
         let temp = myString.includes("JavaScript");
         alert(temp); // TRUE
    
*/

// USING TEMPLET LITERAL

let str = "Nehal Panchal";
let greet = `Hi ${str}`;

document.write(greet);