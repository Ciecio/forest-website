const navbar = document.querySelector('.nav__navbar')
const navbarElements = document.querySelectorAll('.nav__element')
const navbarElementsMobile = document.querySelectorAll('.nav__navbar-element')

const nav = document.querySelector('nav')
const header = document.querySelector('header')
const offersite = document.querySelector('.offersite')

const nav1 = document.querySelector('#nav1')
const nav5 = document.querySelector('#nav5')

const navbar1 = document.querySelector('#navbar1')
const navbar5 = document.querySelector('#navbar5')

const burgerbtn = document.querySelector('.nav__burgerbtn')

const handleNav = () => {
	navbar.classList.toggle('nav__navbar-show')

	navbarElementsMobile.forEach(element => {
		element.addEventListener('click', () => {
			navbar.classList.remove('nav__navbar-show')
		})
	})
}

const removeActive = () => {
	navbarElements.forEach(element => {
		element.classList.remove('nav__element-active')
	})
}

const removeActiveMobile = () => {
	navbarElementsMobile.forEach(element => {
		element.classList.remove('nav__element-active')
	})
}

const scrollSpyOffers = () => {
	removeActive()
	if (scrollY + 1 > header.clientHeight && scrollY < header.clientHeight + offersite.clientHeight) {
		nav4.classList.add('nav__element-active')
	} else {
		nav1.classList.add('nav__element-active')
	}
}

const scrollSpyOffersMobile = () => {
	removeActiveMobile()
	if (scrollY + 1 > header.clientHeight && scrollY < header.clientHeight + offersite.clientHeight) {
		navbar4.classList.add('nav__element-active')
	} else {
		navbar1.classList.add('nav__element-active')
	}
}

burgerbtn.addEventListener('click', handleNav)
window.addEventListener('scroll', scrollSpyOffers)
window.addEventListener('scroll', scrollSpyOffersMobile)