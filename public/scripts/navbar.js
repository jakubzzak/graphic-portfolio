const header = document.getElementById("header")
const nick = document.getElementById("nick")
let navMobileIconOpen = document.getElementById("nav-mobile-open")
let navMobileIconClose = document.getElementById("nav-mobile-close")
let cover = document.getElementById("mobile-nav-dimmer")

let sidebarIsClosed = true;

let toggleNav = function () {
  let getSidebar = document.querySelector(".nav-mobile");
  let getSidebarLinks = document.querySelector(".nav-mobile div");
  let getSidebarLink = document.querySelectorAll(".nav-mobile a");

  // Check if sidebar is closed
  if (sidebarIsClosed) {
    navMobileIconOpen.style.display = "none";

    navMobileMenu.focus();
    // getSidebarUl.style.visibility = "visible";
    getSidebar.style.width = "50%";
    getSidebar.style.top = "0";
    getSidebar.style.bottom = "0";
    getSidebar.style.padding = "2em";
    getSidebarLinks.style.opacity = "1";

    for (let i = 0; i < getSidebarLink.length; i++) {
      getSidebarLink[i].style.opacity = "1";
      getSidebarLink[i].style.padding = "1em";
    }

    setTimeout(() => {
      navMobileIconClose.style.display = "flex";
      cover.style.display = "flex"
    }, 500)
  } else {
    navMobileIconClose.style.display = "none";

    getSidebar.style.width = "0";
    getSidebar.style.top = "100%";
    getSidebar.style.bottom = "0";
    getSidebar.style.padding = "0";
    getSidebarLinks.style.opacity = "1";

    for (let i = 0; i < getSidebarLink.length; i++) {
      getSidebarLink[i].style.opacity = "0";
      getSidebarLink[i].style.padding = "0";
    }

    setTimeout(() => {
      navMobileIconOpen.style.display = "flex";
      cover.style.display = "none"
    }, 500)
  }

  sidebarIsClosed = !sidebarIsClosed;
}



// header dense
const denseHeader = function () {
  const pcNavbar = document.getElementById("navbarComputer");
  const logo = document.getElementById("computer_logo");
  if (window.pageYOffset > homeHeight - header.offsetHeight || document.documentElement.scrollTop > homeHeight - header.offsetHeight) {
    // dense
    header.style.padding = '.5em';
    logo.style.width = '30px';
    logo.style.marginLeft = '1em';
    pcNavbar.style.fontSize = '13px';

    setTimeout(() => {
      if (window.pageYOffset > homeHeight - header.offsetHeight || document.documentElement.scrollTop > homeHeight - header.offsetHeight) {
        nick.hidden = false;
      }
    }, 1500)
  } else {
    header.style.padding = '1em';
    pcNavbar.style.fontSize = '16px';
    logo.style.width = '50px';
    logo.style.marginLeft = '1em';
    nick.hidden = true;
  }
}
