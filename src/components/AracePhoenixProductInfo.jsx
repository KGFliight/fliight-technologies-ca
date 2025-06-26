import { useState } from 'react'
import iconAerospace from '../assets/images/icons/icon-aerospace.png'
import iconTilt from '../assets/images/icons/icon-tilt.png'
import iconRoute from '../assets/images/icons/icon-route.png'
import iconBattery from '../assets/images/icons/icon-battery.png'
import iconRetract from '../assets/images/icons/icon-retract.png'
import iconSwappable from '../assets/images/icons/icon-swappable.png'
import iconMaintenance from '../assets/images/icons/icon-maintenance.png'
import iconOpenDesign from '../assets/images/icons/icon-open-design.png'
import iconPin from '../assets/images/icons/icon-pin.png'
import iconPresentation from '../assets/images/icons/icon-presentation.png'
import iconShield from '../assets/images/icons/icon-shield.png'
import iconData from '../assets/images/icons/icon-data.png'
import phoenixImage from '../assets/images/arace-phoenix-gcs.jpg'
import phoenixSide from '../assets/images/phoenix-side.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import '../App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useSpring, animated } from 'react-spring'

function AracePhoenixProductInfo() {
  AOS.init()
  const technologyItems = [
    {
      id: '1',
      heading: 'Robust Construction',
      contents:
        'Built with aerospace-grade composites and durable, high-density foam, the Phoenix is both rugged and lightweight. This design enhances handleability and repairability, ensuring consistent performance in harsh environments.',
      icon: iconAerospace,
    },
    {
      id: '1a',
      heading: 'True Motor Redundancy',
      contents:
        'Hexacopter configuration: With over one hour of hover time and the ability to lose a motor or ESC without causing a critical flight failure, the Phoenix deliveres unmatched reliabilty and safety on every mission.',
      icon: iconTilt,
    },
    {
      id: '1b',
      heading: 'Redundant Sensors',
      contents:
        'Dual airspeed sensors, IMUs, and GPS modules provide better safety and reliability. Multi sensor redundancy ensures robust operations and accurate data in all conditions.',
      icon: iconData,
    },
    {
      id: '2',
      heading: 'Tilt Rotor Propulsion',
      contents:
        'The Phoenix tilt-rotor system seamlessly transitions between vertical takeoff, hover, and efficient forward flight. This innovative design combines the agility of a multirotor with the range and speed of fixed-wing aircraft, making it ideal for diverse mission profiles.',
      icon: iconTilt,
    },
    {
      id: '3',
      heading: 'Auto Recovery',
      contents:
        'The Phoenix optimises its return-to-base profile using real-time wind speed and direction data. With advanced autonomous decision-making, operators simply plan their mission, and the Phoenix ensures a safe and efficient return, even in challenging conditions.',
      icon: iconRoute,
    },
    {
      id: '4',
      heading: 'Semi-solid Lithium Battery',
      contents:
        'Powered by 2 next-generation semi-solid lithium batteries, the Phoenix delivers exceptional energy density and extended flight times. These batteries provide consistent performance, even in extreme temperatures, ensuring mission success.',
      icon: iconBattery,
    },
    {
      id: '5',
      heading: 'Retractable Payloads',
      contents:
        'Featuring an innovative retractable payload bay, the Phoenix protects sensitive equipment during takeoff, landing, and transit. This design enhances aerodynamics and safeguards critical sensors in the field.',
      icon: iconRetract,
    },
    {
      id: '6',
      heading: 'Swappable Payloads',
      contents:
        'Maximise operational flexibility with the Phoenix modular payload system. Quickly swap between sensors, cameras, or other equipment to adapt to any mission requirement without sacrificing downtime.',
      icon: iconSwappable,
    },
    {
      id: '7',
      heading: 'Self-Maintenance',
      contents:
        'Designed with simplicity in mind, the Phoenix features field-serviceable actuators and propellers. This ensures minimal disruption to operations and allows users to perform essential maintenance tasks directly in the field.',
      icon: iconMaintenance,
    },
    {
      id: '8',
      heading: 'Open Design',
      contents:
        'The Phoenix open architecture, powered by the versatile and widely adopted ArduPilot platform, fosters seamless third-party hardware and software integration. Customise and scale its capabilities to meet specific mission objectives or integrate effortlessly into existing workflows.',
      icon: iconOpenDesign,
    },
  ]

  const endToEndItems = [
    { img: iconPin, text: 'Support and warranty' },
    { img: iconPresentation, text: 'Certified training' },
    { img: iconShield, text: 'Regulatory compliance packages' },
    { img: iconData, text: 'Data processing and management' },
  ]

  const [openTechItem, setOpenTechItem] = useState(null)

  const toggleTechItem = (itemId) => {
    setOpenTechItem(openTechItem === itemId ? null : itemId)
  }

  return (
    <div className="m-12 md:m-20 mt-20">
      <div className="mb-20">
        <h2
          className="text-4xl md:text-5xl uppercase tracking-widest font-medium my-0"
          data-aos="fade-down-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="0"
          data-aos-offset="0"
          data-aos-mirror="true"
          data-aos-duration="600"
        >
          Redefining Endurance...Up to 6 Hours
        </h2>
        <p
          className="tracking-wide leading-loose my-6 text-lg font-light font-['Inter']"
          data-aos="fade-down-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="0"
          data-aos-offset="0"
          data-aos-mirror="true"
          data-aos-duration="600"
        >
          The ARACE Phoenix stands as the pinnacle of electric unmanned aviation. Boasting a world-record flight time of 6 hours in forward flight, and over 1 hour in hover, it can remain airborne longer than any other VTOL in its class. This makes it the definitive choice for demanding operations, from large-scale aerial mapping to extensive long-range surveillance. Developed and manufactured in Hungary (EU), it features high-quality components and weatherproof construction for reliable operation in rain and strong winds.
        </p>
      </div>
      <div className="flex flex-col items-center my-24">
        <div className="flex flex-col items-center z-50">
          <div className="image-container m-0 md:mx-24 my-0" data-aos="fade-down-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="0"
            data-aos-offset="0"
            data-aos-mirror="true"
            data-aos-duration="600">
            <img
              src={phoenixImage}
              className="object-contain sm:object-cover rounded h-auto sm:h-[480px] w-full"
              alt="Arace Phoenix"
            />
          </div>
        </div>
      </div>
      <div className="mb-24">
        <h3 className="text-4xl md:text-5xl uppercase tracking-widest font-medium my-12" data-aos="fade-down-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="0"
          data-aos-offset="0"
          data-aos-mirror="true"
          data-aos-duration="600">
          Game changing technology
        </h3>
        <div className="flex flex-col md:flex-row flex-wrap tracking-wide leading-loose my-6 text-sm md:text-lg uppercase" data-aos="fade-down-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="0"
          data-aos-offset="0"
          data-aos-mirror="true"
          data-aos-duration="600">
          {technologyItems.map((item) => {
            const isOpen = openTechItem === item.id
            const props = useSpring({
              to: {
                opacity: isOpen ? 1 : 0,
                maxHeight: isOpen ? '500px' : '0px',
                overflow: 'hidden',
              },
            })
            return (
              <div key={item.id} className="md:w-[44%] lg:w-[48%] my-2 md:mr-4">
                <div className="bg-ft-dark-grey p-2 rounded text-2xl font-medium">
                  <button
                    onClick={() => toggleTechItem(item.id)}
                    className="flex items-center w-full text-left [&>*:nth-child(3)]:ml-auto [&>*:nth-child(3)]:p-2 text-sm md:text-lg font-light font-['Inter'] tracking-wide leading-loose "
                  >
                    <img
                      src={item.icon}
                      alt="game changing technology icon"
                      className="w-[40px] h-[40px] m-2 mr-4 inline-flex "
                    />
                    {item.heading}
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="text-2xl ml-auto mr-4"
                    />
                  </button>
                  <animated.div
                    style={props}
                    className="text-white px-3 normal-case text-base leading-loose tracking-wide font-light font-['Inter']"
                  >
                    <div className="h-4"></div>
                    {item.contents}
                  </animated.div>
                </div>
              </div>
            )
          })}
        </div>
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
        <ul className="flex flex-col md:flex-row flex-wrap tracking-wide leading-loose my-6 text-sm md:text-lg font-light font-['Inter']">
          {endToEndItems.map((item, index) => (
            <li
              key={index}
              className="bg-ft-dark-grey p-2 my-2 md:mr-4 md:w-[44%] lg:w-[48%] rounded capitalize flex items-center"
            >
              <img
                src={item.img}
                alt="end to end icon"
                className="w-[40px] h-[40px] m-2 mr-4 inline-flex"
              />
              <div className="flex-wrap">{item.text}</div>
            </li>
          ))}
        </ul>
      </div>
      {/* Built to Work section for Phoenix */}
      <div className="flex flex-col sm:flex-row justify-center gap-20 my-12 sm:my-40">
        <div className="w-80 sm:w-[480px] items-start flex flex-col justify-center">
          <h3
            className="text-5xl text-left uppercase w-auto my-8 "
            data-aos="fade-down-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="0"
            data-aos-offset="0"
            data-aos-mirror="true"
            data-aos-duration="600"
          >
            Built to work...Longer
          </h3>
          <div
            className="text-lg leading-loose tracking-wide font-light font-['Inter'] pr-6"
            data-aos="fade-down-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="0"
            data-aos-offset="0"
            data-aos-mirror="true"
            data-aos-duration="600"
          >
            The ARACE Phoenix is engineered for operators who demand more: more endurance, more safety, and more flexibility. Built on the proven Phoenix platform, it delivers world-leading flight times and robust safety features for peace of mind in every mission. Designed for rapid deployment, a single person can have the Phoenix mission-ready in under 5 minutes—no tools required. The custom transport case weighs just 15 kg, offering exceptional protection for the aircraft and making it easy to move and deploy wherever your operations take you. Whether you're mapping vast areas or conducting critical surveillance, the Phoenix ensures you're always ready to fly, safely and efficiently.
          </div>
        </div>
        <div
          className="feathered-edge-container relative max-w-[384px] sm:max-w-[420px] max-h-[400px] sm:max-h-[600px] z-50 overflow-hidden"
          data-aos="fade-down-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="0"
          data-aos-offset="0"
          data-aos-mirror="true"
          data-aos-duration="600"
        >
          <div className="overflow-hidden">
            <img
              src={phoenixSide}
              alt="Arace Phoenix Side"
              className="transform scale-[0.9] w-[384px] sm:w-[420px] object-cover h-[400px] sm:h-[600px] rounded overflow-visible feathered-edge-image"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AracePhoenixProductInfo