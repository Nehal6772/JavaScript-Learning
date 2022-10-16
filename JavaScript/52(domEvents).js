/*             -----------: DOM EVENTS :----------- 


=> DOM EVENTS ARE A SIGNAL THAT SOMETHING HAS OCCURRED, OR IS OCCURRING, AND CAN BE TRIGGERED BY USER INTERACTIONS OR BY THE BROWSER.

=> WE CAN ADD MULTIPLE EVENT LISTENERS ON A SAME ELEMENT,

=> WHEN THIS SIGNAL OCCURE, EVENT CHANGES ITS STATE FROM ONE TO OTHER.

1. MouseEvent: click, dblclick, mouseout, mouseover, contextmenu

2. KeyboardEvent: : keydown, keypress, keyup

3. form events: focus, blur, change, submit


==> YOU CAN REGISTER ANY EVENTS 2 WAYS:

1) INLINE (AS AN ATTRIBUTE) (on..)

2) USING  METHOD:  addEventListener("Event name", Funcion name);

ARG2: function can be normal or anonymous function.

--: SYNTAX USING NORMAL FUNCTION: 

    obj_name.addEventListener("click", myEvent);

    function myEvent(){
        alert("Hey his is clicked by me.")
    }

--: SYNTAX USING ANONYMOUS FUNCTION: 

    obj_name.addEventListener("click", function ()
    {
        alert("Hey his is clicked by me.")
    });


*/