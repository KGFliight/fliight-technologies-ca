import Header from '../components/Header'
import Footer from '../components/Footer'
import DeltaQuadBanner from '../components/DeltaQuadXxxBanner'
import deltaQuadEvoBannerImage from '../assets/images/deltaquad-evo-banner.jpg'
import DeltaQuadEvoInfo from '../components/DeltaQuadEvoInfo'
import DeltaQuadEvoPayloads from '../components/DeltaQuadEvoPayloads'
import DeltaQuadEvoResults from '../components/DeltaQuadXxxResults'
import DeltaQuadEvoTechnical from '../components/DeltaQuadXxxTechnical'
import { NavLink } from 'react-router-dom'

function DeltaQuadEvo() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 flex flex-col items-center justify-center">
        <DeltaQuadBanner title="DeltaQuad Evo" imageSrc={deltaQuadEvoBannerImage} />
      </div>
      <DeltaQuadEvoInfo />
      <DeltaQuadEvoPayloads/>
      <DeltaQuadEvoResults/>
      <DeltaQuadEvoTechnical/>
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

export default DeltaQuadEvo
