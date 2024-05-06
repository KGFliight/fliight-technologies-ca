import '../App.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import ilxLr1 from '../assets/images/payloads/payloads-cropped-ilx-lr1.jpg'
import altum from '../assets/images/payloads/payloads-cropped-altum.jpg'
import delivery from '../assets/images/payloads/payloads-cropped-delivery.jpg'
import raptor from '../assets/images/payloads/payloads-cropped-raptor.jpg'
import wris from '../assets/images/payloads/payloads-cropped-wris.jpg'
import yellowscan from '../assets/images/payloads/payloads-cropped-yellowscan.jpg'

const result = [
  {
    image: raptor,
    alt: 'fill',
    category: 'RGB & Thermal',
    title: 'Raptor',
    maker: 'NextVision',
    description:
      'An 80x zoom and high-resolution thermal & RGB surveillance camera',
    bannerText: 'Single',
  },
  {
    image: ilxLr1,
    alt: 'fill',
    category: 'RGB',
    title: 'ILX - LR1',
    maker: 'Sony',
    description:
      'A fully integrated 61 megapixel mapping camera with an interchangeable lens',
    bannerText: 'Single',
  },
  {
    image: yellowscan,
    alt: 'fill',
    category: 'LIDAR & RGB',
    title: 'Mapper+ OEM with RGB camera',
    maker: 'YellowScan',
    description: 'A lidar mapping solution combined with a synchronized RGB',
    bannerText: 'Dual',
  },
  {
    image: altum,
    alt: 'fill',
    category: 'RGB & MULTISPECTRAL',
    title: 'Micasense Altum PT',
    maker: 'AgEagle',
    description:
      'A six band synchronized thermal and multispectral sensor with panchromatic correction',
    bannerText: 'Single',
  },
  {
    image: delivery,
    alt: 'fill',
    category: 'CARGO',
    title: 'Payload Delivery',
    maker: 'DeltaQuad',
    description:
      'A payload delivery system with mission controlled cargo doors for precise delivery',
    bannerText: 'Dual',
  },
  {
    image: wris,
    alt: 'fill',
    category: 'RGB & THERMAL',
    title: 'Wris Pro',
    maker: 'Workswell',
    description: 'An integrated high-resolution thermal & RGB mapping sensor',
    bannerText: 'Single',
  },
]

function DeltaQuadPayloadsCarousel() {
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
            Available payloads
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
                {/* Conditional rendering based on bannerText */}
                {item.bannerText === 'Dual' && (
                  <div className="absolute bottom-4 right-4 bg-ft-red text-ft-white w-fit h-fit inline-flex items-center rounded px-2">
                    <div className="bg-ft-white w-4 h-6 m-0.5 rounded-sm"></div>
                    <div className="bg-ft-white w-4 h-6 m-0.5 rounded-sm"></div>
                    <div className="p-2">{item.bannerText}</div>
                  </div>
                )}
                {item.bannerText === 'Single' && (
                  <div className="absolute bottom-4 right-4 bg-ft-red text-ft-white w-fit h-fit inline-flex items-center rounded px-2">
                    <div className="bg-ft-white w-4 h-6 m-0.5 rounded-sm"></div>
                    <div className="p-2">{item.bannerText}</div>
                  </div>
                )}

                {/*Banner text
                <div className="relative bg-ft-red text-ft-white w-fit h-fit p-1 inline-flex items-center rounded">

                  <div className="bg-ft-white w-4 h-6 m-0.5 rounded-sm"></div>
                  <div className="bg-ft-white w-4 h-6 m-0.5 rounded-sm"></div>
                  <div className="p-2">Two Single</div>
                  
                  
                  <div className="bg-ft-white w-4 h-6 m-0.5 rounded-sm"></div>
                  <div className="p-2">One Double</div>
                </div>*/}
              </div>
              <p className="text-sm text-ft-grey leading-tight tracking-wide font-thin font-['Inter'] mt-4 mb-1">
                {item.category}
              </p>
              <p className="uppercase font-medium text-2xl ">{item.title}</p>
              <p className="text-sm text-ft-grey leading-tight tracking-wide font-thin font-['Inter']">
                {item.maker}
              </p>
              <div className="border-ft-dark-grey border-t h-0.5 w-full rounded"></div>
              <p className="text-sm text-ft-grey leading-tight tracking-wide font-thin font-['Inter'] min-h-[4rem]">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default DeltaQuadPayloadsCarousel
