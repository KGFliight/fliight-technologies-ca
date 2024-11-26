import '../App.css'
import React, { useEffect, useRef, useState } from 'react'
import software from '../assets/images/software-1.jpeg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'

const result = [
  {
    type: "image",
    image: software,
    alt: "fill",
    title: "Data Set 1",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus veniam repellendus architecto nemo. Doloribus ex explicabo illum provident nisi modi repudiandae rerum maxime nesciunt. Laboriosam."
  },
  {
    type: "video",
    videoUrl: "https://cdn.example.com/video1.mp4", // Replace with actual CDN URL
    alt: "Video 1",
    title: "Data Set 2",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus veniam repellendus architecto nemo. Doloribus ex explicabo illum provident nisi modi repudiandae rerum maxime nesciunt. Laboriosam."
  },
  {
    type: "video",
    videoUrl: "https://cdn.example.com/video2.mp4", // Replace with actual CDN URL
    alt: "Video 2",
    title: "Data Set 3",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus veniam repellendus architecto nemo. Doloribus ex explicabo illum provident nisi modi repudiandae rerum maxime nesciunt. Laboriosam."
  }
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
            <li key={index} className="media-element lg:pr-6 lg:py-12 lg:pl-4">
              {item.type === "image" ? (
                <img
                  ref={index === 0 ? imageRef : null} // Reference the first image to capture its height
                  src={item.image}
                  alt={item.alt}
                  className="bg-ft-grey border-ft-grey rounded w-full object-cover"
                />
              ) : (
                <div
                  className="bg-ft-grey border-ft-grey rounded overflow-hidden"
                  style={{ height: imageHeight }} // Dynamically set the height
                >
                  <video
                    controls
                    src={item.videoUrl}
                    className="w-full h-full object-cover"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
              <p className="uppercase font-medium mt-2 text-[2rem]">{item.title}</p>
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
