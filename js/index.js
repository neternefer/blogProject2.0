document.addEventListener("DOMContentLoaded", () => {
    showSideMenu = () => {
        document.getElementById("menu-side").style.width = "320px";
    }

    hideSideMenu = () => {
        document.getElementById("menu-side").style.width = "0";
    }

    let prevPos = window.pageYOffset;
    window.onscroll = () => {
        let curPos = window.pageYOffset;
        if (prevPos < curPos) {
         document.getElementById("menu-top").style.top = "-4rem";
        } else {
          document.getElementById("menu-top").style.top = "0";
        }
    }

    filter = (e) => {
        let posts = document.querySelectorAll('article');
        posts.forEach((p) => {
            if(p.style.display === "none" || p.style.display === ""){
                p.style.display = "block";
            }
            if(!p.classList.contains(e.target.id)){
                p.style.display = "none";
            }
        })
    }

    let triggers = document.querySelectorAll('.category li a');
    triggers.forEach((t) => {
        t.addEventListener('click', filter);
    })


})




