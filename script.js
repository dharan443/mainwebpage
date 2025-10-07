// Smooth scroll already handled by CSS scroll-behavior
// Optional: fade-in animation for project cards
const cards = document.querySelectorAll('.project-card');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight / 5 * 4;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if(cardTop < triggerBottom) {
      card.classList.add('show');
    } else {
      card.classList.remove('show');
    }
  });
});
