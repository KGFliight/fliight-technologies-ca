import '../App.css'
import React from 'react'
import software from '../assets/images/software-1.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'

const result = [
  {
    image: software,
    alt: 'fill',
    category: 'RGB',
    title: 'A74 MARK IV',
    maker: 'Sony',
    description:
      'A fully integrated 61 megapixel mapping camera with an interchangeable lens',
  },
  {
    image: software,
    alt: 'fill',
    category: 'RGB & MULTISPECTRAL',
    title: 'MICASENSE ALTUM PT',
    maker: 'Ag Eagle',
    description:
      'A six band synchronized thermal and multispectral sensor with panchromatic correction',
  },
  {
    image: software,
    alt: 'fill',
    category: 'RGB & THERMAL',
    title: 'WRIS PRO',
    maker: 'Workswell',
    description: 'An integrated high-resolution thermal & RGB mapping sensor',
  },
  {
    image: software,
    alt: 'fill',
    category: 'CARGO',
    title: 'PAYLOAD DELIVERY',
    maker: 'DeltaQuad',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus veniam repellendus architecto nemo.',
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
            <div className="mb-auto text-right text-3xl md:px-0 md:pr-16 gap-4 mr-4 my-3 sm:m-0 sm:mr-8">
              <button
                className="border border-ft-dark-grey px-3 pt-2 pb-1 hover:bg-ft-red hover:opacity-90  transition duration-300 active:-translate-y-1 active:bg-ft-dark-grey"
                onClick={slideToTheLeft}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button
                className="border border-ft-dark-grey px-3 pt-2 pb-1 hover:bg-ft-red hover:opacity-90  transition duration-300 active:-translate-y-1 active:bg-ft-dark-grey"
                onClick={slideToTheRight}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
        </div>
        <ul
          className="media-scroller snaps-inline md:auto-cols-[42%] lg:auto-cols-[38%] pl-12 md:pl-20"
          ref={scrollRef}
        >
          {result.map((item, index) => (
            <li key={index} className="media-element lg:pr-6 lg:py-12 lg:pl-4">
              <img
                src={item.image}
                alt={item.alt}
                className="bg-ft-grey border-ft-grey rounded min-h-[10rem] h-auto"
              />
              <p className="uppercase font-medium mt-2">{item.title}</p>
              <p className="text-sm text-ft-grey leading-tight tracking-wide font-thin font-['Inter']">
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
