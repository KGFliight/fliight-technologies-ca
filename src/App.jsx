import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Drones from "./pages/Drones"
import Solutions from "./pages/Solutions"
import About from "./pages/About"
import Contact from "./pages/Contact"
import RequestDemo from "./pages/RequestDemo"
import './App.css'
import DeltaQuadPro from "./pages/DeltaQuadPro"
import DeltaQuadEvo from "./pages/DeltaQuadEvo"
import Argus from "./pages/Argus"
import Aerowhere from "./pages/Aerowhere"

function App() {
  return (
    <div className="bg-ft-black overflow-x-hidden text-ft-white">
      <Routes>
        
        <Route path="/" element ={<Home />}/>
        <Route path="/drones" element ={<Drones />}/>
        <Route path="/drones/deltaquad-pro" element={<DeltaQuadPro/>}/>
        <Route path="/drones/deltaquad-evo" element={<DeltaQuadEvo/>}/>
        <Route path="/solutions" element ={<Solutions />}/>
        <Route path="/solutions/aerowhere" element={<Aerowhere/>}/>
        <Route path="solutions/argus" element={<Argus/>}/>
        <Route path="/about" element ={<About />}/>
        <Route path="/contact" element ={<Contact />}/>
        <Route path="/request-demo" element ={<RequestDemo />}/>
      </Routes>
    </div>
  )
}

export default App
