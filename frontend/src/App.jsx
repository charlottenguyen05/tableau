import Table from "./components/Table"
import { ToastContainer } from "react-toastify"
import Button from "./components/Button"

function App() {

  return (
    <section style={{display: "flex", alignItems: "center", flexDirection:"column", gap: "2rem"}}>
      <Table/>
      <Button/>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        theme="colored"
        closeOnClick />
    </section>
  )
}

export default App
