/* 
    IT IS LIKE JAVA MODEL: GETTER AND SETTER PROPERTY.
    -> FIRST IT WILL GET AND THEN IT WILL BE SET.
    -> YOU CANNOT SET WITHOUT GET BECAUSE WE WANT TO SET THE PROPERTY OF SAME OBJECT. SO FIRST WE NEED TO GET THE OLD VALUE AND THEN WE MANUPLATE THAT VALUE AND SET IT USING SETTER PROPERTY INSIDE THE SAME OBJECT PROPERTY.

    1) GETTER PROPERTY: GET THE VALUE OF PARTICULAR PROPERTY OF AN OBJECT.
    2) SET PROPERTY: SET THE VALUE OF PARTICULAR PROPERTY OF SAME OBJECT.

    WE CAN PERFORM THIS TASK USING TWO WAYS.

     1) IN ORDER TO CALL PROPERTY OF AN OBJECT:
        EX: OBJ_NAME.PROPERTY_NAME;

     2) IN ORDER TO CALL METHOD OF AN OBJECT:
        EX: OBJ_NAME.PROPERTY_NAME();

    

    IN THIS TASK, WE ARE GOING TO USE PROPERTY INSTEAD OF METHOD.

    => WE CAN USE 'SETTER' INDIVIDUALLY WITHOUT 'GETTER'.

    => GETTER: FROM INSIDE TO OUTSIDE THE OBJECT.
    => SETTER: FROM OUTSIDE TO INSIDE THE OBJECT.

        "GETTER --> MANUPLATE VALUE --> SETTER"

*/

// 1) TASK PERFORMED BY PROPERTY.

let person = {
    
    Fname: "Nehal",
    Lname: "Panchal",
    age: 25,

    get getName(){
        return this.Fname;
    },

    set setName(box) // SETTER MUST HAVE SINGLE PARAMETER
    {
        let convertUpper = box.toUpperCase(); 
        this.Fname = convertUpper;
    },

}

let Uname = person.getName; // CALL PROPERTY OF AN OBJECT

alert("Before set:  " + person.Fname); // BEFORE SETTER

person.setName = Uname; // PASS VALUE THROUGH PROPERTY OF AN OBJ

alert("After set:  " + person.Fname); // AFTER SETTER


//-----------------------------------------------------------


// 2) THIS IS PERFORMED BY METHOD OF AN OBJECT

/* let person = {
    Fname: "Nehal",
    Lname : "panchal",
    age: 25,


    getName: function(){
        return this.Fname;
    },

    setName (n){
        this.Fname = n;
    }
}

let getStr = person.getName(); // CALL METHOD
let Upper = getStr.toUpperCase();

person.setName(Upper); // CALL METHOD

alert(person.Fname); 

*/