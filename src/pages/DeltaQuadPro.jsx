import Header from '../components/Header'
import Footer from '../components/Footer'
import DeltaQuadProBanner from '../components/DeltaQuadXxxBanner'
import DeltaQuadProInfo from '../components/DeltaQuadProInfo'
import deltaQuadProImage from '../assets/images/deltaquad-pro.jpeg'
import DeltaQuadVtol from '../components/DeltaQuadVtol'
import '../App.css'
import deltaQuadProBannerImage from '../assets/images/deltaquad-pro-banner.jpg'
import DeltaQuadProResults from '../components/DeltaQuadXxxResults'
import DeltaQuadProTechnical from '../components/DeltaQuadXxxTechnical'
import { NavLink } from 'react-router-dom'

function DeltaQuadPro() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 flex flex-col items-center justify-center">
        <DeltaQuadProBanner
          title="DeltaQuad Pro"
          imageSrc={deltaQuadProBannerImage}
        />
      </div>
      <DeltaQuadProInfo />
      <div className="flex flex-col items-center sm:my-20">
        <div className="h-[600px] bg-white md:bg-ft-black flex items-center md:h-auto max-w-[1200px]">
          <div className="image-container md:mx-24 md:z-50">
            <img
              src={deltaQuadProImage}
              className="object-scale-down sm:rounded"
            />
          </div>
        </div>
      </div>
      <DeltaQuadVtol />
      <DeltaQuadProResults />
      <DeltaQuadProTechnical />
      <div className="flex flex-col items-center text-center uppercase text-5xl tracking-widest my-40 mx-8">
        We offer onsite demos
        <div className="normal-case text-lg leading-loose tracking-wide font-normal max-w-lg my-8">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
          inventore mollitia illum? Corporis, sequi neque.
        </div>
        <NavLink to="/request-demo">
        <button className="bg-rose-700 uppercase rounded-3xl py-3 w-72 h-8 sm:w-44 min-h-[2.75rem] text-base font-semibold leading-tight tracking-widest">
          Book a demo
        </button>
        </NavLink>
      </div>
      <Footer />
    </div>
  )
}

export default DeltaQuadPro
