import { useState } from 'react'
import iconDrone from '../../assets/images/icons/icon-drone.png'
import deltaQuadFlexibility from '../../assets/images/deltaquad-evo-flexibility.png'
import deltaQuadEvoGif from '../../assets/images/dq-evo-intro.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import '../../App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useSpring, animated } from 'react-spring'

function TemplateProductInfo() {
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
      heading: 'Tech Heading 1',
      contents:
        'TECH CONTENTS 1 Tech Contents 1 tech contents 1 TECH CONTENTS 1 Tech Contents 1 tech contents 1 TECH CONTENTS 1 Tech Contents 1 tech contents 1',
    },
    {
      id: '2',
      heading: 'Tech Heading 2',
      contents:
        'TECH CONTENTS 2 Tech Contents 2 tech contents 2 TECH CONTENTS 2 Tech Contents 2 tech contents 2 TECH CONTENTS 2 Tech Contents 2 tech contents 2',
    },
    {
      id: '3',
      heading: 'Tech Heading 3',
      contents:
        'TECH CONTENTS 3 Tech Contents 3 tech contents 3 TECH CONTENTS 3 Tech Contents 3 tech contents 3 TECH CONTENTS 3 Tech Contents 3 tech contents 3',
    },
    {
      id: '4',
      heading: 'Tech Heading 4',
      contents:
        'TECH CONTENTS 4 Tech Contents 4 tech contents 4 TECH CONTENTS 4 Tech Contents 4 tech contents 4 TECH CONTENTS 4 Tech Contents 4 tech contents 4',
    },
    {
      id: '5',
      heading: 'Tech Heading 5',
      contents:
        'TECH CONTENTS 5 Tech Contents 5 tech contents 5 TECH CONTENTS 5 Tech Contents 5 tech contents 5 TECH CONTENTS 5 Tech Contents 5 tech contents 5',
    },
    {
      id: '6',
      heading: 'Tech Heading 6',
      contents:
        'TECH CONTENTS 6 Tech Contents 6 tech contents 6 TECH CONTENTS 6 Tech Contents 6 tech contents 6 TECH CONTENTS 6 Tech Contents 6 tech contents 6',
    },
    {
      id: '7',
      heading: 'Tech Heading 7',
      contents:
        'TECH CONTENTS 7 Tech Contents 7 tech contents 7 TECH CONTENTS 7 Tech Contents 7 tech contents 7 TECH CONTENTS 7 Tech Contents 7 tech contents 7',
    },
    {
      id: '8',
      heading: 'Tech Heading 7',
      contents:
        'TECH CONTENTS 8 Tech Contents 8 tech contents 8 TECH CONTENTS 8 Tech Contents 8 tech contents 8 TECH CONTENTS 8 Tech Contents 8 tech contents 8',
    },
    // ... other items
  ]

  const endToEndItems = [
    'endToendItem 1',
    'End to End Item 2',
    'END TO END ITEM 3',
    'end to end item 4',
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
          <div className="image-container m-0 md:mx-24 my-0 ">
            <img
              src={deltaQuadEvoGif}
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
              <div key={item.id} className="md:w-[44%] lg:w-[48%] my-2 mr-4">
                <div className="bg-ft-dark-grey p-2 rounded text-2xl font-medium">
                  <button
                    onClick={() => toggleTechItem(item.id)}
                    className="flex items-center w-full text-left [&>*:nth-child(3)]:ml-auto [&>*:nth-child(3)]:p-2 text-sm md:text-lg font-light font-['Inter'] tracking-wide leading-loose"
                  >
                    <img
                      src={iconDrone}
                      alt="drone icon"
                      className="w-[40px] h-[40px] m-2 md:mr-4 inline-flex"
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
          Template heading line 202 or so
        </h3>
        <p className="tracking-wide leading-loose my-6 font-light font-['Inter']">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde reiciendis quam, blanditiis obcaecati facere facilis, enim consequatur architecto aut possimus in itaque delectus nesciunt. Tempora.
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, maxime! Line 234 or so
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, assumenda exercitationem quam dolore eos optio asperiores reprehenderit, soluta sit quasi iste perferendis culpa aliquid illo, architecto deserunt adipisci. Voluptas quas saepe deleniti inventore beatae itaque qui laudantium quis cupiditate, ipsum repellat dolores ut, mollitia consectetur, temporibus eveniet dicta maxime quibusdam tenetur consequatur quasi deserunt reiciendis modi autem? Quidem quam qui ad iusto, porro beatae obcaecati natus omnis dolorem suscipit. Nulla unde praesentium voluptas ut asperiores aut non, adipisci sed quae. line 245 or so
          </div>
        </div>
        <div className="feathered-edge-container relative max-w-[384px] sm:max-w-[420px] max-h-[400px] sm:max-h-[600px] z-50 overflow-hidden ">
          <div className="overflow-hidden">
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

export default TemplateProductInfo
