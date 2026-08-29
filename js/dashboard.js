document.addEventListener("sidebarloaded", () => {
    let currentUser = JSON.parse(localStorage.getItem("currentuser"));
    console.log(currentUser);

    let user = document.querySelector('.profile p .user');
    user.textContent = currentUser.username

    // let logout = document.querySelector('.menu .logout')


    // logout.addEventListener("click", () => {
    //     let con = confirm("Are you sure to logout")
    //     if (con) {
    //         localStorage.removeItem("currentuser");
    //         localStorage.setItem("isLoggedIn", false);
    //         window.location.href = "login.html";
    //     } else {
    //         window.location.href = "dashboard.html";

    //     }

    // });


    //Render Page

    let content = document.querySelector('main')
    let nav = document.querySelectorAll('.menu li')



    // const pages = {

    //     'dashboard': {
    //         title: "Dashboard",
    //         description: "Some Dashboard Content text"
    //     },
    //     "books": {
    //         title: "Books",
    //         description: "Some Books Content"
    //     },
    //     "members": {
    //         title: "Members",
    //         description: "Description Here"

    //     },
    //     "issue book": {
    //         title: "Issue Book",
    //         description: "Description Here"

    //     },
    //     "return book": {
    //         title: "Return Book",
    //         description: "Return Book Section"
    //     },
    //     "reports": {
    //         title: "Reports",
    //         description: "Return Book Section"
    //     },
    //     "about": {
    //         title: "About",
    //         description: "Return Book Section"
    //     }


    // }

    // function renderPage(pageKey) {
    //     const page = pages[pageKey]
    //     console.log(page);

    //     if (!page) return;
    //     content.innerHTML = `
    //     <h2>${page.title}</h2>
    //     <p>${page.description}
    //     <div class="placeholder-box">${page.title} section - content coming soon</div>
    //     `
    


    // }
    //setAvtiveItem
    function setActiveItem(selectedLi) {
        document.querySelectorAll(".menu li").forEach((value) => value.classList.remove('active'))
        selectedLi.classList.add('active')

    }

    nav.forEach((value) => {
        value.addEventListener("click", (event) => {
            let li = value;
            setActiveItem(li)
            let l = li.childNodes[1].textContent.toLowerCase().toString()
            let path = l.replace(/\s/g, "")
            console.log(path);


            if (path == "logout") {
                let cPage=location.pathname.split("/").pop();
                let con = confirm("Are you sure to logout")
                if (con) {
                    localStorage.removeItem("currentuser");
                    localStorage.setItem("isLoggedIn", false);
                    window.location.href = "login.html";
                } else {
                    window.location.href = cPage

                }
                

            } else {
                window.location.href = `${path}.html`
            }








        })
    })

    // renderPage('dashboard')
    
    

})