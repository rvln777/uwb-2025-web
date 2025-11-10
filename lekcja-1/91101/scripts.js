console.log("Cześć! To moja pierwsza strona z JavaScript!");
console.log(2025);
let imie = "Kamila";
console.log("Witaj, " + imie + "!");

let wiek = 20;
const student = true;
let ulubionyKolor = "różowy";
console.log(wiek, student, ulubionyKolor);

function suma(a, b) {
  return a + b;
}
console.log("Wynik sumy:", suma(5, 8));

document.getElementById("textDiv").textContent = "Tekst został zmieniony przez JavaScript!";

document.getElementById("changeBtn").addEventListener("click", function() {
  document.body.style.backgroundColor = "lightblue";
  console.log("Kolor tła został zmieniony!");
});