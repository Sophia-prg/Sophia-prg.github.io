const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('#products__container > div');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selectedCategory = button.getAttribute('data-category');

    productCards.forEach(card => {
      if (selectedCategory === 'all') {
        card.classList.remove('hidden');
      } else if (card.classList.contains(selectedCategory)) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});



menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active');
    
})

