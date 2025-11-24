
const klikBtn = document.getElementById("klikBtn");

klikBtn.addEventListener("click", () => {
    console.log("Button Clicked!");
    alert("Przycisk został kliknięty!");
});

const kolorBtn = document.getElementById("kolorBtn");
const magiczneOkno = document.getElementById("magiczne-okno");

kolorBtn.addEventListener("click", () => {
    const losowyKolor = "#" + Math.floor(Math.random()*16777215).toString(16);
    magiczneOkno.style.backgroundColor = losowyKolor;
});


const liczby = [2, 5, 7, 10, 3];
let suma = 0;

for (let i = 0; i < liczby.length; i++) {
    suma += liczby[i];
}

console.log("Suma tablicy:", suma);

const podwojone = liczby.map(num => num * 2);
console.log("Podwojone wartości:", podwojone);

let liczbaDoSprawdzenia = 7;

if (liczbaDoSprawdzenia % 2 === 0) {
    console.log(liczbaDoSprawdzenia, "– liczba parzysta");
} else {
    console.log(liczbaDoSprawdzenia, "– liczba nieparzysta");
}