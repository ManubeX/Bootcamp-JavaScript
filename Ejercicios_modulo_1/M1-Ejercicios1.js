let nombre = "Manube";
let edad = 32;
let mayorDeEdad = true;
let direccion = {calle: "Falsa 123", ciudad: "Valencia", cp: 46009};
let coloresFavorito = ["Azul", "Verde", "Naranja"];
let lenguajesFavoritos = ["Java", "Kotlin", "C#", "JavaScript", "Php"];
let mejorLenguaje = lenguajesFavoritos[0];
let peorLenguaje = lenguajesFavoritos[4];

//Ejercicio 3
const numero1 = 16;
const numero2 = 7;

let suma = numero1 + numero2;
console.log(suma);

let resta = numero1 - numero2;
console.log(resta);

let multiplicacion = numero1 * numero2;
console.log(multiplicacion);

let division = numero1 / numero2;
console.log(division);

//Ejercicio 4

const saludo = "Hola";

if(saludo == "Hola") {
    console.log("Ha saludado");
};

//Ejercicio 5
let pokemons = ['Charizard', 'Hunter', 'Mewtwo'];
console.log(pokemons.join(' '));
console.log(pokemons[0], pokemons[1], pokemons[2]);
for(let i=0; i<pokemons.length; i++){
    console.log(pokemons[i])
};

//Ejercicio 6

let pokemonTipo = [{nombre: "Charizard", tipoDePokemon: "Fuego"}, {nombre: "Hunter", tipoDePokemon: "Fantasma"}, {nombre: "Mewtwo", tipoDePokemon: "Psíquico"}];

pokemonTipo.forEach(element=>{
    if(element.tipoDePokemon == "Fuego"){
        console.log(element.nombre, "¡Es un pokemon de fuego!")
    }

});