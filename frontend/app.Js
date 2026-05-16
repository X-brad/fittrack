document.addEventListener('DOMContentLoaded', () => {

    // Menu hamburger
    const hamburger = document.querySelector('.hamburger')
    const navLinks = document.querySelector('.nav-links')

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active')
        hamburger.textContent = navLinks.classList.contains('active') ? '✕' : '☰'
    })

    // Animation au scroll
    const cards = document.querySelectorAll('.feature-card')
    console.log('Cards trouvées:', cards.length)

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            console.log('Card visible:', entry.isIntersecting)
            if (entry.isIntersecting) {
                entry.target.classList.add('visible')
            }
        })
    }, { threshold: 0 })

    cards.forEach(card => observer.observe(card))

})