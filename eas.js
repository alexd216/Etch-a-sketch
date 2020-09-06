


// create container and variables needed to set the size of the boxes
const container = document.querySelector('#container');
const w = window.innerWidth;
const h = window.innerHeight;
const num = prompt('select the size of the grid');

console.log(w);
// function that creates the boxes for one line across the screen
function createBlock(num) {
    wid = (w/num - 5);
    hei = (h/num - 5);
    console.log(wid);
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
        block.style.backgroundColor = 'yellow';
    })
    container.appendChild(block);
    num --;
    }
}
//this function runs the above script to make the grid
function grid() {
for (let i = 0; i < num; i++) createBlock(num);
}