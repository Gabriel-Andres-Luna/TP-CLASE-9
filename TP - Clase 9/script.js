// Obtener el formulario y los campos de entrada
var formulario = document.getElementById("formulario");
var nombreInput = document.getElementById("nombre");
var emailInput = document.getElementById("email");
var contrasenaInput = document.getElementById("contrasena");
var edadInput = document.getElementById("edad");
var telefonoInput = document.getElementById("telefono");
var direccionInput = document.getElementById("direccion");
var ciudadInput = document.getElementById("ciudad");
var codigoPostalInput = document.getElementById("codigo-postal");
var dniInput = document.getElementById("dni");

formulario.addEventListener("submit", function (event) {
  if (!validarNombre(nombreInput.value)) {
    mostrarError(nombreInput, "El nombre debe tener más de 6 letras y al menos un espacio entre medio.");
    event.preventDefault();
  }

  if (!validarEmail(emailInput.value)) {
    mostrarError(emailInput, "El email debe tener un formato válido.");
    event.preventDefault();
  }

  if (!validarContrasena(contrasenaInput.value)) {
    mostrarError(contrasenaInput, "La contraseña debe tener al menos 8 caracteres, formados por letras y números.");
    event.preventDefault();
  }

  if (!validarEdad(edadInput.value)) {
    mostrarError(edadInput, "La edad debe ser un número entero mayor o igual a 18.");
    event.preventDefault();
  }

  if (!validarTelefono(telefonoInput.value)) {
    mostrarError(telefonoInput, "El teléfono debe tener al menos 7 dígitos y no debe contener espacios, guiones ni paréntesis.");
    event.preventDefault();
  }

  if (!validarDireccion(direccionInput.value)) {
    mostrarError(direccionInput, "La dirección debe tener al menos 5 caracteres, con letras, números y un espacio en el medio.");
    event.preventDefault();
  }

  if (!validarCiudad(ciudadInput.value)) {
    mostrarError(ciudadInput, "La ciudad debe tener al menos 3 caracteres.");
    event.preventDefault();
  }


  if (!validarCodigoPostal(codigoPostalInput.value)) {
    mostrarError(codigoPostalInput, "El código postal debe tener al menos 3 caracteres.");
    event.preventDefault();
  }

  if (!validarDNI(dniInput.value)) {
    mostrarError(dniInput, "El DNI debe ser un número de 7 u 8 dígitos.");
    event.preventDefault();
  }
});


function validarNombre(nombre) {
  return nombre.trim().length > 6 && nombre.includes(" ");
}

function validarEmail(email) {
  var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
  return regex.test(email);
}

function validarContrasena(contrasena) {
  var regex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
  return regex.test(contrasena);
}

function validarEdad(edad) {
  return Number.isInteger(Number(edad)) && parseInt(edad) >= 18;
}

function validarTelefono(telefono) {
  var regex = /^\d{7,}$/;
  return regex.test(telefono);
}

function validarDireccion(direccion) {
  var regex = /^[a-zA-Z0-9]+\s[a-zA-Z0-9\s]+$/;
  return regex.test(direccion) && direccion.length >= 5;
}

function validarCiudad(ciudad) {
  return ciudad.trim().length >= 3;
}

function validarCodigoPostal(codigoPostal) {
  return codigoPostal.trim().length >= 3;
}

function validarDNI(dni) {
  var regex = /^\d{7,8}$/;
  return regex.test(dni);
}

function mostrarError(elemento, mensaje) {
  var errorDiv = elemento.nextElementSibling; 
  errorDiv.innerHTML = mensaje;
  errorDiv.style.display = "block";
}

