
function newGrid(size){
    
    for (i = 0; i < size; i++){
        const row = document.createElement('div');
        for (j = 0; j < size; j++){
            const cell = document.createElement('div');
            cell.className = 'squares';
            row.appendChild(cell);
            cell.addEventListener('mouseover', () => hover(cell));
            }
            container.appendChild(row);
        }
} 

function resetButton(){
    const size = prompt('Insert the size of the grid');
    if(size > 100){
        return alert("Invalid value, please insert a value lesser than 100");
    }
    else{

        const grid = document.querySelector('.squares');
                

        for (i = 0; i < size; i++){
            const row = document.createElement('div');
            for (j = 0; j < size; j++){
                const cell = document.createElement('div');
                cell.className = 'squares';
                row.appendChild(cell);
                cell.addEventListener('mouseover', () => hover(cell));
                }
        container.appendChild(row);
        }
    }
}

const btnod = document.getElementById('btn');
btnod.addEventListener('click', () => resetButton());

function hover(element){
    element.style.backgroundColor = "black";
}

newGrid(16)