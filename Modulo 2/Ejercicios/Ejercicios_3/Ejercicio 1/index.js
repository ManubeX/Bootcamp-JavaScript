// Crea un formulario con un input de tipo text y un botón de tipo submit.
// Crea un párrafo vacío debajo del formulario.
// Al hacer click en el botón submit, pinta en el párrafo el texto que hay en el input.
// Si el texto del input es menor de 5 caracteres, pinta el texto en rojo.
// Al hacer click en el botón submit, vacía el input.

const input = document.querySelector("input");
const boton = document.querySelector("button");
const p = document.querySelector("p");

boton.addEventListener("click", function () {
  if (input.value.length <= 5) {
    p.classList = "menos5";
  } else p.classList = "mas5";

  p.textContent = input.value;
  input.value = "";
});
