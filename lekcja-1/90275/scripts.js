// Basic Console Outputs
console.log("To jest komunikat tekstowy w konsoli.");
console.log(12345);

let mojaZmienna = "Test zmiennej";
console.log(mojaZmienna);

// Variables and Data Types
let name = "Jan";            // string
const age = 30;              // number
let isStudent = true;        // boolean

console.log("Imię:", name);
console.log("Wiek:", age);
console.log("Czy jest studentem?", isStudent);

// Basic Functions
function addNumbers(a, b) {
    return a + b;
}

let sum = addNumbers(10, 20);
console.log("Suma 10 i 20 to:", sum);

// DOM Manipulation Basics
document.getElementById("text-element").textContent = "Tekst został zmieniony przez JavaScript!";

document.querySelector("h1").style.color = "blue";
