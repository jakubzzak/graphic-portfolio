let timelineCards = document.getElementsByClassName("timeline-card")


for(let i=0; i < timelineCards.length; i++) {
  const card = timelineCards[i]
  console.log('check', card.getBoundingClientRect().top, window.innerHeight)
  const bottom_of_object = card.getBoundingClientRect().top + card.offsetHeight;
  const bottom_of_window = window.pageYOffset + window.innerHeight;

  if( bottom_of_object > bottom_of_window ){
    card.classList.add("hidden");
    console.log('mam hidden')
  }
}

const toggleTimelineCards = function() {
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
