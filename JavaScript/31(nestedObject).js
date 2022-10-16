/* 

    OBJECT INSIDE THE OBJECT.

    SAME FORMAT OF NESTED OBJECT WILL BE USED IN 'JSON FILE FORMAT'.

    API TRANSFERS DATA IN JSON FORMAT.

*/

// <---------------------------------------------------->

/*   ------- MAP OF NESTED OBJECT ------

    -- STUDENT (MAIN OBJECT)

        --- FULLNAME (SUB OBJECT 1)
            --- FNAME (PROPERTY)
            --- MNAME (PROPERTY)
            --- LNAME (PROPERTY)

        --- ROLLNO (PROPERTY)
        --- UNIVERSITY (PROPERTY)

        --- ADDRESS (SUB OBJECT 2)

            --- LINES (SUB SUB OBJECT 3) 
                --- LINE1 (PROPERTY)
                --- LINE2 (PROPERTY)

            --- STATE (PROPERTY)
            --- COUNTRY (PROPERTY)
            --- PIN (PROPERTY)


*/

let student = {
    fullName : {
        Fname:  "Nehal",
        Mname: "kamleshkumar",
        Lname: "Panchal"
    },
    
    rollNo: "16BCE166",
    university: "Nirma Uni",

    address: {
        lines: {
          line1: "Samroli Sutharwad",
          line2: "Chikhli Navsari",
        }, 
        state: "Gujarat",
        country: "India",
        pin: 396521,
    },
}

console.log(student); // WHOLE OBJECT
console.log(student.university); // NIRMA UNI
console.log(student.address); // LINES, STATE, COUNTRY, PIN
console.log(student.address.lines); // LINE1, LINE2
console.log(student.address.lines.line2); // CHIKHLI NAVSARI