const book = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    category: "Fiction",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg",
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    category: "Fiction",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780061120084-L.jpg",
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    category: "Fiction",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg",
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    category: "Romance",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780141439518-L.jpg",
  },
  {
    id: 5,
    title: "Jane Eyre",
    author: "Charlotte Bronte",
    category: "Romance",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780141441146-L.jpg",
  },
  {
    id: 6,
    title: "Wuthering Heights",
    author: "Emily Bronte",
    category: "Romance",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780141439556-L.jpg",
  },
  {
    id: 7,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    category: "Fantasy",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780547928227-L.jpg",
  },
  {
    id: 8,
    title: "The Fellowship of the Ring",
    author: "J.R.R. Tolkien",
    category: "Fantasy",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780261103573-L.jpg",
  },
  {
    id: 9,
    title: "The Two Towers",
    author: "J.R.R. Tolkien",
    category: "Fantasy",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780261102361-L.jpg",
  },
  {
    id: 10,
    title: "The Return of the King",
    author: "J.R.R. Tolkien",
    category: "Fantasy",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780261102378-L.jpg",
  },
  {
    id: 11,
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    category: "Fantasy",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780590353427-L.jpg",
  },
  {
    id: 12,
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
    category: "Fantasy",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780439064866-L.jpg",
  },
  {
    id: 13,
    title: "Harry Potter and the Prisoner of Azkaban",
    author: "J.K. Rowling",
    category: "Fantasy",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780439136365-L.jpg",
  },
  {
    id: 14,
    title: "Harry Potter and the Goblet of Fire",
    author: "J.K. Rowling",
    category: "Fantasy",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780439139601-L.jpg",
  },
  {
    id: 15,
    title: "The Alchemist",
    author: "Paulo Coelho",
    category: "Self Help",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780062315007-L.jpg",
  },
  {
    id: 16,
    title: "Atomic Habits",
    author: "James Clear",
    category: "Self Help",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg",
  },
  {
    id: 17,
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
    category: "Self Help",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9781982137274-L.jpg",
  },
  {
    id: 18,
    title: "How to Win Friends and Influence People",
    author: "Dale Carnegie",
    category: "Self Help",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780671027032-L.jpg",
  },
  {
    id: 19,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    category: "Self Help",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9781585424337-L.jpg",
  },
  {
    id: 20,
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    category: "Finance",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9781612681139-L.jpg",
  },
  {
    id: 21,
    title: "The Intelligent Investor",
    author: "Benjamin Graham",
    category: "Finance",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780060555665-L.jpg",
  },
  {
    id: 22,
    title: "A Random Walk Down Wall Street",
    author: "Burton G. Malkiel",
    category: "Finance",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780393358384-L.jpg",
  },
  {
    id: 23,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    category: "Finance",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780857197689-L.jpg",
  },
  {
    id: 24,
    title: "The Little Book of Common Sense Investing",
    author: "John C. Bogle",
    category: "Finance",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9781119404507-L.jpg",
  },
  {
    id: 25,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    category: "History",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780062316097-L.jpg",
  },
  {
    id: 26,
    title: "Guns, Germs, and Steel",
    author: "Jared Diamond",
    category: "History",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780393317558-L.jpg",
  },
  {
    id: 27,
    title: "A People's History of the United States",
    author: "Howard Zinn",
    category: "History",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780060838652-L.jpg",
  },
  {
    id: 28,
    title: "The Silk Roads",
    author: "Peter Frankopan",
    category: "History",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9781101912379-L.jpg",
  },
  {
    id: 29,
    title: "The Diary of a Young Girl",
    author: "Anne Frank",
    category: "History",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780553296983-L.jpg",
  },
  {
    id: 30,
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    category: "Science",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780553380163-L.jpg",
  },
  {
    id: 31,
    title: "Cosmos",
    author: "Carl Sagan",
    category: "Science",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780345539434-L.jpg",
  },
  {
    id: 32,
    title: "The Selfish Gene",
    author: "Richard Dawkins",
    category: "Science",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780198788607-L.jpg",
  },
  {
    id: 33,
    title: "Astrophysics for People in a Hurry",
    author: "Neil deGrasse Tyson",
    category: "Science",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780393609394-L.jpg",
  },
  {
    id: 34,
    title: "The Origin of Species",
    author: "Charles Darwin",
    category: "Science",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780451529060-L.jpg",
  },
  {
    id: 35,
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "Programming",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg",
  },
  {
    id: 36,
    title: "The Pragmatic Programmer",
    author: "David Thomas and Andrew Hunt",
    category: "Programming",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780135957059-L.jpg",
  },
  {
    id: 37,
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    category: "Programming",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780596517748-L.jpg",
  },
  {
    id: 38,
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    category: "Programming",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9781491904244-L.jpg",
  },
  {
    id: 39,
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    category: "Programming",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9781593279509-L.jpg",
  },
  {
    id: 40,
    title: "The Lean Startup",
    author: "Eric Ries",
    category: "Business",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780307887894-L.jpg",
  },
  {
    id: 41,
    title: "Zero to One",
    author: "Peter Thiel",
    category: "Business",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780804139298-L.jpg",
  },
  {
    id: 42,
    title: "Good to Great",
    author: "Jim Collins",
    category: "Business",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780066620992-L.jpg",
  },
  {
    id: 43,
    title: "The 4-Hour Workweek",
    author: "Timothy Ferriss",
    category: "Business",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780307465351-L.jpg",
  },
  {
    id: 44,
    title: "Start with Why",
    author: "Simon Sinek",
    category: "Business",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9781591846444-L.jpg",
  },
  {
    id: 45,
    title: "The Fault in Our Stars",
    author: "John Green",
    category: "Romance",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780062024039-L.jpg",
  },
  {
    id: 46,
    title: "Me Before You",
    author: "Jojo Moyes",
    category: "Romance",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780143124542-L.jpg",
  },
  {
    id: 47,
    title: "The Notebook",
    author: "Nicholas Sparks",
    category: "Romance",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780446694853-L.jpg",
  },
  {
    id: 48,
    title: "The Hunger Games",
    author: "Suzanne Collins",
    category: "Adventure",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780439023481-L.jpg",
  },
  {
    id: 49,
    title: "The Maze Runner",
    author: "James Dashner",
    category: "Adventure",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780385737944-L.jpg",
  },
  {
    id: 50,
    title: "Life of Pi",
    author: "Yann Martel",
    category: "Adventure",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780156027328-L.jpg",
  },
];
localStorage.setItem("books",JSON.stringify(book))
let books=JSON.parse(localStorage.getItem("books"))

const link = document.querySelector(".category-link");

//get Uniq Category Item
const categorySet = new Set();
books.forEach((book) => {
  categorySet.add(book.category);
});
let categories = [...categorySet];
console.log(categories);

categories.forEach((book) => {
  link.innerHTML += `<li data-category="${book}">${book}</li>`;
});

//render all books;

let bookContainer = document.querySelector(".book-container");
books.forEach((book) => {
  bookContainer.innerHTML += `<div class="book"><img src="${book.imageUrl}"></img><p>Title :${book.title}</p><p>Author:${book.author}</p><p>Category:${book.category}</p></div>`;
});

//display Books
function displayBooks(cat) {
  // let filter=books.filter((book) => book.category.toLowerCase() == cat)
  // console.log(filter);
  
  

    let filteredBooks = books.filter(book => book.category.toLowerCase().replace(" ","") === cat);

    bookContainer.innerHTML = "";

    filteredBooks.map(book => {
        bookContainer.innerHTML += `
            <div class="book">
                <img src="${book.imageUrl}">
                <h3>${book.title}</h3>
                <p>${book.author}</p>
                <p>${book.category}</p>
            </div>
        `;
    });
}


  
  
  
  
//  bookContainer.innerHTML += `<div class="book"><img src="${val.imageUrl}"></img><p>Title :${val.title}</p><p>Author:${val.author}</p><p>Category:${val.category}</p></div>`;


//filter all category and add cative

let list = link.querySelectorAll("li");
list.forEach((val) => {
  val.addEventListener("click", () => {
    let c = val.dataset.category.toLowerCase().trim();
    let category=c.replace(" ","");
    switch (category) {
      case "all":
        setActiveItem(category)
        displayBooks(category);
        break;
      case "fiction":
        setActiveItem(category)
        displayBooks(category);
        break;
      case "romance":
        setActiveItem(category)
        displayBooks(category);
        break;
      case "fantasy":
        setActiveItem(category)
        displayBooks(category);
        break;
      case "selfhelp":
        setActiveItem(category)
        displayBooks(category);
        break;
      case "finance":
        setActiveItem(category)
        displayBooks(category);
        break;
      case "history":
        setActiveItem(category)
        displayBooks(category);
        break;
      case "science":
        setActiveItem(category)
        displayBooks(category);
        break;
      case "programming":
        setActiveItem(category)
        displayBooks(category);
        break;
        setActiveItem(category)
      case "business":
        setActiveItem(category)
        displayBooks(category);
        break;
      case "adventure":
        setActiveItem(category)
        displayBooks(category);
        break;
      
    }
  });
});

function setActiveItem(li){
  let item=document.querySelectorAll(".category-link li");
  item.forEach((val) => {
    
    
    // val.classList.remove("active");
    if(val.dataset.category.toLowerCase().replace(" ","") == li){
      val.classList.add("active")
    }else{
      val.classList.remove("active")
    }
   
  })


  


}

//open AddBook Popup


function openBookPopup(){
  let overlay=document.querySelector('.overlay');
  overlay.style.display="flex"
  
}
  

