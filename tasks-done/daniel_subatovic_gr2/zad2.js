document.getElementById("Subbut").addEventListener("click", function() {
  console.log("Button Clicked!");
  alert("Button Clicked!");
});

const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log("Sum of array:", sum);
const doubled = numbers.map(num => num * 2);
console.log("Doubled array:", doubled);

const num = 8;
if (num % 2 === 0) {
  console.log("Even");
} 
else {
  console.log("Odd");
}

document.getElementById("Backgr").addEventListener("click", function(){
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});
