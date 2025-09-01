// Obtener el formulario de contacto del documento
const form = document.querySelector('form');

// Escuchar el evento 'submit' (cuando el usuario intenta enviar el formulario)
form.addEventListener('submit', (event) => {
    // Prevenir el envío por defecto del formulario para poder validarlo
    event.preventDefault();

    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    // Lógica de validación
    if (nombre.trim() === '') {
        alert('Por favor, ingresa tu nombre.');
        return;
    }

    if (email.trim() === '') {
        alert('Por favor, ingresa tu dirección de email.');
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, ingresa un email válido.');
        return;
    }

    if (mensaje.trim() === '') {
        alert('Por favor, escribe un mensaje.');
        return;
    }

    // Si todos los campos son válidos, se puede proceder con el envío
    // Enviar el formulario a Formspree
    event.target.submit();
});

// También podemos agregar un mensaje de bienvenida al cargar la página
window.addEventListener('load', () => {
    console.log('¡La página de Refritec ha cargado completamente!');
});