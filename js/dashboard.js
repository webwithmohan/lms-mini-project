document.addEventListener("sidebarloaded", () => {
  let currentUser = JSON.parse(localStorage.getItem("currentuser"));
  console.log(currentUser);

  let user = document.querySelector(".profile p .user");
  user.textContent = currentUser.username;

  //Render Page

  let content = document.querySelector("main");
  let nav = document.querySelectorAll(".menu li");

  //setAvtiveItem
  function setActiveItem(selectedLi) {
    document
      .querySelectorAll(".menu li")
      .forEach((value) => value.classList.remove("active"));
    selectedLi.classList.add("active");
  }

  nav.forEach((value) => {
    value.addEventListener("click", (event) => {
      let li = value;
      setActiveItem(li);
      let l = li.childNodes[1].textContent.toLowerCase().toString();
      let path = l.replace(/\s/g, "");
      console.log(path);

      if (path == "logout") {
        let cPage = location.pathname.split("/").pop();

        Swal.fire({
          icon: "warning",
          title: "Are you Sure to Logout",
          showCancelButton: true,
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "login.html";
          }
        });
      } else {
        window.location.href = `${path}.html`;
      }
    });
  });
});
