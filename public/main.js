const landingScreen = document.getElementById("home")
const portrait = document.getElementById("portrait")
let dimensions = {
  height: window.innerHeight,
  width: window.innerWidth
}

// --- timeline ---
let timelineCards = document.getElementsByClassName("timeline-card")

const initTimelineCards = () => {
  for (let i = 0; i < timelineCards.length; i++) {
    const card = timelineCards[i]
    const bottom_of_object = card.getBoundingClientRect().top + card.offsetHeight;
    const bottom_of_window = window.pageYOffset + window.innerHeight;

    if (bottom_of_object > bottom_of_window) {
      card.classList.add("hidden");
    }
  }
}

const toggleTimelineCards = () => {
  const diff = 150;
  for(let i=0; i < timelineCards.length; i++) {
    const card = timelineCards[i]
    const cardsPositionFromTop = card.getBoundingClientRect().top;
    if (card.classList.contains("hidden") && cardsPositionFromTop < 450 + diff && cardsPositionFromTop + card.offsetHeight /2 > 0) {
      card.classList.remove("hidden")
    } else if (!card.classList.contains("hidden") && (cardsPositionFromTop + card.offsetHeight + diff < 0 || cardsPositionFromTop - diff > window.pageYOffset)) {
      card.classList.add("hidden");
    }
  }
}
// ---------------

// --- navigation/side bar ---
const header = document.getElementById("header")
const nick = document.getElementById("nick")
const navMobileIconOpen = document.getElementById("nav-mobile-open")
const navMobileIconClose = document.getElementById("nav-mobile-close")
const navMobileMenu = document.getElementById("navMobileMenu");
const cover = document.getElementById("mobile-nav-dimmer")

let sidebarIsClosed = true;

const toggleNav = () => {
  let getSidebar = document.querySelector(".nav-mobile");
  let getSidebarLinks = document.querySelector(".nav-mobile div");
  let getSidebarLink = document.querySelectorAll(".nav-mobile a");

  // Check if sidebar is closed
  if (sidebarIsClosed) {
    navMobileIconOpen.style.visibility = "hidden";

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
      navMobileIconClose.style.visibility = "visible";
      cover.style.display = "flex"
    }, 1000)
  } else {
    navMobileIconClose.style.visibility = "hidden";

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
      navMobileIconOpen.style.visibility = "visible";
      cover.style.display = "none"
    }, 1000)
  }

  sidebarIsClosed = !sidebarIsClosed;
}

// header dense
const denseHeader = (explicit=false) => {
  const pcNavbar = document.getElementById("navbarComputer");
  const logo = document.getElementById("computer_logo");
  if (explicit || (window.pageYOffset > dimensions.height - header.offsetHeight || document.documentElement.scrollTop > dimensions.height - header.offsetHeight)) {
    // dense
    header.style.padding = '.5em';
    logo.style.width = '30px';
    logo.style.marginLeft = '1em';
    pcNavbar.style.fontSize = '13px';

    setTimeout(() => {
      if (window.pageYOffset > dimensions.height - header.offsetHeight || document.documentElement.scrollTop > dimensions.height - header.offsetHeight) {
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
// ------------------

// --- stars ---
const stars = []

const createStars = () => {
  const distanceX = dimensions.width / 2;
  const distanceY = isMobileLandscape ? dimensions.height:dimensions.height / 2;
  for (let i=0; i<200; i++) {
    const star = document.createElement("div")
    star.classList.add('star-little')
    const temp = Math.floor(Math.random() * 10)
    if ( temp < 3) {
      star.classList.add('star-medium')
    } else if (temp < 6) {
      star.classList.add('star-large')
    }
    star.style.left = `${distanceX}px`;
    star.style.top = `${distanceY}px`;
    star.style.position = 'absolute';

    stars.push(star)
    document.body.append(star)
  }
  // Keyframes
  stars.forEach((el, i, ra) => {
    let to = {
      x: Math.random() * (Math.floor((Math.random() + 1) * 2) % 2 === 0 ? -distanceX : distanceX),
      y: Math.random() * (Math.floor((Math.random() + 1) * 2) % 2 === 0 ? -distanceY : distanceY)
    };
    el.animate(
      [
        { transform: "translate(0, 0)" },
        { transform: `translate(${to.x}px, ${to.y}px)` }
      ],
      {
        duration: (Math.random() + 1) * 3000,
        direction: "alternate",
        fill: "both",
        iterations: Infinity,
        easing: "ease-in-out"
      }
    )
  });
}

const restartStars = () => {
  stars.forEach(x => document.body.removeChild(x));
  stars.splice(0);
  createStars();
}
// ---------------

// --- others ---
const cutLongText = () => {
  if (isMobile || isMobileLandscape) {
    const slideItems = document.getElementsByClassName("slide-content")
    for (let i = 0; i < slideItems.length; i++) {
      const textArray = slideItems[i].innerText.split(" ");
      if (textArray.length > 20) {
        const shorterArray = textArray.splice(0, 20);
        slideItems[i].innerText = shorterArray.join(" ") + "..";
      }
    }
  }
}

const scrollOnTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  })
}

const scrollToSection = (sectionId) => {
  window.scrollTo({
    top: document.getElementById(sectionId).offsetTop - 80,
    left: 0,
    behavior: "smooth"
  })
  if ((isMobile || isMobileLandscape) && !sidebarIsClosed) {
    sidebarIsClosed = toggleNav();
  }
}

const toggleGallery = () => {
  const galleryContent = document.getElementById("galleryContent");
  const galleryButton = document.getElementById("toggleGallery");
  galleryContent.hidden = !galleryContent.hidden;
  galleryButton.innerText = galleryContent.hidden ? "Show":"Hide";
  if (!galleryContent.hidden) {
    scrollToSection("gallery")
  }
}

const adjustHomePage = () => {
  portrait.style.paddingTop =  "30vh";
  landingScreen.style.height = isMobileLandscape ? "170vh":"100vh";
}

// --- init functions ---
let isMobileLandscape = window.innerHeight < 400 && window.innerWidth < 900;
let isMobile = !isMobileLandscape && window.innerWidth <= 600;
let isAlwaysDense = !isMobile && !isMobileLandscape && window.innerWidth < 770;
let isDense = false;
// calculate landing page high
adjustHomePage();
createStars();
initTimelineCards();
cutLongText();
// ----------------------

window.onresize = () => {
  isMobileLandscape = window.innerHeight < 400 && window.innerWidth < 900;
  isMobile = !isMobileLandscape && window.innerWidth <= 600;
  isAlwaysDense = !isMobile && !isMobileLandscape && window.innerWidth < 770;
  isDense = false;

  if (dimensions.width !== window.innerWidth) {
    dimensions.height = window.innerHeight;
    dimensions.width = window.innerWidth;
    restartStars();
    adjustHomePage();
    cutLongText();
  }
};

window.onscroll = () => {
  if (!isMobile && !isMobileLandscape && !isAlwaysDense) {
    denseHeader();
  } else if (isAlwaysDense && !isDense) {
    denseHeader(true);
    isDense = true;
  }
  toggleTimelineCards();
};
