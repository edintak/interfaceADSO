// Agrega un event listener al formulario de registro para el evento de envío
document.getElementById('registroForm').addEventListener('submit', function(event) {
  // Previene el comportamiento predeterminado del formulario (enviar y recargar la página)
  event.preventDefault();

  // Obtiene los valores de los campos de contraseña y el elemento de mensaje
  var password1 = document.getElementById('password1').value;
  var password2 = document.getElementById('password2').value;
  var mensaje = document.getElementById('mensaje');

  // Comprueba si las contraseñas ingresadas coinciden
  if (password1 !== password2) {
    // Muestra un mensaje de error si las contraseñas no coinciden
    mensaje.style.color = '#f00'; // Rojo
    mensaje.textContent = 'Las contraseñas no coinciden.';
    return;
  }

  // Comprueba si la contraseña cumple con los criterios de seguridad
  if (!isValidPassword(password1)) {
    // Muestra un mensaje de error si la contraseña no cumple con los criterios
    mensaje.style.color = '#f00'; // Rojo
    mensaje.textContent = 'La contraseña debe tener al menos 8 caracteres y contener al menos una letra mayúscula, una minúscula y un número.';
    return;
  }

  // Si pasa todas las validaciones, muestra un mensaje de éxito en verde
  mensaje.style.color = '#0f0'; // Verde
  mensaje.textContent = 'Registro exitoso!';
  // Redirige a una página en blanco después de 3 segundos
  setTimeout(function() {
    window.location.href = 'tienda.html';
  }, 3000); // 3000 milisegundos equivalen a 3 segundos
});

// Función para validar la contraseña según criterios de seguridad
function isValidPassword(password) {
  // Expresión regular para verificar la validez de la contraseña
  var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  return regex.test(password);
}

