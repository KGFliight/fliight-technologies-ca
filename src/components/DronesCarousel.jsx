import '../App.css'
import React from 'react'
import deltaQuad from '../assets/images/deltaquad-pro.jpeg'
import yellowScan from '../assets/images/evo-yellowscan-payload.jpeg'
import { NavLink } from 'react-router-dom'
import deltaQuadProImage from '../assets/images/deltaquad-pro-banner.jpg'
import deltaQuadEvoImage from '../assets/images/deltaquad-evo-banner.jpg'

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
      <div className=" sm:pl-12 md:pl-20">
        <h3 className="pl-12 md:pl-16 mt-8 mb-2 text-4xl sm:text-5xl uppercase font-medium tracking-widest">
          DRONES
        </h3>
        <div className="hidden md:pr-16">
          <div className="sm:w-full mb-auto text-right text-3xl sm:px-4 flex gap-4 justify-end mr-4 my-3 sm:m-0 sm:mx-1">
            <button
              className="border border-ft-dark-grey px-3"
              onClick={slideToTheLeft}
            >
              {' '}
              &lt;{' '}
            </button>
            <button
              className="border border-ft-dark-grey px-3"
              onClick={slideToTheRight}
            >
              {' '}
              &gt;{' '}
            </button>
          </div>
        </div>
      </div>
      <ul
        className="media-scroller snaps-inline pl-32 md:auto-cols-[42%] w-full"
        ref={scrollRef}
      >
        <NavLink to="/drones/deltaquad-pro">
          <li className="media-element lg:px-4 lg:py-12 hover:opacity-80 hover:-translate-y-1 transition duration-300">
            <div className="bg-white rounded min-h-[10rem] sm:min-h-[300px] w-full flex items-center px-4">
              <img
                src={deltaQuadProImage}
                alt="alt"
                className="border-ft-grey rounded min-h-[10rem] bg-white w-full object-contain sm:object-fit"
              />
            </div>
            <p className="uppercase leading-10 text-2xl sm:text-4xl font-medium">
              Deltaquad Pro
            </p>
          </li>
        </NavLink>
        <NavLink to="/drones/deltaquad-evo">
          <li className="media-element lg:px-4 lg:py-12 hover:opacity-80 hover:-translate-y-1 transition duration-300">
            <div className="bg-white border-ft-grey border rounded min-h-[10rem] sm:min-h-[300px] w-full flex items-center spx-4">
              <img
                src={deltaQuadEvoImage}
                alt="alt"
                className="bg-white rounded min-h-[10rem] h-auto object-contain sm:object-fit"
              />
            </div>
            <p className="uppercase leading-10 text-2xl sm:text-4xl font-medium">
              Deltaquad Evo
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

      <div className="hidden md:pr-16 lg:mr-40">
        <div className="sm:w-full mb-auto text-right text-3xl sm:px-4 flex gap-4 justify-end mr-4 my-3 sm:m-0 sm:mx-1">
          <button
            className="border border-ft-dark-grey px-3"
            onClick={slideToTheLeft}
          >
            {' '}
            &lt;{' '}
          </button>
          <button
            className="border border-ft-dark-grey px-3"
            onClick={slideToTheRight}
          >
            {' '}
            &gt;{' '}
          </button>
        </div>
      </div>
    </div>
  )
}

export default DronesCarousel
