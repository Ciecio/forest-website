//Nav
const navbar = document.querySelector('.nav__navbar')
const navbarElements = document.querySelectorAll('.nav__element')
const navbarElementsMobile = document.querySelectorAll('.nav__navbar-element')

//Nav elements
const nav1 = document.querySelector('#nav1')
const nav2 = document.querySelector('#nav2')
const nav3 = document.querySelector('#nav3')

//Mobile nav elements
const navbar1 = document.querySelector('#navbar1')
const navbar2 = document.querySelector('#navbar2')
const navbar3 = document.querySelector('#navbar3')

//Sections
const nav = document.querySelector('nav')
const header = document.querySelector('header')
const aboutus = document.querySelector('.aboutus')
const adventures = document.querySelector('.adventures')

//Buttons
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

const scrollSpy = () => {
	removeActive()
	if (
		scrollY + 1 > header.clientHeight &&
		scrollY < header.clientHeight + aboutus.clientHeight + adventures.clientHeight
	) {
		nav2.classList.add('nav__element-active')
	} else if (scrollY > header.clientHeight + aboutus.clientHeight + adventures.clientHeight) {
		nav3.classList.add('nav__element-active')
	} else {
		nav1.classList.add('nav__element-active')
	}
}

const scrollSpyMobile = () => {
	removeActiveMobile()
	if (
		scrollY + 1 > header.clientHeight &&
		scrollY < header.clientHeight + aboutus.clientHeight + adventures.clientHeight
	) {
		navbar2.classList.add('nav__element-active')
	} else if (scrollY > header.clientHeight + aboutus.clientHeight + adventures.clientHeight) {
		navbar3.classList.add('nav__element-active')
	} else {
		navbar1.classList.add('nav__element-active')
	}
}

burgerbtn.addEventListener('click', handleNav)
window.addEventListener('scroll', scrollSpy)
window.addEventListener('scroll', scrollSpyMobile)

