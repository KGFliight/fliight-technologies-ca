import '../App.css'
import React from 'react'
import deltaQuad from '../assets/images/deltaquad-pro.jpeg'
import yellowScan from '../assets/images/evo-yellowscan-payload.jpeg'



function DronesCarousel() {
  const scrollRef = React.useRef(null);

  function slideToTheLeft() {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -200,
        behavior: 'smooth'
      })
    }
  }

  function slideToTheRight() {
    if(scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 200,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="w-full">
      <div className="">
        <h3 className="ml-12 mt-8 mb-2 text-4xl uppercase">DRONES</h3>
        <ul className="media-scroller snaps-inline pl-12" ref={scrollRef}>
          <li className="media-element">
            <img
              src={deltaQuad}
              alt="alt"
              className="bg-ft-grey border border-ft-grey rounded min-h-[10rem] h-auto"
            />
            <p className="uppercase">Deltaquad pro 1</p>
          </li>
          <li className="media-element">
            <img
              src={yellowScan}
              alt="alt"
              className="bg-ft-grey border border-ft-grey rounded min-h-[10rem] h-auto"
            />
            <p className="uppercase">Deltaquad pro 2</p>
          </li>
          <li className="media-element">
            <img
              src={deltaQuad}
              alt="alt"
              className="bg-ft-grey border border-ft-grey rounded min-h-[10rem] h-auto"
            />
            <p className="uppercase">Deltaquad pro 3</p>
          </li>
          <li className="media-element">
            <img
              src={yellowScan}
              alt="alt"
              className="bg-ft-grey border border-ft-grey rounded min-h-[10rem] h-auto"
            />
            <p className="uppercase">Deltaquad pro 4</p>
          </li>
          <li className="media-element">
            <img
              src={deltaQuad}
              alt="alt"
              className="bg-ft-grey border border-ft-grey rounded min-h-[10rem] h-auto"
            />
            <p className="uppercase">Deltaquad pro </p>
          </li>
          <li className="media-element">
            <img
              src={yellowScan}
              alt="alt"
              className="bg-ft-grey border border-ft-grey rounded min-h-[10rem] h-auto"
            />
            <p className="uppercase">Deltaquad pro 5</p>
          </li>
        </ul>
      </div>
      <div className="max-sm:hidden">
        <div className="sm:w-full mb-auto text-right text-3xl sm:p-4 flex gap-4 justify-end mr-4 my-3 sm:mx-1">
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
