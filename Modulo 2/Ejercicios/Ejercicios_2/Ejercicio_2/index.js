// Ejercicio 2
// Teniendo en cuenta el siguiente array de objetos

// const animals = [
//   { name: 'Lion King', isCarnivore: true },
//   { name: 'Plant', isCarnivore: false },
//   { name: 'Ant', isCarnivore: true },
//   { name: 'Bee', isCarnivore: true },
//   { name: 'Mouse', isCarnivore: true }
// ];

//  Crea 2 listas, una para carnívoros y otra para herbívoros.
//  Intenta evitar el reflow a la hora de añadir elementos a las listas.
//  Quiero que se le añada la clase carnivore a los carnívoros y la clase herbivore a los herbívoros.
//  A los carnívoros quiero que se les añada un emoji 🍖 y a los herbívoros🌱. Al final de cada nombre.

const animals = [
  { name: "Lion King", isCarnivore: true },
  { name: "Plant", isCarnivore: false },
  { name: "Ant", isCarnivore: true },
  { name: "Bee", isCarnivore: true },
  { name: "Mouse", isCarnivore: true },
];
const fragment = document.createDocumentFragment();
const carnivoros = document.createElement('ul');
const herbivoros = document.createElement('ul');
fragment.append(carnivoros, herbivoros);

animals.forEach((animal)=>{
    const li = document.createElement("li");
    if(animal.isCarnivore){
        li.textContent = `${animal.name} 🍖`;
        li.classList.add = "carnivore";
        carnivoros.append(li);
    } else{
        li.textContent = `${animal.name} 🌱`;
        li.classList.add = "carnherbivoreivore";
        herbivoros.append(li);
    }
})

document.body.append(fragment);