import React from 'react'
import iconDrone from '../assets/images/icon-drone.png'

function DeltaQuadProInfo() {
  const technologyItems = ["Up to 150 KM Flight Distance", "Full Automation", "Redundant Communication Links", "Local Support and SLA", "1 Minute field assembly", "1.2kg Payload capacity", "Fly in Rain or Snow"]

  const endToEndItems = ["Support and warranty", "Certified training", "Regulatory compliance packages", "Data processing and management"]

  return (
    <div className="m-12 md:m-20">
      <div className="mb-24">
        <h2 className="text-5xl uppercase tracking-widest font-medium my-12">Introduction Heading</h2>
        <p className="tracking-wide leading-loose my-6"> 
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
          molestiae dignissimos deserunt accusantium amet officia! Nisi
          similique, ea amet hic assumenda, doloribus temporibus ipsa obcaecati
          natus quasi architecto officiis distinctio quaerat fugiat, perferendis
          minima earum. Pariatur aliquid quae mollitia quas.
        </p>
      </div>
      <div className="mb-24">
        <h3 className="text-5xl uppercase tracking-widest font-medium my-12">Game changing technology</h3>
        <ul className="flex flex-col md:flex-row flex-wrap tracking-wide leading-loose my-6 text-sm md:text-lg">
          {technologyItems.map((item, index) => (
            <li key={index} className="bg-ft-dark-grey p-2 m-2 md:w-[44%] lg:w-[48%]">
              <img
                src={iconDrone}
                alt="drone icon"
                className="w-[40px] h-[40px] m-2 inline-flex"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-20">
        <h3 className="text-5xl uppercase tracking-widest font-medium my-12">End-to-end deployment packages</h3>
        <p className="tracking-wide leading-loose my-6">
          Let us enable your vision for long range drone (RPAS) operations via our turnkey offerings with:
        </p>
        <ul className="flex flex-col md:flex-row flex-wrap tracking-wide leading-loose my-6 text-sm md:text-lg">
          {endToEndItems.map((item, index) => (
            <li key={index} className="bg-ft-dark-grey p-2 m-2 md:w-[44%] lg:w-[48%]">
              <img
                src={iconDrone}
                alt="drone icon"
                className="w-[40px] h-[40px] m-2 inline-flex"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default DeltaQuadProInfo
