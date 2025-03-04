const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

function displayLibrary(library) {
    library.forEach((book) => {
        console.log(book);
    });
}

myLibrary[0] = {title: "Habitos Atomicos", author: "James Clear" , pages: 500, read: false};
myLibrary[1] = {title: "Harry Potter y la piedra filosofal", author: "J.K. Rowling" , pages: 256, read: false};

displayLibrary(myLibrary);