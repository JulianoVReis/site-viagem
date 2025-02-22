function corNavbar() {
	window.addEventListener('scroll', alterarCorNavbar)
	function alterarCorNavbar() {
		let navbar = document.querySelector('nav')
		let booking = document.querySelector('.booking')
		let bookingRect = booking.getBoundingClientRect()
		if (bookingRect.top < 50) {
			navbar.classList.add('navbar-solida')
		} else {
			navbar.classList.remove('navbar-solida')
		}
	}
}
corNavbar()

function carrossel() {
let clientes = document.querySelectorAll('.cliente')
let clienteAtual = 0 
function mostrarSlide(index) {
	clientes.forEach((cliente, i) => {
		if (i === index) {
			cliente.style.display = 'block' 
		} else {
			cliente.style.display = 'none'
		}
	})
}

function proximo() {
	clienteAtual = (clienteAtual + 1) % clientes.length
	mostrarSlide(clienteAtual)
}

function anterior() {
	clienteAtual = (clienteAtual - 1 + clientes.length) % clientes.length
	mostrarSlide(clienteAtual)
}

document.querySelector('.anterior').addEventListener('click', anterior)
document.querySelector('.proximo').addEventListener('click', proximo)

mostrarSlide(clienteAtual)
}
carrossel()