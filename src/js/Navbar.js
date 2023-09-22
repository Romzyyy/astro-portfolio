window.onscroll = function () {
    const navbar = document.querySelector('nav')
    const about = document.getElementById('about')
    const portfolio = document.getElementById('portfolio')
    const skill = document.getElementById('skill')
    const contact = document.getElementById('contact')
    const fixNavAbout = about.offsetTop - 20
    const fixNavPortfolio = portfolio.offsetTop - 20
    const fixNavSkill = skill.offsetTop - 20
    const fixNavContact = contact.offsetTop - 20
    const value = navbar.querySelector('h1')

    if (
        window.pageYOffset >= fixNavAbout &&
        window.pageYOffset < fixNavPortfolio
    ) {
        navbar.classList.remove('hidden')
        navbar.classList.add('fixed')
        value.textContent = 'About'
    } else if (
        window.pageYOffset >= fixNavPortfolio &&
        window.pageYOffset < fixNavSkill
    ) {
        navbar.classList.remove('hidden')
        navbar.classList.add('fixed')
        value.textContent = 'Portfolio'
    } else if (
        window.pageYOffset >= fixNavSkill &&
        window.pageYOffset < fixNavContact
    ) {
        navbar.classList.remove('hidden')
        navbar.classList.add('fixed')
        value.textContent = 'Skill & Tools'
    } else if (window.pageYOffset >= fixNavContact) {
        navbar.classList.remove('hidden')
        navbar.classList.add('fixed')
        value.textContent = 'Contact'
    } else {
        navbar.classList.remove('fixed')
        navbar.classList.add('hidden')
    }
}
