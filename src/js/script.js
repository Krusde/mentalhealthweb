// Select menu button and dropdown menu
const menuToggle = document.getElementById('menu-toggle');
const dropdownMenu = document.getElementById('dropdown-menu');
const redBoxButton = document.getElementById('red-box-btn');

redBoxButton.addEventListener('click', () => {
    // Redirect to the desired HTML page
    window.location.href = 'taiapp.html'; // Replace 'anotherpage.html' with your target page
});

// Toggle dropdown menu visibility
menuToggle.addEventListener('click', () => {
    dropdownMenu.style.display =
        dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

// Close dropdown menu when clicking outside
window.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.style.display = 'none';
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const nestedMenuBtn = document.querySelector('.nested-menu-btn');
    const nestedMenu = document.querySelector('.nested-menu');

    nestedMenuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        nestedMenu.style.display =
            nestedMenu.style.display === 'block' ? 'none' : 'block';
    });

    window.addEventListener('click', (e) => {
        if (!nestedMenu.contains(e.target) && !nestedMenuBtn.contains(e.target)) {
            nestedMenu.style.display = 'none';
        }
    });
});