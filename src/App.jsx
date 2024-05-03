import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Drones from './pages/Drones'
import About from './pages/About'
import Contact from './pages/Contact'
import RequestDemo from './pages/RequestDemo'
import './App.css'
import DeltaQuadPro from './pages/DeltaQuadPro'
import DeltaQuadEvo from './pages/DeltaQuadEvo'
import { MobileMenuProvider } from './components/MobileMenuContext'
import { ModalProvider } from './components/LandingModalContext'


// CREATE A PATH IF MAKING ANOTHER PAGE (template)

function App() {
  return (
    <div className="bg-ft-black overflow-x-hidden text-ft-white">
      <MobileMenuProvider>
        <ModalProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/drones" element={<Drones />} />
            <Route path="/drones/deltaquad-pro" element={<DeltaQuadPro />} />
            <Route path="/drones/deltaquad-evo" element={<DeltaQuadEvo />} />
            
            {/* 
            UNCOMMENT THIS TO SEE TEMPLATE PAGE
            <Route
              path="/template-product"
              element={<TemplateProductPage />}
            />
            }

            SEPARATE FROM TEMPLATE - FOR DROPDOWN SOLUTIONS MENU
            {/*<
            Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/aerowhere" element={<Aerowhere />} />
            <Route path="solutions/argus" element={<Argus />} />
            */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/request-demo" element={<RequestDemo />} />
          </Routes>
        </ModalProvider>
      </MobileMenuProvider>
    </div>
  )
}

export default App
