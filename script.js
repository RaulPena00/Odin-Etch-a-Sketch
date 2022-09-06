

function makeGrid(x) {
    const container = document.getElementById("container");
    
    for (let rows = 0; rows < x; rows++){
        const row = document.createElement('div');
        for(let columns = 1; columns < x; columns++){
            const cell = document.createElement('div');
            cell.className = 'squares';
            row.appendChild(cell); 
            cell.addEventListener('mouseover', () => hover(cell))           
        };
        container.appendChild(row)
    };
};



function hover(element){
    element.style.backgroundColor = "black";
}

makeGrid(20)
