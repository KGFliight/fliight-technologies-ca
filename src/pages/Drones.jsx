import Header from "../components/Header"
import Footer from "../components/Footer";
import SEOHead from '../components/SEOHead'

function Drones() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <SEOHead 
        title="Arace VTOL Drones - Advanced UAV Platforms | Fliight Technologies Canada"
        description="Explore our advanced Arace VTOL drone platforms including Phoenix, Angel, and Griffin Pro. Professional UAV solutions for long-range ISR, firefighting, and mapping."
        keywords="Arace drones, VTOL drones, UAV platforms, Phoenix drone, Angel drone, Griffin Pro drone, Canadian drone platforms, professional UAVs, long-range drones"
      />
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <h1 className="text-6xl md:text-7xl font-medium leading md:leading-10 tracking-widest mt-24 py-20 justify-center flex uppercase h-20 my-40">Advanced VTOL Drones</h1>
      </main>
      <Footer />
    </div>
  )
}

export default Drones;