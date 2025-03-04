const myLibrary = [];
const container = document.querySelector(".container");
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
        //console.log(book.title);
        let card = document.createElement("div");
        card.setAttribute("class", "cards")
        let h2 = document.createElement("h2");
        h2.textContent = book.title;
        h2.style.color = "#666";
        let pAuthor = document.createElement("p");
        pAuthor.textContent = "Author: " + book.author;
        let pPages = document.createElement("p");
        pPages.textContent = "Pages: " + book.pages;
        let pRead = document.createElement("p");
        pRead.style.color = "#f0f0f0"
        pRead.style["border-radius"] = "15px";
        if (book.read === true) {
            pRead.textContent = "Already read";
            pRead.style["background-color"] = "#7bb074";
        } else {
            pRead.textContent = "To read";
            pRead.style["background-color"] = "#ec5353";
        }
        card.appendChild(h2);
        card.appendChild(pAuthor);
        card.appendChild(pPages);
        card.appendChild(pRead);
        container.appendChild(card);
    });
}

myLibrary[0] = {title: "Habitos Atomicos", author: "James Clear" , pages: 448, read: true};
myLibrary[1] = {title: "Harry Potter y la piedra filosofal", author: "J.K. Rowling" , pages: 256, read: false};

displayLibrary(myLibrary);