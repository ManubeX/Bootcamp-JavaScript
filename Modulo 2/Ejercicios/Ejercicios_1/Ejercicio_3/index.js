// Ejercicio 3
// Crea un cuadrado de 100x100px con el color de fondo red y el color de texto white con el texto Soy un cuadrado en el centro.


const body = document.querySelector('body');
const cuadrado = document.createElement('div');

cuadrado.classList.add('cuadrado');

body.append(cuadrado);

//  Cada vez que se recargue la página el cuadrado debe tener un color de fondo aleatorio de entre los siguientes: red, green, blue, yellow, pink, purple, orange.
const colores = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'orange'];
const coloresAlatorio = colores[Math.floor(Math.random() * colores.length)];
cuadrado.style.backgroundColor = coloresAlatorio;

//  Si el color de fondo es red, green o blue el tamaño del cuadrado debe ser de 100x100px, si es yellow, pink o purple el tamaño del cuadrado debe ser de 200x200px y si es orange el tamaño del cuadrado debe ser de 300x300px.

switch(coloresAlatorio){
    case 'red':
    case 'green':
    case 'blue':
        tamanoCuadrado('pequeño');
        break;
    case 'yellow':
    case 'pink':
    case 'purple':
        tamanoCuadrado('mediano');
        break;
    case 'orange':
        tamanoCuadrado('grande');
        break;


};

function tamanoCuadrado (tamano){
    cuadrado.classList.add(tamano);
};
