import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Product1 from "./pages/Product1"
import Product2 from "./pages/Product2"
import './App.css'

function App() {
  return (
    <div className="bg-ft-black text-ft-white border">
      <Routes>
        <Route path="/" element ={<Home />}/>
        <Route path="/page1" element ={<Product1 />}/>
        <Route path="/page2" element ={<Product2 />}/>
      </Routes>
    </div>
  )
}

export default App
