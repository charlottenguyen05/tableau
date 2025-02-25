import React, { useState, useEffect } from 'react'
import ColHeader from "./ColHeader"
import Row from "./Row"
import "./Table.css"
import { fetchTable, updateCell } from "../service"

const Table = () => {
  const [data, setData] = useState([])
  const [highlightedRow, setHighlightedRow] = useState(null)  // based on row (number 1-10)
  const [highlightedCol, setHighlightedCol] = useState(null)  // based on col (letter A-J)


  useEffect(() => {
    const getData = async () => {
      const dataResponse = await fetchTable()
      setData(dataResponse)
    }
    getData()
  }, [])

  function chunkArray(array, chunkSize = 10) {
    const result = []
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize))
    }
    return result
  }

  return (
    <div className="container">
      <table className="editable-table">
        <ColHeader highlightedCol={highlightedCol} setHighlightedCol={setHighlightedCol}/>
        <tbody>
          {chunkArray(data, 10).map((rowData, rowIdx) => {
            return <Row key={rowIdx} rowData={rowData} rowIdx={rowIdx} highlightedRow={highlightedRow} setHighlightedRow={setHighlightedRow} highlightedCol={highlightedCol}/>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table

