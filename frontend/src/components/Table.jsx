import React, { useState, useEffect, useMemo } from 'react'
import ColHeader from "./ColHeader"
import Row from "./Row"
import "./Table.css"
import { fetchTable, updateCell } from "../service"
import { toast } from "react-toastify"

const Table = () => {
  const [data, setData] = useState([])
  const [highlightedRow, setHighlightedRow] = useState(null)  // based on row (number 1-10)
  const [highlightedCol, setHighlightedCol] = useState(null)  // based on col (letter A-J)


  useEffect(() => {
    const getData = async () => {
      try {
        const dataResponse = await fetchTable()
        setData(dataResponse)
      } catch (err) {
        toast.error("L'échec de la récupération des données de la table")
      }
    }
    getData()
  }, [])

  const chunkedData = useMemo(() => {
    const chunkArray = (array, chunkSize = 10) => {
      const result = []
      for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize))
      }
      return result
    }
    return chunkArray(data, 10)
  }, [data])

  return (
    <div className="container">
      <table className="editable-table">
        <ColHeader
          highlightedCol={highlightedCol}
          setHighlightedCol={setHighlightedCol}
          setHighlightedRow={setHighlightedRow}
        />
        <tbody>
          {chunkedData.map((rowData, rowIdx) =>
            <Row
              key={rowIdx}
              rowData={rowData}
              rowIdx={rowIdx}
              highlightedRow={highlightedRow}
              setHighlightedCol={setHighlightedCol}
              setHighlightedRow={setHighlightedRow}
              highlightedCol={highlightedCol}
            />
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Table

