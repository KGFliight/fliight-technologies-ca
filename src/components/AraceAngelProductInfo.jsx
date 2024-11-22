import { useState } from 'react'
import iconDrone from '../assets/images/icons/icon-drone.png'
import araceAngel3 from '../assets/images/arace-angel-3.png'
import araceAngel2 from '../assets/images/arace-angel-2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import '../App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useSpring, animated } from 'react-spring'
import AraceAngelGraph from './AraceAngelGraph'

function AraceAngelProductInfo() {
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
        'Engineered for excellence, the Arace Angel’s airframe is crafted from aerospace-grade materials, combining exceptional strength with lightweight efficiency to ensure durability and superior flight performance.',
    },
    {
      id: '2',
      heading: 'Industry Leading Endurance',
      contents:
        'Don’t settle for 30-minute flight times when the Arace Angel delivers up to 90 minutes of airtime with a 1 kg payload. Redefining endurance, it empowers you to complete longer missions with fewer interruptions, no matter the conditions.',
    },
    {
      id: '3',
      heading: 'Semi-Solid Battery',
      contents:
        'Powered by advanced semi-solid lithium batteries, the Arace Angel delivers outstanding energy density, providing consistent and reliable performance for extended missions.',
    },
    {
      id: '4',
      heading: 'Compact Frame',
      contents:
        'The Arace Angel is rapidly deployable from its briefcase-sized carry case, thanks to its innovative folding arms and landing gear, making transport and setup quick and effortless.',
    },
    {
      id: '5',
      heading: 'Field Serviceable',
      contents:
        'Designed for real-world conditions, the Arace Angel is field-serviceable, allowing users to quickly replace or repair key components like propellers and actuators, keeping downtime to a minimum.',
    },
    {
      id: '6',
      heading: 'Swappable Payloads',
      contents:
        'Adapt to any mission with ease. The Arace Angel’s swappable payload system lets you quickly switch between sensors and equipment, ensuring maximum flexibility in the field.',
    },
  ]

  const endToEndItems = [
    'Support and warranty',
    'Regulatory compliance packages',
    'Certified training',
    'Data processing and management',
    // ... other items
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
          Multirotor Capability, Fixed-Wing Endurance.
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
          The Arace Angel boasts a remarkable payload capacity, supporting up to
          1.9kg for versatile operational needs. Equipped with a powerful 35Ah
          battery, this advanced platform achieves industry-leading endurance,
          sustaining up to 85 minutes of flight time with a 1.3kg payload.
          Designed for rapid response scenarios, the Angel is deployable in just
          two minutes, minimising preparation time. With multiple radio link
          options available, including a fully NATO-compliant model, the Arace
          Angel offers a flexible and resilient solution tailored to demanding
          operational standards.
        </p>
      </div>
      <div className="flex flex-col items-center my-24">
        <div className="flex flex-col items-center z-50">
          <div className="image-container m-0 md:mx-24 my-0 ">
            <img
              src={araceAngel2}
              alt="Arace Angel"
              className="object-contain sm:object-cover rounded h-auto sm:h-[480px] w-full"
            />
          </div>
        </div>
      </div>
      <div className="mb-24">
        <h3 className="text-4xl md:text-5xl uppercase tracking-widest font-medium mt-12">
          Under The Hood
        </h3>
        <p
          className="tracking-wide leading-loose my-6 text-lg font-light font-['Inter']"
          data-aos="fade-down-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="0"
          data-aos-offset="0"
          data-aos-mirror="true"
          data-aos-duration="600"
        >
          The Arace Angel redefines multirotor capabilities with
          industry-leading endurance, seamless autonomy, and advanced
          intelligence. Designed for a wide range of payloads and effortless
          operation, it empowers users to tackle complex missions with unmatched
          efficiency and reliability, all while being remarkably easy to use.
        </p>
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
              <div key={item.id} className="md:w-[44%] lg:w-[48%] my-2 mr-4">
                <div className="bg-ft-dark-grey p-2 rounded text-2xl font-medium">
                  <button
                    onClick={() => toggleTechItem(item.id)}
                    className="flex items-center w-full text-left [&>*:nth-child(3)]:ml-auto [&>*:nth-child(3)]:p-2 text-sm md:text-lg font-light font-['Inter'] tracking-wide leading-loose "
                  >
                    <img
                      src={iconDrone}
                      alt="drone icon"
                      className="w-[40px] h-[40px] m-2 md:mr-4 inline-flex "
                    />
                    {item.heading}
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="text-2xl ml-auto"
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
              className="bg-ft-dark-grey p-2 my-2 mr-4 md:w-[44%] lg:w-[48%] rounded capitalize flex items-center"
            >
              <img
                src={iconDrone}
                alt="drone icon"
                className="w-[40px] h-[40px] m-2 md:mr-4 inline-flex"
              />
              <div className="flex-wrap">{item}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:justify-center gap-20 my-12 sm:my-40">
        <div className="w-80 sm:w-[600px] items-start flex flex-col justify-center">
          <h3
            className="text-5xl text-left uppercase w-auto my-8 "
            data-aos="fade-down-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="0"
            data-aos-offset="0"
            data-aos-mirror="true"
            data-aos-duration="600"
          >
            A versatile workhorse
          </h3>
          <div
            className="text-lg leading-loose tracking-wide font-light font-['Inter'] pr-6 mb-12"
            data-aos="fade-down-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="0"
            data-aos-offset="0"
            data-aos-mirror="true"
            data-aos-duration="600"
          >
            The Arace Angel stands in a league of its own with a substantial
            1.9kg payload capacity and exceptional flight times of up to 120
            minutes. Whether you need an advanced aerial platform for
            photogrammetry, LIDAR, or ISR operations, the Angel offers unmatched
            versatility and endurance. Nothing compares to the Angel’s
            performance—don’t just take our word for it; check the graph below
            to see how the Angel outperforms the competition, including the DJI
            M350, IF800 Tomcat and Freefly Astro.
          </div>
          <div className="arace-angel-graph-wrapper">
            <AraceAngelGraph />
          </div>
        </div>
        <div className="feathered-edge-container relative max-w-[384px] sm:max-w-[420px] z-50 overflow-hidden flex items-center">
          <div className="overflow-hidden">
            <img
              src={araceAngel3}
              alt="Arace Angel"
              className="transform scale-[0.9] w-[384px] sm:w-[420px] object-cover h-[400px] sm:h-[600px] rounded overflow-visible"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AraceAngelProductInfo
