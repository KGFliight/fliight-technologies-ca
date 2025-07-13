
import Header from '../components/Header'
import Footer from '../components/Footer'
import Landing from '../components/Landing'
import SEOHead from '../components/SEOHead'


function Home() {
  
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <SEOHead 
        title="Fliight Technologies Canada - Advanced VTOL Drones & UAV Solutions | Long Range ISR, Firefighting, Mapping"
        description="Leading Canadian UAV solutions provider specializing in Arace VTOL drones for long-range ISR, firefighting, mapping, and surveillance. Professional drone services and training."
        keywords="drone, VTOL, UAV, Arace, long range, ISR, firefighting, mapping, surveillance, Canadian drone company, Toronto drone services, professional drones, aerial mapping, thermal imaging, LiDAR, payload systems"
      />
      <Header />

      <div className="flex-1 flex items-center justify-center">
        
        <Landing />
      </div>
      <Footer />
    </div>
  )
}

export default Home
