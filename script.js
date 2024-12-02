document.querySelector('.scroll-button').addEventListener('click', function() {
  document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});


// Burger menu toggle for mobile view
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

// Toggle the active class to show/hide menu
burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Dropdown functionality for hover effect (for desktop view)
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  dropdown.addEventListener('mouseenter', () => {
    const dropdownContent = dropdown.querySelector('.dropdown-content');
    dropdownContent.style.display = 'block';
  });

  dropdown.addEventListener('mouseleave', () => {
    const dropdownContent = dropdown.querySelector('.dropdown-content');
    dropdownContent.style.display = 'none';
  });
});