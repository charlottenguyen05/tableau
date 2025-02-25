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

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  });

ConnectDB()

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))