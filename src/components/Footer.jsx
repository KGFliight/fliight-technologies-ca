import deltaQuad from '../assets/images/icons/deltaquad.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPhone,
  faMapMarkerAlt,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

function Footer() {
  return (
    <footer className="border-ft-dark-grey">
      <div className="px-12 py-8 mt-8 border-t">
        <div className="lg:flex lg:justify-between">

       <div className="md:pr-8 md:p-8">
        <h2 className="uppercase text-4xl sm:text-5xl tracking-wide sm:tracking-widest sm:max-w-4xl">
          READY FOR TAKEOFF?
        </h2>
        <p className="w-full text-left text-lg my-4 sm:max-w-2xl">
          Our friendly Fliight Crew is here to discuss your needs, no strings
          attached. Let's navigate solving your problem together.
        </p>
        <div className="gap-3 py-2 justify-center items-center flex-col flex sm:items-start sm:flex-row sm:justify-start">
        <NavLink to="/contact">
          <button className="bg-rose-700 uppercase rounded-3xl py-2 w-72 h-8 sm:w-44 min-h-[2.75rem] text-base font-semibold leading-tight tracking-widest">
            Contact us
          </button>
          </NavLink>
          <button className="bg-gray-700 uppercase rounded-3xl py-3 w-72 h-8 sm:w-44 min-h-[2.75rem] text-base font-semibold leading-tight tracking-widest">
            Book a demo
          </button>
        </div>
        </div>
        <div className="flex justify-center">
        <div className="flex my-4 w-full ">
          <div className="flex flex-col w-[50%] sm:w-40">
            <span className="uppercase my-4 text-sm leading-relaxed font-semibold text-ft-dark-grey md:text-lg">
              Drones
            </span>
            <ul className="text-sm leading-loose tracking-wide font-normal md:text-lg">
              <li className="my-4">DeltaQuad Pro</li>
              <li className="my-4">DeltaQuad Evo</li>
            </ul>
          </div>
          <div className="flex flex-col w-[50%] sm:w-40 ml-[4rem]  leading-loose tracking-wide">
            <span className="uppercase my-4 text-sm leading-relaxed font-semibold text-ft-dark-grey md:text-lg">
              Software
            </span>
            <ul className="text-sm leading-loose tracking-wide font-normal md:text-lg">
              <li className="my-4">AeroWhere</li>
              <li className="my-4">Argus</li>
            </ul>
          </div>
          </div>
          </div>
        </div>
        <div className="md:m-8 md:mr-auto">
          <img src={deltaQuad} alt="deltaQuad" className="w-60 mt-8 mb-1" />
          <span className="text-sm font-normal leading-relaxed tracking-wide text-ft-grey">
            |&nbsp;&nbsp; Fliight Technologies is proud to be the official
            Australian DeltaQuad Distributor
          </span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-around md:px-30 lg:px-40 bg-gray-700 w-screen mb-4 py-8 px-6 gap-3">
        <div className="flex items-center gap-4 ml-4">
          <FontAwesomeIcon icon={faPhone} className="self-center w-12" />
          <span className="text-sm font-normal leading-loose tracking-widest">+(61) 429 279 876</span>
        </div>
        <div className="flex items-center gap-4 ml-4">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="self-center w-12" />
          <span className="text-sm font-normal leading-loose tracking-widest">Wollongong, Australia</span>
        </div>
        <div className="flex items-center gap-4 ml-4">
          <FontAwesomeIcon icon={faEnvelope} className="self-center w-12" />
          <span className="text-sm font-normal leading-loose tracking-widest">info@fliight.com.au</span>
        </div>
      </div>
      <div className="px-12 mb-12 sm:mb-4 text-xs text-ft-grey font-normal leading-loose tracking-wide md:flex-row md:justify-between md:w-full">
        <div className="md:inline-flex md:justify-between  md:w-full">
        <p className="">© Fliight Technologies Pty Ltd. All rights reserved. </p>
        <p className="">Website by jbdev</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
