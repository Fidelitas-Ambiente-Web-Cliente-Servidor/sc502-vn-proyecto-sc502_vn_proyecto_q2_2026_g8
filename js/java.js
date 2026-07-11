
// inicio de sesion 

  var correo = document.getElementById("correo").value;
  var contrasena = document.getElementById("contrasena").value;
  var mensaje = document.getElementById("mensajeLogin");

  if (correo === "" || contrasena === "") {
    mensaje.className = "mensaje-error";
    mensaje.innerHTML = "Complete todos los campos porfa.";
    return false;
  }

  mensaje.className = "mensaje-exito";
  mensaje.innerHTML = "Ingresando...";
  window.location.href = "menu.html";
  return false;


// crearcuenta


function validarRegistro() {
  var nombre = document.getElementById("nombre").value;
  var correo = document.getElementById("correo").value;
  var contrasena = document.getElementById("contrasena").value;
  var confirmar = document.getElementById("confirmar").value;
  var mensaje = document.getElementById("mensajeRegistro");

  if (nombre === "" || correo === "" || contrasena === "" || confirmar === "") {
    mensaje.className = "mensaje-error";
    mensaje.innerHTML = "Complete todos los campos porfa.";
    return false;
  }

  if (contrasena !== confirmar) {
    mensaje.className = "mensaje-error";
    mensaje.innerHTML = "Las contrasenas no son iguales.";
    return false;
  }

  mensaje.className = "mensaje-exito";
  mensaje.innerHTML = "Listo, ya quedo registrado. Ahora puede iniciar sesion.";
  return false;
}


// formulario

function mostrarFormularioReporte() {
  var formulario = document.getElementById("formularioReporte");

  if (formulario.style.display === "block") {
    formulario.style.display = "none";
  } else {
    formulario.style.display = "block";
  }
}


// reporte

function enviarReporte() {
  var tipo = document.getElementById("tipoIncidente").value;
  var comentario = document.getElementById("comentarioReporte");
  var mensaje = document.getElementById("mensajeReporte");

  if (tipo === "" || comentario.value === "") {
    mensaje.className = "mensaje-error";
    mensaje.innerHTML = "Falta el tipo de incidente o el comentario.";
    return false;
  }

  mensaje.className = "mensaje-exito";
  mensaje.innerHTML = "Gracias, ya se envio su reporte.";
  comentario.value = "";
  return false;
}

// likes 
function votar(idContador, tipo) {
  var contador = document.getElementById(idContador);
  var valor = parseInt(contador.innerHTML);

  if (tipo === "like") {
    valor = valor + 1;
  } else {
    valor = valor - 1;
  }

  contador.innerHTML = valor;
}

// historial de reportes
function cargarHistorial() {
  var lista = document.getElementById("listaHistorial");
  if (lista === null) {
    return;
  }

  lista.innerHTML =
    "<li>San Jose - Cartago: Retraso de 15 minutos" +
    "<span class='fecha-reporte'>05 jul. 2026</span></li>" +
    "<li>San Jose - Heredia: Bus visto en la parada" +
    "<span class='fecha-reporte'>03 jul. 2026</span></li>" +
    "<li>San Jose - Alajuela: Ruta sin atrasos" +
    "<span class='fecha-reporte'>01 jul. 2026</span></li>";
}

// reportes cercanos
function cargarReportesCercanos() {
  var lista = document.getElementById("listaReportesCercanos");
  if (lista === null) {
    return;
  }

  lista.innerHTML =
    "<li>San Jose - Cartago: Bus visto hace 3 minutos</li>" +
    "<li>San Jose - Desamparados: Retraso reportado</li>" +
    "<li>San Jose - Tibas: Sin novedad</li>";
}

// guardar cambios 
function guardarPerfil() {
  var mensaje = document.getElementById("mensajePerfil");
  mensaje.className = "mensaje-exito";
  mensaje.innerHTML = "Cambios guardados.";
  return false;
}
