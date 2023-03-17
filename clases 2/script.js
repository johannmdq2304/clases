// Selector de navegación
const navLinks = document.querySelectorAll('nav ul li a');

// Función para agregar o quitar la clase 'active' en la navegación
function setActive() {
  navLinks.forEach(link => {
    if (link.hash === window.location.hash) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Ejecutar setActive() al cargar la página y al cambiar la URL con la navegación
window.addEventListener('load', setActive);
window.addEventListener('hashchange', setActive);

// Validación de formulario
const form = document.querySelector('form');
const nombreInput = document.querySelector('#nombre');
const emailInput = document.querySelector('#email');
const mensajeInput = document.querySelector('#mensaje');

function validarNombre() {
  const nombreValor = nombreInput.value.trim();
  if (nombreValor === '') {
    setError(nombreInput, 'Por favor ingrese su nombre');
  } else {
    setSuccess(nombreInput);
  }
}

function validarEmail() {
  const emailValor = emailInput.value.trim();
  if (emailValor === '') {
    setError(emailInput, 'Por favor ingrese su correo electrónico');
  } else if (!esCorreoElectronicoValido(emailValor)) {
    setError(emailInput, 'Por favor ingrese un correo electrónico válido');
  } else {
    setSuccess(emailInput);
  }
}

function validarMensaje() {
  const mensajeValor = mensajeInput.value.trim();
  if (mensajeValor === '') {
    setError(mensajeInput, 'Por favor ingrese un mensaje');
  } else {
    setSuccess(mensajeInput);
  }
}

function setError(input, mensaje) {
  const formControl = input.parentElement;
  const mensajeError = formControl.querySelector('small');
  formControl.classList.add('error');
  mensajeError.innerText = mensaje;
}

function setSuccess(input) {
  const formControl = input.parentElement;
  formControl.classList.remove('error');
}

function esCorreoElectronicoValido(correo) {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(correo);
}

// Ejecutar la validación en la presentación del formulario
form.addEventListener('submit', function(event) {
  event.preventDefault();
  validarNombre();
  validarEmail();
  validarMensaje();
});

// Scroll suave en la navegación
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

for (const smoothScrollLink of smoothScrollLinks) {
  smoothScrollLink.addEventListener('click', function(event) {
    event.preventDefault();
    const targetId = smoothScrollLink.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
}
