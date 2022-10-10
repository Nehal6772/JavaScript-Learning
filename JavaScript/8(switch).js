// SWITCH CASE WILL DO STRICT COMPARISION (=== VALUE AND TYPE BOTH).

// WITHOUT BREAK, ALL THE CASES WILL EXECUTE ONE BY ONE.

// (M.IPM) PROMPT WILL TAKE INPUT AS A STRING ONLY.

// if(input == 1 || input == 'y' || input == 'yes'){
//     alert("Continue..");
// }else if(input == 0 || input == 'n' || input == 'no'){
//     alert("END..")
// }else{
//     alert("Invalid input..");
// }


let input = prompt("Enter Input");

switch(input)
{ // BLOCK START

    // OR CONDITION (||) WILL NOT WORK IN CASE.
    // case '1' || 'y' || 'yes':
    //     alert("CONTINUE..");
    // break;    
    
    case '1': // 1 AS A STRING IN PROMPT THAT IS WHY
        alert("CONTINUE..");
    break; // GET OUT OF THE CURRENT BLOCK (LINE 59)

    case 'y':
        alert("CONTINUE..");
    break; // GET OUT OF THE CURRENT BLOCK (LINE 59)   
    
    case 'yes':
        alert("CONTINUE..");
    break; // GET OUT OF THE CURRENT BLOCK (LINE 59)

    // OR CONDITION WILL NOT WORK IN CASE.
    // case '0' || 'n' || 'no':
    //     alert("END..");
    // break;    
    
    case '0': // 0 AS A STRING IN PROMPT THAT IS WHY
        alert("END..");
    break; // GET OUT OF THE CURRENT BLOCK (LINE 59)

    case 'n':
        alert("END..");
    break; // GET OUT OF THE CURRENT BLOCK (LINE 59)

    case 'no':
        alert("END..");
    break; // GET OUT OF THE CURRENT BLOCK (LINE 59)

    default:
        alert("Invalid input");
        // NO NEED TO WRITE DEFAULT IN LAST CASE (DEFAULT)

} // BLOCK END
   
/* THIS WILL WORK LIKE:
  
     case '1' || 'y' || 'yes':
      alert("CONTINUE..");
     break;    

    case 1:
    case 'y':
    case 'yes':
        alert("Continue..");
    break;
*/