// ----------------------Chapter 01
// Q-1 Greeting message
// alert("Welcome to Our Website");

// Q-2 message
// alert("Error! Please enter a valid password.")

// Q-3 message
// alert("Welcome to JS Land...\nHappy Coding");

// Q-4 message
// alert("Welcome to JS Land")
// alert("Happy Coding! \nPrevent this page from creating additional dialogue");

// // Q-5 message
// alert("Hello... I can run JS through my web browser's console")
// console.log("Hello... I can run JS through my web browser's console")


//------Chapter 02-------

// Q-1 declare a variable
// var userName;
// console.log(userName)

// // Q-2 Assigned Name
// var myName = "Syed Ahmer Ali";
// console.log(myName);

// // Q-3
// var message;
// message = "Hello World";
// alert(message);
// console.log(message);

// // Q-4
// var studentName = "Jhone Doe";
// alert(studentName);
// console.log(studentName);

// var studentAge = "15 years old";
// alert(studentAge);
// console.log(studentAge);

// var studentCertification = "Certified Mobile Application Development";
// alert(studentCertification);
// console.log(studentCertification);

// // Q-5
// var food = "Pizza \nPizz \nPiz \nPi \nP"
// alert(food);
// console.log(food);

// Q-6
// var email;
// email = "myemail@gmail.com";
// alert("My email address is " + email);
// console.log("My email address is " + email);

// Q-7
// var book;
// book = "A Smart way to learn JavaScript";
// alert("I am trying to learn from the book " + book);
// console.log("I am trying to learn from the book " + book);

// Q-8
// document.write("<p>Yah! I can write HTML through JavaScript</p>");

// Q-9
// var picArt = "▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬";
// alert(picArt);
// document.write("▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬");
// console.log(picArt);

// Chapter 03
// Q-1
// var age;
// age = 37;
// alert("I am " + age + " years old");
 
// Q-2
// var visitCount = localStorage.getItem("visitCount")
// if (visitCount === null) {
//     visitCount = 1;
// } else {
//     visitCount = parseInt(visitCount) + 1;
// }
// localStorage.setItem("visitCount", visitCount);
// alert("You have visited this site " + visitCount + " times");

// Q-3
// var birthYear = 1987;
// document.write("My birth year is " + birthYear + "<br>Data type of my declared variable is number");

// Q-4
// var visiterName = "John Doe";
// var productTitle = "T-Shirt";
// var productQty = 5
// document.write(visiterName + " ordered " + productQty + " " + productTitle + "(s)" + " XYZ Clothing Store");

// Chapter # 04
// Q-1
// var var1 = 1, var2 = 2, var3 = 3;

// Q-3
// 5 legal Name
// var price;
// var Price;
// var FullPrice;
// var fullPrice;
// var price1;
// var Price1;
// var $price;
// var $Price;
// var price$;
// var Price$;
// var name_2;

// // Illegal Name
// var var;
// var 123;
// var 1price;
// var full price;
// var full-price;

// Q-3
// document.write("<h1>Rules for naming JS variables</h1>");
// document.write("Variable names can only contain numbers, letter, $ and _. For example $my_1stVariable<br>");
// document.write("Variables must begin with a letter, $ or _. For example $name, _name or name<br>");
// document.write("Variable names are case sensitive<br>");
// document.write("Variable names should not be JS keyword");

// Chapter # 05
// Q-1
// var num1 = 3;
// var num2 = 5;
// var numSum = num1 + num2;
// document.writeln("<h2> Sum of " + num1 + " and " + num2 + " is " + numSum + "</h2>")

// Q-2
// var numSub = num1 - num2;
// document.write("<h2> Subtraction of " + num1 + " and " + num2 + " is " + numSub + "<h2>");

// var numMultiplication = num1 * num2;
// document.write("<h2> Multiplication of " + num1 + " and " + num2 + " is " + numMultiplication + "<h2>");

// var numDivision = num1 / num2;
// document.write("<h2> Division of " + num1 + " and " + num2 + " is " + numDivision + "</h2>");

// var numModulus = num1 % num2;
// document.write("<h2> Modulus of " + num1 + " and " + num2 + " is " + numModulus + "</h2>");

// Q-3 
// var mathExpression;
// document.write("Value after variable declaration is " + mathExpression + "<br>");
// mathExpression = 5;
// document.write("Initial value: " + mathExpression + "<br>");
// mathExpression++;
// document.write("Value after increment is " + mathExpression + "<br>");
// mathExpression += 7;
// document.write("Value after addition is " + mathExpression + "<br>");
// mathExpression--;
// document.write("Value after decrement is " + mathExpression + "<br>");
// mathExpression %= 3;
// document.write("The remainder is " + mathExpression);

// Q-4
// var singleTicket = 600;
// var ticketQty = 5
// var totalPrice = singleTicket * ticketQty;
// document.write("<h2>Total Cost to buy " + ticketQty + " tickets to a movie is " + totalPrice + "PKR</h2>");

// Q-5
// document.write("<h2>Table of 4</h2>");
// var tableNumber = 4;
// for (var i = 1; i <= 10; i++) {
// document.write("<p>" + tableNumber + " x " + i + " = " + (tableNumber * i) + "</p>")
// }

// // Q-5 Table for 5
// document.write("<h2>Table of 5</h2>");
// var tableNumber2 = 5;
// for (var i = 1; i <= 10; i++) {
//     document.write("<p>" + tableNumber2 + " x " + i + " = " + (tableNumber2 * i) + "</p>")
// }

// Q-6

// var celsiusTemp = 25;
// var fahrenheitTemp = (celsiusTemp * 9/5) + 32;
// document.write("<h2>" + celsiusTemp + "ºC is " + fahrenheitTemp + "ºF</h2>");

// var fahrenheitTemp = 70;
// var celsiusTemp = (fahrenheitTemp - 32) * 5/9;
// document.write("<h2>" + fahrenheitTemp + "ºF" + " is " + celsiusTemp + "ºC</h2>");

// Q-7
// var priceItem1 = 650;
// var qtyItem1 = 3;
// var priceItem2 = 100;
// var qtyItem2 = 7;
// var shoppingCharges = 100
// var totalCost = (priceItem1 * qtyItem1) + (priceItem2 * qtyItem2) + shoppingCharges;
// document.write("<h1>Shopping Cart</h1>");
// document.write("Price of item 1 is " + priceItem1 + "<br>");
// document.write("Quantity of item 1 is " + qtyItem1 + "<br>");
// document.write("Price of item 2 is " + priceItem2 + "<br>");
// document.write("Quantity of item 2 is " + qtyItem2 + "<br>");
// document.write("Shopping Charges " + shoppingCharges);
// document.write("<p>Total Cost of your order is " + totalCost + "<p>");

// Q-8
// var marksObtained = 804;
// var totalMarks = 980;
// var percentage = (marksObtained/totalMarks) * 100;

// document.write("<h1>Marks Sheet</h1>");
// document.write("Total marks: " + totalMarks + "<br>");
// document.write("Marks obtained: " + marksObtained + "<br>");
// document.write("Percentage: " + percentage + "%");


// Q-9
// var us$ = 10;
// var saudiRiyal = 25;
// var pakCurrency = (us$ * 104.80) + (saudiRiyal * 28);

// document.write("<h1>Currency in PKR</h1>");
// document.write("Total Currency in PKR: " + pakCurrency);

// Q-10
// var num = 4;
// var newNum = (((num + 5) * 10) / 2);
// console.log(newNum);
// document.write(newNum);

// Q-11
// var currentYear = 2025;
// var birthYear = 1987;
// var age = currentYear - birthYear;
// var age2 = age--;

// document.write("<h1>Age Calculator</h1>");
// document.write("Current Year: " + currentYear + "<br>");
// document.write("Birth Year: " + birthYear + "<br>");
// document.write("Your Age: " + age + " or " + age);

// Q-12
// var radius = 20;
// var circumference = 2 * 3.142 * radius;
// var area = 3.142 * radius * radius

// document.write("<h1>The Geometrizer</h1>");
// document.write("Radius of a circle: " + radius + "<br>");
// document.write("The Circumference is: " + circumference + "<br>");
// document.write("The area is: " + area);

// Q-13
// var snack = "Chocolate Chip";
// var currentAge = 15; 
// var maxAge = 65;
// var perDayRequirement = 3;

// var totalRequirement = ((maxAge - currentAge) * 365) * perDayRequirement;

// document.write("<h1>The Lifetime Supply Calculator</h1>")
// document.write("Favorite Snake: " + snack + "<br>");
// document.write("Current Age: " + currentAge + "<br>");
// document.write("Estimated Maximum Age: " + maxAge + "<br>");
// document.write("Amount of Snacks per day: " + perDayRequirement + "<br>");
// document.write("You will need " + totalRequirement +" " + snack + " to last you until the ripe old age of " + maxAge);

// ----------------Chapter 06 to 09
// Q-1
// var a = 10;
// document.write("Result:<br>");
// document.write("The value of a is: " + a + "<br>");
// document.write("...........................................<br>");
// document.write("<p></p>");

// var newSum = ++a;
// document.write("The value of ++a is: " + newSum + "<br>");
// document.write("The value of a is: " + a + "<br>");
// document.write("<p></p>");


// var newSum2 = a++;
// document.write("The value of a++ is: " + newSum2 + "<br>");
// document.write("The value of a is: " + a + "<br>");
// document.write("<p></p>");

// var newMinus = --a;
// document.write("The value of --a is: " + newMinus + "<br>");
// document.write("The value of a is: " + a + "<br>");
// document.write("<p></p>");

// var newMinus2 = a--;
// document.write("The value of a-- is: " + newMinus2 + "<br>");
// document.write("The value of a is: " + a + "<br>");
// document.write("<p></p>");

// Q-2
// var a = 2;
// var b = 1;
// var a2 = --a;
// document.write("--a = " + a2 + "<br>");
// document.write("The above statement shows the example of Pre-Decrement in which the number is decrement first then assigned to the new and old variable")
// document.write("<p></p>");

// var formulaPart1 = --a - --b;
// document.write("--a - --b = " + formulaPart1 + "<br>");
// document.write("it is because the --b is also a pre-decrement example (1-1=0)");
// document.write("<p></p>");

// var formulaPart2 = --a - --b + ++b;
// document.write("--a - --b + ++b = " + formulaPart2 + "<br>");
// document.write("it is because the b has become 0 after the pre-decrement and the first part we have already calculated as 0 (0 + 0 = 0)");
// document.write("<p></p>");

// var result = --a - --b + ++b + b--;
// document.write("--a - --b + ++b + b-- = " + result + "<br>");
// // document.write("it is because the first and second we have calculated that is 0, now b-- mean that the b that is = 0 already so we decreased it by 1 so it will become -1 and (0 +(-1) = -1)");
// document.write("Explanation # 2 (1 - 0 + 1 + 1 + 0 = 3)");
// document.write("<p></p>");

// document.write("a is " + a + "<br>");
// document.write("b is " + b + "<br>");
// document.write(result);

//  Q-3 
// var userName = prompt("Type your Name");
// alert("Welcome to our Website");

// Q-4 missing Q-5
// var userNumber;
// do {
//     userNumber = prompt("Please enter the number");
//     if (userNumber === null || userNumber == 0 || userNumber.trim() === "") {
//         userNumber = 5;
//         document.write("<h2>Table of " + userNumber + " (Default)</h2>");
//     } else {
//         document.write("<h2>Table of " + userNumber + "</h2>");
//         userNumber = parseInt(userNumber);
//     }
//     if (isNaN(userNumber)) {
//         alert("Not a valid Input! Please enter the number only");
//     }
// } while (isNaN(userNumber));

// for (var i = 1; i <= 10; i++) {
//     document.write("<p>" + userNumber + " X " + i + " = " + (userNumber * i) + "</p>")
// }

// var userNumber;
// do {
//     userNumber = prompt("Insert a Number for Table");
//     if (userNumber === null || userNumber == 0 || userNumber.trim === "") {
//         userNumber = 10;
//         document.write("<h2>Table of " + userNumber + " (Default)</h2>");
//     } else {
//         userNumber = parseInt(userNumber);
//     }
//     if (isNaN(userNumber)) {
//         alert("Invalid Input! Please enter the number only");
//     }
// } while (isNaN(userNumber));

// document.write("<h2>Table of " + userNumber + "</h2>");
// for (var i = 1; i <= 10; i++) {
//     document.write("<p>" + userNumber + " x " + i + " = " + (userNumber * i) + "</p>")
// }

// Q - 6

// const regex = /^[A-Za-z\s]+$/;
// do {
//     var subject1 = prompt("Enter first subject name:").trim(); 
//     if (!regex.test(subject1)) {
//         alert("Invalid Input! Enter the letters only");
//     }
// } while (!regex.test(subject1));

// do {
//     var subject2 = prompt("Enter second subject name:").trim();
//     if (!regex.test(subject2) || subject2.toLowerCase() === subject1.toLowerCase()) {
//         alert("Invalid Input! Enter a unique subject name with letters only");
//     }
// } while (!regex.test(subject2) || subject2.toLowerCase() === subject1.toLowerCase());

// do {
//     var subject3 = prompt("Enter third subject name:").trim();
//     if (!regex.test(subject3) || subject3.toLowerCase() === subject1.toLowerCase() || subject3.toLowerCase() === subject2.toLowerCase()) {
//         alert("Invalid Input! Enter a unique subject name with letters only");
//     }
// } while (!regex.test(subject3) || subject3.toLowerCase() === subject1.toLowerCase() || subject3.toLowerCase() === subject2.toLowerCase());

// var marksEach = 100;

// do {
//     var marks1 = prompt("Enter the Marks of " + subject1).trim();
//     var num1 = parseFloat(marks1);
//     if (isNaN(num1) || num1 > 100 || num1 < 0) {
//         alert("Invalid Input! Enter a number between 0 and 100");
//     }
// } while (isNaN(num1) || num1 > 100 || num1 < 0);

// do {
//     var marks2 = prompt("Enter the Marks of " + subject2).trim();
//     var num2 = parseFloat(marks2);
//     if (isNaN(num2) || num2 > 100 || num2 < 0) {
//         alert("Invalid Input! Enter a number between 0 and 100");
//     }
// } while (isNaN(num2) || num2 > 100 || num2 < 0);

// do {
//     var marks3 = prompt("Enter the Marks of " + subject3).trim();
//     var num3 = parseFloat(marks3);
//     if (isNaN(num3) || num3 > 100 || num3 < 0) {
//         alert("Invalid Input! Enter a number between 0 and 100");
//     }
// } while (isNaN(num3) || num3 > 100 || num3 < 0);

// var totalMarks = marksEach * 3;
// var obtainedMarks = num1 + num2 + num3;
// var percentage = (obtainedMarks / totalMarks) * 100; 

// var percentage1 = (marks1 / marksEach) * 100;
// var percentage2 = (marks2 / marksEach) * 100;
// var percentage3 = (marks3 / marksEach) * 100;

// document.write(`
//     <table>
//     <thead>
//         <tr>
//             <th>Subject</th>
//             <th>Total Marks</th>
//             <th>Obtained Marks</th>
//             <th>Percentage</th>
//         </tr>
//     </thead>
//     <tbody>
//         <tr>
//             <td>${subject1}</td>
//             <td>${marksEach}</td>
//             <td>${num1}</td>
//             <td>${percentage1 + "%"}</td>
//         </tr>

//         <tr>
//             <td>${subject2}</td>
//             <td>${marksEach}</td>
//             <td>${num2}</td>
//             <td>${percentage3 + "%"}</td>
//         </tr>

//         <tr>
//             <td>${subject3}</td>
//             <td>${marksEach}</td>
//             <td>${num3}</td>
//             <td>${percentage3 + "%"}</td>
//         </tr>

//         <tr>
//             <td></td>
//             <td><strong>${totalMarks}</td>
//             <td><strong>${obtainedMarks}</td>
//             <td><strong>${percentage + "%"}</td>
//         </tr>
//     </tbody>
//     </table>
// `);

// ---------------------Chapter 10 & 11

// Q-1

// const regex = /^[A-Za-z\s]+$/;
// var cityName;
// do {
//     var cityName = prompt("What is your city Name").trim();
//     if (!regex.test(cityName)) {
//         alert("Invalid Input! Please enter letters only");
//     }
// } while (!regex.test(cityName));

// if (cityName.toLowerCase() === "karachi" || cityName.toLowerCase() === "khi") {
//     alert("Welcome to the city of lights");
// } else {
//     alert("Answer is not correct");
// }

// Q-02
// const regex = /^[A-Za-z\s]+$/;
// var gender;
// do { 
//     gender = prompt("Please provide your gender").toLowerCase().trim();
//     if ((!regex.test(gender)) || !["male", "female", "m", "f"].includes(gender)) {
//         alert("Invalid Input! Please enter gender only")
//     }
// } while (!["male", "female", "m", "f"].includes(gender));

// if (gender === "m") gender = "male";
// if (gender === "f") gender = "female";

// if (gender === "male") {
//     alert("Welcome Sir")
// } else if (gender === "female") {
//     alert("Welcome Ma'am")
// } else {
//     alert("Invalid input: Please enter gender only")
// }

// Q-03
// const regex = /^[A-Za-z\s]+$/;
// var trafficLightColor;

// do {
//     trafficLightColor = prompt("Please enter the traffic light color");
//     if ((!regex.test(trafficLightColor)) || !["red", "green", "yellow"].includes(trafficLightColor)) {
//         alert("Invalid Input! PLease enter Red, Yellow, Green");
//     }
// } while (!["red", "yellow", "green"].includes(trafficLightColor));

// if (trafficLightColor === "red") {
//     alert("Must Stop");
// } else if (trafficLightColor === "yellow") {
//     alert("Ready to Move");
// } else if (trafficLightColor === "green") {
//     alert("Move Now");
// }

// Q-04
// var fuelQty;
// do {
//     fuelQty = prompt("Please enter the current fuel qty").trim();
//     if (isNaN(fuelQty) || fuelQty === "" || fuelQty < 0 ) {
//         alert("Please enter the valid number");
//     } else fuelQty = parseFloat(fuelQty);
// } while (isNaN(fuelQty) || fuelQty === "" || fuelQty < 0);

// if (fuelQty >= 0.25) {
//     alert("Keep Driving");
// } else if (fuelQty > 0 && fuelQty < 0.25) {
//     alert("PLease refill the fuel in the car");
// }

// Q-05
// var a = 4;
// if (++a === 5) { 
//     alert("given condition for variable a is true"); 
// }

// alert because first add then compare due to the pre increment rules

// var b = 82; 
// if (b++ === 83) {
//     alert("given condition for variable b is true"); 
// }
// no alert because first compare then add due to the post increment rule

// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true"); 
// } if (c === 13){
//     alert("condition 2 is true"); 
// } if (++c < 14) { 
//     alert("condition 3 is true"); 
// } if(c === 14) { 
//     alert("condition 4 is true"); 
// }

// only alert for condition 2 and condition 4 due to pre and post increment rules

// var materialCost = 20000; 
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost) { 
//     alert("The cost equals"); 
// }

// alert will appear

// if (true) {
//     alert("True");
// } if (false) { 
//     alert("False"); 
// }

// only alert for true because is not used

// if("car" < "cat") {
//     alert("car is smaller than cat"); 
// }

// alert will appear due to the unicode comparison

// Q-06
// do {
//     var marks1 = parseFloat(prompt("Please enter the marks for subject 1"));
//     if (isNaN(marks1) || (marks1 < 0) || (marks1 >100)) {
//         alert("Invalid input! please Enter the correct marks");
//     }
// } while ((isNaN(marks1)) || (marks1 < 0) || (marks1 > 100));

// do {
//     var marks2 = parseFloat(prompt("Please enter the marks for subject 2"));
//     if (isNaN(marks2) || marks2 < 0 || marks2 > 100) {
//         alert("Invalid input! Please enter the correct marks");
//     }
// } while ((isNaN(marks2)) || marks2 < 0 || marks2 > 100);

// do {
//     var marks3 = parseFloat(prompt("Please enter the marks for subject 3"));
//     if (isNaN(marks3) || marks3 < 0 || marks3 > 100) {
//     alert("Invalid input! Please enter the correct marks");
//     }
// } while ((isNaN(marks3)) || marks3 < 0 || marks3 > 100);

// var totalMarks = 300;
// var marksObtained = marks1 + marks2 + marks3;
// var percentage = Math.round((marksObtained / totalMarks) * 100);
// var grade;
// var remarks;

// if (percentage < 60) {
//     grade = "Fail"; 
//     remarks = "Sorry";
// } else if (percentage >= 60 && percentage < 70) {
//     grade = "B";
//     remarks = "You need to improve";
// } else if (percentage >=70 && percentage < 80) {
//     grade = "A";
//     remarks = "Good";
// } else if (percentage >=80) {
//     grade = "A-one";
//     remarks = "Excellent";
// }

// document.write("<h1>Marks Sheet</h1>");
// document.write("Total Marks : " + totalMarks + "<br>");
// document.write("Marks Obtained : " + marksObtained + "<br>");
// document.write("Percentage : " + percentage + "%" + "<br>");
// document.write("Grade: " + grade + "<br>");
// document.write("Remarks : " + remarks);

// Q-07

// var secretNumber = 8;
// do {
//     var number = parseFloat(prompt("Guess the number").trim());
//     if (isNaN(number)) {
//     alert("Invalid input! please enter the number");
//     }
// } while (isNaN(number));

// if (number === secretNumber) {
//     alert("Bingo! Correct answer");
// } else if (number + 1 === secretNumber) {
//     alert("Close enough to the correct answer");
// } else {
//     alert("Better luck! Next time");
// }

// Q-08
// do {
//     var number = parseInt(prompt("Please enter the number").trim());
//     if (isNaN(number)) {
//         alert("Invalid input!");
//     }
// } while (isNaN(number));
// if (number % 3 === 0 ) {
//     alert("Yes! The number is divisible by 3");
// } else {
//     alert("No! The number is not divisible by 3");
// }

// Q-09
// do {
//     var num = prompt("please enter the number").trim();
//     num = parseInt(num);
    
//     if (isNaN(num)) {
//         alert("Invalid input! Please enter the number");
//     }
// } while (isNaN(num));

// if (num % 2 === 0) {
//     alert("Even number");
// } else {
//     alert("Odd number");
// }

// Q-10
// do {
//     var temperature = parseFloat(prompt("Enter the temperature").trim());
//     if (isNaN(temperature)) {
//         alert("invalid input");
//     }
// } while (isNaN(temperature));

// if (temperature >= 40) {
//     alert("It is too hot");
// } else if (temperature >= 30 && temperature <= 40) {
//     alert("The weather today is Normal");
// } else if (temperature >= 20 && temperature <= 30) {
//     alert("Today's weather is cold");
// } else {
//     alert("OMG! Today's weather is cool");
// }

// Q-11
// do {
//     var num1 = parseFloat(prompt("enter the first number").trim());
//     if (isNaN(num1)) {
//         alert("Invalid Input!");
//     }
// } while (isNaN(num1));

// do {
//     var num2 = parseFloat(prompt("enter the second number").trim());
//     if (isNaN(num2)) {
//         alert("Invalid Input");
//     }
// } while (isNaN(num2));


// do {
//     var operator = prompt("enter the operator +, -, *, /, %").trim();
//     if (operator !== "+" && operator !== "-" && operator !== "*" && operator !== "/" && operator !== "%") {
//         alert("not a valid operator");
//     }
// } while ((operator !== "+" && operator !== "-" && operator !== "*" && operator !== "/" && operator !== "%"));

// if (operator === "+") {
//     alert("Answer is " + (num1 + num2));
// } else if (operator === "-") {
//     alert("Answer is " + (num1 - num2));
// } else if (operator === "*") {
//     alert("Answer is " + (num1 * num2));
// } else if (operator === "/") {
//     alert("Answer is " + (num1 / num2));
// } else if (operator === "%") {
//     alert("Answer is " + ((num1 / num2)*100) + "%");
// }

// ---------------------Chapter # 12 & 13

// Q-01
// do {
//     var character = prompt("Enter a single character");
//     if (!character || character.length !== 1) {
//     alert("Enter a single character only");
//     }
// } while (!character || character.length !== 1);

// if (!isNaN(character)) {
//     alert("The given character is a number");
// } else if (character >= "A" && character <= "Z") {
//     alert("The give character is an uppercase letter");
// } else if (character >= "a" && character <= "z") {
//     alert("The given character is a lowercase letter");
// } else {
//     alert("The given character is neither a number nor a letter")
// }

// Q-02
// do {
//     var integer1 = parseInt(prompt("Please enter first integer").trim());
//     if (isNaN(integer1) || integer1.toString().length !== 1) {
//         alert("Input an integer only")
//     }
// } while (isNaN(integer1) || integer1.length !== 1);

// do {
//     var integer2 = parseInt(prompt("please enter the second integer"))
//     if (isNaN(integer2) || integer2.toString().length !== 1) {
//         alert("Input an integer only")
//     }
// } while (isNaN(integer2) || integer2.length !==1);

// if (integer1 > integer2) {
//     document.write(integer1 + " is greater than " + integer2);
// } else if (integer2 > integer1) {
//     document.write(integer2 + " is greater than " + integer1);
// } else if (integer1 === integer2) {
//     document.write(integer1 + " & " + integer2 + ", both are same")
// }

// Q-03
// do {
//     var num = parseFloat(prompt("Please enter the number"));
//     if (isNaN(num)) {
//         alert("Please enter the number only");
//     }
// } while (isNaN(num));

// if (num > 0) {
//     document.write(num + " is a positive number");
// } else if (num < 0)  {
//     document.write(num + " is a negative number");
// } else {
//     document.write (num + " is Zero");
// }

// Q-04
// do {
//     var letter = prompt("Please enter the letter").toLowerCase().trim();
//     if (!isNaN(letter) || letter.length !== 1 || !/[a-z]/.test(letter)) {
//         alert("Please enter one letter only. A to Z")
//     }
// } while (!isNaN(letter) || letter.length !== 1 || !/[a-z]/.test(letter));

// if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
//     alert("It is a vowel");
//     document.write(letter + " is a vowel");
// } else {
//     alert("It is not a vowel");
//     document.write(letter + " is a consonant");
// }

// Q-05
// var passwordStored = "Abc123";

// do {
//     var passwordEntered = prompt("Please enter the password");
//     if (passwordEntered === null) {
//         alert("Operation Cancelled");
//         break;
//     }    
//     if (passwordEntered == "") {
//         alert("Please enter your password");
//     }
// } while (passwordEntered == "");

// if (passwordEntered !== null) {
//     if (passwordEntered === passwordStored) {
//         alert("Correct! The password you entered matched the original password");
//     } else {
//         alert("Incorrect password");
//     }
// }

// Q-06
// var hour = 13;
// do {
//     var inputHours = prompt("Please input hours");
//     if (inputHours === "" || isNaN(inputHours)) {
//         alert("please enter the hours")
//     }
// } while (inputHours === "" || isNaN(inputHours));

// if (inputHours !== null && !isNaN(inputHours)) {
//     if (inputHours > hour) {
//         alert("Good day");
//     } else {
//         alert("Good evening");
//     }
// }

// Q-07
// do {
//     var time = prompt("Please enter the time").trim();
//     if (isNaN(time) || time === "") {
//         alert("enter the valid valid time only");
//     }
// } while (isNaN(time) || time === "");

// if (time >= 0 && time < 1200) {
//     alert("Good Morning");
// } else if (time >= 1200 && time <1700) {
//     alert("Good Afternoon");
// } else if (time >= 1700 && time < 2100) {
//     alert("Good evening");
// } else if (time >= 2100 && time <= 2359) {
//     alert("Good night");
// } else if (time < 0 || time > 2400) {
//     alert("invalid input");
// }

//------------ Chapter 15 & 16

// // Q-01
// var studentsName = [];

// // Q-02
// var studentsName = {};

// // Q-03
// var studentsName = ["Syed", "Ahmer", "Ali"];

// // Q-04
// var studentsAge = [23, 24, 25];

// // Q-05
// var booleanArray = [true, false, false, true];

// // Q-06
// var mixedArray = ["Syed", 37, 82.5, true];

// Q-07
// var qualificationPak = ["SSC", "HCS", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];
// document.write("<h1>Qualifications in Pakistan</h1>");

// for (var i = 0; i < qualificationPak.length; i++) {
//     document.write((i + 1) + ") " + qualificationPak[i] + "<br>");
// }

// var myEducation = ["SSC", "HSC", "BBA", "MBA", "Certificate in Digital"];
// document.write("<h1>My Education</h1>");

// for (var i = 0; i < myEducation.length; i++) {
//     document.write((i + 1) + ") " + myEducation[i] + "<br>");
// }

// Q-08
// var studentsName = ["Michael", "John", "Tony"];
// var studentsScore = [320, 230, 480];
// var totalScores = 500;

// for (var i = 0; i < studentsName.length; i++) {
//     var percentage = (studentsScore[i] / totalScores) * 100;
//     document.write("Score of " + studentsName[i] + " is " + studentsScore[i] + "." + "Percentage: " + percentage + "%<br>");
// }

//Q-09
// var colorNames = ["Red", "Green", "Yellow"];
// document.write("<h1>Color Names</h1>");
// for (var i = 0; i < colorNames.length; i++) {
//     document.write(colorNames[i] + "<br>");
//     console.log(colorNames[i]);
// }

//b
// do {
//     var newColor = prompt("Please insert the color").trim().toLocaleLowerCase();
//     if (!(isNaN(newColor)) || !(/^[A-za-z\s]+$/.test(newColor)) || newColor === null || newColor === "") {
//         alert("please insert the color");
//     }
// } while (!(isNaN(newColor)) || !(/^[A-Za-z\s]+$/.test(newColor)) || newColor === null || newColor === "");

// colorNames.unshift (newColor);
// document.write("<h1>Updated Color Names</h1>");

// for (var i = 0; i < colorNames.length; i++) {
//     document.write(colorNames[i] + "<br>");
//     console.log(colorNames[i]);
// }

// do {
//     var newColor = prompt("Please insert the color").trim().toLocaleLowerCase();
//     if (!(isNaN(newColor)) || !(/^[A-Za-z\s]+$/).test(newColor) || newColor === null || newColor === "") {
//         alert("please insert color only");
//     }
// } while (!(isNaN(newColor)) || !(/^[A-z/a-z\s]+$/).test(newColor) || newColor === null || newColor === "");

// do {
//     var newColor2 = prompt("Please insert the  Second color").trim().toLocaleLowerCase();
//     if (!(isNaN(newColor2)) || !(/^[A-Za-z\s]+$/).test(newColor2) || newColor2 === null || newColor2 === "") {
//         alert("please insert color only");
//     }
// } while (!(isNaN(newColor)) || !(/^[A-Z/a-z\s]+$/).test(newColor2) || newColor2 === null || newColor2 === "");


// colorNames.unshift (newColor);
// colorNames.unshift (newColor2);
// document.write("<h1>Updated color names</h1>");

// for (var i = 0; i < colorNames.length; i++) {
//     document.write(colorNames[i] + "<br>");
// }

// var colorNames = ["Red", "Green", "Yellow"];
// document.write("<h1>Color Names</h1>");

// colorNames.pop ();

// for (var i = 0; i < colorNames.length; i++) {
//     document.write(colorNames[i] + "<br>");
//     console.log(colorNames[i]);
// }

// e
// do {
//     var newColor = prompt("please insert the color").trim().toLocaleLowerCase();
//     if ((isNaN(newColor)) || !/^[a-z/A-Z\s]+$/.test(newColor) || newColor === null || newColor.trim() === "") {
//         alert("Pease insert the color only");
//     }
// } while (!(isNaN(newColor)) || !/^[a-z/A-Z\s]+$/.test(newColor) || newColor === null || newColor === "");

// do {
//     var index = prompt("please insert the index number").trim();
//     if ((isNaN(index)) && index >= 0 && index < colorNames.length || index === null || index.trim() === "") {
//         alert("Pease insert the number only");
//     }
// } while ((isNaN(index)) && index >= 0 && index < colorNames.length|| index === null || index === "");

// colorNames.slice(index, 0, newColor.trim());
// document.write("<h1>UPdated Colors</h1>");

// for (var i = 0; i < colorNames.length; i++) {
//     document.write(colorNames[i] + "</br>");
// }

// var colorNames = ["red", "green", "blue", "yellow"];

// do {
//     var newColor = prompt("please insert the color").trim().toLocaleLowerCase();
//     if (!/^[a-z/A-Z\s]+$/.test(newColor) || newColor === null || newColor.trim() === "") {
//         alert("Pease insert the color only");
//     }
// } while (!/^[a-z/A-Z\s]+$/.test(newColor) || newColor === null || newColor === "");

// do {
//     var index = prompt("please insert the index number").trim();
//     if ((isNaN(index)) || index < 0 || index > colorNames.length || index === null || index.trim() === "") {
//         alert("Pease insert the number only");
//     }
// } while ((isNaN(index)) || index < 0 || index > colorNames.length|| index === null || index === "");

// index = parseInt(index);

// colorNames.splice(index, 0, newColor);
// document.write("<h1>Updated Colors</h1>");

// for (var i = 0; i < colorNames.length; i++) {
//     document.write(colorNames[i] + "</br>");
// }

//------------ Chapter 17 - 20
//Q-01

let multiArray = [];

//Q-02
// let matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
//   ]
// console.log(matrix);

// //Q-03
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//   }

// Q-04
// let number = parseInt(prompt("Enter the number for multiplication table:"));
// let length = parseInt(prompt("Enter the length of the table:"));

// for (let i = 1; i <= length; i++) {
//   console.log(`${number} x ${i} = ${number * i}`);
// }

// Q-05
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (let i = 0; i < fruits.length; i++) {
  console.log(`Element at index ${i} is ${fruits[i]}`);
}

// Q-06
// a
// let counting = [];
// for(let i = 1; i <= 15; i++) {
//     counting.push(i);
// }
// console.log("Counting:", counting.join(", "));

// b
// let reverseCounting = [];
// for(let i = 10; i >= 1; i--) {
//     reverseCounting.push(i);
// }
// console.log("Reverse counting:", reverseCounting.join(", "));

// c
// let even = [];
// for(let i = 0; i <= 20; i += 2) {
//     even.push(i);
// }
// console.log("Even:", even.join(", "));

// d
// let odd = [];
// for(let i = 1; i < 20; i += 2) {
//     odd.push(i);
// }
// console.log("Odd:", odd.join(", "));

// e
// let series = [];
// for(let i = 2; i <= 20; i += 2) {
//     series.push(i + "k");
// }
// console.log("Series:", series.join(", "));

// Q-07

// let A = ["cake", "apple pie", "cookie", "chips", "patties"];
// let userOrder = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?").toLowerCase();
// let index = A.indexOf(userOrder);

// if (index !== -1) {
//     alert(userOrder + " is available at index " + index + " in our bakery");
// } else {
//     alert("We are sorry. " + userOrder + " is not available in our bakery");
// }

// let A = [24, 53, 78, 91, 12];
// let largest = A[0]; // Start with the first element
// for (let i = 1; i < A.length; i++) {
//     if (A[i] > largest) {
//         largest = A[i];
//     }
// }

// console.log("Array items: " + A.join(","));
// console.log("The largest number is " + largest);

// Q-09
// let A = [24, 53, 78, 91, 12];
// let smallest = A[0]; // Start with the first element
// for (let i = 1; i < A.length; i++) {
//     if (A[i] < smallest) {
//         smallest = A[i];
//     }
// }

// console.log("Array items: " + A.join(","));
// console.log("The smallest number is " + smallest);

// Q-10
// for (let i = 1; i <= 100; i++) {
//   if (i % 5 === 0) {
//       console.log(i);
//   }
// }
