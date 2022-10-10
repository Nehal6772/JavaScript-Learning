/* 
BREAK AND CONTINUE BOTH WILL WORK USING BLOCK { ... }

SIMILARITY OF BREAK AND CONTINUE:
BOTH WILL NOT EXCUTE THE NEXT LINES OF CURRENT BLOCK.

DIFFERENCE OF BREAK AND CONTINUE:
BREAK WILL EXIT THE CURRENT BLOCK AND CONTINUE WILL START THE NEXT LOOP.

WE CAN BREAK OR CONTINUE THE OTHER BLOCK INSTEAD OF CURRENT CLOCK USING LABEL TO LOOP.

SYNTAX: LABEL_NAME: FOR(INIT;COND;INC){..}

----------------------------------------------------------
1) BREAK ==> BREAK INBETWEEN BLOCK

=> IT WILL NOT EXCUTE THE NEXT LINES AFTER BREAK & EXIT THE CURRENT BLOCK

let counter = 1;

for(; counter <= 10; counter++){
    
    if(counter==5){
        break; (LINE NUMBER: 16)
    }
    
    document.write(counter+" <br>");
}
---------------------------------------------------------
2) CONTINUE ==> SKIP IN BETWEEN BLOCK

=> IT WILL NOT EXCUTE THE NEXT LINES AFTER CONTINUE & IT WON'T EXIT THE CURRENT BLOCK AFTER CONTINUE.
=> IT WILL SKIP THE VALUE WHICH IS CHECKED IN THE CONDITION AND THEN IT WILL JUMP TO INCREMENT/DECREMENT IN FOR LOOP & THEN CONTINUE THE LOOP.

let counter = 1;

for(; counter <= 10; counter++){
    
    if(counter==5){ // 5 WILL BE SKIPPED AND CONTINUE TO PRINT FROM 6
        continue; (LINE NUMBER: 25 -> COUNTER++)
    }

    document.write(counter+" <br>");
}
-------------------------------------------------------------

3) NESTED : LOOP ISIDE LOOP

print 1 to 10 and for every 1 print TechGun i TIME times.

for(let counter = 1; counter<=10; counter++){
    document.write(counter+"<br>");
    
    for(j=1;j<=counter;j++){
        document.write(j + ":TechGun <br>");
    }
}
*/ 
 
//================================================

/* 
NESTED LOOP BREAK USING LABEL:

outer: for(let i=1 ; i<=10 ; i++){ // LABEL TO FOR LOOP
    document.write(i + "<br>");
    
    for(let j = 1; j<=2 ; j++){
        if(i == 3){
            break outer; // IT'LL BREAK OUTER LOOP INSTEAD OF CURRENT BLOCK OF J
        }
        document.write(j +":TechGun <br>");
    }
}
*/