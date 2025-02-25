import React, { useState, useRef, useEffect } from "react"
import { FaPen } from "react-icons/fa"
import "./TableCell.css"
import { updateCell } from "../service"
import { toast } from "react-toastify"
import "./Highlight.css"


const TableCell = ({ cellData, highlightedCol }) => {
  const { row, col } = cellData
  const [isEditing, setIsEditing] = useState(false)
  const [newValue, setNewValue] = useState(cellData.value)
  const inputRef = useRef(null)


  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isEditing])


  const handleInputBlur = async () => {
    if (newValue !== cellData.value) {
      try {
        await updateCell({ row, col, value: newValue })
        toast.success("Cell updated successfully")
      } catch (error) {
        console.error("updated failed:", error)
        toast.error("Failed to update cell. Please try again")
        setNewValue(cellData.value)
      }
    }
    setIsEditing(false)
  }


  const handleCellClick = () => {
    setIsEditing(true)
  }


  const handleInputChange = (e) => {
    setNewValue(e.target.value)
  }


  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
      e.target.blur()
    } else if (e.key === "Escape") {
      setNewValue(cellData.value)
      setIsEditing(false)
    }
  }

  return (
    <td className={highlightedCol === col ? "highlight-col-cell table-cell" : "table-cell"} >
      {isEditing ? (
        <input
          ref={inputRef}
          type="text"
          value={newValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onKeyDown={handleKeyPress}
          className="table-cell-input"
        />
      ) : (
        <div className="table-cell-display" onClick={handleCellClick}>
          <span>{newValue}</span>
          <span className="edit-icon">
            <FaPen size={12} />
          </span>
        </div>
      )}
    </td>
  )
}

export default TableCell
