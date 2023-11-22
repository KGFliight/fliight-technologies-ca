import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import DeltaQuadProBanner from '../components/DeltaQuadProBanner'
import DeltaQuadProInfo from '../components/DeltaQuadProInfo'
import deltaQuadProImage from '../assets/images/deltaquad-pro.jpeg'
import DeltaQuadVtol from '../components/DeltaQuadVtol'
import '../App.css'

function DeltaQuadPro() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 flex flex-col items-center justify-center">
        <DeltaQuadProBanner />
      </div>
      <DeltaQuadProInfo />
      <div className="flex flex-col items-center my-20">
      <div className="h-auto max-w-[1200px] z-50">
        <div className="image-container mx-8 md:mx-24 ">
          <img src={deltaQuadProImage} className="object-scale-down " />
        </div>
      </div>
      
      </div>
      <DeltaQuadVtol/>
      <Footer />
    </div>
  )
}

export default DeltaQuadPro
