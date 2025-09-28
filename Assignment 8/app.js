

// Question 1:

// let num = prompt("Enter a character");
// let code = num.charCodeAt(0);

// if (code >= 48 && code <= 57) {
//     alert("It is a number")
// }
// else if (code >= 65 && code <= 90) {
//     alert("It is a uppercase letter")
// }
// else if (code >= 97 && code <= 122){
//     alert("It is a lowercase letter")
// }
// else{
//     alert("Other character")
// };

// Question # 2

// let num = +prompt("Enter first integer")
// let num2 = +prompt("Enter second integer")

// if (num > num2){
//     alert(`${num} is greater than ${num2}`)
// }
// else if (num2 > num){
//     alert(`${num2} is greater than ${num}`)
// }
// else{
//     alert("Both are equal")
// }


// Question # 3

// let num = +prompt("Enter a number")

// if (num > 0){
//     alert("Positive number")
// }
// else if (num < 0){
//     alert("Negative number")
// }
// else{
//     alert("Zero")
// }

// Question # 4

// let char = prompt("Enter a single character").toLocaleLowerCase()

// if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//     alert(true)
// }
// else{
//     alert(False)
// }

// Question # 5

// let password = prompt("Enter your password").toLocaleLowerCase()
// let correctPassoword = ("abc123")

// if (!password){
//     alert("Enter your password")
// }
// else if (password === correctPassoword){
//     alert("Correct password")
// }
// else{
//     alert("Incorrect password")
// }


// Question # 6


// Incorrect code 

// let greeting;
// let hours = 13;
// if (hours < 18){
//     greeting =  "Good day"
//     else {
//         greeting = "Good evening";
//     }
// }


// Correct  code

// let greeting;
// let hours = 13;
// if (hours < 18){
//     greeting = "Good day";
// }
//     else{
//         greeting = "Good evening";
// }
// alert(greeting);



// Question # 7

// let time = +prompt("Enter time in 24 hours format (e.g. 1900)")

// if (time >= 0000 && time < 1200){
//     alert("Good Morning")
// }
// else if(time >=1200 && time < 1700){
//     alert("Good Afternoon!")
// }
// else if (time >= 1700 && time <= 2100){
//     alert("Good Evening")
// }
// else if (time >= 2100 && time <= 2359){
//     alert("Good Night")
// }