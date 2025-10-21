// Obsługa zdarzenia kliknięcia
document.getElementById("clickBtn").addEventListener("click", function() {
  console.log("Button Clicked!");
  alert("Button Clicked!");
});

// Tablica i pętla
const numbers = [1, 2, 3, 4, 5];

document.getElementById("sumBtn").addEventListener("click", function() {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log("Suma tablicy:", sum);
});

document.getElementById("doubleBtn").addEventListener("click", function() {
  const doubled = numbers.map(n => n * 2);
  console.log("Podwojone wartości:", doubled);
});

// Instrukcja warunkowa – parzysta/nieparzysta
document.getElementById("checkBtn").addEventListener("click", function() {
  const number = parseInt(document.getElementById("numberInput").value);
  if (isNaN(number)) {
    console.log("Podaj liczbę!");
  } else if (number % 2 === 0) {
    console.log(number + " jest parzysta");
  } else {
    console.log(number + " jest nieparzysta");
  }
});

// Zmiana koloru diva
document.getElementById("colorBtn").addEventListener("click", function() {
  const colors = ["red", "green", "blue", "orange", "purple"];
  const random = Math.floor(Math.random() * colors.length);
  document.getElementById("colorBox").style.backgroundColor = colors[random];
});
