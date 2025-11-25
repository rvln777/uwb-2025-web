// ---------------------
// BASIC CONSOLE OUTPUTS
// ---------------------

console.log("Hello from JavaScript!"); // tekst
console.log(123);                      // liczba

let myVariable = "Test variable";
console.log(myVariable);                // zmienna


// ---------------------
// VARIABLES AND DATA TYPES
// ---------------------

let name = "Sebastian";   // string
let age = 20;             // number
const isStudent = true;   // boolean

console.log(name, age, isStudent);


// ---------------------
// BASIC FUNCTIONS
// ---------------------

function addNumbers(a, b) {
    return a + b;
}

let result = addNumbers(5, 10);
console.log("Wynik funkcji:", result);


// ---------------------
// DOM MANIPULATION BASICS
// ---------------------

// getElementById – zmiana tekstu
let header = document.getElementById("mainTitle");
header.textContent = "Tekst zmieniony przez JavaScript!";

// querySelector – zmiana stylu
let paragraph = document.querySelector(".styled-text");
paragraph.style.color = "red";
paragraph.style.fontSize = "20px";
