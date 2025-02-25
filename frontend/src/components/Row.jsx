import React from 'react'
import TableCell from "./TableCell"
import "./Highlight.css"

const Row = ({ rowData, rowIdx, setHighlightedRow, highlightedCol, highlightedRow }) => {
  const handleRowHeaderClick = (rowNb) => {
    setHighlightedRow((prev) => (prev === rowNb ? null : rowNb))
  }

  return (
    <tr className={highlightedRow === rowIdx + 1 ? "highlight-row" : ""}>
      <th
        scope="row"
        onClick={() => handleRowHeaderClick(rowIdx + 1)}
        style={{position: "sticky"}}
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

