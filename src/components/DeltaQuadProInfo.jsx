import iconDrone from '../assets/images/icons/icon-drone.png'
import AOS from 'aos'
import 'aos/dist/aos.css'



function DeltaQuadProInfo() {
  const technologyItems = ["Up to 150 KM Flight Distance", "Full Automation", "Redundant Communication Links", "Local Support and SLA", "1 Minute field assembly", "1.2kg Payload capacity", "Fly in Rain or Snow"]

  const endToEndItems = ["Support and warranty", "Certified training", "Regulatory compliance packages", "Data processing and management"]

  AOS.init()
  
  return (
    <div className="m-12 md:m-20 mt-20">
      <div className="mb-24">
        <h2 className="text-4xl md:text-5xl uppercase tracking-widest font-medium my-12" data-aos="fade-down-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="0"
            data-aos-offset="0"
            data-aos-mirror="true"
            data-aos-duration="600">Fliight Technologies is proud to be the official Australian distributor for the Deltaquad Pro eVTOL platform</h2>
        <p className="tracking-wide leading-loose my-6 font-light font-['Inter']" data-aos="fade-down-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="0"
            data-aos-offset="0"
            data-aos-mirror="true"
            data-aos-duration="600"> 
          The DeltaQuad Pro platform offers incredible value for money.
        </p>
      </div>
      <div className="mb-24">
        <h3 className="text-4xl md:text-5xl uppercase tracking-widest font-medium my-12">Game changing technology</h3>
        <ul className="flex flex-col md:flex-row flex-wrap tracking-wide leading-loose my-6 text-sm md:text-lg font-light font-['Inter']">
          {technologyItems.map((item, index) => (
            <li key={index} className="bg-ft-dark-grey p-2 my-2 mr-4 md:w-[44%] lg:w-[48%] rounded capitalize">
              <img
                src={iconDrone}
                alt="drone icon"
                className="w-[40px] h-[40px] m-2 md:mr-4 inline-flex"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-20">
        <h3 className="text-4xl md:text-5xl uppercase tracking-widest font-medium my-12">End-to-end deployment packages</h3>
        <p className="tracking-wide leading-loose my-6 font-light font-['Inter']">
          Let us enable your vision for long range drone (RPAS) operations via our turnkey offerings with:
        </p>
        <ul className="flex flex-col md:flex-row flex-wrap tracking-wide leading-loose my-6 text-sm md:text-lg">
          {endToEndItems.map((item, index) => (
            <li key={index} className="bg-ft-dark-grey p-2 my-2 mr-4 md:w-[44%] lg:w-[48%] rounded font-light font-['Inter'] capitalize">
              <img
                src={iconDrone}
                alt="drone icon"
                className="w-[40px] h-[40px] m-2 md:mr-4 inline-flex"
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
