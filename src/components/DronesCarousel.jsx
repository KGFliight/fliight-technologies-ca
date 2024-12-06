import '../App.css'
import React from 'react'
import { NavLink } from 'react-router-dom'
import deltaQuadProImage from '../assets/images/deltaquad-pro-banner.jpg'
import deltaQuadEvoImage from '../assets/images/deltaquad-evo-banner.jpg'
import araceGriffinImage from '../assets/images/arace-griffin-banner.png'
import araceAngelImage from '../assets/images/arace-angel-banner.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'

function DronesCarousel() {
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
    <div className="w-full">
      <div className="inline-flex items-center w-full justify-between sm:pl-12 md:pl-20">
        <h3 className="pl-12 md:pl-16 mt-8 mb-2 text-4xl sm:text-5xl uppercase font-medium tracking-widest">
          AERIAL PLATFORMS
        </h3>
        <div className="max-md:hidden flex justify-end">
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
        className="media-scroller pl-12 md:pl-32 snaps-inline md:auto-cols-[42%]"
        ref={scrollRef}
      >
        <NavLink to="/platforms/deltaquad-pro">
          <li className="media-element lg:px-4 lg:py-12 hover:opacity-80 hover:-translate-y-1 transition duration-300">
            <div className="bg-white rounded min-h-[10rem] sm:min-h-[300px] w-full flex items-center px-4">
              <img
                src={deltaQuadProImage}
                alt="DeltaQuad Pro"
                className="border-ft-grey rounded min-h-[10rem] bg-white w-full object-contain sm:object-fit"
              />
            </div>
            <p className="uppercase leading-10 text-2xl sm:text-4xl font-medium">
              Deltaquad Pro
            </p>
          </li>
        </NavLink>
        <NavLink to="/platforms/deltaquad-evo">
          <li className="media-element lg:px-4 lg:py-12 hover:opacity-80 hover:-translate-y-1 transition duration-300">
            <div className="bg-white border-ft-grey border rounded min-h-[10rem] sm:min-h-[300px] w-full flex items-center spx-4">
              <img
                src={deltaQuadEvoImage}
                alt="DeltaQuad Evo"
                className="bg-white rounded min-h-[10rem] h-auto object-contain sm:object-fit"
              />
            </div>
            <p className="uppercase leading-10 text-2xl sm:text-4xl font-medium">
              Deltaquad Evo
            </p>
          </li>
        </NavLink>
        <NavLink to="/platforms/arace-angel">
          <li className="media-element lg:px-4 lg:py-12 hover:opacity-80 hover:-translate-y-1 transition duration-300">
            <div className="bg-white border-ft-grey border rounded min-h-[10rem] sm:min-h-[300px] w-full flex items-center spx-4">
              <img
                src={araceAngelImage}
                alt="Arace Angel"
                className="bg-white rounded min-h-[10rem] h-auto object-contain sm:object-fit"
              />
            </div>
            <p className="uppercase leading-10 text-2xl sm:text-4xl font-medium">
              Arace Angel
            </p>
          </li>
        </NavLink>
        <NavLink to="/platforms/arace-griffin-pro">
          <li className="media-element lg:px-4 lg:py-12 hover:opacity-80 hover:-translate-y-1 transition duration-300">
            <div className="bg-white border-ft-grey border rounded min-h-[10rem] sm:min-h-[300px] w-full flex items-center spx-4">
              <img
                src={araceGriffinImage}
                alt="Arace Griffin Pro"
                className="bg-white rounded min-h-[10rem] h-auto object-contain sm:object-fit"
              />
            </div>
            <p className="uppercase leading-10 text-2xl sm:text-4xl font-medium">
              Arace Griffin Pro
            </p>
          </li>
        </NavLink>
        {/*<li className="media-element lg:px-6 lg:py-12">
            <img
              src={deltaQuad}
              alt="alt"
              className="bg-ft-grey border border-ft-grey rounded min-h-[10rem] h-auto"
            />
            <p className="uppercase">Deltaquad Nolink 3</p>
          </li>
          <li className="media-element lg:px-6 lg:py-12">
            <img
              src={yellowScan}
              alt="alt"
              className="bg-ft-grey border border-ft-grey rounded min-h-[10rem] h-auto"
            />
            <p className="uppercase">Deltaquad Nolink 4</p>
          </li>
          <li className="media-element lg:px-6 lg:py-12">
            <img
              src={deltaQuad}
              alt="alt"
              className="bg-ft-grey border border-ft-grey rounded min-h-[10rem] h-auto"
            />
            <p className="uppercase">Deltaquad Nolink 5</p>
          </li>
          <li className="media-element lg:px-6 lg:py-12">
            <img
              src={yellowScan}
              alt="alt"
              className="bg-ft-grey border border-ft-grey rounded min-h-[10rem] h-auto"
            />
            <p className="uppercase">Deltaquad Nolink 6</p>
          </li>
          */}
      </ul>
    </div>
  )
}

export default DronesCarousel
