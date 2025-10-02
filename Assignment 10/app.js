
// Question # 1

// Solution of Question # 1
// const arr = [[],[]];
// console.log(arr);

// Question # 2

// Solution of Question # 2
// const matrix = [[0,1,2,3],[1,0,1,2],[2,1,0,1]]
// for (let i = 0; i < matrix.length; i++){
// document.write(matrix[i].join(" "))
// document.write("<br />")
// }

// Question # 3

// Solution of Question # 3
// for(let i = 1; i <= 10; i++){
//     document.write(i);
//     document.write("<br />");
// }

// Qiestion # 4

// Solution of Question # 4

// let tableNum = +prompt("Enter a number to show its multiplication table");
// let tableLength = +prompt("Enter length of multiplication table");

// document.write("Multiplication table of " + tableNum);
// document.write("<br />");
// document.write("Length " + tableLength);
// document.write("<br />");
// document.write("<br />");   
// for(let i = 1; i <= tableLength; i++){
//     document.write(tableNum + " x " + i + " = " + tableNum * i);
//     document.write("<br />");
// }

// Question # 5

// Solution of Question # 5
// const fruits = ["apple","banana","mango","orange","stawberry"];

// for (let i = 0; i < fruits.length; i++){
//     document.write(fruits[i]);
//     document.write("<br />");
// }

// Question # 6

// Solution of Question # 6

// task 1
// document.write("<h2>Counting:</h2>");
// for (let i = 1; i <= 15; i++){
//     document.write(`${i} , `);
// }

// task 2

// document.write("<h2>Reverse Counting:</h2>");
// for (let i = 10; i >= 1;i --){
//     document.write(`${i} , `);
// }

// task 3

// document.write("<h2>Even:</h2>");
// for (let i = 0; i <= 20; i +=2){
//     document.write(`${i} , `);
// }

// task 4

// document.write("<h2>Odd:</h2>");
// for (let i = 1; i <=20;i +=2){
//     document.write(`${i} , `);
// }

// task 5
// document.write("<h2>Series:</h2>");
// for (let i = 2; i <= 20; i +=2){
//     document.write(`${i}k , `);
// }

// Question # 7

// Solution of Question # 7

// const A = ["cake","apple pie","cookie","chips","patties"];
// let search = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// search = search.toLowerCase();
// let found = false;

// for (let i = 0; i < A.length; i++){
//     if (A[i] === search){
//         document.write(search + " is available at index " + i + " in our bakery");
//         found = true;
//         break;
//     }
// }
// if (found === false){
// document.write(`We are sorry ${search} is not available in our bakery`);

// }

// Question # 8

// Solution of Question # 8
// const A = [24,53,78,91,12];
// let largest = A[0];
// for (let i = 1; i < A.length; i++){
//     if (A[i] > largest){
//         largest = A[i];
//     }   
// }
// document.write("The largest number is " + largest);

// Question # 9

// Solution of Question # 9
// const A = [24,53,78,91,12];
// let smallest = A[0];
// for (let i = 1; i < A.length; i++){
//     if (A[i] < smallest){
//         smallest = A[i];
//     }
// }
// document.write("The smallest number is " + smallest);

// Question # 10

// Solution of Question # 10
for (let i = 1; i <= 100; i++){
    if (i %  5 === 0){
        document.write(i + " , ");
    }
}