// create container and variables needed to set the size of the boxes
const container = document.querySelector('#container');
const w = window.innerWidth;
const h = window.innerHeight;
let num = 0;
let colour = 0;
// create button to refresh page and ask the user for the size of the grid
newGame.addEventListener('click', function(){
    container.innerHTML = ''
    num = prompt('How many sizes would you like in your grid?')
    grid(num);
})

// function that creates the boxes for one line across the screen
function createBlock(num) {
    wid = (w/num - 5);
    hei = (h/num - 5);
    while (num > 0) {
    const block = document.createElement('div');
    block.classList.add('block');
    block.id = num;
    block.textContent = '';
    block.style.display = 'inline-table';
    block.style.height = hei + 'px';
    block.style.width = wid + 'px';
    block.style.margin = '0 0 0 0';
    block.style.border = 'solid black 0';
    block.style.padding = '0 0 0 0';
    block.addEventListener('mouseover', function() {
        block.style.backgroundColor = colour;
        ;
    })
    container.appendChild(block);
    num --;
    colour = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)
    }
}

//this function runs the above script to make the grid
function grid(num) {
for (let i = 0; i < num; i++) createBlock(num);
}