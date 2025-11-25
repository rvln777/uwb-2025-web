// ----------------------------------
// EVENT HANDLING
// ----------------------------------
document.getElementById("clickBtn").addEventListener("click", () => {
    console.log("Button Clicked!");
    alert("Kliknąłeś przycisk!");
});

// ----------------------------------
// LOOPS & ARRAYS
// ----------------------------------
let numbers = [2, 5, 10, 20];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("Suma liczb:", sum);

let doubled = numbers.map(num => num * 2);
console.log("Podwojone wartości:", doubled);

// ----------------------------------
// CONDITIONAL STATEMENTS
// ----------------------------------
let number = 7;

if (number % 2 === 0) {
    console.log(number + " jest parzysta");
} else {
    console.log(number + " jest nieparzysta");
}

// ----------------------------------
// DOM MANIPULATION – RANDOM COLOR
// ----------------------------------
document.getElementById("colorBtn").addEventListener("click", () => {
    let box = document.getElementById("colorBox");

    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

    box.style.backgroundColor = randomColor;
});
