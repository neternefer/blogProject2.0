showSideMenu = () => {
    document.getElementById("menu-side").style.width = "320px";
}

hideSideMenu = () => {
    document.getElementById("menu-side").style.width = "0";
}

let prevScrollpos = window.pageYOffset;
window.onscroll = () => {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos < currentScrollPos) {
     document.getElementById("menu-top").style.top = "-4rem";
    } else {
      document.getElementById("menu-top").style.top = "0";
}
}
 



