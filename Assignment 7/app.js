// Question # 1

// let city = prompt(`Enter City Name`);

// if (city === "karachi"){
//     alert("Welcome to city of lights");
// }



// Question # 2

// let gender = prompt(`Enter Your Gender`);

// if (gender === "male"){
//     alert("Good Morning Sir");
// }
// else if (gender === "female"){
//     alert("Good Morning ma'am");
// }

// Question # 3

// let color = prompt(`Enter Traffic Signal Color`);

// if(color === "red"){
//       alert("Must Stop");
// }
// else if(color === "yellow"){
//     alert("Ready to move");
// }
// else if (color === "green"){
//     alert("Move now");
// }


// Question # 4

// let fuel = +prompt(`Enter Remaining Fuel in car (in litres)`);

// if (fuel < 0.25){
//     alert("Please refill the fuel in your car");
// }


// Question # 5

// condition 1

// let a = 4;

// if (++a === 5){
//     alert("given condition for variable a is true");
// }   

// condition 2

// let b = 82;

// if (b++ === 83){
//     alert("given condition for variable b is true");
// }
// else{
//     alert("given condition for variable b is false");
// }

// condition 3

// let c = 12;

// if (c++ === 13){
//     alert("condition 1 is true");
// }

// if (c === 13){
//     alert("condition 2 is true");
// }
// if (++c < 14){
//     alert("condition 3 is true");
// }
// if (c === 14){
//     alert("condition 4 is true");
// }


// condition 4

// let materialCost = 20000;
// let labourCost = 2000;

// let totalCost = materialCost + labourCost;
// if (totalCost === materialCost + labourCost){
//     alert("The cost equals");
// }

// condition 5
// if (true){
//     alert("True");
// }
// if (false){
//     alert("False");
// }

// condition 6

// if ("car < cat"){
//     alert("car is smaller than cat");
// }

// Question # 6

// let subject1 = +prompt(`Enter marks obtained in Subject 1`);
// let subject2 = +prompt(`Enter marks obtained in Subject 2`);
// let subject3 = +prompt(`Enter marks obtained in Subject 3`);
// let totalMarks = +prompt(`Enter Total Marks`);

// let obtainedMarks = subject1 + subject2 + subject3;
// let percentage = (obtainedMarks / totalMarks) * 100;
// let grade;
// let remarks;
// if (percentage >= 80){
//     grade = "A-one";
//     remarks = "Excellent";
// }
// else if (percentage >= 70){
//     grade = "A";
//     remarks = "Good";
// }
// else if (percentage >= 60){
//     grade = "B";
//     remarks = "You need to improve";
// }  
// else if (percentage < 60){
//     grade = "Fail";
//     remarks = "Sorry";
// }
// document.write(`<h1>Marks Sheet</h1>`);
// document.write(`Total Marks: ${totalMarks} <br>`);
// document.write(`Marks obtained: ${obtainedMarks} <br>`);
// document.write(`Percentage: ${percentage} <br>`);
// document.write(`Grade: ${grade} <br>`);
// document.write(`Remarks: ${remarks} <br>`);


// Question # 7

// let secretNumber = 5;
// let userInput = +prompt(`Guess the secret number (between 1 to 10)`);

// if (userInput === secretNumber){
//     alert("Bingo! Correct answer");
// }
// else if (userInput === ++secretNumber){
//     alert("Close enough to the correct answer");
// }

// Question # 8

// let number = +prompt(`Enter a number to check whether it is divisible by 3 or not`);

// if (number % 3 === 0){
//     alert(`${number} is divisible by 3`);
// }

// Question # 9
// let number = +prompt(`Enter a number to check whether it is even or odd`);

// if (number % 2 === 0){
// alert(`${number} is an even number`);}

// else {
//     alert(`${number} is an odd number`);
// }


// Question # 10

// let temperature = +prompt(`Enter Temperature`);

// if (temperature > 40){
//     alert("It is too hot outside.");
// }
// else if (temperature > 30){
//     alert("The weather today is Normal.");
// }
// else if(temperature > 20){
//     alert;("Today's weather is cool."); 
// }
// else if (temperature > 10){
//     alert("OMG! Today's weather is so Cool.");
// }

// Question # 11

// let firstNumber = +prompt(`Enter First Number`);
// let secondNumber = +prompt(`Enter Second Number`);
// let operation = prompt(`Enter Operation (+, -, *, /, %)`);

// if (operation === "+"){
// alert(firstNumber+secondNumber)
// }
// else if (operation === "-"){
//     alert(firstNumber-secondNumber)
// }
// else if (operation === "/"){
//     alert(firstNumber-secondNumber)
// }
// else if (operation === "*"){
//     alert(firstNumber*secondNumber)
// }
// else{
//     alert(firstNumber%secondNumber)
// }