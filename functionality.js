//Sets important constants and variables
const container = document.getElementById('container');
let rows = document.getElementsByClassName('gridRow');
let cells = document.getElementsByClassName('cell')

defaultGrid();
//creates a default grid sized 16x16
function defaultGrid() {
    makeRows(16);
    makeColumns(16);
}

//Takes (rows, columns) input and makes a grid
function makeRows(rowNum) {
    //create rows
    for (let r = 0; r < rowNum; r++) {
        let row = document.createElement('div');
        container.appendChild(row).className = 'gridRow';
    };
};

//creates columns
function makeColumns(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement('div');
            rows[j].appendChild(newCell).className = 'cell'
        };
    };
};



console.log(container)

















