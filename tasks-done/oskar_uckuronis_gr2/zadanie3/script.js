// ✅ JavaScript task: fetch() from a public API and display in HTML
const loadBtn = document.getElementById("loadBtn");
const dynamicContent = document.getElementById("dynamicContent");

function renderLoading() {
  dynamicContent.innerHTML = "<p class='hint'>Loading posts from API...</p>";
}

function renderError(message) {
  dynamicContent.innerHTML = `<p class='hint'>Error: ${message}</p>`;
}

function renderPosts(posts) {
  dynamicContent.innerHTML = "";

  posts.forEach(post => {
    const article = document.createElement("article");
    article.className = "post";

    const title = document.createElement("h3");
    title.textContent = post.title;

    const body = document.createElement("p");
    body.textContent = post.body;

    article.appendChild(title);
    article.appendChild(body);
    dynamicContent.appendChild(article);
  });
}

async function loadPosts() {
  try {
    renderLoading();

    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const posts = await res.json();
    renderPosts(posts);
  } catch (err) {
    renderError(err.message);
  }
}

loadBtn.addEventListener("click", loadPosts);
