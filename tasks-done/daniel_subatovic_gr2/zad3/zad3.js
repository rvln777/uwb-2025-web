fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => {const postsContainer = document.getElementById("posts");

data.slice(0, 5).forEach(post => {
          const div = document.createElement("div");
          div.className = "post";
          div.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
          postsContainer.appendChild(div);
        });
    })