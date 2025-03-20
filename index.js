function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(data => {
      renderBooks(data);
      return data;
    })
    .catch(error => console.error("Error fetching books:", error));
}

function renderBooks(books) {
  const main = document.querySelector('main');
  main.innerHTML = ''; // Clear previous content

  books.forEach(book => {
    const bookElement = document.createElement('p');
    bookElement.textContent = book.title;
    main.appendChild(bookElement);
  });
}
