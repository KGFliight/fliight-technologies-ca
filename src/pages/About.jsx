import Header from '../components/Header'
import Footer from '../components/Footer'
import AboutComponent from '../components/AboutComponent'

function About() {
  return (
    <div className="flex flex-col min-h-[100svh]">
      <Header />
      <AboutComponent />
      <Footer />
    </div>
  )
}

export default About
