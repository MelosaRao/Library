const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const book_name = favDialog.querySelector('#name');
const author = favDialog.querySelector('#author');
const pages = favDialog.querySelector('#pages');
const read = favDialog.querySelector('#read');
const confirmBtn = favDialog.querySelector("#confirm");
const close = document.querySelector("#close");

const myLibrary = [];
let id = 0;

class Book{
    
    constructor(title,author,pages,read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.id = 0;
    }

    info(){
        return `${this.title} \n by ${this.author} \n ${this.pages} pages`;
    }

    addBookToLibrary() {
        myLibrary.push(this);
        //book.datapoint= myLibrary.indexOf(book);
        this.id = id;
        id++;
        const deletebtn = document.createElement('button');
        deletebtn.innerText = 'DELETE';
        deletebtn.addEventListener("click",()=>{
        main_card.removeChild(deletebtn.parentNode.parentNode);
        myLibrary.splice(myLibrary.findIndex((element)=>element.id===this.id),1);}
        )
        const card = document.createElement('div');
        const btndiv = document.createElement('div');
    
        const readbtn = document.createElement('button');
        if(this.read==true){
            readbtn.innerText= 'READ';
        }
        else{
            readbtn.innerText= 'UNREAD';
        }
    
        readbtn.addEventListener("click",()=>{
            if(this.read==true){
                readbtn.innerText= 'UNREAD';
                this.read = false;
            }
            else{
                readbtn.innerText= 'READ';
                this.read = true;
            }
        })
        card.innerText = this.info();
        btndiv.appendChild(readbtn)
        btndiv.appendChild(deletebtn)
        card.appendChild(btndiv)
        main_card.append(card);
}
}

let book1 = new Book('The Hobbit','J.R.R. Tolkien', 295, false);
book1.addBookToLibrary();
let book2 = new Book('Harry Potter','J.k Rowling', 400, true);
book2.addBookToLibrary();


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
  book_to_add.addBookToLibrary()
  favDialog.close(); 
});