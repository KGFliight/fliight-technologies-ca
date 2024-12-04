import { useState } from 'react'
import iconAerospace from '../assets/images/icons/icon-aerospace.png'
import iconEndurance from '../assets/images/icons/icon-endurance.png'
import iconMilitary from '../assets/images/icons/icon-military.png'
import iconMaintenance from '../assets/images/icons/icon-maintenance.png'
import iconSwappable from '../assets/images/icons/icon-swappable.png'
import iconOpenDesign from '../assets/images/icons/icon-open-design.png'
import deltaQuadFlexibility from '../assets/images/deltaquad-evo-flexibility.png'
import deltaQuadEvoGif from '../assets/images/dq-evo-intro.gif'
import iconPin from '../assets/images/icons/icon-pin.png'
import iconPresentation from '../assets/images/icons/icon-presentation.png'
import iconShield from '../assets/images/icons/icon-shield.png'
import iconData from '../assets/images/icons/icon-data.png'
import iconRetractable from '../assets/images/icons/icon-landing-gear.png'
import iconDualPayload from '../assets/images/icons/icon-duel-payload.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import '../App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useSpring, animated } from 'react-spring'

function DeltaQuadEvoInfo() {
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
      heading: 'Aerospace Grade Airframe',
      contents:
        'The EVO is built from carbon, kevlar and fibreglass material. This provides an extremely robust. lightweight airframe that will last for years, even in the harshest conditions.',
      icon: iconAerospace,
    },
    {
      id: '2',
      heading: 'Retractable Landing Gear',
      contents:
        'The EVO automatically extends and retracts the landing gear. This alloes a diverse set of payloads to be installed both inside and underneath the platform.',
      icon: iconRetractable,
    },
    {
      id: '3',
      heading: 'Enhanced Endurance',
      contents:
        'The EVO can carry a single payload for up to 4.5 hours using a dual battery or a double payload for up to 3 hours.',
      icon: iconEndurance,
    },
    {
      id: '4',
      heading: 'Self Maintenance',
      contents:
        'The Evo is designed to be modular and easy to self maintain. The motor arms are swappable, and a maintenance kit can be installed by any operator without the need to return it to the factory.',
      icon: iconMaintenance,
    },
    {
      id: '5',
      heading: 'Dual Payload',
      contents:
        'The EVO is equipped with two fully integrated payload slots. They can be used to carry two sensors simultaneously, a single large payload, or to achieve extreme flight times with a second battery.',
      icon: iconDualPayload,
    },
    {
      id: '6',
      heading: 'Swappable Payloads',
      contents:
        'The EVO allows plug&play installation of an extensive range of payloads that can be swapped in the field without any tools. The Evo updates automatically to be compatible with future payloads.',
      icon: iconSwappable,
    },
    {
      id: '7',
      heading: 'Military Standards',
      contents:
        'The EVO is a multi-purpose platform that complies with military standards. It features several military options to ruggedize and protect data while providing diverse aerial intelligence.',
      icon: iconMilitary,
    },
    {
      id: '8',
      heading: 'Open Design',
      contents:
        'The EVO comes with everything required to design and integrate your own payload. The required 3D models are freely available, and payload connectors are offered at a low cost.',
      icon: iconOpenDesign,
    },
    // ... other items
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

  //const toggleTechItem = (itemId) => {
  //  if (openTechItem === itemId) {
  //    setOpenTechItem(null)
  //  } else {
  //    setOpenTechItem(itemId)
  //  }
  //}

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
          A new standard is rising
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
          Equipped with a dual battery, the Evo has been tested to fly for up to
          4.5 hours. This performance sits at the top of the electric drone
          market. Paired with unique radio and LTE VPN connection possibilities
          of the DeltaQuad controller, the Evo model is strikingly powered for
          any flying mission.
        </p>
      </div>
      <div className="flex flex-col items-center my-24">
        <div className="flex flex-col items-center z-50">
          <div
            className="image-container m-0 md:mx-24 my-0"
            data-aos="fade-down-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="0"
            data-aos-offset="0"
            data-aos-mirror="true"
            data-aos-duration="600"
          >
            <img
              src={deltaQuadEvoGif}
              className="object-contain sm:object-cover rounded h-auto sm:h-[480px] w-full"
            />
          </div>
        </div>
      </div>
      <div className="mb-24">
        <h3
          className="text-4xl md:text-5xl uppercase tracking-widest font-medium my-12"
          data-aos="fade-down-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="0"
          data-aos-offset="0"
          data-aos-mirror="true"
          data-aos-duration="600"
        >
          Game changing technology
        </h3>

        <div
          className="flex flex-col md:flex-row flex-wrap tracking-wide leading-loose my-6 text-sm md:text-lg uppercase"
          data-aos="fade-down-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="0"
          data-aos-offset="0"
          data-aos-mirror="true"
          data-aos-duration="600"
        >
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
                    className="flex items-center w-full text-left [&>*:nth-child(3)]:ml-auto [&>*:nth-child(3)]:p-2 text-sm md:text-lg font-light font-['Inter'] tracking-wide leading-loose"
                  >
                    <img
                      src={item.icon}
                      alt="drone icon"
                      className="w-[40px] h-[40px] m-2 mr-4 inline-flex"
                    />
                    <span className="m-2">{item.heading}</span>
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

      {/* } <div className="flex flex-col md:flex-row flex-wrap tracking-wide leading-loose my-6 text-sm md:text-lg uppercase">
          {technologyItems.map((item, index) => (
            <div key={index} className="bg-ft-dark-grey p-2 my-2 mr-4 md:w-[44%] lg:w-[48%] rounded">
              <button onClick={() => toggleTechItem(index)} className="flex items-center w-full text-left [&>*:nth-child(3)]:ml-auto [&>*:nth-child(3)]:p-4">
                <img src={iconDrone} alt="drone icon" className="w-[40px] h-[40px] m-2 md:mr-4 inline-flex" />
                <span className="uppercase">{item.heading}</span>
                <span className="">v</span>
              </button>
              {openTechItem === index && (
                <div className="text-white p-4 normal-case text-base font-normal leading-loose tracking-wide">
                  {item.contents}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
              */}

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
              <div className="flex-wrap m-2">{item.text}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col sm:flex-row justify-center gap-20 my-12 sm:my-40">
        <div className="w-80 sm:w-[480px] items-center sm:items-start flex flex-col justify-center">
          <h3
            className="text-5xl text-left uppercase w-auto my-8"
            data-aos="fade-down-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="0"
            data-aos-offset="0"
            data-aos-mirror="true"
            data-aos-duration="600"
          >
            Incredible flexibility
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
            The DeltaQuad Evo is setting a new standard in payload flexibility
            by incorporating two universal payload bays. The bays can be used to
            combine and simultaneously operate multiple payloads. The dual
            sensor capability opens new possibilities both in enterprise and
            military configurations. The Evo can carry up to 3kg of payloads of
            your choice - anything from ISR to mapping and multispectral to
            lidar. Since the payloads can be swapped instantly and without any
            tools, the Evo is a future-proof solution with low total costs of
            ownership for any business.
          </div>
        </div>
        <div className="feathered-edge-container relative max-w-[384px] sm:max-w-[420px] max-h-[400px] sm:max-h-[600px] z-50 overflow-hidden ">
          <div
            className="overflow-hidden"
            data-aos="fade-down-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="0"
            data-aos-offset="0"
            data-aos-mirror="true"
            data-aos-duration="600"
          >
            <img
              src={deltaQuadFlexibility}
              alt="DeltaQuad Evo Propeller"
              className="transform scale-[0.9] w-[384px] sm:w-[420px] object-cover h-[400px] sm:h-[600px] rounded overflow-visible"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeltaQuadEvoInfo
