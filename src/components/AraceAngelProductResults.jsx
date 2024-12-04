import '../App.css'
import React, { useEffect, useRef, useState } from 'react'
import resultsLidar from '../assets/images/results-lidar.png'
import resultsVideoThumbnail from '../assets/images/results-video-thumbnail-aa.png'
import resultsReviewThumbnail from '../assets/images/results-review-thumbnail-aa.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'

const result = [
  {
    type: 'image',
    image: resultsLidar,
    alt: 'Colourised LiDAR - Bellambi Boat Ramp',
    title: 'Colourised LiDAR - Bellambi Boat Ramp',
    description:
      'This dataset was collected with the Arace Angel and Easyscan W30 LiDAR in 7 minutes at 100m altitude operating at 8m/s flight speed. Processing, colourisation and classification generated locally.',
    url: 'https://lidar.fliight.com.au/view/Bellambi_Boat_Ramp-Complete_2024_0918_073341',
  },
  {
    type: 'image',
    url: 'https://dyupn21s2frgg.cloudfront.net/Angel_Demo.mp4',
    image: resultsVideoThumbnail,
    alt: 'Arace Angel - Rapid ISR Deployment Video',
    title: 'Arace Angel - Rapid ISR Deployment',
    description:
      'Watch the Arace Angel demonstrate its rapid setup and seamless transition to the skies, equipped with the advanced AVT CM62 payload. With up to 90 minutes of flight time, it delivers exceptional long-range surveillance and intelligence gathering capabilities.',
  },
  {
    type: 'image',
    image: resultsReviewThumbnail,
    alt: 'Arace Angel Review by ArduPilot Pioneer, Dr Andrew Tridgell',
    title: 'Arace Angel Review by ArduPilot Pioneer, Dr Andrew Tridgell',
    description:
      'Discover what industry experts are saying about the Arace Angel. Read this in-depth, honest review highlighting the system’s remarkable long endurance, reliability, and cutting-edge capabilities for demanding missions.',
    url: 'https://discuss.ardupilot.org/t/arace-angel-fantastic-long-endurance-copter/113998',
  },
]

function AraceAngelProductResults() {
  const scrollRef = React.useRef(null)
  const imageRef = useRef(null)
  const [imageHeight, setImageHeight] = useState('auto')

  // Recalculate height dynamically on window resize
  useEffect(() => {
    const updateHeight = () => {
      if (imageRef.current) {
        setImageHeight(`${imageRef.current.offsetHeight}px`)
      }
    }

    // Initial calculation
    updateHeight()

    // Add resize event listener
    window.addEventListener('resize', updateHeight)

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', updateHeight)
    }
  }, [])

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
            ref={index === 0 ? imageRef : null} // Reference the first image to capture its height
            src={item.image}
            alt={item.alt}
            className={`bg-ft-grey border-ft-grey rounded w-full object-cover ${
              index === 2 ? 'h-auto' : ''
            }`}
            style={index === 2 && imageRef.current ? { height: imageHeight } : {}}
          />
        </a>
      ) : (
        <div
          className="bg-ft-grey border-ft-grey rounded overflow-hidden"
          style={{ height: imageHeight }} // Dynamically set the height
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

export default AraceAngelProductResults
