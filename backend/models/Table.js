import { model, Schema } from "mongoose"

const TableSchema = new Schema({
    row: Number,
    col: String,
    value: String
})

const TableModel = model("Table", TableSchema)
export default TableModel