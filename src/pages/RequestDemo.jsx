import Header from '../components/Header'
import Footer from '../components/Footer'
import RequestDemoForm from '../components/RequestDemoForm'
import SEOHead from '../components/SEOHead'
import AOS from 'aos'
import 'aos/dist/aos.css'

function RequestDemo() {
  AOS.init()

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <SEOHead 
        title="Request VTOL Drone Demo - Fliight Technologies Canada | Arace Drones"
        description="Request a professional VTOL drone demo from Fliight Technologies Canada. Experience Arace Phoenix, Angel, and Griffin Pro drones in action for your specific needs."
        keywords="request drone demo, VTOL demo, Arace drone demo, Canadian drone demo, UAV demonstration, professional drone demo, Toronto drone demo, aerial demo"
      />
      <Header />
      <div className="px-12 py-6 flex-1 flex items-center justify-center">
        <div
          className="flex flex-col max-w-full"
          data-aos="fade-down-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="0"
          data-aos-offset="0"
          data-aos-mirror="true"
          data-aos-duration="300"
        >
          <h1 className="text-6xl md:text-7xl font-medium leading md:leading-10 tracking-wide md:tracking-widest mt-24 py-20 flex uppercase h-20 text-left my-12 md:justify-center md:text-center">
            Request a Demo
          </h1>
          <p className="my-8 md:max-w-[40rem] text-lg leading-loose tracking-wide text-left md:text-center font-['Inter'] font-light">
            Witness the real-world capabilities of UAV technologies in an onsite
            demo and have the opportunity to discuss how our solutions can solve
            your problems today.
          </p>
          <RequestDemoForm />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default RequestDemo
