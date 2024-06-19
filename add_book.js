const myLibrary = [];

function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return `${title} \n by ${author} \n ${pages} pages`;
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    //book.datapoint= myLibrary.indexOf(book);
    const deletebtn = document.createElement('button');
    deletebtn.innerText = 'DELETE';
    deletebtn.addEventListener("click",()=>{main_card.removeChild(deletebtn.parentNode.parentNode)}
    //myLibrary.splice(1,)//data attribute
    )
    const card = document.createElement('div');
    const btndiv = document.createElement('div');

    const readbtn = document.createElement('button');
    if(book.read==true){
        readbtn.innerText= 'READ';
    }
    else{
        readbtn.innerText= 'UNREAD';
    }

    readbtn.addEventListener("click",()=>{
        if(book.read==true){
            readbtn.innerText= 'UNREAD';
            book.read = false;
        }
        else{
            readbtn.innerText= 'READ';
            book.read = true;
        }
    })
    
    card.innerText = book.info();
    btndiv.appendChild(readbtn)
    btndiv.appendChild(deletebtn)
    card.appendChild(btndiv)
    main_card.append(card);
}

/*function display_book(){
    const main_card = document.getElementById('main_card')
    myLibrary.forEach(element => {
        const card = document.createElement("div");
        card.innerText = element.info();
        main_card.append(card);
    });
}*/



let book1 = new Book('The Hobbit','J.R.R. Tolkien', 295, false);
addBookToLibrary(book1);
let book2 = new Book('Harry Potter','J.k Rowling', 400, true);
addBookToLibrary(book2);

//display_book();

const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const book_name = favDialog.querySelector('#name');
const author = favDialog.querySelector('#author');
const pages = favDialog.querySelector('#pages');
const read = favDialog.querySelector('#read');
const confirmBtn = favDialog.querySelector("#confirm");
const close = document.querySelector("#close");

close.addEventListener("click",()=>{
    favDialog.close()});


// "Show the dialog" button opens the <dialog> modally
showButton.addEventListener("click", () => {
  favDialog.showModal();
});

// Prevent the "confirm" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); // We don't want to submit this fake form
  let book_to_add=new Book(book_name.value,author.value,pages.value, read.checked)
  addBookToLibrary(book_to_add)
  favDialog.close(); // Have to send the select box value here.
});