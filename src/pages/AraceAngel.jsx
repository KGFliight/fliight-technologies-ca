import Header from '../components/Header'
import Footer from '../components/Footer'
import DeltaQuadBanner from '../components/DeltaQuadXxxBanner'
import araceAngelBannerImage from '../assets/images/arace-angel-banner.png'
import { NavLink } from 'react-router-dom'
import AraceAngelProductInfo from '../components/AraceAngelProductInfo'
import AraceAngelProductResults from '../components/AraceAngelProductResults'
import AraceAngelProductTechnical from '../components/AraceAngelProductTechnical'
import AraceAngelProductPayloads from '../components/AraceAngelProductPayloads'
import AraceProductElevated from '../components/AraceProductElevated'
import SEOHead from '../components/SEOHead'

function AraceAngel() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <SEOHead 
        title="Arace Angel VTOL Drone - Long Endurance Surveillance | Fliight Technologies Canada"
        description="The Arace Angel VTOL drone offers exceptional long-endurance capabilities for extended surveillance operations. Advanced multirotor system for professional aerial missions."
        keywords="Arace Angel, VTOL drone, long endurance drone, surveillance drone, Angel drone, Canadian VTOL, extended flight time, professional UAV, multirotor drone, aerial surveillance"
      />
      <Header />
      <div className="min-h-[100vh] w-full bg-white flex flex-col items-center justify-center">
        <DeltaQuadBanner
          title="Arace Angel"
          imageSrc={araceAngelBannerImage}
          subheading="A next generation multirotor system that redefines the class."
          className=""
        />
      </div>
      <AraceAngelProductInfo />
      <AraceAngelProductPayloads />
      <AraceAngelProductResults />
      <AraceProductElevated />
      <AraceAngelProductTechnical />
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

export default AraceAngel
