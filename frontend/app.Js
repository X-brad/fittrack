// Menu hamburger
const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-links')

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active')
    hamburger.textContent = navLinks.classList.contains('active') ? '✕' : '☰'
})