// Teniendo en cuenta el siguiente array de objetos

// const users = [
//   { name: 'María', isPremium: false },
//   { name: 'Lucía', isPremium: true },
//   { name: 'Susana', isPremium: true },
//   { name: 'Rocío', isPremium: false },
//   { name: 'Inmaculada', isPremium: false }
// ];

//  Crea una lista no ordenada con el nombre de cada usuario.
 const users = [
    { name: 'María', isPremium: false },
    { name: 'Lucía', isPremium: true },
    { name: 'Susana', isPremium: true },
    { name: 'Rocío', isPremium: false },
    { name: 'Inmaculada', isPremium: false }
  ];


  const body = document.querySelector('body');
  const div = document.createElement("div");
  const ul = document.createElement("ul");

  users.forEach((usuario) =>{
    const li = document.createElement("li");
    li.textContent = usuario.name;
    li.dataset.premium = usuario.isPremium;
    ul.append(li)
  })
  div.append(ul);
  body.append(div);

  //  Resalta con el background-color gold a los usuarios premium.
  const listaUsuarios = document.querySelectorAll('li');

  listaUsuarios.forEach((usuarios)=>{
    if(usuarios.dataset.premium === "true") usuarios.classList.add('premium');
  });
//  Añade también el atributo title con el valor Usuario premium a los usuarios premium.

listaUsuarios.forEach((usuario)=>{
  if(usuario.dataset.premium === "true"){
    usuario.title = 'Usuario Premium';
  };
});

