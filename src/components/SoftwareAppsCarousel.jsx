import '../App.css'
import React from 'react'
import software from '../assets/images/software-1.jpeg'
import { NavLink } from 'react-router-dom'

function SoftwareAppsCarousel() {
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
      <div className="">
        <div className="inline-flex items-center w-full justify-between mb-2 sm:pl-12 md:pl-16">
          <h3 className="mb-2 text-4xl sm:text-5xl uppercase font-medium tracking-widest md:ml-0 pl-12 md:pl-16">
            SOFTWARE + APPS
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
          className="media-scroller snaps-inline md:auto-cols-[42%] pl-32"
          ref={scrollRef}
        >
          <NavLink to="/solutions/aerowhere">
            <li className="media-element lg:px-4 lg:py-12 hover:opacity-80 hover:-translate-y-1 transition duration-300">
              <img
                src={software}
                alt="alt"
                className="bg-ft-grey border-ft-grey rounded min-h-[10rem] h-auto"
              />
              <p className="uppercase leading-10 text-2xl sm:text-4xl font-medium mt-2">
                AEROWHERE
              </p>
              <p className="text-sm text-ft-grey leading-tight tracking-wide font-['Inter'] font-light">
                Description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, veniam?
              </p>
            </li>
          </NavLink>
          <NavLink to="/solutions/argus">
            <li className="media-element lg:px-4 lg:py-12 hover:opacity-80 hover:-translate-y-1 transition duration-300">
              <img
                src={software}
                alt="alt"
                className="bg-ft-grey border-ft-grey rounded min-h-[10rem] h-auto"
              />
              <p className="uppercase leading-10 text-2xl sm:text-4xl font-medium mt-2">
                Argus
              </p>
              <p className="text-sm text-ft-grey leading-tight tracking-wide font-['Inter'] font-light">
                Description Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, officia.
              </p>
            </li>
          </NavLink>
          {/*<li className="media-element lg:px-6 lg:py-12">
            <img
              src={software}
              alt="alt"
              className="bg-ft-grey border-ft-grey rounded min-h-[10rem] h-auto"
            />
            <p className="uppercase leading-10 text-2xl sm:text-4xl font-medium mt-2">
              AEROWHERE nolink 3
            </p>
            <p className="text-sm text-ft-dark-grey leading-tight tracking-wide ">
              Description
            </p>
          </li>
          <li className="media-element lg:px-6 lg:py-12">
            <img
              src={software}
              alt="alt"
              className="bg-ft-grey border-ft-grey rounded min-h-[10rem] h-auto"
            />
            <p className="uppercase leading-10 text-2xl sm:text-4xl font-medium mt-2">
              AEROWHERE nolink 4
            </p>
            <p className="text-sm text-ft-dark-grey leading-tight tracking-wide ">
              Description
            </p>
          </li>
          <li className="media-element lg:px-6 lg:py-12">
            <img
              src={software}
              alt="alt"
              className="bg-ft-grey border-ft-grey rounded min-h-[10rem] h-auto"
            />
            <p className="uppercase leading-10 text-2xl sm:text-4xl font-medium mt-2">
              AEROWHERE nolink 5
            </p>
            <p className="text-sm text-ft-dark-grey leading-tight tracking-wide ">
              Description
            </p>
          </li>
          <li className="media-element lg:px-6 lg:py-12">
            <img
              src={software}
              alt="alt"
              className="bg-ft-grey border-ft-grey rounded min-h-[10rem] h-auto"
            />
            <p className="uppercase leading-10 text-2xl sm:text-4xl font-medium mt-2">
              AEROWHERE nolink 6
            </p>
            <p className="text-sm text-ft-dark-grey leading-tight tracking-wide ">
              Description
            </p>
  </li>*/}
        </ul>
      </div>
    </div>
  )
}

export default SoftwareAppsCarousel
