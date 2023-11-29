import '../App.css'
import React from 'react'
import software from '../assets/images/software-1.jpeg'
import { NavLink } from 'react-router-dom'

const result = [
  {
    image: software,
    alt: "fill",
    title: "Data Set 1",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus veniam repellendus architecto nemo. Doloribus ex explicabo illum provident nisi modi repudiandae rerum maxime nesciunt. Laboriosam."
  },
  {
    image: software,
    alt: "fill",
    title: "Data Set 2",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus veniam repellendus architecto nemo. Doloribus ex explicabo illum provident nisi modi repudiandae rerum maxime nesciunt. Laboriosam."
  },
  {
    image: software,
    alt: "fill",
    title: "Data Set 3",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus veniam repellendus architecto nemo. Doloribus ex explicabo illum provident nisi modi repudiandae rerum maxime nesciunt. Laboriosam."
  }
]

function DeltaQuadXxxResults() {
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
    <div className="ml-8 md:ml-20">
      <div className="">
        <div className="inline-flex items-center w-full justify-between mb-2">
        <h3 className="text-4xl sm:text-5xl uppercase ml-4 md:ml-0">
          Results worth sharing
        </h3>
        <div className="max-md:hidden flex justify-end ">
        <div className="mb-auto text-right text-3xl sm:px-4 gap-4 mr-4 my-3 sm:m-0 sm:mx-16 ">
          <button
            className="border border-ft-dark-grey px-3 mr-2"
            onClick={slideToTheLeft}
          >
            &lt;
          </button>
          <button
            className="border border-ft-dark-grey px-3"
            onClick={slideToTheRight}
          >
            &gt;
          </button>
        </div>
      </div>
      </div>
        <ul
          className="media-scroller snaps-inline md:auto-cols-[42%] "
          ref={scrollRef}
        >
          {result.map((item, index) => (
            <li key={index} className="media-element lg:pr-6 lg:py-12">
              <img
                src={item.image}
                alt={item.alt}
                className="bg-ft-grey border-ft-grey rounded min-h-[10rem] h-auto"
              />
              <p className="uppercase font-medium">{item.title}</p>
              <p className="text-sm text-ft-dark-grey mt-[-1rem] leading-tight tracking-wide ">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
      
    </div>
  )
}

export default DeltaQuadXxxResults