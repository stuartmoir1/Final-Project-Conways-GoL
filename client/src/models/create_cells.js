export const createCells = (rowLen) => {

  let cells = []
  for (let i = 0; i < rowLen; i++){
    for (let j = 0; j < rowLen; j++){
      let index = (i * rowLen) + j 
      cells.push('this.renderCell(' + index + ')')
    }
  }
  //console.log(cells)
  return cells
}

//<div classNacme='grid-row'>{cells.splice(0,10)}</div>