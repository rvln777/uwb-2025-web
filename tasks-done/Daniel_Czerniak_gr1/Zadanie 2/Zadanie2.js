document.getElementById('jsButton').addEventListener('click', function() {
  console.log('Button Clicked!');
  alert('Button Clicked!');
});

const numbers = [1, 2, 3, 4, 5];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log('Suma:', sum);

const doubled = numbers.map(num => num * 2);
console.log('Podwojone:', doubled);

const num = 10;
if (num % 2 === 0) {
  console.log(`${num} jest parzyste`);
} else {
  console.log(`${num} jest nieparzyste`);
}

document.getElementById('jsButton').addEventListener('click', function() {
  const box = document.getElementById('colorBox');
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

document.getElementById('userForm').addEventListener('submit', function(e) {
  e.preventDefault();
  console.log('Formularz wysłany!');
  alert('Dane zostały wysłane!');
});