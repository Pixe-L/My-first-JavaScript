// ESCUCHAR EL CLICK EN EL BOTÓN.
const boton = document.getElementById('boton');
boton.addEventListener('click', preguntarNombre);

// GUARDAMOS REFERENCIA A LOS HEADINGS
const h1 = document.getElementById('h1');
const h2 = document.getElementById('h2');

// PREGUNTAR Y GUARDAR EL NOMBRE AL USUARIO.
function preguntarNombre() {
 const nombre = prompt('Introduce tu respuesta');
 mostrarNombre(nombre);
}

// INSERTAR EL NOMBRE DONDE AHORA ESTÁN LOS...
function mostrarNombre(nombre) {
 h2.textContent = '¡Gracias amor!';
 h1.textContent = 'No te voy a defraudar nunca';
}
