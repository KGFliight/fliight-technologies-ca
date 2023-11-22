import React from 'react'
import deltaQuadProBanner from '../assets/images/deltaquad-pro-banner.jpg'

function DeltaQuadProBanner() {
  return (
    <div className="h-screen w-screen border bg-white">
      <div className="flex flex-col items-center my-12 mx-8">
      <h1 className="text-6xl md:text-7xl font-medium leading md:leading-10 tracking-widest mt-24 py-20 justify-center flex uppercase  text-ft-black">DeltaQuad Pro</h1>
      <p className="text-ft-black">A powerful fixed-wing drone designed to maximise commercial drone operations</p>
      </div>
      <div className="flex justify-center">
      <img src={deltaQuadProBanner} className="py-12 px-8 md:px-20"/>
      </div>
    </div>
  )
}

export default DeltaQuadProBanner