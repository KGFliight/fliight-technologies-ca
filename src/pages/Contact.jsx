import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

function Contact() {
  return (
    <div className="flex flex-col min-h-[100svh]">
      <Header />
      <div className="px-12 py-6 flex-1 flex items-center justify-center">
        <div className="flex flex-col max-w-full">
          <h1 className="text-6xl md:text-7xl font-medium leading md:leading-10 tracking-wide md:tracking-widest mt-24 py-20 flex uppercase h-20 my-12 md:justify-center text-left md:text-center">
            LET&apos;S TALK
          </h1>
          <p className="my-8 md:max-w-[40rem] text-lg leading-loose tracking-wide text-left md:text-center font-['Inter'] font-light">
            Ready for takeoff? Our friendly Fliight Crew is here to discuss your
            needs, no strings attached. Let&apos;s navigate solving your problem
            together.
          </p>
          <ContactForm/>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
