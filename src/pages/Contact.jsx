import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import SEOHead from '../components/SEOHead'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Contact() {
  AOS.init()

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <SEOHead 
        title="Contact Fliight Technologies Canada - VTOL Drone Solutions | Toronto UAV Company"
        description="Contact Fliight Technologies Canada for professional VTOL drone solutions, long-range ISR, firefighting, mapping, and surveillance services. Get in touch today."
        keywords="contact Fliight Technologies, Canadian drone company contact, Toronto UAV services, VTOL drone consultation, drone solutions contact, UAV company Canada"
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
          <h1 className="text-6xl md:text-7xl font-medium leading md:leading-10 tracking-wide md:tracking-widest mt-24 py-20 flex uppercase h-20 my-12 md:justify-center text-left md:text-center">
            LET&apos;S TALK
          </h1>
          <p className="my-8 md:max-w-[40rem] text-lg leading-loose tracking-wide text-left md:text-center font-['Inter'] font-light">
            Ready for takeoff? Our friendly Fliight Crew is here to discuss your
            needs, no strings attached. Let&apos;s navigate solving your problem
            together.
          </p>
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
