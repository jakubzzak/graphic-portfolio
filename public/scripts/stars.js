const stars = []

// --- init functions ---
createStars();
// ----------------------

function createStars() {
  const distanceX = window.screen.width / 2
  const distanceY = window.screen.height / 2
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
    // console.log('size', window.screen.width)
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

const restartStars = function () {
  stars.forEach(x => document.body.removeChild(x));
  stars.splice(0);
  createStars();
}
