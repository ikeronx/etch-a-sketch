//Sets important constants and variables
const container = document.getElementById("container");
const btnWhite = document.getElementById("btnWhite");
const btnGrayScale = document.getElementById("btnGrayScale");
const btnRainbow = document.getElementById("btnRainbow");
const btnEraser = document.getElementById("btnEraser");
const btnResize = document.getElementById("btnResize");
const btnClear = document.getElementById("btnClear")

//grid layout
//creates a 16x16 grid 
const createGrid = function(rows, cols) {
  for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      container.style.setProperty('--grid-rows', rows);
      container.style.setProperty('--grid-cols', cols);
      container.appendChild(cell).className = "box";
  };
};
createGrid(16, 16);

//hover effect that changes the color of the grid
const whiteButton = function() {
    let boxs = container.querySelectorAll('.box');
    btnWhite.addEventListener('click', () => {
        boxs.forEach(box => box.addEventListener('mouseover', (e) => {
            e.target.style.background = 'white';
        })
        );
    });
};
whiteButton()

//gray scale hover effect
const grayScaleButton = function() {
    let boxs = container.querySelectorAll('.box');
    btnGrayScale.addEventListener('click', () => {
        boxs.forEach(box => box.addEventListener('mouseover', (e) => {
            let rNum = Math.floor(Math.random() * 127)
            e.target.style.background = `rgb(${rNum},${rNum},${rNum})`;
        })
        );
    });
};
grayScaleButton()

//rainbow hover effect
const rainbowColorButton = function() {
    let boxs = container.querySelectorAll('.box')
    btnRainbow.addEventListener('click', () => {
        boxs.forEach(box => box.addEventListener('mouseover', (e) => {
            const rNumR = Math.floor(Math.random() * 256)
            const rNumG = Math.floor(Math.random() * 256)
            const rNumB = Math.floor(Math.random() * 256)
            e.target.style.background = `rgb(${rNumR},${rNumG},${rNumB})`;
        })
        );
    });
}
rainbowColorButton() 

//eraser button
const eraserButton = function() {
    let boxs = container.querySelectorAll('.box')
    btnEraser.addEventListener('click', () => {
        boxs.forEach(box => box.addEventListener('mouseover', (e) => {
            e.target.style.background = '#121212'
        }))
    })
}
eraserButton()

//removes grid ..
const resetGrid = function () {
    let boxs = container.querySelectorAll('.box')
    boxs.forEach(box => box.remove()) // <--remove the entire grid
}
//...resizes the grid based on user's input
const reSizeGrid = function () {
    btnResize.addEventListener('click', () => {
        let user = prompt(("How many squares per side? (1-50)"));
        if (user === null || !Number.isInteger(+user)) {
            alert("ERROR: Input must be an integer between 1 and 100. Try again");
        } else if (user < 1 || user > 51) {
            alert("ERROR: Number out of range. Try again.");
        } else {
            resetGrid();
            createGrid(user, user);
            whiteButton()
            rainbowColorButton() 
            grayScaleButton()
            eraserButton()
            clearGrid()
        }
    })
} 
reSizeGrid()

//resets / clears grid
const clearGrid = function () {
    btnClear.addEventListener('click', () => {
            resetGrid();
            createGrid(16, 16);
            whiteButton()
            rainbowColorButton() 
            grayScaleButton()
            eraserButton()
            clearGrid()
    })
} 
clearGrid()

//initializes hover effect on load
window.onload = () => {
    let boxs = container.querySelectorAll('.box');
    boxs.forEach(box => box.addEventListener('mouseover', (e) => {
        e.target.style.background = 'white';
    })
    );
};

