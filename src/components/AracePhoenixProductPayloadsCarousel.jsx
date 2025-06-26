import '../App.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import ilxLr1 from '../assets/images/payloads/payloads-cropped-ilx-lr1.jpg'
import cm102 from '../assets/images/payloads/payloads-cropped-cm102.png'
import eliteScanW50 from '../assets/images/payloads/payloads-cropped-elitescan-w50.png'
import raptor from '../assets/images/payloads/payloads-cropped-raptor.jpg'

const result = [
  {
    image: cm102,
    alt: 'CM102',
    category: 'ISR',
    title: 'CM102',
    maker: 'AVT Australia',
    description:
      'A lightweight, gyro-stabilised gimbal system optimised for UAVs, providing high-definition imaging and thermal capabilities for precise aerial surveillance and reconnaissance',
  },
  {
    image: ilxLr1,
    alt: 'ILX-LR1',
    category: 'RGB',
    title: 'ILX-LR1',
    maker: 'Sony',
    description:
      'A light weight, fully integrated 61 megapixel mapping camera with an interchangeable lens',
  },
  {
    image: eliteScanW50,
    alt: 'ELITESCAN W50',
    category: 'LiDAR',
    title: 'ELITESCAN W50',
    maker: 'Epic Lidar',
    description:
      'A highly integrated airborne line scanning LiDAR system with camera, capable of flying up to 400m, featuring strong vegetation penetration with 7 echo returns and a wide FOV',
  },
  {
    image: raptor,
    alt: 'RAPTOR',
    category: 'ISR',
    title: 'RAPTOR',
    maker: 'NextVision',
    description:
      'A lightweight long range dual EO-IR stabilised camera turret featuring a significant IR range increase and X80 EO zoom',
  },
]

function AracePhoenixProductPayloadsCarousel() {
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
    <div className="my-40">
      <div className="">
        <div className="inline-flex items-center w-full justify-between mb-2 pl-12 md:pl-20">
          <h3 className="text-4xl sm:text-5xl uppercase md:ml-0">
            Available Payloads
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
          className="media-scroller snaps-inline auto-cols-[77%] sm:auto-cols-[42%] lg:auto-cols-[27%] 2xl:auto-cols-[24%] pl-12 md:pl-16 lg:pl-20"
          ref={scrollRef}
        >
          {result.map((item, index) => (
            <li key={index} className="media-element lg:pr-2 lg:py-12 lg:pl-4 md:pl-4">
              <div className="relative ">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="bg-ft-grey border-ft-grey rounded object-cover "
                />
              </div>
              <div className="">
              <p className="text-sm text-ft-grey leading-tight tracking-wide font-thin font-['Inter'] mt-4 mb-2 py-2">
                {item.category}
              </p>
              <p className="uppercase font-medium text-2xl lg:text-[2rem] py-2">{item.title}</p>
              <p className="text-sm text-ft-grey leading-tight tracking-wide font-thin font-['Inter'] h-8 py-2 pb-8">
                {item.maker}
              </p>
              <div className="border-ft-dark-grey border-t h-0.5 w-full rounded py-2"></div>
              <p className="text-sm text-ft-grey leading-tight tracking-wide font-thin font-['Inter'] min-h-[4rem]">
                {item.description}
              </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default AracePhoenixProductPayloadsCarousel 