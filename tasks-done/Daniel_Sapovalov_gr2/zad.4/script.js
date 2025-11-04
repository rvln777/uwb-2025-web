document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("loadData");
    const contentDiv = document.getElementById("content");

    btn.addEventListener("click", () => {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then(res => res.json())
            .then(data => {
                contentDiv.innerHTML = `
                    <p><strong>Użytkownik:</strong> Nr.${data.userId}</p>
                    <p><strong>Zadanie</strong> #${data.id}</p>
                    <p><strong>Tytuł:</strong> ${data.title}</p>
                    <p><strong>Ukończone:</strong> ${data.completed ? "tak" : "nie"}</p>
                    <hr>
                    `;
            })
            .catch(err => {
                contentDiv.innerHTML = "<p>Wystąpił błąd podczas pobierania danych 😢</p>";
                console.error("Błąd:", err);
            });
    });
});
