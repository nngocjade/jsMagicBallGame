const fruits = ["apple", "orange", "pear"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits.length);
console.log(fruits[fruits.length - 1]);


// GAME


const answers = ["Of course!", "Never!", "That's ridiculous", "Possibly maybe..."];
let message = document.getElementById("result");
let clickButton = document.getElementById("ask").addEventListener("click", play);


function play(){
 message.innerHTML = "";

 let anAnswer = answers[Math.floor(Math.random() * 3)];
 console.log(anAnswer);

 message.innerHTML = anAnswer;

 // console.log(answers[Math.floor(Math.random() * 3)]);
}
