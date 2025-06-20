function loadFeed() {
  const feedContainer = document.getElementById('feed-container');

  fetch('posts.json')
    .then(response => response.json())
    .then(posts => {
      posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');

        const titleElement = document.createElement('h2');
        titleElement.textContent = post.title;

        const contentElement = document.createElement('p');
        contentElement.textContent = post.content;

        const likesElement = document.createElement('p');
        likesElement.innerHTML = `Likes: <span id="likes-${post.id}">${post.likes}</span>`;

        const likeButton = document.createElement('button');
        likeButton.textContent = 'Like';
        likeButton.classList.add('like-button');
        likeButton.dataset.postId = post.id;

        const tipButton = document.createElement('button');
        tipButton.textContent = 'Tip';
        tipButton.classList.add('tip-button');
        tipButton.dataset.postId = post.id;

        likeButton.addEventListener('click', () => handleLike(post.id));
        tipButton.addEventListener('click', () => handleTip(post.id));

        postDiv.appendChild(titleElement);
        postDiv.appendChild(contentElement);
        postDiv.appendChild(likesElement);
        postDiv.appendChild(likeButton);
        postDiv.appendChild(tipButton);

        feedContainer.appendChild(postDiv);
      });
    })
    .catch(error => console.error('Error loading feed:', error));
}

function handleLike(postId) {
  console.log(`Like button clicked for post ${postId}`);
  const likesSpan = document.getElementById(`likes-${postId}`);
  if (likesSpan) {
    likesSpan.textContent = parseInt(likesSpan.textContent) + 1;
  }
}

function handleTip(postId) {
  console.log(`Tip button clicked for post ${postId}`);
}

loadFeed();
