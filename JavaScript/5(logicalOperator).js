/* 

1) AND (&&)
=> BOTH MUST BE TRUE THEN ONLY TRUE;
=> IF ANY ONE BECOME 'FALSE' THEN ENTIRE WILL BE FALSE, NO NEED TO CHECK ANOTHER CONDITION
EX: (8>2 && 7>2) ==> TRUE

2) OR (||)
=> ANY ONE CONDITION IS 'TRUE' THEN IT WILL BE TRUE, NO NEED TO CHECK OTHER CONDITION
EX: (8>2 || 2>7) ==> TRUE

3) NOT (!)
=> CHANGE THE FINAL RESULT.
EX: !(5 == 5) => FALSE

*/


/*
let age = 20;
let hasVoterId = "no";

if( age >= 14){
    if(hasVoterId == 'yes'){
        alert("you can vote!");
    }else{
        alert("get your Voter id card first");
    }
}else{
    alert("Sorry! you cannot vote");
}
*/

/**
 let age = 10;
let hasVoterId = "yes";


if(age >= 14 && hasVoterId == "yes"){
    alert("you can vote!");
}
else if(age >= 14 && hasVoterId == "no"){
    alert("Please get your Voter id card first!!");
}
else{
    alert("Sorry!, you cannot vote");
}
 */