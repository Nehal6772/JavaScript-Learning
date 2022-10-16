/* 
    DOCUMENT OBJECT MODEL (DOM)

    BROWSER OBJECT MODEL (BOM)

    NODE / HTML TAG / HTML ELEMENT / OBJECT : (ALL SAME)

    ROOT NODE / ROOT OBJECT : DOCUMENT OBJECT

    ----

    1) IN ORDER TO MANUPLATE THE WEB SITE AND WEB PAGES, DOM PLAYS VERY IMPORTANT ROLE.

    2) DOM IS AN API WHICH HELP US TO MANUPLATE THE HTML CONTENTS.

    3) DOM (API) =  CHANGES IN HTML THROUGH JAVASCRIPT.

    4) WHEN HTML PAGE LOADS ON A BROWSER, BROWSER CREATES DOM OBJECT OF THAT HTML PAGE. (DOM TREE STRUCTURE) 
    --> SO WE CAN EASILY ACCESS ANY PART OF THE HTML EASILY.
    --> SO WE CAN ACCESS HTML CONTENTS THROUGH JAVASCRIPT.

    5) IN DOM TREE, 'DOCUMENT' IS 'ROOT NODE' OR 'ROOT OBJECT' AS IT REPRESENTS WHOLE WEB PAGE.

    6) ALL HTML TAGS ARE TREATED AS AN OBJECT.

    7) USING DOM HIRARCHY, WE CAN EASILY LOCATE AND REACH TO ANY NODE (TAG/OBJECT) OF THE HTML FILE.
    (WITHOUT THIS HIRARCHY, IT IS VERY HARD FOR THE SYSTEM TO LOCATE SPECIFIC CONTENT OF THE HTML PAGE)

    8) IN ORDER TO LOCATE SPECIFIC NODE, WE CAN GIVE 'ID' OR 'CLASS' TO THAT PARTICULAR NODE.

    9) ONCE WE LOCATE THE EXACT LOCATION OR A NODE USING ID OR A CLASS, WE CALL PEROFROM ANY OPERATIONS. (CRUD)
    
    10) DOM TREE IS ONLY ACCESSED BY DOCUMENT OBJECT.

    JAVASCRIPT CAN CHANGE FOLLOWING THINGS USING 'OBJECT MODEL':
        1. CHANGE HTML ELEMENT AND ATTRIBUTE
        2. ADD HTML ELEMENT AND ATTRIBUTE
        3. REMOVE HTML ELEMENT AND ATTRIBUTE
        4. CHANGE CSS STYLE 
        5. REACT TO HTML EVENT
        6. CREATE NEW HTML EVENT

    11) IN DOM, ALL HTML ELEMENTS (TAGS) ARE DEFINED AS AN "OBJECT" SO IT WILL HAVE BOTH; PROPERTY AND METHOD.

    12) 'ID' AND 'CLASS' ALLOCATED TO ANY HTML ELEMENT MUST BE UNIQUE.

*/
// -------
/* 
<body>    
    <h1 id="firstDom">This is first heading for DOM</h1>

    <script>
        let a = document.getElementById("firstDom");
        a.innerHTML = "Nehal";

        console.log(typeof a); // OBJECT
        console.log(a.innerHTML); // Nehal : instead of value
        console.log(a); // HTML <h1> Tag
    </script>
</body>

1)  WHEN WE ARE GETTING ANY ELEMENT WITH INVALID ID,THEN IT WILL RETURN "NULL". 
(WHEN ID IS INVALID OR NOT AVAILABLE OR MISMATCH THE NAME OF THE ID)


*/


/* 
    DOM IS AN OBJECT SO IT HAS BOTH; METHODS AND PROPERTIES.
    (WHERE DOCUMENT IS PARENT OBJECT AND HTML ELEMENTS ARE ALSO OBJECT)
    -----------------------------------------------------------
                    ==> DOM METHODS 

    1. getElementById(): 
   
    2. getElementsByClassName(): 
   
    3. getElementsByTagName(): (SAME AS GET BY CLASS NAME)

    4. querySelector():
   
    5. querySelectorAll():

    6. createElement("html tag you want to create"):

    7. parent_obj_name.appendChild("child element"):

    8. createTextNode("HTML content (text)"):

    9. parent_obj_name.insertBefore(new element, position using travesring);

    10. parent_obj_name.removeChild(child element to delete);

    11. obj_name.cloneNode(true);

    12. parent_obj.replaceChild(what, where);

    13. parent_obj.insertAdjacentHTML(" 4 position", "html as a string");

    14.obj_name.setAttribute("attr_name", "attr_value");

    15. obj_name.getAttribute("attr_name"); RETURNS ATTRIBUTE VALUE

    16. obj_name.getAttributeNames(): 

    17. obj_name.removeAttribute("attr_name");

    18. bj_name.hasAttribute("attr_name");

    19. let temp = getComputedStyle(obj_name);
    

    ----------------------------------------------------------- 
                    ==> DOM PROPERTIES

    1. innerHTML: TO ACCESS THE CONTENT (TEXT) OF ANY HTML TAG.
     
     --> innerHTML IS DOM PROPERTY AND WIDELY USE TO ACCESS THE CONTENT OF HTML ELEMENT. (THE CONTENT WHICH IS WRITTEN IN ENGLISH INSIDE THE HTML TAG)

     --> WE CANN GET AND SET THE CONTENT USING innerHTML.

     --> SYNTAX OF GET: console.log(obj_name.innerHTML) ;

     --> SYNTAX OF SET: obj_name.innerHTML = "Content you want to replace";

     --> innerHTML WILL NOT APPLY ON HTMLCollection BECAUSE IT HAS MORE THAN ONE ELEMENT.

     -------------------------------------------------------

                => DOM TRAVSERING PROPERTIES FOR ELEMENTS

     1. CHILD_OBJ_NAME.parentElement: FROM CHILD ELEMENT TO PARENT ELEMENT.

     2. PARENT_OBJ_NAME.firstElementChild: FROM PARENT ELEMENT TO FIRST CHILD ELEMENT.

     3. PARENT_OBJ_NAME.lastElementChild: FROM PARENT ELEMENT TO LAST CHILD ELEMENT.

     4. PARENT_OBJ_NAME.children: FROM PARENT TO ITS ALL CHILDREN.

     5. OBJ_NAME.nextElementSibling: FROM ONE ELEMENT TO ITS NEXT SIBLING ELEMENT.

     6. OBJ_NAME.previousElementSibling: FROM ONE ELEMENT TO ITS PREVIOUS SIBLING ELEMENT.

     7. document.body: <body> TAG WILL BE SELECTED.

     8. OBJ_NAME.textContent: (SIMILAR TO innerHTML)
     --> TO ADD HTML CONTENT (TEXT) IN HTML ELEMENT.
     --> WE CAN SET AND GET CONTENT LIKE innerHTML.

     9. obj_name.style.cssText = "can give multiple CSS"; // SET INLINE STYLE

     10. obj_name.style.css = "css value"; // CHANGE SINGLE CSS

     11. obj_name.className; // returns the classes which is applied on the element; // GET CLASS NAME

     12. obj_name.clssName = "class_name"; = // SET CLASS NAME TO AN ELEMENT.

     13. obj_name.classList; 
     // returns the classes which is applied on the element (SAME AS className) 
     // GET CLASS NAME : IN ARRAY FORM. (DOMTokenList) COLLECTION

     14. obj_name.classList.add("class_name"); // ADD CLASS TO AN ELEMENT

     15. obj_name.classList.remove("class_name"); // REMOVE CLASS FROM AN ELEMENT

     16. obj_name.classList.replace("old class name", "new class name"); // REPLACE CLASS

     17. obj_name.classList.contains("class name"); // BOOLEAN VALUE IF CLASS IS APPLIED

     18. obj_name.classList.toggle("class name"); // TOGGLE LIKE A ELECTRIC SWITCH

     // OFFSET: BORDER WILL COUNT TWICE

     19. obj_name.offsetHeight; // WITH BORDER, PADDING AND MARGIN
     
     20. obj_name.offsetWidth; // WITH BORDER, PADDING AND MARGIN

     // CLIENT: PADDING WILL COUNT TWICE

     21. obj_name.clientHeight; // WITH PADDING ONLY

     22. obj_name.clientWidth; // WITH PADDING ONLY

*/
