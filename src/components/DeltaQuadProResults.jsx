import '../App.css'
import React from 'react'
import landscape from '../assets/images/results-landscape.jpeg'
import shark from '../assets/images/results-shark.jpeg'
import firetech from '../assets/images/results-firetech.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'

const result = [
  {
    image: firetech,
    alt: 'Firetech Connect -  FATAM 1.2',
    title: 'Firetech Connect -  FATAM 1.2',
    description:
      '3D visualisation of realtime deconfliction of crewed and uncrewed aircraft in a live emergency response activity.',
    url: 'https://firetech-fatam-1-2.glitch.me/',
  },
  {
    image: shark,
    alt: 'Shark Spotting',
    title: 'Surf Life Saving - Shark Spotting',
    description:
      'Demonstration of a remote command centre concept with real world data collected during the Surf Life Saving NSW Beyond Visual Line of Sight (BVLOS) trials in Northern NSW, Australia.',
    url: '⁠https://sls-bvlos-shark.glitch.me/',
  },
  {
    image: landscape,
    alt: 'Man Overboard',
    title: 'More Data Sets coming...',
    description:
      'Keep an eye out as we will be adding more exciting data sets here for you to review in the near future.',
  },
]

function DeltaQuadProResults() {
  const scrollRef = React.useRef(null)

  function slideToTheLeft() {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -200,
        behavior: 'smooth',
      })
    }
  }

  function slideToTheRight() {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 200,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className="mb-20">
      <div className="">
        <div className="inline-flex items-center w-full justify-between mb-2 pl-8 sm:pl-12 md:pl-20">
          <h3 className="text-4xl sm:text-5xl uppercase ml-4 md:ml-0">
            Results worth sharing
          </h3>
          <div className="max-md:hidden flex justify-end ">
            <div className="sm:w-full text-right text-3xl sm:p-4 flex gap-4 justify-end mr-4 my-3 sm:mx-1">
              <button
                className="border border-ft-dark-grey px-3 pt-2 pb-1 hover:bg-ft-red hover:border-ft-dark-grey  transition duration-300 rounded active:-translate-y-1 active:bg-ft-dark-grey"
                onClick={slideToTheLeft}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button
                className="border border-ft-dark-grey px-3 pt-2 pb-1 hover:bg-ft-red hover:border-ft-dark-grey  transition duration-300 rounded active:-translate-y-1 active:bg-ft-dark-grey"
                onClick={slideToTheRight}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
        </div>
        <ul
          className="media-scroller snaps-inline md:auto-cols-[42%] pl-12 md:pl-20"
          ref={scrollRef}
        >
          {result.map((item, index) => (
            <li key={index} className="media-element lg:pr-6 lg:py-12 lg:pl-4 ">
              {item.url ? (
                <a href={item.url} className="no-underline hover:no-underline hover:opacity-80 hover:-translate-y-1">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="bg-ft-grey border-ft-grey rounded min-h-[10rem] h-auto"
                  />
                  <p className="uppercase font-medium mt-2 text-[2rem]">
                    {item.title}
                  </p>
                  <p className="text-base text-ft-grey leading-loose tracking-wide font-light font-['Inter']">
                    {item.description}
                  </p>
                </a>
              ) : (
                <>
                <a className="hover:-translate-y-1">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="bg-ft-grey border-ft-grey rounded min-h-[10rem] h-auto"
                  />
                  <p className="uppercase font-medium mt-2 text-[2rem]">
                    {item.title}
                  </p>
                  <p className="text-base text-ft-grey leading-loose tracking-wide font-light font-['Inter']">
                    {item.description}
                  </p>
                  </a>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default DeltaQuadProResults
