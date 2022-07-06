// Link the navigation and main content areas
const navigation = document.querySelector('nav')
const mainContent = document.querySelector('main')

// Link the add book button to a variable for manipulation
const bookButton = document.querySelector('#add')

// Link the book list section to a variable for manipulation
const bookList = document.querySelector('#book-list')

// Link the book info form
const form = document.querySelector('#form');

// Link the submit button
const submitButton = document.querySelector('button[type=submit]')


// When the button is clicked, have the user enter all the info about the book
// Title, Author, Genre, and Page Count
bookButton.addEventListener('click', function() {
  form.style.display = 'grid';
  navigation.classList.add('blurred');
  mainContent.classList.add('blurred')
})

form.addEventListener('submit', (e) => {
  // Stops the browser from redirecting to another page once submitted
  e.preventDefault();

  const book = {
    title: document.getElementById('book-title').value,
    author: document.getElementById('author').value,
    genre: document.getElementById('genre').value,
    pageCount: document.getElementById('page-count').value
  }
  
  const bookDiv = document.createElement('div') 
  bookDiv.classList.add('book')

  // Loop through the book object, to create p tags for each piece of data
  for (const property in book) {
    const pTag = document.createElement('p');
    const pTagText = document.createTextNode(book[property])
    pTag.appendChild(pTagText)
    bookDiv.appendChild(pTag)
  }

  // Append the book to the book-list
  bookList.appendChild(bookDiv)

  // Clear all the entered form data
  for (const property in book) {
    book[property] = ''
  }

  // Hide the form and unblur the background
  form.style.display = 'none';
  navigation.classList.remove('blurred');
  mainContent.classList.remove('blurred')
})