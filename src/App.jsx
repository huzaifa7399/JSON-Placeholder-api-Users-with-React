import Table from "./components/Table"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Details from "./components/Details"
import Modal from "./components/Modal"
import AddTask from "./components/AddUser"

function App() {

  return (

    <div className="App" >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Table />} />
          <Route path="/add-user" element={<AddTask />} />
          <Route path="/modal" element={<Modal />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div >
  )
}

export default App
