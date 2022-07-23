const navslide = () => {
	const burger = document.querySelector('.burger')
	const nav = document.querySelector('.nav-links')
	const navlinks = document.querySelectorAll('.nav-links li')

	burger.addEventListener('click', () => {
		//Toggle the navigation
		nav.classList.toggle('nav-active')

		//animating the links
		navlinks.forEach((link, index) => {
			if (link.style.animation) {
				// reset animation to 0
				link.style.animation = ''
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`
			}
		})
		//toggle the x
		burger.classList.toggle('cross')
	})
}
navslide()
