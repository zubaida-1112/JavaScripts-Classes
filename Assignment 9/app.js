
// Question # 1 to 6
// let studentName1 = [];
// let studentName2 = new Array();
// let stringArrays = ["Apple", "Mango","Banana"];
// let numArrays = [1,2,3,4,5,6,7,8,9,0];
// let booleanArrays = [true,false];
// let mixedArrays = ["Apple",1,true]


// Question # 7

// let availableEducations = ["SSC","HSC","BSC","BS","BCOM","MS","M.Phil","PhD"]

// document.write("<h1>Qualifications in Pakistan:<h1/>")

// for (let i = 0; i < availableEducation.length; i++){
//     document.write((i+1) + " " + availableEducation[i]+"<br />" )
// }

// Question # 8

// let studentNames = ["Zubaida","Aniqa","Zahra"];
// let totalMarks = 500;
// let studentScores = [320,230,480];

// for (let i = 0; i < studentName.length; i++){
// let percentage = (studentScore[i] / totalMarks) * 100;
// document.write(`Score of ${studentName[i]} is ${studentScore[i]}. Percentage:  ${percentage}  %<br />`);   
// }

// Question # 8

// let colors = ["Red","Green","Purple"];
// document.write(colors.join ("<br />"));

// task 1

// let startColor = prompt("Add color at begnning");
// colors.unshift(startColor);
// document.write(colors.join ("<br />"));

// task 2

// let endColor = prompt("Add color at end");
// colors.push(endColor);
// document.write( colors.join ("<br />"))

// task 3

// colors.unshift ("pink","white");
// document.write(colors.join ("<br />") )

// task 4

// colors.shift();
// document.write(colors.join ("<br />"))

// task 5

// colors.pop();
// document.write(colors.join ("<br />"))


// task  6

// let index = +prompt("At which index to add a color");
// let colorName = prompt("Which color you want to add?");
// colors.splice(index , 0 , colorName);
// document.write(colors.join ("<br />"));

// task 7

// let delIndex = +prompt("Which index number you want to delete?");
// let delCount = +prompt("How much color you want to delete?");
// colors.splice(delIndex,delCount);
// document.write(colors.join ("<br />"))

//Question # 10

// let studentScore = [320,230,480,120];
// studentScore.sort((a,b)=> a - b);
// console.log(studentScore);

// Question # 11

// let cityList = ["karachi","lahore","islamabad","queeta","peshawar"]
// let selectedCity = cityList.slice(2,4)
// console.log(selectedCity)


// Question # 12

// let arr = ["This","is","my","cat"]
// let sentence = arr.join(" ");
// console.log(sentence);


// Question # 13

// let devices = [];
// devices.push("keyboard")
// devices.push("mouse")
// devices.push("printer")
// devices.push("monitor")

// console.log(devices.shift())
// console.log(devices.shift())
// console.log(devices.shift())
// console.log(devices.shift())


// Question # 14

// let devices = [];
// devices.push("keyboard")
// devices.push("mouse")
// devices.push("printer")
// devices.push("monitor")

// console.log(devices.pop());
// console.log(devices.pop());
// console.log(devices.pop());
// console.log(devices.pop());

// Question # 15

let manfacturer = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"];

document.write("<select>");
for (let i = 0; i < manfacturer.length; i++){
document.write("<option>" + manfacturer[i] + "</option>")};
document.write("</select>")