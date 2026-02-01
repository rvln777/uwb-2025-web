console.log("konsol przeglądarki!");
console.log(100);
let greeting = "to jest zmienna wypisana w konsoli.";
console.log(greeting);

let myString = "Tekst";          
const myNumber = 42;             
let isCodingFun = true;         

console.log("Typy danych:", myString, myNumber, isCodingFun);

function addNumbers(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

let result = addNumbers(15, 25);
console.log("Wynik funkcji dodawania (15 + 25): " + result);


let messageElement = document.getElementById("js-message");
messageElement.innerText = "ten tekst został podmieniony przez JavaScript.";
messageElement.style.color = "green"; 


let mainTitle = document.querySelector("h1");
mainTitle.style.backgroundColor = "yellow";