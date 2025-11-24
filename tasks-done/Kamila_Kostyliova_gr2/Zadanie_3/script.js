
const container = document.getElementById('data-container');
const loadBtn = document.getElementById('loadBtn');

const projects = [
  {
    title: "Mój projekt",
    body: "Stworzyłam prostą stronę HTML z formularzem, tabelą i stylami CSS."
  },
  {
    title: "Strona portfolio",
    body: "Zaprojektowałam układ strony z wykorzystaniem Flexboxa i prostych animacji."
  },
  {
    title: "Interaktywna aplikacja JS",
    body: "Dodałam przycisk, który zmienia kolory tła oraz elementy generowane przez JavaScript."
  }
];

function showProjects() {
  container.innerHTML = projects.map(p => `
    <article>
      <h3>${p.title}</h3>
      <p>${p.body}</p>
    </article>
  `).join('');
}

loadBtn.addEventListener('click', showProjects);


container.innerHTML = "<p>Kliknij przycisk, aby zobaczyć moje projekty!</p>";
