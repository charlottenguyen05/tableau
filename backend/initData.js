const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const cols = "ABCDEFGHIJ".split("")
let cells = []

rows.forEach((row) => {
  cols.forEach((col) => {
    cells.push({
      row,
      col,
      value: `${col}${row}`,
    })
  })
})

export default cells