
// Question # 1 


// Solution:
// let a = 10;

// document.write(`Result:`);
// document.write(`<br />`);

// document.write(`The value of a is: ${a} <br />`);

// document.write(`........................................... <br /><br />`);

// document.write(`The value of ++a is : ${++a}`);
// document.write(`<br />`);
// document.write(`Now the value of a is ${a}`);
// document.write(`<br />`);
// document.write(`<br />`);

// document.write(`The value of a++ is : ${a++}`);
// document.write(`<br />`);
// document.write(`Now the value of a is : ${a}`);
// document.write(`<br />`);
// document.write(`<br />`);

// document.write(`The value of --a is : ${--a}`);
// document.write(`<br />`);
// document.write(`Now the value of a is : ${a}`);
// document.write(`<br />`);
// document.write(`<br />`);

// document.write(`The value of a-- is : ${a--}`);
// document.write(`<br />`);
// document.write(`Now the value of a is : ${a }`);
// document.write(`<br />`);
// document.write(`<br />`);



// Question # 2

// Solution:

// let a = 2 , b = 1;

// let result = --a - --b + ++b + b--;

// document.write(`a is ${a} <br />`);
// document.write(`b is ${b} <br />`);
// document.write(`result is ${result} <br />`);
// document.write(`<br />`);

// document.write(`--a is ${--a} <br />`);
// document.write(`--a - --b is ${--a - --b} <br />`);
// document.write(`--a - --b + ++b is ${--a - --b + ++b} <br />`);
// document.write(`--a - --b + ++b + b-- is ${--a - --b + ++b + b--} <br />`);
// document.write(`<br />`);
// document.write(`Final Result is ${result} <br />`);
// document.write(`<br />`);

// document.write(`Explanation: <br />`);
// document.write(`--a means pre-decrement, so a becomes 1 <br />`);
// document.write(`--b means pre-decrement, so b becomes 0 <br />`);
// document.write(`++b means pre-increment, so b becomes 1 <br />`);
// document.write(`b-- means post-decrement, so b is used as 1 and then becomes 0 <br />`);
// document.write(`So the calculation is: 1 - 0 + 1 + 1 = 3 <br />`);  



// Question # 3
// Solution:

// let userName = prompt(`Enter your name:`);
// alert(`Welcome to our website, ${userName}!`);



// Question # 4
// Solution:

// let num = prompt(`Enter a number to show its multiplication table:`);
// if(num === "" || num === null){
//     num = 5;
// }
// document.write(`Multiplication Table of ${num} <br />`);
// document.write(`<br />`);


// Question # 5
// Solution:

let sub1 = "English";
let sub2 = "Maths";
let sub3 = "Urdu";

let totalMarks = 100;

let marks1 = 54;
let marks2 = 54;
let marks3 = 48;

let obtainedMarks = (`${marks1} + ${marks2} + ${marks3}`); 
let totalObtained = marks1 + marks2 + marks3;

let percentage = (`${totalObtained}/300 * 100`);
let totalPercentage = (totalObtained/300) * 100;

document.write(`<table border="1" cellspacing="0" cellpadding="5">`);
document.write(`<tr>`);
document.write(`<th>Subject</th>`);
document.write(`<th>Total Marks</th>`);
document.write(`<th>Obtained Marks</th>`);
document.write(`<th>Percentage</th>`);
document.write(`</tr>`);    
document.write(`<tr>`);
document.write(`<td>${sub1}</td>`);
document.write(`<td>${totalMarks}</td>`);
document.write(`<td>${marks1}</td>`);
document.write(`<td>${(marks1/totalMarks)*100}%</td>`);
document.write(`</tr>`);    
document.write(`<tr>`);
document.write(`<td>${sub2}</td>`);
document.write(`<td>${totalMarks}</td>`);
document.write(`<td>${marks2}</td>`);
document.write(`<td>${(marks2/totalMarks)*100}%</td>`);
document.write(`</tr>`);
document.write(`<tr>`);
document.write(`<td>${sub3}</td>`);
document.write(`<td>${totalMarks}</td>`);
document.write(`<td>${marks3}</td>`);
document.write(`<td>${(marks3/totalMarks)*100}%</td>`);
document.write(`</tr>`);
document.write(`<tr>`);
document.write(`<th></th>`);
document.write(`<th>${totalMarks * 3}</th>`);
document.write(`<th>${totalObtained}</th>`);
document.write(`<th>${totalPercentage}%</th>`);
document.write(`</tr>`);
document.write(`</table>`); 
document.write(`<br />`);




