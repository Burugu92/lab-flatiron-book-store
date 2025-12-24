const bookStore = {
    name: 'Flatbooks Technical Books',
    books: [
        {
            id:1,
            title: 'Eloquent JavaScript: A Modern Introduction to Programming',
            author: 'Marjin Haverbeke',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
            
        },
        {
            id:2,
            title: 'JavaScript & JQuery: Interactive Front-End Web Development',
            author: 'Jon Duckett',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
        },
        {
            id:3,
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        },
        {
            id:4,
            title: 'JavaScript: The Definitive Guide',
            author: 'David Flanagan',
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
            
        },
        {
            id:5,
            title: 'You Don’t Know JS',
            author: 'Kyle Simpson',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
        },
        {
            id:6,
            title: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'
            
        }
    ]
}

// Write your code here!
// Select the header element with id="header"
const bookStoreTitle = document.getElementById('header');

// Change the textContent to match the bookstore name
bookStoreTitle.textContent = bookStore.name;


// OPTIONAL: Remove the example book if it exists
const exampleBook = document.getElementById('delete-this');
if (exampleBook) {
  exampleBook.remove();
}

// Select the book list element where we'll append our books
const bookList = document.getElementById('book-list');

// Loop through every book in the bookStore.books array
bookStore.books.forEach(book => {
  
  // 1. CREATE ELEMENTS for each book
  const bookContainer = document.createElement('li');
  const bookTitle = document.createElement('h3');
  const bookAuthor = document.createElement('p');
  const bookImage = document.createElement('img');
  
  
  // Set bookTitle textContent to the title of the book
  bookTitle.textContent = book.title;
  
  // Set bookAuthor textContent to the author of the book
  bookAuthor.textContent = book.author;
  
  // Set bookImage src to the image url of the book
  bookImage.src = book.imageUrl;
  
  
  // Append image, title, and author to the container
  bookContainer.appendChild(bookImage);
  bookContainer.appendChild(bookTitle);
  bookContainer.appendChild(bookAuthor);
  
  
  // Add the completed book container to the main book list
  bookList.appendChild(bookContainer);
});
