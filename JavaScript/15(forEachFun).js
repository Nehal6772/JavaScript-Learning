
// SYNTAX: ARRAY_NAME.forEach(NAME OF A USER DEFINE FUNCTION);

let myArr = ["Nehal", "Kamlesh","Ila", "Hinal", "Ankit"];

myArr.forEach(myFun);

function myFun(n){
    document.write(n + "<br>" );
}