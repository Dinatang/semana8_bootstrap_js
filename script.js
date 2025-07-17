// Mostrar alerta personalizada
function mostrarAlerta() {
  alert("¡Gracias por visitar nuestra página!");
}

// Validación del formulario
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre");
  const correo = document.getElementById("correo");
  const mensaje = document.getElementById("mensaje");

  let esValido = true;

  if (!nombre.value.trim()) {
    nombre.classList.add("is-invalid");
    esValido = false;
  } else {
    nombre.classList.remove("is-invalid");
  }

  if (!correo.value.includes("@") || !correo.value.includes(".")) {
    correo.classList.add("is-invalid");
    esValido = false;
  } else {
    correo.classList.remove("is-invalid");
  }

  if (!mensaje.value.trim()) {
    mensaje.classList.add("is-invalid");
    esValido = false;
  } else {
    mensaje.classList.remove("is-invalid");
  }

  if (esValido) {
    alert("Formulario enviado correctamente.");
    this.reset();
  }
});
