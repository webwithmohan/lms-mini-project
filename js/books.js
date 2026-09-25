
let books = JSON.parse(localStorage.getItem("books")) || []
  

const link = document.querySelector(".category-link");

//get Uniq Category Item

// const categorySet = new Set();
// books.forEach((book) => {
//   categorySet.add(book.category);
// });
// let categories = [...categorySet];
// console.log(categories);
let categories = ["Tech", "Science", "History", "Programming", "Physics"];

categories.forEach((book) => {
  link.innerHTML += `<li data-category="${book}">${book}</li>`;
});

//Render Category in addBook


let bookCategory = document.getElementById("bookCategory");
categories.forEach((book) => {
  bookCategory.innerHTML += `<option value=${book}>${book}</option>`;
});

//render all books;


let bookContainer = document.querySelector(".book-container table tbody");
books.forEach((book) => {
bookContainer.innerHTML += `<tr>
                <td>${book.bookId}</td>
                <td>${book.bookTitle}</td>
                <td>${book.bookAuthor}</td>
                <td>${book.bookCategory}</td>
                <td>${book.bookQuantity}</td>
                
                <td>
                  <button onclick="openEditPopup('${book.bookId}')">Edit</button>
                  <button onclick="deleteBook('${book.bookId}')">Delete</button>
                  
                </td>
              </tr>`
 
});



//display Books
function displayBooks(cat) {
  // let filter=books.filter((book) => book.category.toLowerCase() == cat)
  // console.log(filter);

  if (cat != "all") {
    let books=JSON.parse(localStorage.getItem('books')) || []
    let filteredBooks = books.filter(
      (book) => book.bookCategory.toLowerCase().replace(" ", "") === cat,
    );

    bookContainer.innerHTML = "";

    filteredBooks.map((book) => {
      bookContainer.innerHTML += `<tr>
                <td>${book.bookId}</td>
                <td>${book.bookTitle}</td>
                <td>${book.bookAuthor}</td>
                <td>${book.bookCategory}</td>
                <td>${book.bookQuantity}</td>
                <td>5</td>
                <td>
                  <button class="editBtn" onclick="openEditPopup('${book.bookId}')">Edit</button>
                  <button class="deleteBtn" onclick="deleteBook('${book.bookId}')">Delete</button>
                  
                </td>
              </tr>`
 
     
    });
  } else {
    bookContainer.innerHTML = "";
    let books=JSON.parse(localStorage.getItem("books")) || []
    books.map((book) => {
      bookContainer.innerHTML += `<tr>
                <td>${book.bookId}</td>
                <td>${book.bookTitle}</td>
                <td>${book.bookAuthor}</td>
                <td>${book.bookCategory}</td>
                <td>${book.bookQuantity}</td>
                <td>5</td>
                <td>
                  <button onclick="openEditPopup('${book.bookId}')">Edit</button>
                  <button onclick="deleteBook('${book.bookId}')">Delete</button>
                  
                </td>
              </tr>`
 
     
    });
  }
}

//  bookContainer.innerHTML += `<div class="book"><img src="${val.imageUrl}"></img><p>Title :${val.title}</p><p>Author:${val.author}</p><p>Category:${val.category}</p></div>`;

//filter all category and add cative

let list = link.querySelectorAll("li");
list.forEach((val) => {
  val.addEventListener("click", () => {
    let c = val.dataset.category.toLowerCase().trim();
    let category = c.replace(" ", "");
    switch (category) {
      case "all":
        setActiveItem(category);
        displayBooks(category);
        break;

      case "physics":
        setActiveItem(category);
        displayBooks(category);
        break;
      case "programming":
        setActiveItem(category);
        displayBooks(category);
        break;
        setActiveItem(category);
      case "history":
        setActiveItem(category);
        displayBooks(category);
        break;
      case "science":
        setActiveItem(category);
        displayBooks(category);
        break;
      case "tech":
        setActiveItem(category);
        displayBooks(category);
        break;
    }
  });
});

function setActiveItem(li) {
  let item = document.querySelectorAll(".category-link li");
  item.forEach((val) => {
    // val.classList.remove("active");
    if (val.dataset.category.toLowerCase().replace(" ", "") == li) {
      val.classList.add("active");
    } else {
      val.classList.remove("active");
    }
  });
}

//open AddBook Popup

function openBookPopup() {
  let overlay = document.querySelector(".overlay");
  overlay.style.display = "flex";
  let id = document.getElementById("bookId");
  let length = books.length;
  console.log(length);

  id.value = length + 1;
}

//close popup
function closePopup() {
  let overlay = document.querySelector(".overlay");
  overlay.style.display = "none";
}
function editOverlay() {
  let overlay = document.querySelector(".editOverlay");
  overlay.style.display = "none";
}

//addBook Functionality

function addBook() {
  let bookId = document.getElementById("bookId").value;
  let bookTitle = document.getElementById("bookTitle").value;
  let bookAuthor = document.getElementById("bookAuthor").value;
  let bookCategory = document.getElementById("bookCategory").value;
  let bookQuantity = document.getElementById("bookQuantity").value;
  let bookPublisher= document.getElementById("bookPublisher").value;
  let bookYear = document.getElementById("bookYear").value;

  if (bookTitle === "" || bookAuthor ==="" || bookCategory === "" || bookQuantity === "" || bookPublisher ==="" || bookYear ==="") {
    alert("Required All fields")
    return
  }else{
    let books = JSON.parse(localStorage.getItem("books")) || [];
    const newBook = {
    bookId: bookId,
    bookTitle: bookTitle,
    bookAuthor: bookAuthor,
    bookCategory: bookCategory,
    bookQuantity: bookQuantity,
    bookPublisher: bookPublisher,
    bookYear: bookYear,
  };

  books.push(newBook);
  localStorage.setItem("books", JSON.stringify(books));
  alert("book Added Successfully");
  document.querySelector('.overlay').style.display="none"
  displayBooks("all");
   
  } 
}

//delete Book

function deleteBook(id) {
  let books = JSON.parse(localStorage.getItem("books")) || [];
  books = books.filter((book) => book.bookId !== id);
  localStorage.setItem("books", JSON.stringify(books));
  displayBooks("all");
}

//Edit Book
let overlay=document.getElementsByClassName('editOverlay')[0]
function openEditPopup(id){
  
  overlay.style.display="flex"
   let books = JSON.parse(localStorage.getItem("books")) || [];
  let book = books.find((book) => book.bookId === id);
  document.getElementById("editBookId").value = book.bookId;
  document.getElementById("editBookTitle").value = book.bookTitle;
  document.getElementById("editBookAuthor").value = book.bookAuthor;
  // document.getElementById("editBookCategory").value = book.bookCategory;
  document.getElementById("editBookQuantity").value = book.bookQuantity;
  document.getElementById("editBookPublisher").value = book.bookPublisher;
  document.getElementById("editBookYear").value = book.bookYear;

    let category = document.getElementById("editBookCategory");


    let selectedCategory = book.bookCategory;


    let options = [...category.options];


    let selectedOption = options.find(
        option => option.value === selectedCategory
    );

    if (selectedOption) {

        category.value = selectedCategory;

    } else {

      
        let option = document.createElement("option");

        option.value = selectedCategory;
        option.textContent = selectedCategory;

        category.insertBefore(option, category.firstChild);

        category.value = selectedCategory;
    }

    

 
}

function editBook(){
   let books = JSON.parse(localStorage.getItem("books")) || [];
  let id=document.getElementById("editBookId").value

  let book=books.find(book => book.bookId === id);
  book.bookId=document.getElementById("editBookId").value
  book.bookTitle=document.getElementById("editBookTitle").value
  book.bookAuthor=document.getElementById("editBookAuthor").value
  book.bookCategory=document.getElementById("editBookCategory").value
  book.bookQuantity=document.getElementById("editBookQuantity").value
  book.bookPublisher=document.getElementById("editBookPublisher").value
  book.bookYear=document.getElementById("editBookYear").value

  localStorage.setItem("books",JSON.stringify(books));
  alert("Edit Successfully")
  displayBooks("all");
  overlay.style.display="none"


}
















