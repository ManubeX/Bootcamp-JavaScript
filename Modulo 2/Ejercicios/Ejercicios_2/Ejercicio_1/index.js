// Ejercicio 1
// Teniendo en cuenta el siguiente HTML

// <div class="app">
//     <p>Soy un párrafo</p>
//     <p>Soy otro párrafo</p>
// </div>

//  Crea una imagen con el atributo src con el valor https://via.placeholder.com/150 y el atributo alt con el valor Imagen de ejemplo.

const imagen = document.createElement("img");
imagen.src = "https://via.placeholder.com/150";
imagen.alt = "Imagen de ejemplo";

//  Inserta la imagen dentro del div con la clase app.

const div = document.querySelector(".app");
div.append(imagen);


// ¿Podrías insertar la imagen antes del primer párrafo? Toca investigar 🦩
//Si con prepedn
const imagen2 = document.createElement("img");
imagen2.src = "https://via.placeholder.com/150";
imagen2.alt = "Imagen de ejemplo";
div.prepend(imagen2);


// ¿Podrías insertar la imagen entre los dos párrafos?

const imagen3 = document.createElement("img");
imagen3.src = "https://via.placeholder.com/150";
imagen3.alt = "Imagen de ejemplo";
const p = div.querySelectorAll('p');
div.insertBefore(imagen3, p[1]);


