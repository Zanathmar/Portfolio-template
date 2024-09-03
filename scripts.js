const menuButton = document.getElementById('menu-button');
const menuPopup = document.getElementById('menu-popup');
const menuBg = document.getElementById('bg-close');

menuButton.addEventListener('click', () => {
    menuBg.classList.toggle('menu-bg');
  menuButton.classList.toggle('active'); // Toggles active class for animation
  menuPopup.classList.toggle('show'); // Show or hide the pop-up menu
});
menuBg.addEventListener('click', () => {
    menuBg.classList.toggle('menu-bg');
    menuButton.classList.toggle('active'); // Toggles active class for animation
    menuPopup.classList.toggle('show'); // Show or hide the pop-up menu

});
