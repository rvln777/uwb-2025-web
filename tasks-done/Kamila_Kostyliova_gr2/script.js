const clickBtn = document.getElementById("clickBtn");
clickBtn.addEventListener("click", () => {
    console.log("Button Clicked!");
    alert("Button Clicked!");
});

const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("Sum:", sum);

const doubled = numbers.map(num => num * 2);
console.log("Doubled values:", doubled);

let number = 7;
if (number % 2 === 0) {
    console.log(number + " is even");
} else {
    console.log(number + " is odd");
}

const colorBtn = document.getElementById("colorBtn");
colorBtn.addEventListener("click", () => {
    const colors = ["lightblue", "lightgreen", "lightpink", "lightyellow"];
    const random = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = random;
});
