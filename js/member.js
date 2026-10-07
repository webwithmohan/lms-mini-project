let members = JSON.parse(localStorage.getItem("users"));

function loadMembersData() {
  let main = document.getElementsByTagName("table")[0];
  let totalUsers = document.getElementById("total-users");
  totalUsers.textContent = `Total Users : ${members.length}`;
  for (let i = 0; i < members.length; i++) {
    main.innerHTML += `<tr><td>${members[i].memberId}</td><td>${members[i].username}</td><td>${members[i].email}</td><td>${members[i].phone}</td><td><button class="editBtn" onClick="editBook()">Edit</button><button data-email="${members[i].email}" onclick="deleteUser(this)" class="deleteBtn">Delete</button></td></tr>`;
  }
}


document.onload=loadMembersData();

function editBook(book) {

    // Swal.fire({
    //     title: "Edit Book",

    //     html: `
    //         <input id="bookName" 
    //                class="swal2-input" 
    //                placeholder="Book Name"
    //                value="${book.name}">

    //         <input id="bookAuthor" 
    //                class="swal2-input" 
    //                placeholder="Author"
    //                value="${book.author}">

    //         <input id="bookPrice" 
    //                class="swal2-input" 
    //                type="number"
    //                placeholder="Price"
    //                value="${book.price}">
    //     `,

    //     showCancelButton: true,
    //     confirmButtonText: "Update",
    //     cancelButtonText: "Cancel",

    //     preConfirm: () => {

    //         let name = document.getElementById("bookName").value;
    //         let author = document.getElementById("bookAuthor").value;
    //         let price = document.getElementById("bookPrice").value;

    //         if (!name || !author || !price) {
    //             Swal.showValidationMessage("All fields are required");
    //             return false;
    //         }

    //         return {
    //             name: name,
    //             author: author,
    //             price: price
    //         };
    //     }

    // }).then((result) => {

    //     if (result.isConfirmed) {

    //         console.log(result.value);

    //         // Update your object
    //         book.name = result.value.name;
    //         book.author = result.value.author;
    //         book.price = result.value.price;

    //         console.log(book);

    //         Swal.fire({
    //             icon: "success",
    //             title: "Updated!",
    //             text: "Book updated successfully"
    //         });
    //     }
    // });
}