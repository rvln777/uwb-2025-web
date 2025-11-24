console.log("Witaj w konsoli tej strony!");
console.log("Liczba testowa:", 42);

let tekst = "To jest przykładowa zmienna.";
console.log(tekst);

let a = 5;
let b = 7;

function suma(x, y) {
    return x + y;
}

console.log("Wynik funkcji suma:", suma(a, b));

document.getElementById("main-title").textContent = "Witaj na mojej polskiej stronie!";
document.querySelector(".subtitle").style.color = "#b82d86";

const boxy = document.querySelectorAll(".box");

boxy.forEach(box => {
    box.style.transition = "0.3s";
    box.addEventListener("mouseover", () => {
        box.style.transform = "scale(1.03)";
    });
    box.addEventListener("mouseout", () => {
        box.style.transform = "scale(1)";
    });
});
