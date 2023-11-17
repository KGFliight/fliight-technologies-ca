import Header from "../components/Header"
import Footer from "../components/Footer";

function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex items-center justify-center">
      <h1 className="text-7xl font-medium leading-10 tracking-widest mt-24 py-20 justify-center flex uppercase h-20">About</h1>
      </main>
      <Footer />
    </div>
  )
}

export default About;