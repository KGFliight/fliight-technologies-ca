import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Drones from './pages/Drones'
import About from './pages/About'
import Contact from './pages/Contact'
import RequestDemo from './pages/RequestDemo'
import './App.css'
import DeltaQuadPro from './pages/DeltaQuadPro'
import DeltaQuadEvo from './pages/DeltaQuadEvo'
import Fatam from './pages/Fatam'
import { MobileMenuProvider } from './components/MobileMenuContext'
import { ModalProvider } from './components/LandingModalContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import NotFound from './pages/NotFound';

// CREATE A PATH IF MAKING ANOTHER PAGE (template)

function App() {
  return (
    <div className="bg-ft-black overflow-x-hidden text-ft-white">
      <MobileMenuProvider>
        <ModalProvider>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/platforms" element={<Drones />} />
            <Route
              path="/platforms/deltaquad-pro"
              element={<DeltaQuadPro />}
            />
            <Route
              path="/platforms/deltaquad-evo"
              element={<DeltaQuadEvo />}
            />

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
            <Route path="firetech-fatam_v1_2" element={<Fatam/>}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ModalProvider>
      </MobileMenuProvider>
    </div>
  )
}

export default App
