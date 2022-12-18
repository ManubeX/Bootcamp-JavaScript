// Ejercicio 3
// Teniendo en cuenta el siguiente template de una tarjeta de usuario y el siguiente array de objetos
//  Crea una card para cada usuario.
//  Como atributo alt de la imagen, quiero que se le añada el nombre del usuario.
//  Puedes usar los estilos que están en el template o crear tus propios estilos. Además organiza el código CSS como creas conveniente.

const users = [
  {
    name: "John Doe",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    img: "https://randomuser.me/api/portraits/men/38.jpg",
  },
  {
    name: "Jane Doe",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    img: "https://randomuser.me/api/portraits/women/74.jpg",
  },
  {
    name: "John Smith",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jane Smith",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    img: "https://randomuser.me/api/portraits/women/92.jpg",
  },
];

const fragment = document.createDocumentFragment();

users.forEach((usuario) => {
  const template = document.querySelector("template");
  const imagen = template.content.querySelector("img");
  const nombre = template.content.querySelector("h2");
  const descripcion = template.content.querySelector("p");

  console.log(imagen);
  imagen.src = usuario.img;
  imagen.alt = usuario.name;
  nombre.textContent = usuario.name;
  descripcion.textContent = usuario.description;

  const clone = template.content.cloneNode(true);
  fragment.append(clone);
});

console.log(users);
document.body.append(fragment);
