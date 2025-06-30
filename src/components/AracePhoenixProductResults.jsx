import '../App.css'
import React from 'react'
import resultsShowreel from '../assets/images/results-showreel-ag.png'
import resultsReviewThumbnail from '../assets/images/results-review-thumbnail-ag.png'
import resultsPowerline from '../assets/images/results-powerline-inspection-ag.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'

const result = [
  {
    type: 'image',
    image: resultsShowreel,
    alt: 'Arace Griffin Pro VTOL – Show Reel',
    title: 'Arace Griffin Pro VTOL – Show Reel',
    description:
      'Showcasing the Griffin Pro’s exceptional autonomy, unmatched wind resistance, and reliability across diverse missions, including remote sensing, precision mapping, and long-range surveillance (ISR).',
    url: 'https://dyupn21s2frgg.cloudfront.net/Griffin_Pro_Demo.mp4',
  },
  {
    type: 'image',
    image: resultsPowerline,
    alt: 'Post Disaster Powerline Inspection',
    title: 'Post Disaster Powerline Inspection',
    description:
      'Demonstration of long range powerline feeder inspections in a post disaster trial. The Phoenix can fly for 2.5 hours, covering 140+ km. Data collected with Nextvision Colibri2 ISR payload.',
    url: 'https://dyupn21s2frgg.cloudfront.net/Griffin_Pro_Inspection.mp4',
  },
  {
    type: 'image',
    image: resultsReviewThumbnail,
    alt: 'Phoenix Review by ArduPilot Pioneer, Dr Andrew Tridgell',
    title: 'Phoenix Review by ArduPilot Pioneer, Dr Andrew Tridgell',
    description:
      'Discover what industry experts are saying about the Arace Phoenix. Read this in-depth, honest review highlighting the quadplanes advanced capabilities, impressive performance, and innovative design for demanding missions.',
    url: 'https://discuss.ardupilot.org/t/review-of-arace-griffinpro-quadplane/93893',
  },
]

function AracePhoenixProductResults() {
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
                className="border border-ft-dark-grey px-3 pt-2 pb-1 hover:bg-ft-red hover:border-ft-dark-grey transition duration-300 rounded active:-translate-y-1 active:bg-ft-dark-grey"
                onClick={slideToTheLeft}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button
                className="border border-ft-dark-grey px-3 pt-2 pb-1 hover:bg-ft-red hover:border-ft-dark-grey transition duration-300 rounded active:-translate-y-1 active:bg-ft-dark-grey"
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
            <li
              key={index}
              className="media-element lg:pr-6 lg:py-12 lg:pl-4 hover:no-underline hover:opacity-80 hover:-translate-y-1 transition duration-300"
            >
              {item.type === 'image' ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline"
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className={`bg-ft-grey border-ft-grey rounded w-full object-cover`}
                  />
                </a>
              ) : (
                <div
                  className="bg-ft-grey border-ft-grey rounded overflow-hidden"
                  style={{ height: imageHeight }}
                >
                  <video
                    controls
                    src={item.videoUrl}
                    poster={item.thumbnail}
                    className="w-full h-full object-cover"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
              <p className="uppercase font-medium mt-2 text-[2rem]">
                {item.title}
              </p>
              <p className="text-base text-ft-grey leading-loose tracking-wide font-light font-['Inter']">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default AracePhoenixProductResults 