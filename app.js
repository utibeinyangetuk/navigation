const navslide = () => {
	const burger = document.querySelector('.burger')
	const nav = document.querySelector('.nav-links')
	const navlinks = document.querySelectorAll('.nav-links li')

	burger.addEventListener('click', () => {
		//Toggle navigation
		nav.classList.toggle('nav-active')

		//animate links
		navlinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = ''
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`
			}
		})
		//burger animation
		burger.classList.toggle('cross')
	})
}
navslide()
