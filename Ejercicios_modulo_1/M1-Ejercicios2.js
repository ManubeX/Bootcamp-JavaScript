
//Ejercicio 1
function doble (numero){
    return numero*2;
};

console.log(doble(4));

//Ejercicio 2
function cuadrado (numero){
    return numero*numero;
};
console.log(cuadrado(4));

//Ejercicio 3
function areaRectangulo (base, altura){
    return base*altura;
};
console.log(areaRectangulo(3,7));

//Ejercicio 4
function esPar (numero){
    if(numero%2 == 0){
        console.log("Es par");
    }else{
        console.log("No es par");
    };
};

esPar(4);

//Ejercicio 5
const personas = [

    { nombre: 'Juan', edad: 18 },
  
    { nombre: 'María', edad: 16 },
  
    { nombre: 'Pedro', edad: 20 },
  
    { nombre: 'Pablo', edad: 15 },
  
    { nombre: 'Laura', edad: 19 },
  
  ];

  function mayoresDeEdad (arrayPersonas){
    let personasMayoresDeEdad = [];
    arrayPersonas.forEach(element => {
        if(element.edad >= 18){
            personasMayoresDeEdad.push(element)
        };
    });
    return personasMayoresDeEdad;
  }
 let personasMayores = mayoresDeEdad(personas);

 for(let i=0; i<personasMayores.length; i++){
    console.log(personasMayores[i]);
};

personas.sort((a,b) => a.edad - b.edad);
console.log("El mas joven es ", personas[0]);
console.log("El mas mayor es ", personas[personas.length -1])




  