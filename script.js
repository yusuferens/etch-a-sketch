document.getElementById('popup').addEventListener('click', askForSize);
document.querySelector('.btn-dark').addEventListener('click', () => setColor('black'));
document.querySelector('.btn-warning').addEventListener('click', () => setColor('random'));
document.querySelector('.btn-info').addEventListener('click', resetGrid);

 
 function setColor(cell){
    let color 

    if ( cell === 'black' || cell === 'random'){
        color = cell
    } else {
        color = 'black'
    }

    if (color === 'random') {
        cell.style.backgroundColor = getRandomColor()
    } else {
        cell.style.backgroundColor = color
    }
 }

 
 
 function resetGrid() {
    cell.style.backgroundColor = 'white'

 }
 

 function askForSize(){
    //ask for the size of the game board
    let size = prompt("Please enter the size (default is 16):")

    if(size !== null && size ==! ""){
        createGrid(size)
    
    }else if(size > 64){
        alert("The number should be below  or equal 64!")
    }else{
        createGrid(16)
    }    
}
 

 function createGrid(size){ //process the entered size and create the game board
    board.innerHTML = ""    
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for(let i = 0; i < size * size; i++){
        let cell = document.createElement('div');
        cell.classList.add("cell");
        board.appendChild(cell)

        cell.addEventListener("mouseover",function(){
            setColor(cell)
        })
    }
 }

