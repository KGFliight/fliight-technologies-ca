import React from 'react'
import AracePhoenixProductPayloadsCarousel from './AracePhoenixProductPayloadsCarousel'
import araceGriffin4 from '../assets/images/arace-griffin-4.png'
import { NavLink } from 'react-router-dom'

function AracePhoenixProductPayloads() {
  return (
    <div className="">
      <AracePhoenixProductPayloadsCarousel />
      <div className="flex flex-col md:flex-row justify-center sm:items-center gap-20 my-40 p-12 md:p-20">
        <div className="image-container max-w-96 lg:w-[540px] lg:max-w-[540px]  h-fit z-50">
          <img
            src={araceGriffin4}
            alt="Arace Phoenix Custom Payload"
            className="max-w-96 lg:w-[540px] lg:max-w-[540px] object-contain lg:object-fit rounded"
          />
        </div>
        <div className="w-80 sm:w-[480px] items-center sm:items-start flex flex-col justify-center">
          <h3 className="text-5xl text-left uppercase w-auto my-8">
            We offer custom payload design
          </h3>
          <div className="text-lg leading-loose tracking-wide font-light font-['Inter']">
            If you have a particular sensor or payload you would like to integrate with the Arace Phoenix, Fliight Technologies offer complete payload integration services to get you flying fast. 
          </div>
          <NavLink to="/contact">
            <button className="bg-ft-dark-grey uppercase rounded-3xl py-2 w-72 h-8 sm:w-36 min-h-[2.75rem] text-base font-semibold leading-tight tracking-widest my-12 hover:bg-black transition duration-300 focus:bg-ft-grey">
              Contact us
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default AracePhoenixProductPayloads 