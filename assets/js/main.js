// NAV TOGGLE VIEW ON MOBILE

if (window.innerWidth <= 900) {
	const nav = document.querySelector('header .container nav')
	const toggle = document.querySelectorAll('.btn-toggle')
	const links = document.querySelectorAll('header .container nav a ')

	for (element of toggle) {
		element.addEventListener('click', () => {
			document.documentElement.classList.toggle('clipped')
			nav.classList.toggle('show')
		})
	}

	for (element of links) {
		element.addEventListener('click', () => {
			document.documentElement.classList.toggle('clipped')
			nav.classList.toggle('show')
			console.log('aaaa')
		})
	}
}
