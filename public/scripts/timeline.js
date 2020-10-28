/* Check the location of each element */
let timelineCards = document.getElementsByClassName("timeline-card")


for(let i=0; i < timelineCards.length; i++) {
  const card = timelineCards[i]
  const bottom_of_object= card.offsetTop + card.outerHeight;
  const bottom_of_window = window.pageYOffset + window.innerHeight;

  if( bottom_of_object > bottom_of_window){
    card.classList.add('hidden');
  }
}

const revealHiddenTimelineCards = function() {
  /* Check the location of each element hidden */
  for(let i=0; i < timelineCards.length; i++) {
  console.log('timeline card test =>', window.pageYOffset, window.innerHeight)
    const card = timelineCards[i]

    const bottom_of_object = card.offsetTop + card.outerHeight;
    const bottom_of_window = window.pageYOffset + window.innerHeight;

    /* If the object is completely visible in the window, fadeIn it */
    if( bottom_of_window > bottom_of_object ){
      card.animate({'opacity':'1'},700);
      timelineCards.splice(i, 1)
    }
  }
}
