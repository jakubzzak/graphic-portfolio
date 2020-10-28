let landingScreen = document.getElementById("home")
let navIconOpen = document.getElementById("navIconOpen");
let navMobileMenu = document.getElementById("navMobileMenu");
let isMouseDown = false;
let navMobileIconOpen = document.getElementById("nav-mobile-open")
let navMobileIconClose = document.getElementById("nav-mobile-close")
let header = document.getElementById("header")
let portrait = document.getElementById("portrait")
let cover = document.getElementById("nav-cover")
const nick = document.getElementById("nick")

// cut text on mini screen
if (window.innerWidth < 350) {
  const slideItems = document.getElementsByClassName("slide-content")
  for(let i=0; i < slideItems.length; i++) {
    const textArray = slideItems[i].innerText.split(" ");
    if (textArray.length > 20) {
      const shorterArray = textArray.splice(0,20);
      slideItems[i].innerText = shorterArray.join(" ") + "..";
    }
  }
}

let isMobile = false;
window.addEventListener('resize', function () {
  isMobile = window.innerWidth <= 450;
  if (isMobile) {
    header.hidden = true;
  }
})

window.onscroll = function () {
  denseHeader();
  revealHiddenTimelineCards();
};

// calculate landing page high
let homeHeight = window.innerHeight;
landingScreen.style.height = homeHeight + "px";
portrait.style.paddingTop = homeHeight / 2 - portrait.offsetHeight / 2  + "px"

navMobileMenu.addEventListener('blur', function () {
  if (toggleNavStatus === true) {
    toggleNav();
  }
}, true);


let toggleNavStatus = false;

// Open and close nav
let toggleNav = function () {
  let getSidebar = document.querySelector(".nav-mobile");
  let getSidebarUl = document.querySelector(".nav-mobile ul");
  let getSidebarTitle = document.querySelector(".nav-mobile span");
  let getSidebarLink = document.querySelectorAll(".nav-mobile a");

  // Check if sidebar is closed
  if (toggleNavStatus === false) {
    navMobileIconOpen.style.display = "none";

    navMobileMenu.focus();
    // getSidebarUl.style.visibility = "visible";
    getSidebar.style.width = "50%";
    getSidebar.style.top = "0";
    getSidebar.style.bottom = "0";
    getSidebar.style.padding = "2em";
    getSidebarTitle.style.opacity = "1";

    for (let i = 0; i < getSidebarLink.length; i++) {
      getSidebarLink[i].style.opacity = "1";
      getSidebarLink[i].style.padding = "1em";
    }

    toggleNavStatus = true;
    setTimeout(() => {
      navMobileIconClose.style.display = "flex";
      cover.style.display = "flex"
    }, 500)
  } else if (toggleNavStatus === true) {
    navMobileIconClose.style.display = "none";

    getSidebar.style.width = "0";
    getSidebar.style.top = "100%";
    getSidebar.style.bottom = "0";
    getSidebar.style.padding = "0";
    getSidebarTitle.style.opacity = "1";

    for (let i = 0; i < getSidebarLink.length; i++) {
      getSidebarLink[i].style.opacity = "0";
      getSidebarLink[i].style.padding = "0";
    }

    // getSidebarUl.style.visibility = "hidden";
    toggleNavStatus = false;
    setTimeout(() => {
      navMobileIconOpen.style.display = "flex";
      cover.style.display = "none"
    }, 500)
  }

}

// computer header dense
const denseHeader = function () {
  if (!isMobile) {
    const logo = document.getElementById("computer_logo");
    const pcNavbar = document.getElementById("navbarComputer");
    if (window.pageYOffset > homeHeight || document.documentElement.scrollTop > homeHeight){
      header.style.padding = '.5em';
      logo.style.width = '30px';
      logo.style.marginLeft = '1em';
      pcNavbar.style.fontSize = '13px';
      nick.hidden = false;
    } else {
      header.style.padding = '2em';
      pcNavbar.style.fontSize = '16px';
      logo.style.width = '50px';
      logo.style.marginLeft = '2em';
      nick.hidden = true;
    }
  }
}

let scrollOnTop = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  })
}

let scrollToSection = function (sectionId) {
  window.scrollTo({
    top: document.getElementById(sectionId).offsetTop - 80,
    left: 0,
    behavior: "smooth"
  })
  if (isMobile && toggleNavStatus) {
    toggleNav();
  }
}

const toggleGallery = function () {
  const galleryContent = document.getElementById("galleryContent");
  const galleryButton = document.getElementById("toggleGallery");
  galleryContent.hidden = !galleryContent.hidden;
  galleryButton.innerText = galleryContent.hidden ? "Show":"Hide";
  if (!galleryContent.hidden) {
    scrollToSection("gallery")
  }
}
