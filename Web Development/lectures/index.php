<?php

// What is XAMPP?
// Installing XAMPP.

// What is Apache?
// Ans: Apache HTTP (Hypertext Transfer Protocol) Server is a free and open-source cross-platform web server software.

// What is PHP?

// Ans : PHP:(earlier called, Personal Home Page).
// Now Php Calling "Hypertext Preprocessor".

// PHP is an HTML-embedded, server-side scripting language.

// What is MYSQL?

// Ans: MySQL stands for 'Structured Query Language.'this is open-source relational database management system.

// ..........................................................................................

//                                          variable


//     Write Way                                          Wrong Way

  // $Name = "Tech Step";

// $firstname                                       $first name
// $_firstname                                      $22firstname
// $first_name                                      $first&%name
// $first-name
// $firstName
// $firstname88

   

// ......................

//                                   Not Using different name variable

//                  if u veriable decleard $age   not   echo $age or $AGE            

  // $name = "Tech Step";

  // echo $name;


  // $a = "Tech Step";

  // echo $a;



  // echo $firstName;
  // echo "<br>";
  // echo $city;


// ......................................................................


//                        Difference between Single Quote and Double Quotes

// $name = 'Tech Step Sahiwal';

// echo "My Name is $name";
// echo '<br>';
// echo '<br>';
// echo 'My Name is $name';

// ........................................................................

//                                      Data Types

// $a = 12;
// $b = "Hello World";
//  $c = 12.2;
// $d = true;
//  $e = null;
// $f = [01, 'Tech Step', true, null];

// var_dump($f);

// .........................................................................
//                                   arithmetic operators

// $num1 = 10;
// $num2 = 20;

// echo $division = $num1 / $num2;
// echo $sum = $num1 + $num2;
// echo $decerement = $num1 - $num2;
// echo $Multiplay = $num1 * $num2;

// .......................................................

//                                      Comparison Operators

//              ==	Equal, ===	Identical, !=	Not equal,  >  Greater than, <	Less than,  >= Greater than or equal to, 
//              <=	Less than or equal to..   

//                                                    equal to

// $num1 = 10;
// $num2 = 10;


// if($num1 == $num2){
//     echo $num1. ' is equal to ' .$num2; 
// }
// else{
//     echo $num1. ' is Not equal to ' .$num2; 
// }

// // // // //               Second 

// echo $num1 === $num2;

// ....................

//                                    Not equal

// $num1 = 12;
// $num2 = 12;

// if($num1 != $num2){
//     echo $num1. ' is Not equal to ' .$num2; 
// }
// else{
//     echo $num1. ' is equal to ' .$num2; 
// }

// //          Second

// echo $num1 !== $num2;

// ......................

//                               Less than

// $num1 = 13;
// $num2 = 12;

// if ($num1 < $num2){
//         echo $num1. ' is Less then ' .$num2; 
// }
// else{
//         echo $num1. ' is Greater than ' .$num2; 
// }

//          Second

// echo $num1 > $num2;

// .......................

//                                      Greater than

// $num1 = 10;
// $num2 = 11;

// if ($num1 > $num2){
//         echo $num1. 'is Greater then ' .$num2; 
// }
// else{
//         echo $num1. ' is Less Then ' .$num2; 
// }

//          Second

// echo $num1 > $num2;

// .....................................................................

//                logical and      &&       if both conditions are equal then return true & Condition Print.

// $age = 22;

// if($age >= 18 && $age <= 21){
//     echo "You are Eligible.";
// }

// .....................................................................

//                                        Logical Operators 

//                      logical or ||          if One condition is true then print our Condition.

// $age = 17;

// if($age >= 18 || $age <= 21){
//     echo "You are Eligible.";
// }

// ...............

//                          logical not  !           Return Opposite result 

// $age = 19;

// if(!($age >= 18)){
//     echo "You are not Eligible.";
// }
// else{
//     echo "Sorry";
// }

// .....................................................................

//                                       Ternary Operator

//                                           if else

// $a = 5;

// if($a == 5){
//     echo 'Yes, Its Equal';
// }
// else{
//     echo ' No its not Equal';
// }

// // // // ..............
    
// //                                    Ternary Operator

// echo ($a == 5) ? 'Yes, Its Equal' : 'No! its not Equal';

// ..............................................................

//                                       Array        

// $colors = [10, 'red', 'blue', 'pink', 'yellow', true];


// echo $colors[3];

//                                   Second Method

// $data = array(10, 20, 'Tech Step', true, false, null);


// echo "<pre>";
// print_r($data);
// echo "</pre>";

// ........................................................

//                                   Associative Array

//          Associative arrays are arrays that use named keys that you assign to them.


// $age = [
//   "SrNo" => 01,
//   "Name" => "Tech Step",
//   "Profession" => "Developer",
//   "Class" => "MCS",
//   "Uni" => "GC",
// ];

// echo "<pre>";
// print_r($age);
// echo "</pre>";

// // // // // // // // // // // //                                        Second

//    $data = array('a' => 'Tech Step', 'b' => 'Web Development', 'c' => 'Games Development');

// // echo $data['c'];

// echo "<pre>";
// print_r($data);
// echo "</pre>";

// ...................................................................

//                                   Array Key Functions

//                  using for array containing the keys 0-1-2-3-4..


// $age = [
//   "a" => 18,
//   "b" => 22,
//   "c" => 25,
//   "d" => 30,
//   "e" => 35,
// ];


// $newarray = array_keys($age);

// echo "<pre>";
// print_r($newarray);
// echo "</pre>";

// ........................................................................

//                               Multidimensional Array

  // $emp = [
  //   [ "Asim", "Ali", "Isb", 40000],
  //   ["Ali", "Fiaz", "Lhr", 30000],
  //   ["Tech", "Step", "Swl", 20000],
  //   ["Asim", "Ali", "Mlt", 10000],
    
  // ];

  // echo "<pre>";
  // print_r($emp);
  // echo "</pre>";


//.......................................................... 

//                        In_array    &    Array_search Function

//                                   In_array 
//                      in_array returen 1 for true  or  empty for false

    // $fruits = ['Apple', 'pear', 'watermelon', 'orange', 'lime'];

    // echo in_array('apple', $fruits);

    
//                                       Second Example with Condition.


    // if (in_array('apple', $fruits)){
    //   echo "find Successfully.";
    // }
    // else{
    //   echo " Sorry! Can't Find...";
    // }

// ..............................................................

//                                Array_search 

//                           return index number

    //  echo array_search('lime', $fruits);

// .........................................................

//                                Array_replace


// $fruits = ['apple', 'pear', 'watermelon', 'orange', 'lime'];

// $replace = ['cherry', 'strawberry'];

// $newfruits = array_replace($fruits, $replace);

// echo "<pre>";
// print_r($newfruits);
// echo "</pre>";

// ...........................................................

//                                          Array_pop & Array_push

//                           pop() method remove the last element from an array.

// $programing = ["Web Development", "App Development", "Games Development"];

// array_pop($programing);


// echo "<pre>";
// print_r($programing);
// echo "</pre>";

// // // // ....................

// // // //                  push() method add one or more elements to the end of an array.

// array_push($programing, "wordpress");

// echo "<pre>";
// print_r($programing);
// echo "</pre>";

// ..............................................................

//                              Array_shift & Array_unshift

//                      Array_shift Remove the first element

// $programing = ["Web Development", "App Development", "Games Development"];

// array_shift($programing);

// echo "<pre>";
// print_r($programing);
// echo "</pre>";

// // // ...................

// // //                       Array_unshift Insert the element in first index

// array_unshift($programing, "Tech Step");

// echo "<pre>";
// print_r($programing);
// echo "</pre>";

// ..................................................................


//                                       Array_Unique

//                        Array_unique Remove duplicate values from the array: 

// $colors = [
//   "a" => "red",
//   "b" => "green",
//   "g" => "green",
//   "c" => "orange",
//   "d" => "red",
//   "e" => "pink",
//   "f" => "pink",
// ];                                  

// $newcolors = array_unique($colors);


// echo "<pre>";
// print_r($newcolors);
// echo "</pre>";

// ..............................................................

//                                         Pow

// $number = 6;
// $power = 2;

// $result = pow($number , $power);

// echo $result;

// ...............................................................

//                      If Else Statement   /    Conditional Statement

// $day = 'sunday';

// if($day == 'sunday' ){
//     echo 'Today is Holiday..';
// }
// else{
//     echo 'Today is not Holiday..';
// }

// ...............................................................

//                              if else if  Statements

// $age = 14;

// if ($age < 15) {
// 	echo "You are kids";
// }
// elseif ($age < 22) {
// 	echo "You are Teenager";
// }
// elseif ($age < 40) {
// 	echo "You are Young";
// }
// elseif ($age < 70) {
// 	echo "You are Adult";
// }
// else{
// 	echo "You are old";
// }

// ..............................................................

//                                      Switch Case

// $favColor = 'red';

// switch($favColor){
//     case "blue": echo ' your Fav Color is Blue';
//     break;
//     case "red": echo ' your Fav Color is Red';
//     break;
//     case "green": echo ' your Fav Color is Green';
//     break;
//     case "white": echo ' your Fav Color is White';
//     break;
//     default: echo 'Sorry! i am not sure about your Fav Color';
// }

// ....................................................................

//                                  concatenate string and variable

// $name = 'Ali Ahmad';
// $degree = 'MCS';
// $age = 28;

// echo "My Name is {$name}. <br> My Qualification is {$degree}. <br> & My Age is {$age} Years.";

// .................................................................

//                                   Generate Random Number

// $random = rand(1001, 9999);

// echo $random;


// .....................................................................

//                               find the length of latters 

// $data = "Wel Come to Tech Step Sahwial";

// $lenght = strlen($data);

// echo "The Lenght of data is ".$lenght;

// ......................................................................

//                            count the number of words in a string

// $data = "Wel Come to Tech Step Sahiwal Punjab, Pakistan Sahiwal";

// $wordscount = str_word_count($data);

// echo "The Str WordsCounts is " .$wordscount;

// ......................................................................

//                                    Date & Time

// date_default_timezone_set('Asia/karachi');

// echo "Today is" .date(' D F Y'). "<br><br>";
// echo "Today is" .date(' d F y'). "<br><br>";
// echo "Today is" .date(' d m y'). "<br><br>";
// echo "Today is" .date(' d M y'). "<br><br>";


// // // // // // // // //                              Time

// echo "Now Hour is" .date(' h'). "<br>";
// echo "Now Minutes is" .date(' i'). "<br>";
// echo "Now Seconds is" .date(' s'). "<br>";
// echo "Meridiem is" .date(' a'). "<br>";

// echo "Current full time is " .date('h:i:s A');

// ......................................................................

//                                      For loop

// $tech = 12;

// for($tech = 1; $tech <=200; $tech++){
//     echo $tech. "<br>";
// }

// ........................................................................

//                                       function

  // function xyz(){
  //   echo "<h1> Hello! I am a PHP Function....</h1>";
  // }

  // xyz();
  // xyz();

// ...............................

//                               function with parameters

    // function abc($fname, $lname){
    //   echo "<h1>$fname $lname</h1>";
    // }

    // abc('Tech', 'Step');
    // abc('Web', 'Development');
    // abc('App', 'Development');
    // abc('Game', 'Development');

//....................................................................... 

//                                  Include

        // include 'index2.php';

// .......................................................................

//                      Generating dyanamic HTML content using PHP with Super Global Variable POST

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body> 
     
      <!-- <form method="POST">
        <label class="abc">Enter Your Fav Color:</label>
        <input type="text" name="favColor">
        <button name="submit">Check Color</button>
    </form>      -->

     <h1>          
           <?php

        // if(isset($_POST['submit'])){
        //     $favColorName = $_POST['favColor'];
 
        //     switch($favColorName){
        //     case "blue": echo ' your Fav Color is Blue';
        //     break;
        //     case "red": echo ' your Fav Color is Red';
        //     break;
        //     case "green": echo ' your Fav Color is Green';
        //     break;
        //     case "white": echo 'your Fav Color is White';
        //     break;
        //     default: echo 'Sorry! i am not sure about your Fav Color';
        // }
        // } 

   ?>

     </h1>

 </body>
</html> 

<!-- ................................................................ -->

<?php

//                                       Super Global Variable

//                                          Get & Post Methods
//                      if we are using Get method then data show in URL bar....

?>
 <!DOCTYPE html>
<html lang="en">
<head>
  <title>Document</title>
</head>
<body> 
<!-- 
     <form action="get_post.php" method="POST">
      Enter Your First Name: <input type="text" name="fname"> <br><br>
      Enter Your Last Name: <input type="text" name="lname"> <br><br>
      Enter Your Phone No: <input type="number" name="phone"> <br><br>
      <input type="submit" value="submit">
    </form> 
  -->


</body>
</html>       



<!-- ............................................................... -->
