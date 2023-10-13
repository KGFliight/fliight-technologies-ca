import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Drones from "./pages/Drones"
import Solutions from "./pages/Solutions"
import About from "./pages/About"
import Contact from "./pages/Solutions"
import RequestDemo from "./pages/RequestDemo"
import './App.css'

function App() {
  return (
    <div className="bg-ft-black text-ft-white">
      <Routes>
        <Route path="/" element ={<Home />}/>
        <Route path="/drones" element ={<Drones />}/>
        <Route path="/solutions" element ={<Solutions />}/>
        <Route path="/about" element ={<About />}/>
        <Route path="/contact" element ={<Contact />}/>
        <Route path="/request-demo" element ={<RequestDemo />}/>
      </Routes>
    </div>
  )
}

export default App
