import '../App.css'
import React from 'react'
import software from '../assets/images/software-1.jpeg'


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
    <div className="w-full my-8">
      <div className="">
        <h3 className="ml-12 sm:ml-16 md:ml-24 mt-8 mb-2 text-4xl sm:text-5xl uppercase">
          SOFTWARE + APPS
        </h3>
        <ul
          className="media-scroller snaps-inline pl-12 md:auto-cols-[42%]"
          ref={scrollRef}
        >
          <li className="media-element lg:px-6 lg:py-12">
            <img
              src={software}
              alt="alt"
              className="bg-ft-grey border-ft-grey rounded min-h-[10rem] h-auto"
            />
            <p className="uppercase font-medium ">AEROWHERE 1</p>
            <p className="text-sm text-ft-dark-grey mt-[-1rem] leading-tight tracking-wide ">
              Description
            </p>
          </li>
          <li className="media-element lg:px-6 lg:py-12">
            <img
              src={software}
              alt="alt"
              className="bg-ft-grey border-ft-grey rounded min-h-[10rem] h-auto"
            />
            <p className="uppercase leading-7 font-medium">AEROWHERE 2</p>
            <p className="text-sm text-ft-dark-grey mt-[-1rem] leading-tight tracking-wide ">
              Description
            </p>
          </li>
          <li className="media-element lg:px-6 lg:py-12">
            <img
              src={software}
              alt="alt"
              className="bg-ft-grey border-ft-grey rounded min-h-[10rem] h-auto"
            />
            <p className="uppercase leading-7 font-medium">AEROWHERE 3</p>
            <p className="text-sm text-ft-dark-grey mt-[-1rem] leading-tight tracking-wide ">
              Description
            </p>
          </li>
          <li className="media-element lg:px-6 lg:py-12">
            <img
              src={software}
              alt="alt"
              className="bg-ft-grey border-ft-grey rounded min-h-[10rem] h-auto"
            />
            <p className="uppercase leading-7 font-medium">AEROWHERE 4</p>
            <p className="text-sm text-ft-dark-grey mt-[-1rem] leading-tight tracking-wide ">
              Description
            </p>
          </li>
          <li className="media-element lg:px-6 lg:py-12">
            <img
              src={software}
              alt="alt"
              className="bg-ft-grey border-ft-grey rounded min-h-[10rem] h-auto"
            />
            <p className="uppercase leading-7 font-medium">AEROWHERE 5</p>
            <p className="text-sm text-ft-dark-grey mt-[-1rem] leading-tight tracking-wide ">
              Description
            </p>
          </li>
          <li className="media-element lg:px-6 lg:py-12">
            <img
              src={software}
              alt="alt"
              className="bg-ft-grey border-ft-grey rounded min-h-[10rem] h-auto"
            />
            <p className="uppercase leading-7 font-medium">AEROWHERE 6</p>
            <p className="text-sm text-ft-dark-grey mt-[-1rem] leading-tight tracking-wide ">
              Description
            </p>
          </li>
        </ul>
      </div>
      <div className="max-sm:hidden md:pr-16">
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

export default SoftwareAppsCarousel
