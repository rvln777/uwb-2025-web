let json = "https://jsonplaceholder.typicode.com/todos/";
let number = Math.floor(Math.random() * 100) + 1;

document.getElementById("fetchBtn").onclick = function () {
	fetch(json + number)
		.then(response => response.json())
		.then(data => {
			document.getElementById("dynamic-area").innerHTML =
				"<b>user:</b> " + data.userId +
				"<br><b>id:</b> " + data.id +
				"<br><b>title:</b> " + data.title +
				"<br><b>completed:</b> " + data.completed;
		})
		.catch(() => {
			document.getElementById("dynamic-area").textContent = "Błąd pobierania danych.";
		});
}