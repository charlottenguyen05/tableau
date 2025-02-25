import { Router } from "express"
import TableModel from "../models/Table.js"
import initData from "../initData.js"

const tableRouter = Router()

// Routes for managing table data (fetch, update, reset)
tableRouter.route("/")
    .get(async (req, res) => {
        try {
            const tableData = await TableModel.find({})
            const sanitizedData = tableData.map(cell => ({
                row: cell.row,
                col: cell.col,
                value: cell.value
            }))
            res.status(200).json(sanitizedData)
        } catch (error) {
            res.status(500).json({ message: "Server error when get all table", error })
        }
    })
    .post(async (req, res) => {
        const { row, col, value } = req.body
        try {
            const updatedCell = await TableModel.findOneAndUpdate(
                { row, col },
                { $set: { value: value } },
                { new: true }
            )

            if (!updatedCell) {
                return res.status(404).json({ message: "Cell not found" })
            }
            return res.status(200).json({
                success: true
            })
        } catch (error) {
            console.error("Update error:", error)
            res.status(500).json({ success: false })
        }
    })
    .put(async (req, res) => {
        try {
            const operations = initData.map((cell) => ({
                updateOne: {
                    filter: { row: cell.row, col: cell.col }, 
                    update: { $set: { value: cell.value } }, 
                },
            }))

            await TableModel.bulkWrite(operations)
            res.status(200).json({
                message: "All records reset to default values."
            })
        } catch (error) {
            console.error("Error resetting documents:", error)
            res.status(500).json({ message: "Failed to reset records.", error })
        }
    })


export default tableRouter