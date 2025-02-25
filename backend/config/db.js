import mongoose from "mongoose"
import { config } from "dotenv"

config()

async function ConnectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB Connected")
    } catch (err) {
        console.error("MongoDB Connection Error:", err)
        process.exit(1)
    }
    mongoose.connection.on('error', err => {
        console.error('Database error:', err)
    })
}

process.on("SIGINT", async () => {
    await mongoose.connection.close()
    console.log("MongoDB disconnected on app termination")
    process.exit(0)
})

export default ConnectDB