//.............................variable.........................................

// var a ="Abdul Rehman";
// var a = "Rehman"
// a ="Developer";
// document.write(a+"<br>");


// let b="Abdul Rehman";
// b= "Games";
// document.write(b+"<br>");

// const c="Rehman";
// c ="Web Developer";
// document.write(c);







// ............................Data Types.......................................

// let a="Hello Abdul Rehman";                       String
// let b = 1234;                                      Number
// let c = true false                                 Boolean
// let d = [1,2,3,4,  "abc"]                          Array
// let e = {FirstName: "Abdul", lastName: "Rehman"}   Object
// let f = null                                       null
// let i =                                            undefined


// document.write(typeof e);

//...........................Arithmetic Operators................................


// +   addition
// -   subtraction
// *   Multiplication
// **  Exponentiation
// /   Division
// %   Modulus
// ++  increment
// --  Decrement

// let x = 23;
// let y = 2;

// document.write(x+y +"<br>");
// x++;
// document.write(x+ "<br>");
// --y;
// document.write(y+"<br>");
// let z = x*y;
// document.write(z +"<br>");
//  z = x**y;
// document.write(z +"<br>");
// z = x/y;
// document.write(z +"<br>");
// z = x%y;
// document.write(z +"<br>");


//..................................Comparison  Operators..............................

// ==      Equal to
// ===     Equal value & Equal Types
// !=      Not Equal
// !==     Not Equal Value & not Equal Types
// >       Greater Then
// <       Lessthen
// >=      Greatherthen or Equal to
// <=      Lessthen or Equal to

// let a =30;
// let b ="30";

// document.write(a===b);

// document.write(a!=b);

// document.write(a!==b);

//                                      if else statements

// let a=34;
// let b="45";

// if(a===b)
// {
//          document.write("A ");
// }
// else{
//     document.write("a ");

// }

//                                           if else if


// let t = 20;
// let greeting;

// if (t <= 11) {
//     greeting = "Good Morning";
// }
// else if (t <= 16) {
//     greeting = "Good After Noon";
// }
// else if (t <= 20) {
//     greeting = "Good Evening";
// }
// else {
//     greeting = "Good Night";
// }

// document.getElementById("time").innerHTML = greeting;
// ......................................................................

//                                      Logical Operators

// &&      logical and
// ||      logical or
// !       logical not

// let age= 23;

// if(age >= 18 || age <= 22){
//     document.write("Yes Your eligible for vote");
// }
// else{
//     document.write("Sorry");
// }

// if(age >= 18 && age <= 22){
//     document.write("Yes Your eligible");
// }
// else{
//     document.write("Sorry");
// }

//                                  Switch Case        /true, false/

// let day =5;

// switch(day) {
//     case 0:
//         document.write("Today is Monday");
//         break;
//     case 1:
//         document.write("Today is Tuesday");
//         break;
//     case 2:
//         document.write("Today is Wednesday");
//         break;
//     case 3:
//         document.write("Today is Thursday");
//         break;
//     case 4:
//         document.write("Today is Friday");
//         break;
//     case 5:
//         document.write("Today is Saturday");
//         break;
//     case 6:
//         document.write("Today is Sunday");
//         break;
//     default:
//         document.write("Enter The Valid Day");
// }

// ......................

// let age = 9;

// switch (true) {
//     case (age >= 17 && age <= 22):
//         document.write("Now You Can Ride Only Bike...");
//         break;
//     case (age >= 23 && age <= 50):
//         document.write(" Now you can Car Drive.... LTV ");
//         break;
//     case (age >= 51 && age <= 70):
//         document.write("HTV");
//         break;
//     default:
//         document.write("Please Enter The Valid Age");
// }


// ................................................................................

//                                       Alert & Confirm Box

// alert("Hello!");
// confirm("Do U Like Our Website?");

// let a = confirm("DO You Like Our Website?");

// if (a) {
//     alert("Thanks")
// }
// else {
//     alert("Sorry");
// }

// .....................................................................................

//                                      String Methods

//                                      length

// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// document.getElementById("time").innerHTML = text.length;

// ................................
//                                          slice

// let text = "Apple, Orange, Blue, Red";
// document.getElementById("time").innerHTML =text.slice(6);

// .................................
//                          substring()      method extracts characters from start to end (exclusive).

// let text = "Apple, Orange, Blue, Red";
// document.getElementById("time").innerHTML =text.substring(0,16);

// ..................................
//                                 toLowerCase()

// let text = "ABCDefghiJKLMNOPQRSTUVwxyz";
// document.getElementById("time").innerHTML = text.toLocaleLowerCase();

//                              toUpperCase()

// let text = "ABCDefghiJKLMNOPQRSTUVwxyz";
// document.getElementById("time").innerHTML = text.toLocaleUpperCase();

// ....................................
//                                   includes()            return true or false


// let str = "Tech Step Sahiwal";
// document.getElementById("time").innerHTML = str.includes("step");


// ........................................
//                                  startsWith()        return true or false

// let str = "Tech Step Sahiwal";
// document.getElementById("time").innerHTML = str.startsWith("Sahiwal");

//                                  endsWith()      also     return true or false


// let str = "Tech Step Sahiwal";
// document.getElementById("time").innerHTML = str.endsWith("Sahiwal") ;

// ............................................
//                          search()        method returns the index (position)

// let str = "Tech Step Sahiwal";
// document.getElementById("time").innerHTML = str.search("Step");

// .............................................

//                      .match()         method returns an array with the matches in globly or locally.

// let str = "Tech Step Sahiwal Tech Step Sahiwal Tech Step Sahiwal Tech Step Sahiwal Step";
// document.getElementById("time").innerHTML = str.match(/Tech/g);

// ...............................................

//                      replace()       method searches a string for a value or a regular expression.

// let str = "javascript is a great is language  is is";
// document.getElementById("time").innerHTML = str.replace("javascript", "PHP");
// document.getElementById("time").innerHTML = str.replace(/is/g, "are");

// ................................................
//                      trim()       method removes whitespace from both sides of a string.

// let text = "                 Hello World!              ";
// let result = text.trim();

// document.getElementById("trim").innerHTML = text;
// document.getElementById("trim1").innerHTML = result;


// ..................................................
//              charAt()    method returns the character at a specified index (position) in a string.

// let str = "javascript, PHP, Reactjs";
// document.getElementById("time").innerHTML = str.charAt(23) ;

// ...................................................
//                              concat()     method joins two or more strings.

// var str = "Languages: javascript, PHP ";
// var str2  = "Javascript is a great language "
// var str3  = "ReactJS, ReactNative"
// document.getElementById("time").innerHTML = str.concat(str2,str3);

// ...................................................

//  split()                          method splits a string into an array of substrings.

// var str  = "ReactJS ReactNative";
// document.getElementById("time").innerHTML = str.split("e");

// ....................................................

//                          repeat() method returns a string with a number of copies of a string.

// var str  = "ReactJS ReactNative <br>"
// document.getElementById("time").innerHTML = str.repeat(90);

// ......................................................

//                                      Function with parametters

// function abc(){
//     document.write("Hello! I am a JS Function....");
// }

// abc()
// abc()
// abc()



// ......................................


//                                      Function with parametters

// function abc(productsName, desp, price){
//    document.write(productsName    + desp   + price + "<br>");
// }

// abc("Mobile", "Nokia", "3310");
// abc("Laptop", "Hp", "40000");
// abc("Laptop", "Dell", "50000");




// .......................................

//                                      Events

// onclick
// ondblclick
// onmouseenter
// onmouseout


// function hello(){
//     // document.write("Hello World!");
//     alert("I am a Event....")
// }

// let button = document.getElementById("btn")

// button.addEventListener("click", ()=>{
// // alert("I was clicked. Yayy!")
// document.querySelector(".box").innerHTML =
// "<br> Yayy you were clicked </b> Enjoy your click!"
// })


// button.addEventListener("dblclick", ()=>{
//     document.querySelector(".box").innerHTML =
//     "<br> Yayy you were clicked </b> Enjoy your click!"
//     })

// button.addEventListener("mouseenter", ()=>{
//     document.querySelector(".box").innerHTML =
//     "<br> Yayy you were clicked </b> Enjoy your click!"
//     })


// button.addEventListener("mouseout", () => {
//     document.querySelector(".box").innerHTML =
//         "<br> Yayy you were clicked </b> Enjoy your click!"
// })
// ...............................................

//                                       For Loop

// let a = 0;

// for( a = 1; a <= 10; a++){
//     document.write("Tech Step Sahiwal <br>");
// }

//.................................................

//                                   Break & Continue Statement

// for(let a = 0; a <= 20; a++){
//     if(a == 5){
//         document.write("Web Development............. <br>");
//         continue;
//         // break;
//     }
//         document.write("Tech Step" + "<br>");
//     }

// ..................................................

//                                Even & Odd Numbers with Loop

// for (let a = 0; a <= 15; a++) {
//     if (a === 0) {
//             console.log(a +  " is even");
//     }
//     else if (a % 2 ) {
//             console.log(a + " is odd");
//     }
//     else {
//             console.log(a + " is even");
//     }
// }

// ......................................................
//                                           Arrays

// let a = ["Tech Step", 12, true, false, null, "Sahiwal"];

// document.write(a)
// console.log(a);


// let rendom = [10, "Tech Step", true, null, {
//     firstName: "tech",
//     lastName: "Step"
// }]

// document.write(rendom);
// console.log(rendom)

// ............................................

//                               Array Use for get value from prompt

// let ary = new Array(3);

// for(let get = 0; get < 3; get++){
//     ary[get] = prompt("Enter the value:...");
// }

// document.write(ary);

// ..............................................

//                                    Multidimensional Arrays Method

// let data = [
//     ["Amir", 19, "Male", "MBA"],
//     ["Zain", 20, "Male", "B.com"],
//     ["Anam", 17, "feMale", "M.Com"],
//     ["Nomi", 22, "Male", "BSCS"]
// ]

// for(let a = 0; a < 4; a++){
//     document.write(data[a] + "<br>" );
// }

// ..............................................

//                                  Modify & Delete Array Elements

// let a = [10, 20, "Bootstrap", "Sahiwal"]
// document.write(a + "<br>");
// // console.log(a)

// a [3] = "Lahore";
// document.write(a);

// ....................

//                                          Delete Array

// let a = [10, 20, "Bootstrap", "Sahiwal"];
// delete a [1]
// document.write(a);
// console.log(a);
// .............................................

//                     Array functions / Methods   default & reverscc  (fOR oRDER set  A to Z)
//                   sort()

// let a = ["Pakistan", "Bananan", "Cat", "Dog", "Elephent", "Apple"]
//     document.write(a + "<br> <br>");

// // a.sort();
// a.reverse();

//     document.write(a);
// // .............................


//          Array Pop & Push      pop for last value delete,  push for add new value in last index

// let a = ["Pakistan", "Tech Step", "Apple"]
// document.write(a + "<br> <br>");

// a.pop("");
// a.push("Web Development");

// document.write(a);

// ...................................................

//                  Array Shift & Unshift       Shift for first value delete & add in first number

//  let a = ["Pakistan", "Tech Step", "Apple", "Banana"]
//     document.write(a + "<br> <br>");

// a.shift();
// // a.unshift("Web......");
//     document.write(a);

// .......................................................
//                                  Concat

//   let a = ["Pakistan", "Tech Step", "Apple"]

//   let b = ["KSA", "UAE", "OMAN"];


//   let c = a.concat(b)

//     document.write(c);

// ......................................................

//                                   Objects

// let a = {
//     firstName: "Tech",
//     lastName: "Step",
//     City: "Sahiwal",
// }

// console.log(a);



// let abc = {
//     PName: "LapTop",
//     PPrice: 50000,
//     pDesp: "HP"
// }

//     console.log(abc);

// ................................

//                                  Second Method of Object


// let abc = Object();

// abc.firstName = "Tech";
// abc.lastName = "Step";
// abc.city =   "Sahiwal";

// console.log(abc);
// document.write(abc.city);

//................................. 

//                       for in loop      for > object print with key properties 


// let obj = {
//     firsxtName: "Tech",
//     lastName:   "Step",
//     city:   "Sahiwal",
//     favCity : ["Swl", "Lahore", "Islamabad"],
//     email:  "TechStep@gmail.com"
// }

// for(let i in obj ){
//                                              // for print only Value
//     document.write(obj[i] + "<br>");


//                                             // for print with key value
//     // document.write(i + " : " + obj[i]+ "<br>");
// }

//..................................................................

//                                             DOM (Document Object Model)


//  Get & Set Value Methods     (Get Method)

// we can check innerHTML, innerText, <check > .getAttributes("content"), .attributes[2]

// let element;

// element = document.getElementById("content").attributes[0].name;

// console.log(element);

//                          (Set Method)            change HTML & Text


// document.getElementById("time").innerHTML = "<p>Tech Step Sahiwal</p>" ;


// ..............................................................

//              querySelector & querySelectorAll      target is only first selector , target all selectors


// let element;

// element = document.querySelector(".sss");
// element = document.querySelectorAll(".sss");

// console.log(element)


// ...............................................................

//                                  addEventListener Method

//                                       First Method

// document.getElementById("content").addEventListener("mouseenter", abc);


// function abc(){
//     document.getElementById("content").style.background = "red";
// }


// // // // //                                      Second Method

// document.getElementById("content").addEventListener("click", function(){
//     document.getElementById("content").style.border = "10px solid green";
// });

// ..................................................................


//                       parent Element & parentNode Method   use for check parent Element,

// let a = document.getElementById("inner").parentElement;

// Second Method    <Using Target changing the Style>

// let a = document.getElementById("inner").parentElement.style.background = "orange";

// console.log(a)

// ...........................................................

//                           Children & childNodes Methods       use for check Children Element

// let a = document.getElementById("inner").children;
// let a = document.getElementById("inner").children[0];

// let a = document.getElementById("inner").childNodes;
// let a = document.getElementById("inner").childNodes[2];



// let a = document.getElementById("inner").children[0].style.background = "green";

// console.log(a)

// ............................................................

//                                        firstChild & lastChild Method

//  let a = document.getElementById("outer").firstElementChild;


//  let a = document.getElementById("inner").lastElementChild;

// let a = document.getElementById("outer").firstElementChild.style.color = "red";


//  console.log(a);

// ..............................................................

//                               createElement & createTextNode & create Comment

// let newElement = document.createElement("img")

// console.log(newElement)

// let newText = document.createTextNode("This is just Text...........");

// console.log(newText)

// let comment = document.createComment("This is just Comment")

// console.log(comment)

// .............................................................

//                                                   appendChild


// let newElement = document.createElement("h2")

// let newText = document.createTextNode("This is just Text...........Zaid");

// newElement.appendChild(newText);

// console.log(newElement)


// ...............................................................


//                                           setInterval & clearInterval

// let a = 0;

// let set = setInterval(anim, 1000);

// function anim() {
//     a = a + 10;
//     console.log(a);

//     if(a === 80){
//         clearInterval(set);
//     }   
//     else{
//         let target = document.getElementById("box");
//         // target.style.marginLeft = a + 'px';
//         target.style.width = a + 'px';
//     } 
// }

// ........................................................

//                                                 setTimeout 


// let time = setTimeout(anim, 3000);

//     function anim() {
//         console.log("Hello")
//         alert("Hello")

//        let target = document.getElementById("box");
//        target.style.width = "800px"; 
//     }

// .....................................................................

//                                          New Window function 

// function myFunction() {
//   let myWindow = window.open("", "MsgWindow", "width=600,height=600");
//   myWindow.document.write("<h1>Hi, I am New Window. My width is 600px and height is 600px..</h1>");
// }

// .....................................................................

//                                          Show & Hide Password

// function myFunction() {
//     let a = document.getElementById("myInput");
//     if(a.type === "password") {
//     a.type = "text";
//     } else {
//     a.type = "password";
//     }
// }

// .......................................................................


//                                               Form Validation

function seterror(id, error) {
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}

function clearErrors() {
    errors = document.getElementsByClassName('formerror');
    for (let item of errors) {
        item.innerHTML = " ";
    }
}

function validateForm() {
    let returnval = true;
    clearErrors();

    let name = document.forms['myForm']["fname"].value;
    if (name.length < 5) {
        seterror("name", "*Length of name is too short");
        returnval = false;
    }

    if (name.length == 0) {
        seterror("name", "*Length of name cannot be zero!");
        returnval = false;
    }

    let email = document.forms['myForm']["femail"].value;
    if (email.length > 18) {
        seterror("email", "*Email length is too long");
        returnval = false;
    }

    let phone = document.forms['myForm']["fphone"].value;
    if (phone.length != 11) {
        seterror("phone", "*Phone number should be of 11 digits!");
        returnval = false;
    }

    let password = document.forms['myForm']["fpass"].value;
    if (password.length < 6) {
        seterror("pass", "*Password should be atleast 6 characters long!");
        returnval = false;
    }

    let cpassword = document.forms['myForm']["fcpass"].value;
    if (cpassword != password) {
        seterror("cpass", "*Password and Confirm password should match!");
        returnval = false;
    }

    return returnval;
}

// ..................................................................
