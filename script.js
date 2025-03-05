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
    // Se creo una funcion en el prototipo de Book asi todos los libros creados puedan acceder a esta funcion -- Function created in Book's prototype so that al books created can access this function.
    Book.prototype.toggle = function () {
        if(this.read == true) {
            this.read = false;
        }else{
            this.read = true;
        }
        displayLibrary(myLibrary);
    }
    // Funcion para añadir y mostrar libros -- Function to add y display books.
    function addBookToLibrary(title, author, pages, read) {
        let book = new Book(title, author, pages, read);
        myLibrary.push(book);
    }

    function displayLibrary(library) {
        // Limpia el container para que no se repitan los libros cada vez que se ejecute la funcion -- Clear the container so books doesn't repeat.
        cardsContainer.innerHTML = "";
        library.forEach((book, index) => {
            let card = document.createElement("div");
            card.setAttribute("class", "cards");
            card.setAttribute("id", "card-" + index);
            let h2 = document.createElement("h2");
            h2.textContent = book.title;
            let pAuthor = document.createElement("p");
            pAuthor.textContent = "Author: " + book.author;
            let pPages = document.createElement("p");
            pPages.textContent = "Pages: " + book.pages;
            let pRead = document.createElement("p");
            pRead.style["border-radius"] = "15px";
            pRead.style["user-select"] = "none";
            if (book.read === true) {
                pRead.textContent = "Already read";
                pRead.style["background-color"] = "#7bb074";
            } else {
                pRead.textContent = "To read";
                pRead.style["background-color"] = "#ec5353";
            }
            pRead.addEventListener("click", () => {
                book.toggle();
            });
            const removeBtn = document.createElement("button");
            removeBtn.setAttribute("class", "remove-button");
            removeBtn.setAttribute("data-index", index);
            removeBtn.textContent = "-";
            removeBtn.addEventListener("click", () => {
                myLibrary.splice(index, 1);
                displayLibrary(myLibrary);
            });
            card.appendChild(removeBtn);
            card.appendChild(h2);
            card.appendChild(pAuthor);
            card.appendChild(pPages);
            card.appendChild(pRead);
            cardsContainer.appendChild(card);
        });
    }

    // Ejemplos creados para pruebas -- Examples created for testing.
    myLibrary[0] = new Book("Habitos Atomicos", "James Clear", 448, true);
    myLibrary[1] = new Book("Harry Potter y la piedra filosofal", "J.K. Rowling", 256, false);
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
        if(formTitle.value != "" && formAuthor.value != "" && formPages.value != "") {
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