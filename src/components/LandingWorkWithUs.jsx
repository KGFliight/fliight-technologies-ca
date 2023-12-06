import '../App.css'
import iconDrone from '../assets/images/icon-drone.png'
import { NavLink } from 'react-router-dom'

function LandingWorkWithUs() {
  return (
    <div className="flex flex-col items-center justify-center my-32 mt-60">
      <div className="max-w-xl sm:max-w-full text-center flex flex-col justify-center items-center">
        <h2 className="uppercase my-16 md:my-8 px-12 text-4xl sm:text-5xl tracking-wide sm:tracking-widest sm:max-w-4xl">
          We Innovate, design, build and implement.
        </h2>
        <p className="text-lg px-16 my-16 md:my-8 sm:max-w-2xl">
          The field of Unmanned Aerial Vehicles is evolving rapidly. Off the
          shelf solutions cannot keep pace with the fast-changing needs of our
          clients as they seek differentiation and competitive advantage. Many
          clients come to us with problems they don&apos;t know how to solve.
        </p>
      </div>
      <h3 className="uppercase mt-12 font-medium">Services</h3>
      <div className="md:flex md:flex-wrap justify-center w-full">
        <div className="flex flex-col text-left bg-gray-700 p-6 sm:p-8 mx-8 md:mx-4 my-8 md:max-w-[36%] rounded">
          <span>
            {' '}
            <img
              src={iconDrone}
              alt="drone icon"
              className="w-[72px] h-[72px] my-4"
            />
          </span>
          <h4 className="uppercase text-2xl font-regular my-3">
            UAV Consulting
          </h4>
          <p className="text-md font-thin leading-snug tracking-wide ">
            With a combined 15 years in the Unmanned Aerial Vehicles (UAV)
            industry, Fliight Technologies possess the expertise to identify the
            perfect UAV solution to suit each clients unique use case. Whether
            it be long range operations (BVLOS), Custom System Integration,
            search and rescue, or one of dozens of other applications, our team
            can help you understand how UAVs can best be implemented to add
            value to your organisation.
          </p>
        </div>
        <div className="flex flex-col text-left bg-gray-700 p-6 sm:p-8 mx-8 md:mx-4 md:my-8 md:max-w-[36%] rounded">
          <span>
            {' '}
            <img
              src={iconDrone}
              alt="drone icon"
              className="w-[72px] h-[72px] my-4"
            />
          </span>
          <h4 className="uppercase text-2xl font-regular my-3">
            Custom Engineering
          </h4>
          <p className="text-md font-thin leading-snug tracking-wide">
            Whether you come to us with a basic concept, or a working prototype,
            we are able carry out step-by-step custom engineering to your exact
            specifications. From custom, heavy lift UAV&apos;s through to long range
            aircraft and gas detection systems - we have the experience and the
            know-how to help you identify and develop a solution that works for
            you. From concept to prototype to production, Fliight Technologies
            is with you every step of the way.
          </p>
        </div>
        </div>
        <div className="md:flex md:flex-wrap justify-center w-full">
        <div className="flex flex-col text-left bg-gray-700 p-6 sm:p-8 mx-8 my-8 md:my-0 md:mx-4 md:max-w-[36%] rounded">
          <span>
            {' '}
            <img
              src={iconDrone}
              alt="drone icon"
              className="w-[72px] h-[72px] my-4"
            />
          </span>
          <h4 className="uppercase text-2xl font-regular my-3">Operations</h4>
          <p className="text-md font-thin leading-snug tracking-wide">
            Fliight Technologies is equipped to assist you in commercialising
            your UAV operations, legally and without interruption. We have
            highly qualified, experienced and properly licenced pilots who can
            operate your UAV&apos;s whilst you sit back and watch from the ground. In
            order to transition your organisation to independent operations,
            Fliight Technologies also offer complete training packages to get
            your team operating like professionals in no time.
          </p>
        </div>
        <div className="flex flex-col text-left bg-gray-700 p-6 sm:p-8 mx-8 md:mx-4 md:max-w-[36%] rounded">
          <span>
            {' '}
            <img
              src={iconDrone}
              alt="drone icon"
              className="w-[72px] h-[72px] my-4"
            />
          </span>
          <h4 className="uppercase text-2xl font-regular my-3">Training</h4>
          <p className="text-md font-thin leading-snug tracking-wide">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
            perferendis, voluptas laboriosam facilis possimus aliquam hic vero
            iste. Nam aperiam ad ex quod aliquid ut ipsam odit amet labore,
            quaerat accusantium tempore pariatur modi, corporis totam obcaecati
            cumque vitae excepturi voluptates aspernatur mollitia unde!
            Provident reprehenderit ullam dicta ipsum temporibus.
          </p>
        </div>
      </div>
      
      <button className="bg-rose-700 uppercase rounded-3xl py-3 w-72 h-8 sm:w-44 min-h-[2.75rem] text-base font-semibold leading-tight tracking-widest my-8 md:mx-6"><NavLink to="/request-demo">Work with us</NavLink></button>
      
    </div>
  )
}

export default LandingWorkWithUs
