import Header from '../components/Header'
import Footer from '../components/Footer'
import AboutComponent from '../components/AboutComponent'
import SEOHead from '../components/SEOHead'

function About() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <SEOHead 
        title="About Fliight Technologies Canada - Leading VTOL Drone Company | Toronto UAV Solutions"
        description="Learn about Fliight Technologies Canada, a leading Toronto-based VTOL drone company specializing in long-range ISR, firefighting, mapping, and surveillance solutions."
        keywords="about Fliight Technologies, Canadian drone company, Toronto UAV company, VTOL drone manufacturer, drone solutions Canada, UAV technology company"
      />
      <Header />
      <AboutComponent />
      <Footer />
    </div>
  )
}

export default About
