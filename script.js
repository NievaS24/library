window.addEventListener('load', ()=>{
    // Declaro las variables -- Declare the variables.
    const myLibrary = [];
    const cardsContainer = document.querySelector(".cards-container");
    const form = document.querySelector("form");
    // Boton que hace aparecer el fomrulario -- Button that make the form appear.
    const btn = document.querySelector("#btn");
    // Boton que hace desaparecer el formulario -- Button that make the form disappear.
    const btnBack = document.querySelector("#btn-back");
    const formTitle = document.querySelector("#title");
    const formAuthor = document.querySelector("#author");
    const formPages = document.querySelector("#pages");
    const formRead = document.querySelector("#read");
    const submitBtn = document.querySelector(".btn-form");
    // Mensaje que se crea si falta algun dato -- Message that appear if some data is missing.
    const message = document.createElement("p");

    // Creo el constructor de ojetos -- Create the Object Constructor.
    function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    }
    // Funcion para añadir y mostrar libros -- Function to add y display books.
    function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    }

    function displayLibrary(library) {
        cardsContainer.innerHTML = "";
        library.forEach((book) => {
            let card = document.createElement("div");
            card.setAttribute("class", "cards")
            let h2 = document.createElement("h2");
            h2.textContent = book.title;
            let pAuthor = document.createElement("p");
            pAuthor.textContent = "Author: " + book.author;
            let pPages = document.createElement("p");
            pPages.textContent = "Pages: " + book.pages;
            let pRead = document.createElement("p");
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
            cardsContainer.appendChild(card);
        });
    }

    // Ejemplos creados para pruebas -- Examples created for testing.
    myLibrary[0] = {title: "Habitos Atomicos", author: "James Clear" , pages: 448, read: true};
    myLibrary[1] = {title: "Harry Potter y la piedra filosofal", author: "J.K. Rowling" , pages: 256, read: false};
    displayLibrary(myLibrary);
    
    
    btn.addEventListener("click", () => {
        btnBack.style.display = "block"
        form.style.display = "flex";
    });

    btnBack.addEventListener("click", () => {
        btnBack.style.display = "none"
        form.style.display = "none"
        message.textContent = "";
        formTitle.value = "";
        formAuthor.value = "";
        formPages.value = "";
        formRead.checked = false;
    })
    
    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();
        message.textContent = "";
        if(formTitle.value != "" || formAuthor.value != "" || formPages.value != "") {
            form.style.display = "none";
            btnBack.style.display = "none"
            if(formRead.checked) {
                addBookToLibrary(formTitle.value, formAuthor.value, formPages.value, true);
            } else {
                addBookToLibrary(formTitle.value, formAuthor.value, formPages.value, false);
            }
            formTitle.value = null;
            formAuthor.value = null;
            formPages.value = null;
            formRead.checked = false;
            displayLibrary(myLibrary);
        } else {
            message.textContent = "Missing Data";
            message.style.color = "red";
            message.style["text-align"] = "center";
            form.insertBefore(message, submitBtn);
        }
    }); 
});
