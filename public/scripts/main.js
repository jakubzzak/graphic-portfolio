const landingScreen = document.getElementById("home")
const navMobileMenu = document.getElementById("navMobileMenu");
const portrait = document.getElementById("portrait")


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
  if (isMobile && !sidebarIsClosed) {
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

const adjustHomePage = function () {
  let homeHeight = window.innerHeight;
  landingScreen.style.height = homeHeight + "px";
  portrait.style.paddingTop = homeHeight / 2 - portrait.offsetHeight / 2  + "px"
}

// --- init functions ---
let isMobile = window.innerWidth <= 550;
// calculate landing page high
adjustHomePage();
// ----------------------

window.addEventListener('resize', function () {
  isMobile = window.innerWidth <= 550;
  restartStars();
  adjustHomePage();
})

window.onscroll = function () {
  if (!isMobile) {
    denseHeader();
  }
  toggleTimelineCards();
};
