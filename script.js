function getContainerGrid () {
    return document.querySelector('.containerGrid')
}

function createRow(position,container) {
    let row = document.createElement('div')
    row.classList.add('rowGrid')
    row.id = `row${position}`
    container.appendChild(row)
    return row
}

function createCell(x,y,containerRow) {
    let cell = document.createElement('div')
    cell.classList.add('cellGrid')
    cell.id = `row${x}col${y}`
    containerRow.appendChild(cell)
    return cell
}

function createGrid(numRows) {
    const div = getContainerGrid()
    const rows = new Array(numRows)
    const cells = new Array(numRows)
    for (let i = 0; i<numRows; i++) {
        cells [i] = new Array(numRows)
        rows[i] = createRow(i,div)
    }
    for (let x = 0; x<numRows; x++) {
        for (let y = 0; y<numRows; y++) {
            cells[x][y] = createCell(x,y,rows[x])
            addHoverFunctionality(cells[x][y])
        }
    }
}


function getRgbColor(cell) {
    let rgbColorString = window.getComputedStyle(cell).backgroundColor
    // g tells to match all occurrences
    return rgbColorString.match(/(\d+)/g)
}

function changeColor(e) {
    let cell = e.target
    let colors = getRgbColor(cell)
    let newColors = colors.map(val => {
        let newVal =  val-32
        if (newVal < 0) return 0
        return newVal
    })
    cell.style.backgroundColor = `rgb(${newColors[0]},${newColors[1]},${newColors[2]})`
}

function addHoverFunctionality(cell) {
    cell.addEventListener('mouseover',changeColor)
}

createGrid(16)