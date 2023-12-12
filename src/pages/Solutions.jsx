import Header from "../components/Header"
import Footer from "../components/Footer";

function Solutions() {
  return (
    <div className="flex flex-col min-h-[100svh]">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <h1 className="text-6xl md:text-7xl font-medium leading md:leading-10 tracking-widest mt-24 py-20 justify-center flex uppercase h-20 my-40">Solutions</h1>
      </main>
      <Footer />
    </div>
  )
}

export default Solutions;