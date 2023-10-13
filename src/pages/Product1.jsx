import Header from "../components/Header"
import Footer from "../components/Footer";

function Product1() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <h1 className="text-2xl">Product 1</h1>
      </main>
      <Footer />
    </div>
  )
}

export default Product1;