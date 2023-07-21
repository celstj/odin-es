//16x16 grid square divs !
//flexbox!
//add hover!
// button at top 
// - trigger popup asking for the number of square per side for new grid
// - existing grid(removed) new grid generated to replace
// set max input to max 100

/*
1. function: create grid x grid within specific dimension of container
    - get default grid number
    - loop size, add grid( class/id)

2. function: colour change, current Colour / new colour / choice
    - black
    - colour randomiser (extra)

3. on hover, add colour to grid box element
    -function: on hover over grid element,
    -addEventListener, change colour

4. dom: button "reset/clear"
    - function, reset
    - when button click, trigger function
    - on function, clear colour

    extra: 
     -randomize square's RGB value on interaction
     - implement a progressive darkening effect where each interaction 
       adds 10% more black or colour to the square, obj: completely 
       black square after 10 interactions.

    */


const defaultColour = '#00FF00';
const defaultSize = 16;
let currentColour = defaultColour;
let currentSize = defaultSize;

const container = document.querySelector(".container");

function defaultGrid(defaultColour) {
    container.style.gridTemplateRows = `repeat(${defaultColour}, 1fr)`; 
    container.style.gridTemplateColumns = `repeat(${defaultColour}, 1fr)`; 
    
    for(let i = 0; i < (defaultColour * defaultColour); i++) {
        const grids = document.createElement('div');
        grids.classList.add('grid-cells');
        container.appendChild(grids);
    }

    const gridCells = document.querySelectorAll('.container > div');

    function colourStick(e) {
        //function adds new classname to div when mouseover - chance css
        // gridCells.forEach((cell) => cell.classList.remove('active'));
        // gridCells.forEach((cell) => cell.classList.add('cell-active'));
        e.classList.add('cell-active');
    }

    gridCells.forEach(cell => 
     cell.addEventListener('mouseover', (e) => colourStick(cell)));
}


const gridPrompt = document.querySelector('.gridPrompt');
gridPrompt.addEventListener('click', setGridNumber);

function setGridNumber() {
    // if prompt > 100 throw error
    // if prompt = string, throw error
    let gridNumber = prompt("Choose a number between 16-100");

    if ( gridNumber > 101 || gridNumber < 16 ){
        prompt("Please choose a number between 16~100");
    }else{
        clear();
        defaultGrid(gridNumber);
        // return parseInt(gNumber);
    }
}

const resetButton = document.querySelector('.clearBtn');
resetButton.addEventListener('click', clear);

function clear(){
    // function remove cell-active from innerHTML div
    const gridCells = document.querySelectorAll('.container > div');
    gridCells.forEach((cell) => {
        const gCell = cell;
        gCell.classList.remove('cell-active');
        console.log("grids have been cleared");
    });
}

window.onload = () => {
    defaultGrid(defaultSize);
};
