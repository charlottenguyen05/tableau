import React from 'react'
import TableCell from "./TableCell"
import "./Highlight.css"

const Row = ({ rowData, rowIdx, setHighlightedRow, highlightedCol, highlightedRow, setHighlightedCol }) => {
  const handleRowHeaderClick = (rowNb) => {
    setHighlightedRow((prev) => (prev === rowNb ? null : rowNb))
    setHighlightedCol(null)
  }

  return (
    <tr className={highlightedRow === rowIdx + 1 ? "highlight-row" : ""}>
      <th
        scope="row"
        onClick={() => handleRowHeaderClick(rowIdx + 1)}
        className={highlightedRow === rowIdx + 1 ? "highlight-row" : ""}
      >
        {rowIdx + 1}
      </th>
      {/* rowData: array of array of 10 table cell in the same row */}
      {rowData.map((cellData) => {
        return (
          <TableCell key={`${cellData.col}${cellData.row}`} cellData={cellData} highlightedCol={highlightedCol}/>
        )
      })}
    </tr>
  )
}


export default Row

