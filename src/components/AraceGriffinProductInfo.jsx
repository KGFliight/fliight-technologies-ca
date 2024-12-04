import { useState } from 'react'
import iconDrone from '../assets/images/icons/icon-drone.png'
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
import araceGriffin3 from '../assets/images/arace-griffin-3.png'
import araceGriffin2 from '../assets/images/arace-griffin-2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import '../App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useSpring, animated } from 'react-spring'

function AraceGriffinProductInfo() {
  AOS.init()
  /*const technologyItems = [
    'Aerospace grade airframe',
    'retractable landing gear',
    'enhanced endurance',
    'self maintenance',
    'dual payload',
    'swappable payloads',
    'military standards',
    'open design',
  ]*/

  const technologyItems = [
    {
      id: '1',
      heading: 'Robust Airframe',
      contents:
        'Built with aerospace-grade composites and durable, high-density foam, the Griffin Pro is both rugged and lightweight. This design enhances handleability and repairability, ensuring consistent performance in harsh environments.',
      icon: iconAerospace,
    },
    {
      id: '2',
      heading: 'Tilt Rotor Propulsion',
      contents:
        'The Griffin Pro’s tilt-rotor system seamlessly transitions between vertical takeoff, hover, and efficient forward flight. This innovative design combines the agility of a multirotor with the range and speed of fixed-wing aircraft, making it ideal for diverse mission profiles.',
      icon: iconTilt,
    },
    {
      id: '3',
      heading: 'Auto Recovery',
      contents:
        'The Griffin Pro optimises its return-to-base profile using real-time wind speed and direction data. With advanced autonomous decision-making, operators simply plan their mission, and the Griffin Pro ensures a safe and efficient return, even in challenging conditions.',
      icon: iconRoute,
    },
    {
      id: '4',
      heading: 'Semi-solid Lithium Battery',
      contents:
        'Powered by next-generation semi-solid lithium batteries, the Griffin Pro delivers exceptional energy density and extended flight times. These batteries provide consistent performance, even in extreme temperatures, ensuring mission success.',
      icon: iconBattery,
    },
    {
      id: '5',
      heading: 'Retractable Payloads',
      contents:
        'Featuring an innovative retractable payload bay, the Griffin Pro protects sensitive equipment during takeoff, landing, and transit. This design enhances aerodynamics and safeguards critical sensors in the field.',
      icon: iconRetract,
    },
    {
      id: '6',
      heading: 'Swappable Payloads',
      contents:
        'Maximise operational flexibility with the Griffin Pro’s modular payload system. Quickly swap between sensors, cameras, or other equipment to adapt to any mission requirement without sacrificing downtime.',
      icon: iconSwappable,
    },
    {
      id: '7',
      heading: 'Self-Maintenance',
      contents:
        'Designed with simplicity in mind, the Griffin Pro features field-serviceable actuators and propellers. This ensures minimal disruption to operations and allows users to perform essential maintenance tasks directly in the field.',
      icon: iconMaintenance,
    },
    {
      id: '8',
      heading: 'Open Design',
      contents:
        'The Griffin Pro’s open architecture, powered by the versatile and widely adopted ArduPilot platform, fosters seamless third-party hardware and software integration. Customise and scale its capabilities to meet specific mission objectives or integrate effortlessly into existing workflows.',
      icon: iconOpenDesign,
    },
  ]

  const endToEndItems = [
    { img: iconPin, text: 'Support and warranty' },
    { img: iconPresentation, text: 'Certified training' },
    { img: iconShield, text: 'Regulatory compliance packages' },
    { img: iconData, text: 'Data processing and management' },
  ]

  /*
  const endToEndItems = [
    { heading: "Support and warranty", contents: "" },
    { heading: "Regulatory compliance packages", contents: "" },
    { heading: "Data processing and management", contents: "" },
    { heading: "Regulatory compliance packages", contents: "" },
    // ... other items
  ];*/

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
          Ease of use meets unparalleled performance
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
          The ARACE GRIFFIN Pro is a fully electric, fully autonomous VTOL
          platform designed for unmatched ease and performance in any
          environment. With its innovative tilt-rotor design, the Griffin Pro
          achieves remarkable wind resistance, withstanding speeds over 16
          m/s—setting it apart from all other VTOLs. Designed for rapid
          deployment, it can be assembled and launched by a single person in
          under 2 minutes, requiring no tools and zero pre-flight calibration.
          Compact enough to fit in a single carry case, the Griffin Pro is ready
          to go wherever your mission takes you.
        </p>
      </div>
      <div className="flex flex-col items-center my-24">
        <div className="flex flex-col items-center z-50">
          <div className="image-container m-0 md:mx-24 my-0 ">
            <img
              src={araceGriffin2}
              className="object-contain sm:object-cover rounded h-auto sm:h-[480px] w-full"
            />
          </div>
        </div>
      </div>
      <div className="mb-24">
        <h3 className="text-4xl md:text-5xl uppercase tracking-widest font-medium my-12">
          Game changing technology
        </h3>

        <div className="flex flex-col md:flex-row flex-wrap tracking-wide leading-loose my-6 text-sm md:text-lg uppercase ">
          {technologyItems.map((item) => {
            // Determine if the current item is open
            const isOpen = openTechItem === item.id
            // Use Spring to animate the dropdown
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
                  {/* Animated div for item content */}
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
            Built to work
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
            The ARACE Griffin Pro is engineered for seamless, intuitive
            operation, making it exceptionally reliable in the field. Its rapid
            deployment capability means you can be mission-ready within moments,
            with easy, tool-free assembly by a single operator. Equipped with
            fully articulating antennas for RF performance and swappable
            payloads to match diverse mission needs, the Griffin Pro adapts
            effortlessly to changing operational demands. The onboard FPV camera
            provides excellent situational awareness and the the included
            handheld anemometer offers accurate ground-level wind readings for
            safe pre-flight planning. With a focus on user-friendly operation
            and consistent performance, the Griffin Pro ensures that every
            mission can be conducted with confidence and efficiency.
          </div>
        </div>
        <div className="feathered-edge-container relative max-w-[384px] sm:max-w-[420px] max-h-[400px] sm:max-h-[600px] z-50 overflow-hidden ">
          <div className="overflow-hidden">
            <img
              src={araceGriffin3}
              alt="Arace Griffin"
              className="transform scale-[0.9] w-[384px] sm:w-[420px] object-cover h-[400px] sm:h-[600px] rounded overflow-visible feathered-edge-image"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AraceGriffinProductInfo
