
// Question # 01

// Solution: 

// let firstName = prompt("Enter your first name")
// let lastName = prompt("Enter your last name")

// let userName = firstName + " " + lastName
// console.log(`Hello ${userName}`);

// Question # 2

// Solution:

// let userFavMobile = prompt("Enter your favourite mobile phone name")

// document.write(`My favourite mobile phone is : ${userFavMobile}`);
// document.write("<br //>")
// document.write(`Length of srting is : ${userFavMobile.length}`)

// Question # 3  

// Solution:

// let word = "Pakistani"
// let index = word.indexOf("n")
// document.write(`String: ${word}`);
// document.write("<br />");
// document.write(`Index of 'n': ${index}`);

// Question # 4

// Solution:

// let word = "Hello World"
// let index = word.lastIndexOf("l")
// document.write(`String: ${word}`);
// document.write("< br />");
// document.write(`Last index of 'l': ${index}`);

// Question # 5

// Solution:

// let word = "Pakistani";
// let char = word.charAt(3);
// document.write(`String: ${word}`);
// document.write("<br />");
// document.write(`Character at index 3: ${char}`);

// Question # 6

// Solution:

// let firstName = prompt("Enter your first name")
// let lastName = prompt("Enter your last name")
// let fullName = firstName.concat(" ", lastName)
// document.write(`Hello ${fullName}`)

// Question # 7

// Solution:

// let word = "Hyderabad"
// let newWord = word.replace("Hyder", "Islam")
// document.write(`City: ${word}`);
// document.write("<br />");
// document.write(`After replacement: ${newWord}`);


// Question # 8

// Solution:

// let message = "Ali and Sami are best friends. They play cricket and football together."
// let newMessage = message.replace(/and/g, "&")
// document.write(newMessage)

// Question # 9

// Solution:

// let num = "472"
// let numType  = typeof(num)
// document.write(`Value: ${num}`);
// document.write("<br />")
// document.write(`Type: ${numType}`);
// document.write("<br />")

// let convertedNumber = Number(num);
// let convertedType = typeof(convertedNumber)
// document.write("<br />")
// document.write(`Value: ${convertedNumber}`);
// document.write("<br />")
// document.write(`Type: ${convertedType}`);

// let userInput = prompt("Enter a string")
// let convertToUpperCase = userInput.toUpperCase()
// document.write(`User input: ${userInput}`);
// document.write("<br />")
// document.write(`Upper ccase : ${convertToUpperCase}`);

// Question # 10

// Solution:

// let userInput = prompt("Enter a string")

// let conversion = userInput.charAt(0).toUpperCase()+ userInput.slice(1).toLowerCase()

// document.write(`User input: ${userInput}`);
// document.write("<br />")
// document.write(`Title case : ${conversion}`);

// Question # 11

// Solution:

// let num = 35.36
// let str = num.toString().replace(".", "")
// document.write(`Number: ${num}`);
// document.write("<br />")
// document.write(`Result: ${str}`);

// Question # 12

// Solution:

// let userName = prompt("Enter your username")
// let invalidCharacters = ["@", ".", ",", "!"]
//  for (let i = 0; i <userName.length; i++){
// if (invalidCharacters.includes(userName[i])){
//     alert("Please enter a valid username")
//     break;
// }
//  }

// Question # 13

// Solution:

// let A = ["cake", "apple pie", "cookie", "chips", "patties"]
// let userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?")
// let inputToLowerCase = userInput.toLowerCase()
// if (A.includes(inputToLowerCase)){
// let index = A.indexOf(inputToLowerCase)
// document.write(`${userInput} is available at index ${index} in our bakery`)
// }
// else{
//     document.write(`We are sorry. ${userInput} is not available in our bakery`)
// }

// Question # 14

// Solution:

// let pass = prompt("Enter your password")

// let passLength = pass.length
// let firstChar = pass.charAt(0)
// let isFirstCharNum = firstChar >= '0' && firstChar <= '9'
// let hasAlphabet = false
// let hasNumber = false   
// for (let i = 0; i < passLength; i++){
//     let char = pass.charAt(i)
//     if (char >= 'A' && char <= 'Z' || char >= 'a' && char <= 'z'){
//         hasAlphabet = true  
//     }
//     else if (char >= '0' && char <= '9'){
//         hasNumber = true
//     }
// }
// if (passLength < 6){
//     alert("Password must be at least 6 characters long")
// }   
// else if (isFirstCharNum){
//     alert("Password should not start with a number")
// }
// else if (!hasAlphabet || !hasNumber){
//     alert("Password must contain both alphabets and numbers")
// }
// else{
//     alert("Password is valid")
// }


// Question # 15

// Solution:

// let university = "University of Karachi"

// let arr = university.split("")
// for (let i = 0; i < arr.length; i++){
//     document.write(arr[i]);
//     document.write("<br />")
// }


// Question # 16

// Solution:

// let userInput = prompt("Enter a string")
// let lastChar = userInput.charAt(userInput.length - 1)
// document.write(`User input: ${userInput}`);
// document.write("<br />")
// document.write(`Last character of input: ${lastChar}`);


// Question # 17

// Solution:

// let string = "The quick brown fox jumps over the lazy dog"
// let count = (string.match(/the/gi) || []).length
// document.write(`Text: ${string}`);
// document.write("<br />")
// document.write(`There are ${count} occurrence(s) of word 'the'`);




