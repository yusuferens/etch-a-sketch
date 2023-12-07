 let board = document.querySelector(".board");
 

 function askForSize(){
    //ask for the size of the game board
    let size = prompt("Please enter the size(The size should be below 64x64):")

    if(size !== null && size ==! ""){
        processSize(size)
    
    }else if(size > 64){
        alert("The number should be below  or equal 64!")
    }else{
        processSize(16)
    }    
}
 

 function processSize(size){
    board.innerHTML = ""

    //process the entered size and create the game board

 }

