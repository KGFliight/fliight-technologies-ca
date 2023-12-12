import { useState } from 'react'
import iconDrone from '../assets/images/icon-drone.png'
import deltaQuadInfoImage from '../assets/images/dq-evo-info.png'
import deltaQuadPropellerImage from '../assets/images/dq-evo-info-propeller.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import '../App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'




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
      heading: 'Aerospace grade airframe',
      contents: 'Details about aerospace grade airframe...',
    },
    {
      id: '2',
      heading: 'Retractable landing gear',
      contents: 'Details about retractable landing gear',
    },
    {
      id: '3',
      heading: 'Enhanced Endurance',
      contents: 'Details about enhanced endurance',
    },
    {
      id: '4',
      heading: 'Self Maintenance',
      contents: 'Details about self maintenance',
    },
    {
      id: '5',
      heading: 'Dual payload',
      contents: 'Details about dual payload',
    },
    {
      id: '6',
      heading: 'Swappable payloads',
      contents: 'Details about swappable payloads',
    },
    {
      id: '7',
      heading: 'Military standards',
      contents: 'Details about military standards',
    },
    { id: '8', heading: 'Open design', contents: 'Details about open design' },
    // ... other items
  ]

  const endToEndItems = [
    'Support and warranty',
    'Certified training',
    'Regulatory compliance packages',
    'Data processing and management',
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
    if (openTechItem === itemId) {
      setOpenTechItem(null)
    } else {
      setOpenTechItem(itemId)
    }
  }

  return (
    <div className="m-12 md:m-20">
      <div className="mb-24">
        <h2 className="text-4xl md:text-5xl uppercase tracking-widest font-medium my-12">
          A new standard is rising
        </h2>
        <p className="tracking-wide leading-loose my-6 text-lg font-light font-['Inter']">
          Equipped with a dual battery, the Evo has been tested to fly for up to
          4.5 hours. This performance sits at the top of the electric drone
          market. Paired with unique radio and LTE VPN connection possibilities
          of the DeltaQuad controller, the Evo model is strikingly powered for
          any flying mission.
        </p>
      </div>
      <div className="flex flex-col items-center my-24">
        <div className="flex flex-col items-center z-50">
          <div className="image-container m-0 md:mx-24 my-12 ">
            <img
              src={deltaQuadInfoImage}
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
          {technologyItems.map((item) => (
            <div key={item.id} className="md:w-[44%] lg:w-[48%] my-2 mr-4">
              <div className="bg-ft-dark-grey p-2 rounded text-2xl font-medium">
                <button
                  onClick={() => toggleTechItem(item.id)}
                  className="flex items-center w-full text-left [&>*:nth-child(3)]:ml-auto [&>*:nth-child(3)]:p-4 text-sm md:text-lg font-light font-['Inter'] tracking-wide leading-loose my-2"
                >
                  <img
                    src={iconDrone}
                    alt="drone icon"
                    className="w-[40px] h-[40px] m-2 md:mr-4 inline-flex"
                  />
                  <span className="capitalize">{item.heading}</span>
                  <FontAwesomeIcon icon={faChevronDown} className="text-2xl" />
                </button>
                {openTechItem === item.id && (
                  <div className="text-white mt-3 p-3 normal-case text-base leading-loose tracking-wide font-light font-['Inter'] border-t rounded border-ft-black shadow bg-ft-black transition-all duration-300">
                    {item.contents}
                  </div>
                )}
              </div>
            </div>
          ))}
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

      <div className="mb-20">
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
      <div className="flex flex-col sm:flex-row justify-center gap-20 my-40">
        <div className="w-80 sm:w-[480px] items-center sm:items-start flex flex-col justify-center">
          <h3 className="text-5xl text-left uppercase w-auto my-8">Incredible flexibility</h3>
          <div className="text-lg leading-loose tracking-wide font-light font-['Inter'] pr-6">
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
        <div className="image-container max-w-[384px] max-h-[600px] z-50">
          <img
            src={deltaQuadPropellerImage}
            alt="DeltaQuad Evo Propeller"
            className="w-96 object-none h-[600px] rounded"
          />
        </div>
      </div>
    </div>
  )
}

export default DeltaQuadEvoInfo
