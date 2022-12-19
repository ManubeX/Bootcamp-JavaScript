const h2 = document.querySelector('.color-code');
const div = document.querySelector('.color-container');
const button = document.querySelector('button');

button.addEventListener('click', function(){
    const color = randomColor();
    h2.textContent = color;
    div.style.backgroundColor = color;

})

function randomColor(){
    return "#" + Math.random().toString(16).slice(2, 8);
}