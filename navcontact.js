const navbar = document.querySelector('.nav__navbar')
const navbarElements = document.querySelectorAll('.nav__element')
const navbarElementsMobile = document.querySelectorAll('.nav__navbar-element')

const nav = document.querySelector('nav')
const header = document.querySelector('header')
const contact = document.querySelector('.contact__wrapper')

const nav1 = document.querySelector('#nav1')
const nav4 = document.querySelector('#nav5')

const navbar1 = document.querySelector('#navbar1')
const navbar4 = document.querySelector('#navbar5')

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

const scrollSpyContact = () => {
	removeActive()
	if (scrollY + 1 > header.clientHeight && scrollY < header.clientHeight + contact.clientHeight) {
		nav5.classList.add('nav__element-active')
	} else {
		nav1.classList.add('nav__element-active')
	}
}
const scrollSpyContactMobile = () => {
	removeActiveMobile()
	if (scrollY + 1 > header.clientHeight && scrollY < header.clientHeight + contact.clientHeight) {
		navbar5.classList.add('nav__element-active')
	} else {
		navbar1.classList.add('nav__element-active')
	}
}

//Form validator
const username = document.querySelector('#username')
const surname = document.querySelector('#surname')
const email = document.querySelector('#email')
const textarea = document.querySelector('#textarea')
const popup = document.querySelector('.form__popup')

const sendBtn = document.querySelector('.form__btn-send')
const clearBtn = document.querySelector('.form__btn-clear')
const closeBtn = document.querySelector('.form__btn-close')

const showError = (input, msg) => {
	const inputArea = input.parentElement
	const errorMsg = inputArea.querySelector('.form__errortext')

	inputArea.classList.add('form__errortext--show')
	errorMsg.classList.add('form__errortext--show')
	errorMsg.textContent = msg
}

const clearError = input => {
	const inputArea = input.parentElement
	const errorMsg = inputArea.querySelector('.form__errortext')
	inputArea.classList.remove('form__errortext--show')
	errorMsg.classList.remove('form__errortext--show')
}

const checkForm = input => {
	input.forEach(el => {
		if (el.value === '') {
			showError(el, el.placeholder)
		} else {
			clearError(el)
		}
	})
}

const checkLength = (input, min) => {
	if (input.value.length < min) {
		showError(input, `${input.previousElementSibling.innerText.slice(0, -1)} musi skladac sie z min ${min} znakow.`)
	}
}

const checkMail = email => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/

	if (re.test(email.value)) {
		clearError(email)
	} else {
		showError(email, `Niepoprawny adres email`)
	}
}

const checkErrors = () => {
	const allInputs = document.querySelectorAll('.form__inputarea')
	let errorCount = 0

	allInputs.forEach(el => {
		if (el.classList.contains('form__errortext--show')) {
			errorCount++
		}
	})
	if (errorCount === 0) {
		popup.classList.add('form__popup--show')
	}
}

sendBtn.addEventListener('click', e => {
	e.preventDefault()

	checkForm([username, surname, email, textarea])
	checkLength(username, 3)
	checkLength(surname, 3)
	checkLength(textarea, 20)
	checkMail(email)
	checkErrors()
})

clearBtn.addEventListener('click', e => {
	e.preventDefault()
	;[username, surname, email, textarea].forEach(el => {
		el.value = ''
		clearError(el)
	})
})

burgerbtn.addEventListener('click', handleNav)
window.addEventListener('scroll', scrollSpyContact)
window.addEventListener('scroll', scrollSpyContactMobile)
