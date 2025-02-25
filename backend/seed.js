import mongoose from "mongoose"
import dotenv from "dotenv"
import TableModel from "./models/Table.js"
import initData from "./initData.js"

dotenv.config()

export const seedTable = async () => {

  try {
    await mongoose.connect(process.env.MONGO_URI)
    await TableModel.deleteMany({})
    await TableModel.insertMany(initData)
    console.log("10x10 table seeded successfully!")
  } catch (error) {
    console.error("Error creating table:", error)
  } finally {
    await mongoose.connection.close()
    console.log("MongoDB connection closed")
  }
}

seedTable()
