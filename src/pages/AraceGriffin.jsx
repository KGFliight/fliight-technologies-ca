import Header from '../components/Header'
import Footer from '../components/Footer'
import DeltaQuadBanner from '../components/DeltaQuadXxxBanner'
import araceGriffinBannerImage from '../assets/images/arace-griffin-banner.png'
import { NavLink } from 'react-router-dom'
import AraceGriffinProductInfo from '../components/AraceGriffinProductInfo'
import AraceGriffinProductResults from '../components/AraceGriffinProductResults'
import AraceGriffinProductTechnical from '../components/AraceGriffinProductTechnical'
import AraceGriffinProductPayloads from '../components/AraceGriffinProductPayloads'
import AraceProductElevated from '../components/AraceProductElevated'
import SEOHead from '../components/SEOHead'

function AraceGriffin() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <SEOHead 
        title="Arace Griffin Pro VTOL Drone - Professional Mapping & Surveying | Fliight Technologies Canada"
        description="The Arace Griffin Pro VTOL drone excels in professional mapping and surveying applications. Advanced payload systems for high-precision aerial data collection."
        keywords="Arace Griffin Pro, VTOL drone, mapping drone, surveying drone, Griffin Pro drone, Canadian VTOL, aerial mapping, professional UAV, surveying solutions, mapping technology"
      />
      <Header />
      <div className="min-h-[100vh] w-full bg-white flex flex-col items-center justify-center">
        <DeltaQuadBanner
          title="Arace Griffin Pro"
          imageSrc={araceGriffinBannerImage}
          subheading="The VTOL system you have been searching for."
          className=""
        />
      </div>
      <AraceGriffinProductInfo />
      <AraceGriffinProductPayloads />
      <AraceGriffinProductResults />
      <AraceProductElevated />
      <AraceGriffinProductTechnical />
      <div className="flex flex-col items-center text-center uppercase text-5xl tracking-widest my-40 mx-8">
        We offer onsite demos
        <div className="normal-case text-lg leading-loose tracking-wide max-w-lg my-8 font-light font-['Inter']">
        We let the technology speak for itself, and the best way to do that is for you to see it in action. Contact us today for an on site demonstration with your organisation.
        </div>
        <NavLink to="/request-demo">
          <button className="bg-ft-red uppercase rounded-3xl flex items-center justify-center w-72 h-8 sm:w-44 min-h-[2.75rem] text-base font-semibold leading-tight tracking-widest hover:opacity-90 hover:hover:bg-[#5b172c] transition duration-300">
            Book a demo
          </button>
        </NavLink>
      </div>
      <Footer />
    </div>
  )
}

export default AraceGriffin
