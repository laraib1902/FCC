const authorContainer = document.getElementById('author-container');
const loadMoreBtn = document.getElementById('load-more-btn');

let startingIndex = 0;
let endingIndex = 8;
let authorDataArr = [];

fetch('https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json')
  .then((res) => res.json())
  .then((data) => {
    authorDataArr = data;
    displayAuthors(authorDataArr.slice(startingIndex, endingIndex));  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --main-bg-color: #1b1b32;
  --light-grey: #f5f6f7;
  --dark-purple: #5a01a7;
  --golden-yellow: #feac32;
}

body {
  background-color: var(--main-bg-color);
  text-align: center;
}

.title {
  color: var(--light-grey);
  margin: 20px 0;
}

#author-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.user-card {
  border-radius: 15px;
  width: 300px;
  height: 350px;
  background-color: var(--light-grey);
  margin: 20px;
}

.user-img {
  width: 150px;
  height: 150px;
  object-fit: cover;
}

.purple-divider {
  background-color: var(--dark-purple);
  width: 100%;
  height: 15px;
}

.author-name {
  margin: 10px;
}

.bio {
  margin: 20px;
}

.error-msg {
  color: var(--light-grey);
}

.btn {
  cursor: pointer;
  width: 200px;
  margin: 10px;
  color: var(--main-bg-color);
  font-size: 14px;
  background-color: var(--golden-yellow);
  background-image: linear-gradient(#fecc4c, #ffac33);
  border-color: var(--golden-yellow);
  border-width: 3px;
}
  })
  .catch((err) => {
   authorContainer.innerHTML = '<p class="error-msg">There was an error loading the authors</p>';
  });

const fetchMoreAuthors = () => {
  startingIndex += 8;
  endingIndex += 8;

  displayAuthors(authorDataArr.slice(startingIndex, endingIndex));
  if (authorDataArr.length <= endingIndex) {
    loadMoreBtn.disabled = true;

    loadMoreBtn.textContent = 'No more data to load';
  }
};

const displayAuthors = (authors) => {
  authors.forEach(({ author, image, url, bio }, index) => {
    authorContainer.innerHTML += `
    <div id="${index}" class="user-card">
      <h2 class="author-name">${author}</h2>
      <img class="user-img" src="${image}" alt="${author} avatar">
      <div class="purple-divider"></div>
      <p class="bio">${bio.length > 50 ? bio.slice(0, 50) + '...' : bio}</p>
      <a class="author-link" href="${url}" target="_blank">${author} author page</a>
    </div>
  `;
  });
};

loadMoreBtn.addEventListener('click', fetchMoreAuthors);
