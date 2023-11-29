import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import DeltaQuadBanner from '../components/DeltaQuadXxxBanner'
import deltaQuadEvoBannerImage from '../assets/images/deltaquad-evo-banner.jpg'
import DeltaQuadProInfo from '../components/DeltaQuadProInfo'
import DeltaQuadVtol from '../components/DeltaQuadVtol'


function DeltaQuadEvo() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 flex flex-col items-center justify-center">
        <DeltaQuadBanner title="DeltaQuad Evo" imageSrc={deltaQuadEvoBannerImage} />
      </div>
      <DeltaQuadProInfo />
      <div className="flex flex-col items-center my-20">
        <div className="h-auto max-w-[1200px] z-50">
        </div>
      </div>
      
      <DeltaQuadVtol />
      
      <Footer />
    </div>
  )
}

export default DeltaQuadEvo
