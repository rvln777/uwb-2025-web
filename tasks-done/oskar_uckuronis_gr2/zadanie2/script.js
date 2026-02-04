// EVENT HANDLING
document.getElementById("clickBtn").addEventListener("click", function() {
    console.log("Button Clicked!");
    alert("Button Clicked!");
});

// LOOPS AND ARRAYS
let numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("Sum:", sum);

let doubled = numbers.map(function(n) {
    return n * 2;
});
console.log("Doubled:", doubled);

// CONDITIONAL
let num = 7;
if (num % 2 === 0) {
    console.log(num + " is even");
} else {
    console.log(num + " is odd");
}

// DOM MANIPULATION
document.getElementById("colorBtn").addEventListener("click", function() {
    let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("colorBox").style.backgroundColor = randomColor;
});
