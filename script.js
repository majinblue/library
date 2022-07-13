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

// Create a constructor to build our books
function Book(title, author, genre, pageCount) {
  this.title = title || '';
  this.author = author || '';
  this.genre = genre || '';
  this.pageCount = pageCount || 0;
}

form.addEventListener('submit', (e) => {
  // Stops the browser from redirecting to another page once submitted
  e.preventDefault();

  // Gather all the data needed to create the book;
  const title = document.getElementById('book-title').value;
  const author =  document.getElementById('author').value;
  const genre = document.getElementById('genre').value
  const pageCount = document.getElementById('page-count').value

  // Create a new book using the Book constuctor
  const book = new Book(title, author, genre, pageCount);

  // Create an element that's going to represent the book
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
  const allInputs = document.querySelectorAll('input')
  allInputs.forEach(input => {
    input.value = ''
  });

  // Hide the form and unblur the background
  form.style.display = 'none';
  navigation.classList.remove('blurred');
  mainContent.classList.remove('blurred')
})