import '../App.css'
import iconDroneHand from '../assets/images/icons/icon-drone-hand.png'
import iconCog from '../assets/images/icons/icon-cog.png'
import iconPresentation from '../assets/images/icons/icon-presentation.png'
import iconFlowDiagram from '../assets/images/icons/icon-flow-diagram.png'
import { NavLink } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'



function LandingWorkWithUs() {
  AOS.init()

  return (
    <div className="flex flex-col items-center justify-center my-32 mt-40">
      <div className="max-w-xl sm:max-w-full text-center flex flex-col justify-center items-center p-8">
        <h2
          className="uppercase font-medium my-16 md:my-8 px-14 text-4xl sm:text-5xl tracking-wide leading-10 sm:tracking-widest sm:max-w-4xl"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in"
          data-aos-delay="0"
          data-aos-offset="0"
          data-aos-duration="600"
        >
          We Innovate, design, build and implement.
        </h2>
        <p
          className="text-lg px-18 my-16 md:my-8 md:max-w-2xl leading-7 tracking-wide font-['Inter'] font-light"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in"
          data-aos-delay="0"
          data-aos-offset="0"
          data-aos-duration="600"
        >
          The field of Unmanned Aerial Vehicles is evolving rapidly. Off the
          shelf solutions cannot keep pace with the fast-changing needs of our
          clients as they seek differentiation and competitive advantage. Many
          clients come to us with challenges, we provide effective solutions.
          <br />
          <br />
          It&apos;s what we do.
        </p>
      </div>
      <h3
        className="uppercase mt-12 mb-6 font-semibold leading-relaxed text-lg"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in"
        data-aos-delay="0"
        data-aos-offset="0"
        data-aos-duration="600"
      >
        Services
      </h3>
      <div className="md:flex md:flex-wrap justify-center w-full">
        <div
          className="flex flex-col text-left bg-ft-dark-grey p-6 sm:p-8 mx-8 md:mx-4 my-8 md:max-w-[36%] rounded"
          data-aos="fade-in"
          data-aos-easing="ease-in"
          data-aos-delay="0"
          data-aos-offset="0"
          data-aos-duration="600"
        >
          <span>
            {' '}
            <img
              src={iconDroneHand}
              alt="drone icon"
              className="w-[72px] h-[72px] my-4"
            />
          </span>
          <h4 className="uppercase text-4xl font-medium my-3 leading-10">
            UAV Consulting
          </h4>
          <p className="text-base font-light leading-7 tracking-wide font-['Inter']">
            With a combined 25 years in the Unmanned Aerial Vehicles (UAV)
            industry, Fliight Technologies possess the expertise to identify the
            perfect UAV solution to suit each clients unique use case. Whether
            it be long range operations (BVLOS), Custom System Integration,
            search and rescue, or one of dozens of other applications, our team
            can help you understand how UAVs can best be implemented to add
            value to your organisation.
          </p>
        </div>
        <div
          className="flex flex-col text-left bg-ft-dark-grey p-6 sm:p-8 mx-8 md:mx-4 md:my-8 md:max-w-[36%] rounded"
          data-aos="fade-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="0"
          data-aos-offset="0"
          data-aos-duration="600"
        >
          <span>
            {' '}
            <img
              src={iconCog}
              alt="drone icon"
              className="w-[72px] h-[72px] my-4"
            />
          </span>
          <h4 className="uppercase text-4xl font-medium my-3 leading-10">
            Custom Engineering
          </h4>
          <p className="text-base font-light leading-7 tracking-wide font-['Inter']">
            Whether you come to us with a basic concept, or a working prototype,
            we are able carry out step-by-step custom engineering to your exact
            specifications. From custom, heavy lift UAV&apos;s through to long
            range aircraft and gas detection systems - we have the experience
            and the know-how to help you identify and develop a solution that
            works for you. From concept to prototype to production, Fliight
            Technologies is with you every step of the way.
          </p>
        </div>
      </div>
      <div className="md:flex md:flex-wrap justify-center w-full">
        <div
          className="flex flex-col text-left bg-ft-dark-grey p-6 sm:p-8 mx-8 my-8 md:my-0 md:mx-4 md:max-w-[36%] rounded"
          data-aos="fade-in"
          data-aos-easing="ease-in"
          data-aos-delay="0"
          data-aos-offset="0"
          data-aos-duration="600"
        >
          <span>
            {' '}
            <img
              src={iconFlowDiagram}
              alt="drone icon"
              className="w-[72px] h-[72px] my-4"
            />
          </span>
          <h4 className="uppercase text-4xl font-medium my-3 leading-10">
            Operations
          </h4>
          <p className="text-base font-light leading-7 tracking-wide font-['Inter']">
            Fliight Technologies is equipped to assist you in commercialising
            your UAV operations, legally and without interruption. We have
            highly qualified, experienced and properly licenced pilots who can
            operate your UAV&apos;s whilst you sit back and watch from the
            ground. If you have a test case you would like to investigate, our team will show you how it&apos;s done.
          </p>
        </div>
        <div
          className="flex flex-col text-left bg-ft-dark-grey p-6 sm:p-8 mx-8 md:mx-4 md:max-w-[36%] rounded"
          data-aos="fade-in"
          data-aos-easing="ease-in"
          data-aos-delay="0"
          data-aos-offset="0"
          data-aos-duration="600"
        >
          <span>
            {' '}
            <img
              src={iconPresentation}
              alt="drone icon"
              className="w-[72px] h-[72px] my-4"
            />
          </span>
          <h4 className="uppercase text-4xl font-medium my-3 leading-10">
            Training
          </h4>
          <p className="text-base font-light leading-7 tracking-wide font-['Inter']">
          In order to transition your organisation to independent operations, Fliight Technologies also offer complete training packages to get your team operating like professionals in no time. Our training is tailored to your aircraft and payload, so your team is ready to operate with confidence. This means your aircraft will spend more time in the air providing value and less time sitting on shelves, collecting dust.
          </p>
        </div>
      </div>

      <button
        className="bg-ft-red uppercase rounded-3xl flex items-center justify-center w-72 h-8 sm:w-44 min-h-[2.75rem] text-base font-semibold leading-tight tracking-widest  m-[4rem]  hover:bg-[#5b172c] hover:opacity-90  transition duration-300 active:-translate-y-1 active:bg-ft-dark-grey"
      >
        <NavLink to="/contact">Work with us</NavLink>
      </button>
    </div>
  )
}

export default LandingWorkWithUs
