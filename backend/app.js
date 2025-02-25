import express from "express"
import cors from "cors"
import { config } from "dotenv"
import ConnectDB from "./config/db.js"
import tableRouter from "./routes/table.js"
import morgan from "morgan"
config()

const PORT = process.env.PORT || 3000
const app = express()

app.use(morgan("dev"))
app.use(express.json())
app.use(
    cors({
        origin: process.env.FRONTEND_BASEURL
    })
)

app.use("/table", tableRouter)
ConnectDB()
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))