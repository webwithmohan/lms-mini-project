let members = JSON.parse(localStorage.getItem("users"));

function loadMembersData() {
  let main = document.getElementsByTagName("table")[0];
  let totalUsers = document.getElementById("total-users");
  totalUsers.textContent = `Total Users : ${members.length}`;
  for (let i = 0; i < members.length; i++) {
    main.innerHTML += `<tr><td>${members[i].username}</td><td>${members[i].email}</td><td>${members[i].address}</td><td>${members[i].phone}</td><td><button>Edit</button><button data-email="${members[i].email}" onclick="deleteUser(this)">Delete</button></td></tr>`;
  }
}

// function deleteUser(button) {
//   const email = button.dataset.email;
//   members=members.filter((user) => user.email !== email);
//   localStorage.setItem('users',JSON.stringify(members))
//   button.closest('tr').remove();
//   loadMembersData()
// }

document.onload=loadMembersData();
