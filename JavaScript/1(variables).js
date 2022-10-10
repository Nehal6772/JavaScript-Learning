/*
    ------------ CDS : VARIABLE RULES ----------------

    C: CAPITAL (CASE SENSITIVE: DEMO & demo both are different)
    EX: let DEMO;
        let demo;

    D: DIGIT (DO NOT START WITH DIGIT; IT IS EITHER AT MIDDLE OR AT LAST)
    EX: let 1demo; // Wrong 
        let demo1; // Right
        let de1mo; // Right

    S: SPECIAL SYMBOL (ONLY USE DOLLAR [$] AND UNDERSCORE [_])
    EX: let $demo; // Right
        let de$mo; //Right
        let demo$; // Right
        (SAME WITH UNDERSCORE)
*/

/* 
    ------------- VAR vs LET vs CONST --------------

    1) YOU CAN CHANGE THE VALUE OF VAR AND LET AFTER INITIALIZE;
    EX: var a = 1;
        a = 2 ; //Value of a will be changed from 1 to 2

        let a = 1;
        a = 2; // Value of a will be changed from 1 to 2

    2) YOU CAN DECALRE TWO VARIABLE WITH THE SAME NAME USING VAR ONLY;
    EX: var a = 1;
        var a = 2; // RIGHT

    3) YOU CANNOT DECLARE TWO VARIABLES WITH THE SAME NAME USING LET;
    EX: let a = 1;
        let a = 2; // WRONG

    4) YOU CANNOT DECLARE TWO VARIABLES WITH THE SAME NAME USING CONST KEYWORD 
    EX: const a = 1;
        const a = 2; //WRONG
    
    5) YOU CANNOT CHANGE THE VALUE OF CONST KEYWORD;
    EX: const a = 1;
        a = 2; //WRONG
*/