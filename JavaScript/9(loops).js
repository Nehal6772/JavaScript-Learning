
/* 
THERE ARE 3 BASIC LOOPS IN JAVASCRIP.
----------------------------------
1) WHILE (ENTRY CONTROL LOOP)

let a = 3;

while(a >= 0){
    alert(a);
    a--; // from 3 to 0
}
-----------------------------------
2) DO WHILE (EXIT CONTROL LOOP)
==> body will run at least ones, irresoective of condition

let a = 0;

do{
    document.write(a + "<br>");
    a++; // from 0 to 3
}while(a <= 3)

-----------------------------------
3) FOR 

let a = 0;

for(; a<=3 ; a++){
    document.write(a + "<br>");
}
------------------------------------
*/


// SUM OF ALL EVEN NUMBERS FROM 0 TO 100:

let num = 1;
let totalSum = 0;

while(num <= 100){
    if(num % 2 == 0){
        totalSum += num;
    }
    num++;
}
document.write(totalSum);