import { Outlet } from "react-router-dom"
import Navbar from "./component/Navbar"
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <div >
      <Navbar />
      <Outlet/>
      <Toaster/>
    </div>
  )
}

export default App
