let members=JSON.parse(localStorage.getItem("users"))
console.log(members.length);

let main=document.getElementsByTagName("table")[0];
let totalUsers=document.getElementById("total-users")
totalUsers.textContent=`Total Users : ${members.length}`
for(let i=0; i < members.length;i++){
    main.innerHTML +=`<tr><td>${members[i].username}</td><td>${members[i].email}</td><td>${members[i].address}</td><td>${members[i].phone}</td><td><button>Edit</button><button>Delete</button></td></tr>`
}











