const p = document.querySelector("p");
const txtArea = document.querySelector("textarea");
const txFallos = document.querySelector(".fallos");
let fallos = 0;

//rellena el parrafo
const texto = getTexto();
const fragment = document.createDocumentFragment();
for (let i = 0; i < texto.length; i++) {
  const span = document.createElement("span");
  span.id = i;
  span.textContent = texto[i];
  fragment.append(span);
}
p.append(fragment);


txtArea.addEventListener("keydown", (e) => {
  console.log(e.key);
  console.log(e.key.length);
  if (e.key.length == 1 || e.key ===  "Backspace") {
    const x = document.getElementById(`${txtArea.value.length}`);
    if (x.textContent == e.key) {
      x.classList = "correcto";
    }
    if (x.textContent != e.key && e.key != "Backspace") {
      x.classList = "error";
      fallos++;
    }

    txFallos.textContent = fallos;
  }
});

function getTexto() {
  const textos = [
    `Un día un lobo pensó en cambiar su apariencia para obtener su comida más fácilmente. Entonces decidió en disfrazarse de oveja e ir a pastar con el rebaño, despistando así al pastor.
Al anochecer, fue llevado junto con todo el rebaño a un corral, quedando la puerta asegurada.
Entonces el pastor buscando su provisión de carne para el siguiente mes, tomó al lobo creyendo que era un cordero y lo sacrificó al instante.`,

    `Una de las primeras personas cuya vida cobro la construcción de la presa, fue George Tierney, quien falleció el 20 de diciembre de 1922 durante los trabajos preparativos. 
La última persona que murió en la construcción fue Patrick Tierney, hijo de George, quien también falleció el 20 de diciembre.`,

    `Es un conjunto de astros de la galaxia vía Láctea formado por el Sol, nueve planetas, veintisiete satélites, muchos asteroides y cometas que giran todos alrededor del Sol. 
Los planetas son: Mercurio, Venus, la Tierra, Marte, Júpiter, Saturno, Urano, Neptuno y Plutón.`,

'El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña toca el saxofón detrás del palenque de paja. 1234567890'
  ];

  return textos[Math.floor(Math.random() * textos.length)];
}


