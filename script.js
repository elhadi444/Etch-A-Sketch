let color = 'black'
let draw = false

function populateBoard(size) {
    let board = document.querySelector('.board')

    document.querySelectorAll('.square').forEach(square => square.remove())

    board.style.gridTemplateColumns = `repeat(${size},1fr)`
    board.style.gridTemplateRows = `repeat(${size},1fr)`

    for (let i = 0; i < size * size; i++) {
        let square = document.createElement('div')
        square.classList.add('square')
        square.style.backgroundColor = 'white'

        square.addEventListener('mouseover', colorSquare)

        // board.insertAdjacentElement('beforeend', square)
        board.appendChild(square)
    }
}


function changeSize(size) {
    populateBoard(size)
}

function colorSquare() {
    if (draw){
        if(color == 'random')
            this.style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`
        else
            this.style.backgroundColor = color
    }
}

function changeColor(newColor){
    color = newColor
}

function resetBoard(){
    document.querySelectorAll('.square').forEach(square => square.style.backgroundColor = 'white')
}

document.querySelector('.board').addEventListener('click', () => {
    draw = !draw
})

populateBoard(32)