import Header from '../components/Header'
import Footer from '../components/Footer'
import DeltaQuadBanner from '../components/DeltaQuadXxxBanner'
import phoenixBannerImage from '../assets/images/Phoenix-front.png'
import phoenixLineSvg from '../assets/images/Phoenix-line.svg'
import { NavLink } from 'react-router-dom'
import AracePhoenixProductInfo from '../components/AracePhoenixProductInfo'
import AracePhoenixProductResults from '../components/AracePhoenixProductResults'
import AracePhoenixProductTechnical from '../components/AracePhoenixProductTechnical'
import AracePhoenixProductPayloads from '../components/AracePhoenixProductPayloads'
import AraceProductElevated from '../components/AraceProductElevated'
import SEOHead from '../components/SEOHead'

function AracePhoenix() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <SEOHead 
        title="Arace Phoenix VTOL Drone - Long Range ISR & Surveillance | Fliight Technologies Canada"
        description="The Arace Phoenix VTOL drone delivers exceptional long-range ISR and surveillance capabilities. Advanced payload systems for professional aerial operations across Canada."
        keywords="Arace Phoenix, VTOL drone, long range ISR, surveillance drone, Phoenix drone, Canadian VTOL, aerial surveillance, ISR drone, professional UAV, long-range drone"
      />
      <Header />
      <div className="min-h-[100vh] w-full bg-white flex flex-col items-center justify-center">
        <DeltaQuadBanner
          title="Arace Phoenix"
          imageSrc={phoenixBannerImage}
          subheading="THE HORIZON AWAITS..."
          className=""
          isPhoenix={true}
        />
      </div>
      <AracePhoenixProductInfo />
      <AracePhoenixProductPayloads />
      <AracePhoenixProductResults />
      <AraceProductElevated />
      <AracePhoenixProductTechnical />
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

export default AracePhoenix 