import Header from '../components/Header'
import Footer from '../components/Footer'
import RequestDemoForm from '../components/RequestDemoForm'

function RequestDemo() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <div className="flex flex-col max-w-full">
          <h1 className="text-6xl md:text-7xl font-medium leading md:leading-10 tracking-wide md:tracking-widest mt-24 py-20 flex uppercase h-20 text-left my-12 md:justify-center md:text-center">
            Request a Demo
          </h1>
          <p className="my-8 md:max-w-[40rem] text-lg font-normal leading-loose tracking-wide text-left md:text-center">
            Witness the real-world capabilities of UAV technologies in an onsite demo and have the opportunity to discuss how our solutions can solve your problems today.
          </p>
          <RequestDemoForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default RequestDemo
