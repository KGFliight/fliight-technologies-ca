import iconDrone from '../assets/images/icons/icon-drone.png'
import iconWifi from '../assets/images/icons/icon-wifi.png'
import iconShield from '../assets/images/icons/icon-shield.png'
import iconClipboard from '../assets/images/icons/icon-clipboard.png'
import iconWeather from '../assets/images/icons/icon-weather.png'
import iconPin from '../assets/images/icons/icon-pin.png'
import iconSupport from '../assets/images/icons/icon-support.png'
import iconCog from '../assets/images/icons/icon-cog.png'
import iconDroneHand from '../assets/images/icons/icon-drone-hand.png'
import iconData from '../assets/images/icons/icon-data.png'
import iconWeight from '../assets/images/icons/icon-weight.png'
import iconPresentation from '../assets/images/icons/icon-presentation.png'
import iconNoDroneZone from '../assets/images/icons/icon-no-drone-zone.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

function DeltaQuadProInfo() {
  const technologyItems = [
    { img: iconNoDroneZone, text: 'Up to 150 KM Flight Distance' },
    { img: iconDroneHand, text: 'Full Automation' },
    { img: iconWifi, text: 'Redundant Communication Links' },
    { img: iconSupport, text: 'Local Support and SLA' },
    { img: iconWeather, text: 'Fly in Rain or Snow' },
    { img: iconWeight, text: '1.2kg Payload capacity' },
    { img: iconCog, text: '1 Minute field assembly' },
  ]

  const endToEndItems = [
    { img: iconPin, text: 'Support and warranty' },
    { img: iconPresentation, text: 'Certified training' },
    { img: iconShield, text: 'Regulatory compliance packages' },
    { img: iconData, text: 'Data processing and management' },
  ]

  AOS.init()

  return (
    <div className="m-12 md:m-20 mt-20">
      <div className="mb-24">
        <h2
          className="text-4xl md:text-5xl uppercase tracking-widest font-medium my-12"
          data-aos="fade-down-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="0"
          data-aos-offset="0"
          data-aos-mirror="true"
          data-aos-duration="600"
        >
          Cost-efficient VTOL UAV solution with professional features
        </h2>
        <p
          className="tracking-wide leading-loose my-6 font-light font-['Inter']"
          data-aos="fade-down-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="0"
          data-aos-offset="0"
          data-aos-mirror="true"
          data-aos-duration="600"
        >
          A fully autonomous, commercial grade, Vertical Takeoff and Landing drone with smart technology including LTE  connectivity allowing full remote operations and viewing, mission validator, Comprehensive online e-course, provided with a single transport case weighing less than 25kg.
        </p>
      </div>
      <div
        className="mb-24"
        data-aos="fade-down-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="0"
        data-aos-offset="0"
        data-aos-mirror="true"
        data-aos-duration="600"
      >
        <h3 className="text-4xl md:text-5xl uppercase tracking-widest font-medium my-12">
          Game changing technology
        </h3>
        <ul className="flex flex-col md:flex-row flex-wrap tracking-wide leading-loose my-6 text-sm md:text-lg font-light font-['Inter']">
          {technologyItems.map((item, index) => (
            <li
              key={index}
              className="bg-ft-dark-grey p-2 my-2 mr-4 md:w-[44%] lg:w-[48%] rounded capitalize flex flex-row items-center"
            >
              <img
                src={item.img}
                alt="drone icon"
                className="w-[40px] h-[40px] m-2 mr-4 inline-flex"
              />
              <span className="m-2">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
      <div
        className="mb-20"
        data-aos="fade-down-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="0"
        data-aos-offset="0"
        data-aos-mirror="true"
        data-aos-duration="600"
      >
        <h3 className="text-4xl md:text-5xl uppercase tracking-widest font-medium my-12">
          End-to-end deployment packages
        </h3>
        <p className="tracking-wide leading-loose my-6 font-light font-['Inter']">
          Let us enable your vision for long range drone (RPAS) operations via
          our turnkey offerings with:
        </p>
        <ul className="flex flex-col md:flex-row flex-wrap tracking-wide leading-loose my-6 text-sm md:text-lg">
          {endToEndItems.map((item, index) => (
            <li
              key={index}
              className="bg-ft-dark-grey p-2 my-2 mr-4 md:w-[44%] lg:w-[48%] rounded font-light font-['Inter'] capitalize flex flex-row items-center"
            >
              <img
                src={item.img}
                alt="drone icon"
                className="w-[40px] h-[40px] m-2 mr-4 inline-flex"
              />
              <span className="m-2">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default DeltaQuadProInfo
