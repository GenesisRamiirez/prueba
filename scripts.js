// Obtener referencia al formulario y los campos
const form = document.querySelector('form');
const nameInput = document.querySelector('input[type="text"]');
const emailInput = document.querySelector('input[type="email"]');
const messageInput = document.querySelector('textarea');
const whatsappButton = document.querySelector('#whatsapp-button');

// Agregar evento de envío del formulario
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Evitar el envío del formulario por defecto

  // Validar campos antes de enviar
  if (validateInputs()) {
    // Obtener los valores de los campos
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // Construir el enlace de WhatsApp con los datos
    const encodedMessage = `Nombre: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0AMensaje: ${encodeURIComponent(message)}`;
    const whatsappLink = `https://wa.me/?text=${encodedMessage}`;

    // Actualizar el enlace del botón de WhatsApp
    whatsappButton.href = whatsappLink;

    // Limpiar los campos del formulario
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
  }
});

// Función para validar los campos del formulario
function validateInputs() {
  let isValid = true;

  // Validar campo de nombre
  if (nameInput.value.trim() === '') {
    isValid = false;
    nameInput.classList.add('error');
  } else {
    nameInput.classList.remove('error');
  }

  // Validar campo de correo electrónico
  if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value.trim())) {
    isValid = false;
    emailInput.classList.add('error');
  } else {
    emailInput.classList.remove('error');
  }

  // Validar campo de mensaje
  if (messageInput.value.trim() === '') {
    isValid = false;
    messageInput.classList.add('error');
  } else {
    messageInput.classList.remove('error');
  }

  return isValid;
}

// Función para validar el formato de correo electrónico
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

