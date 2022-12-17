/* Teniendo en cuenta el siguiente HTML

<p>Este es el primer párrafo</p>
<p class="parrafo">Este es el segundo párrafo</p>
<p>Este es el tercer párrafo</p> */

//  Muestra en la consola el texto de cada uno de los párrafos.
const parrafos = document.querySelectorAll('p');
parrafos.forEach((elemento) =>{
    console.log(elemento.textContent);
});


//  Muestra en la consola el texto de cada uno de los párrafos que tengan la clase parrafo.
const clasesParrafos = document.querySelectorAll('.parrafo');
clasesParrafos.forEach((elemento) =>{
    console.log(elemento.textContent);
});
//  Modifica el texto de cada uno de los párrafos que tengan la clase parrafo por "Hola Mundo".
clasesParrafos.forEach((elemento) =>{
   elemento.textContent = "Hola mundo";
});
//  Cambia el color de fondo de cada uno de los párrafos que tengan la clase parrafo por red.
clasesParrafos.forEach((elemento) =>{
    elemento.style.backgroundColor="red";
 });
//  Añade un span con el texto "Infiltrado" al final de cada uno de los párrafos que tengan la clase parrafo.
const span = document.createElement("span");
span.innerHTML = ` Infiltrado `;
clasesParrafos.forEach((elemento) =>{
    elemento.append(span);
 });