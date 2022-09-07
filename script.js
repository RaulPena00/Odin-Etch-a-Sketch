//Create the default grid
function newGrid(size){
    
    for (i = 0; i < size; i++){
        const row = document.createElement('div');
        row.classList = 'replace';
        for (j = 0; j < size; j++){
            const cell = document.createElement('div');
            cell.className = 'squares';
            cell.style.height = (heightWidth(size) + "px");
            cell.style.width = (heightWidth(size) + "px");
            row.appendChild(cell);
            cell.addEventListener('mouseover', () => hover(cell));
            }
            container.appendChild(row);
        }
} 

//Reset the grid and make a new one
function resetButton(){

    const size = prompt('Insert the size of the grid');
    if(size < 1 || size > 100 ){
        return alert("Invalid value, please insert a value between 1 and 100");
    }
    else{

        const grid = document.querySelectorAll('.replace');
        for (var s = 0; s < grid.length; s++){
        grid[s].remove();
        };          

        for (i = 0; i < size; i++){
            const row = document.createElement('div');
            row.classList = 'replace';
            for (j = 0; j < size; j++){
                const cell = document.createElement('div');
                cell.className = 'squares';
                cell.style.height = (heightWidth(size) + "px");
                cell.style.width = (heightWidth(size) + "px");
                row.appendChild(cell);
                cell.addEventListener('mouseover', () => hover(cell));
                };
        container.appendChild(row);
        };
    };
};

//Auxialiary function for the size of the cells
function heightWidth(gridSize){
    var heightAndWidth = 960/gridSize;
    return heightAndWidth;
}

//Event listener of the "New Grid" button
const btnod = document.getElementById('btn');
btnod.addEventListener('click', () => resetButton());


//Hover effect
function hover(element){
    element.style.backgroundColor = "black";
}

newGrid(16)