/* 
    DATE() OBJECT HAS TOTAL 7 PARAMETERS.

        1. YEAR (IF NOT GIVEN THEN 1906 BYDEFAULT)
        => IT WON'T WORL ALONE IF THERE IS NOT OTHER VALUE IN PARAMETER. (BY DEFAULT 1970: DATE OF COMPUTER WAS STARTED)

        2. MONTH (STARTS FROM 0: JANUARY)
            => MONTHS ARE LIKE CIRCULAR FASHION 
                12 = JANUARY
                -1 = DECEMBER
            => IF NOT GIVEN THEN IT WILL GENERATE 'JANUARY - 01' BY DEFAULT.

        3. DAY (IT WILL GENERATE CORRECT DAY ACCORDING TO GIVEN DATE BY DEFAULT WITHOUT GIVING)
              0: SUNDAY
              6: SATURDAY

            => DATE: IF NOT GIVE THEN IT WILL GENERATE 01 BY DEFAULT.
                

        4. HOUR (IF NOT GIVEN THEN 00)
        5. MINUTE (IF NOT GIVEN THEN 00)
        6. SECOND (IF NOT GIVEN THEN 00)
        7. MILI SECOND (WILL NOT SHOW IN OUTPUT)

    -------

    1) MINIMUM 2 PARAMETERS WILL BE NEEDED INITIALLY YEAR AND MONTH.
        EX: let x = new Date(1997, 18); // WILL WORK PROPERLY

    2) let x = new Date(); // EMPTY METHOD
        => THIS METHOD WITHOUT ANY PARAMETERS WILL GENERATE SYSTEM DATE. (CURRENT ONE)

    -------
    => TO PASS 'USER DEFINE' FORMAT INSIDE THE DATE() METHOD THEN IT WILL TAKE IT AS 'A STRING', INSTEAD OF PASSING IT THROUGH 'PARAMETER'.
        EX: let x = new Date("june 18, 1997 1:55:12"); // ACCEPT IT

        AS A STRING, ANY FORMAT WILL BE ACCEPTED AND PRINT IT IN DEFAULT FORMAT.

    -------

        1) EVERYTHING WILL BE CALCULATED IN MILISECOND AT THE END AND STORE IT.

            EX: let x = new Date("18 june 1997 1:55:12:827");
                console.log(x.getTime());                

        2) CALCULATION WILL START FROM 1ST JANUARY, 1970. (BY DEFAULT)
        
    -------
        DATE METHODS:   GET...()
                        SET...()



*/
let x = new Date("18 june 1997 1:55:12:827");

console.log(x);
console.log("Everything in Milisecond: "+ x.getTime()); // IT WILL STORE IN MILISECOND: 866579112000
console.log("Full year: "+ x.getFullYear()); // 1997
console.log("Month: "+ x.getMonth()); // 5: June
console.log("Date: "+ x.getDate()); // 18
console.log("Day: "+ x.getDay()); // 3: wednesday
console.log("Hours: "+ x.getHours()); // 1
console.log("Minutes: "+ x.getMinutes()); // 55
console.log("Second: "+ x.getSeconds()); // 12
console.log("Milisecond: "+ x.getMilliseconds()); // 827


// TO PERFORM SET() METHODS, ADD EVERYTHING BY 1
x.setFullYear(1998);
x.setMonth(6); // July
x.setDate(19);
// WE CANNOT SET DAY USING SET METHOD
x.setHours(2);
x.setMinutes(56);
x.setSeconds(13);
x.setMilliseconds(828);

console.log(x);

/* 
    :MAIN LOGIC USING GET AND SET METHOD:

    IF YOU ARE GIVEN SPECIFIC DATE (18 JUNE 1997) AND YOU WILL HAVE TO IDENTIFY THE DATE AFTER EXACT 50 DAYS FROM GIVEN DATE.

    setDate():
     IT ADDS EXTRA DATE INTO ORIGINAL DATE AND AUTOMATICALLY CONVERT OVERALL DATE INTO DAY (DIVIDE BY 30 OR 31) AND MONTH (DIVIDE BY 7)
*/

let gDate = new Date("18 June 1997");

document.write(gDate + "<br>"); // Original Given date

let a = gDate.getDate(); // 18

let b = a + 50 // added 50 days to current date 18: total 68

gDate.setDate(b); // set 68 days according to its day and month

document.write(gDate); // update Given date

/* 
    COMPARE DATES: DIFFERENCE

*/


let givenDate = new Date("10 oct 2022");

let currentDate = new Date();


if(givenDate < currentDate){
    alert("GivenDate is past date");
}else if(currentDate < givenDate){
    alert("GivenDate is future date");
}else{
    alert("both are same date");
}