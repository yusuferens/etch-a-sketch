let gridContainer = document.getElementById("grid-container")

    for(let i = 0; i< 16; i++){
        for(let j = 0; j < 16; j++){
            let gridItem = document.createElement("div")
            gridItem.className = "grid-item"
            gridContainer.appendChild(gridItem)
        }
    }

