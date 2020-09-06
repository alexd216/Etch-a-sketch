const container = document.querySelector('#container');

function createBlock(num) {
    while (num > 0) {
    const block = document.createElement('div');
    block.classList.add('block');
    block.textContent = '';
    block.style.display = 'inline-table';
    block.style.height = '70px';
    block.style.width = '100px';
    block.style.margin = '1px 1px 1px 1px';
    block.style.border = 'solid black';
    block.addEventListener('mouseover', funciton() {
        style.backgroundColor = 'yellow';
    })
    container.appendChild(block);
    num --;
    }
}

for (let i = 1; i < 16; i++) createBlock(16);
