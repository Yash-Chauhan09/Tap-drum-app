const sounds = document.querySelectorAll('.sound');
const drums = document.querySelectorAll('.drums div');
const balls = document.querySelector('.balls');
const colors = [
    'rgb(223, 39, 39)',
    'rgb(34, 111, 212)',
    'rgb(120, 216, 41)',
    'rgb(212, 209, 24)',
    'rgb(204, 23, 204)',
    'rgb(228, 99, 13)'
]
drums.forEach((drum,index) =>{
    drum.addEventListener('click',function(){ 
        sounds[index].currentTime = 0; 
   sounds[index].play();
   createBubbles(index);
})
})
const createBubbles = (index) =>{
const bubbles = document.createElement('div');
balls.appendChild(bubbles);
bubbles.style.backgroundColor = colors[index];
bubbles.style.animation = 'jump 1s ease';
bubbles.addEventListener('animationend',() =>{
    balls.removeChild(bubbles);
})
}