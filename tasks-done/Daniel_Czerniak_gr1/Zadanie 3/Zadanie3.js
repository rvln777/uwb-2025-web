document.addEventListener('DOMContentLoaded', function() {
  loadPostsFromAPI();
});

function loadPostsFromAPI() {
  fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
    .then(response => response.json())
    .then(posts => {
      displayPosts(posts);
    })
    .catch(error => {
      console.error('Błąd:', error);
      document.getElementById('dynamicContent').innerHTML = 
        '<p>Błąd ładowania danych z API</p>';
    });
}

function displayPosts(posts) {
  const container = document.getElementById('dynamicContent');
  container.innerHTML = '';

  posts.forEach(post => {
    const postCard = document.createElement('div');
    postCard.className = 'post-card';
    postCard.innerHTML = `
      <h3 class="post-title">${post.title}</h3>
      <p class="post-body">${post.body}</p>
      <small>ID: ${post.id}</small>
    `;
    container.appendChild(postCard);
  });
}

document.getElementById('bounceBtn').addEventListener('click', function() {
  alert('Przycisk z animacją bounce!');
  console.log('Bounce button clicked!');
});

// Kontrola mediów
const video = document.getElementById('portfolioVideo');
const audio = document.getElementById('portfolioAudio');

video.addEventListener('loadstart', () => {
  console.log('Wideo się ładuje');
});

audio.addEventListener('play', () => {
  console.log('Audio odtwarza');
});