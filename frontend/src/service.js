import axios from "axios"

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000"

async function fetchTable() {
  try {
    const response = await axios.get("/table")
    return response.data
  } catch (error) {
    handleAxiosError(error, "fetching table")
    return []
  }
}

async function updateCell(cellData) {
  try {
    const response = await axios.post("/table", cellData)
    return response.data
  } catch (error) {
    handleAxiosError(error, "updating cell")
  }
}

async function reset() {
  try {
    const res = await axios.put("/table")
    return res.data
  } catch (error) {
    handleAxiosError(error, "reset table")
  }
}

function handleAxiosError(error, context) {
  if (error.response) {
    // Server responded with an error status
    const serverMessage = error.response.data?.message || "Server Error"
    console.error(`[${context}] Server error:`, serverMessage)
    throw new Error(serverMessage)
  } else if (error.request) {
    // No response received
    console.error(`[${context}] No response from server.`)
    throw new Error("No response from server")
  } else {
    // Error in setting up the request
    console.error(`[${context}] Request setup error:`, error.message)
    throw new Error(error.message)
  }
}

export { fetchTable, updateCell, reset }
