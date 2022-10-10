
/* 
    1) WHEN YOU HAVE TO USE THE PROPERTY OF ONE OBJECT INTO OTHER OBJECT THEN WE CAN ACCESS THAT PROPRTY USING THE NAME OF AN OBJECT.

        EX: OBJ_NAME.PROPERTY_NAME;

    2) BUT WHEN YOU HAVE TO USE THE PROPERTY OF AN OBJECT INTO THE SAME OBJECT THEN USE IT WITH THE HELP OF 'THIS' KEYWORD INSTEAD OF THE NAME OF THE OBJECT.

        EX: THIS.PROPERTY_NAME;

     NOTE: OBJECT_NAME.PROPERTY_NAME; IS ALSO VALID BUT WE SHOULD USE 'THIS' KEYWORD IF WE WANT TO ACCESS IT WITHIN THE SAME OBJECT.


     OTHERWISE IT WOULD BE LIKE: NEHAL. NEHAL KA NAME BATAO!!! 
     (NOT MAKING SENSE!!)
     INSTEAD USING 'THIS': NEHAL. 'TUMHARA' NAME BATAO. (IT MAKES SENSE)

     
     3) THIS KEYWORD WORKS IN ALL FOUR WAY OF CREATING METHOD BUT I USED LATEST AND 4TH WAY.

*/


let person = {
    Fname : "Nehal",
    Lname: "Panchal",

    sayHello (){

        console.log("Hello. I am " + this.Fname + " " + this.Lname + ". I have an " + phone.company + " cell phone.");

        alert("Hello. I am " + person.Fname + " " + person.Lname + ". I have an " + phone.company + " cell phone.");

          // BOTH ARE VALID BUT USING 'THIS' KEYWORD IS EFFICIENT WAY. AND IT ALSO MAKE SENSE 
    }
}

let phone = {
    company : "Apple",
    model : "Iphone 6",
}

person.sayHello();