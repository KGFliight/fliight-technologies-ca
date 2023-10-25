import '../App.css'
import LandingIcons from './LandingIcons'
import LandingWorkWithUs from './LandingWorkWithUs'
import ReviewCarousel from './ReviewCarousel'
import DronesCarousel from './DronesCarousel'
import landingWorkshopImage from '../assets/images/landing-workshop-image.jpeg'
import SoftwareAppsCarousel from './SoftwareAppsCarousel'

function Landing() {
  return (
    <div className="flex flex-col">
      <div
        className="flex flex-col justify-start items-start w-screen flex-grow gap-7"
        style={{ height: 'calc(100vh - 4rem)' }}
      >
        <div className="">
          <p className="vertical-align p-4 mt-20 md:mt-40 ml-8 sm:ml-16 md:ml-24 lg:ml-40 w-3/4 overflow-visible lg:w-1/3 h-fit text-4xl sm:text-7xl font-rajdhani font-regular uppercase leading-20 tracking-widest text-ft-white items-center transition-ease duration-300">
            UAV SOLUTIONS CUSTOMISED TO WORK FOR YOU
            <br />
            <span className="ml-4 h-60 text-sm md:text-lg lg:text-2xl font-rajdhani font-regular uppercase leading-20 tracking-widest text-ft-white transition-ease duration-300">
              > WATCH VIDEO
            </span>
          </p>
        </div>
        <br />
        <span className="vertical-align absolute-bottom mb-20 py-8 px-16 lg:p-0 w-full sm:ml-16 lg:ml-40 max-sm:mt-[28rem] sm:mt-[36rem] md:mt-[36rem] lg:mt-[40rem] sm:w-[28rem] text-sm sm:text-md md:text-lg font-rajdhani font-thin leading-20 tracking-wide  text-ft-white transition-ease duration-300">
          We are a Wollongong based engineering firm at the forefront of design,
          manufacture and modification of custom Unmanned Aerial Vehicles
          (UAV's)
        </span>
        <div className="bg-deltaquad min-h-[50%] max-h-screen xl:h-screen max-w-full min-w-full bg-cover flex justify-start items-start mt-44 md:mt-auto ml-auto transition-ease duration-100"></div>

        <button className="fixed-bottom w-full md:hidden bg-rose-700 min-h-[2.rem] px-5 py-2 inline-flex justify-center items-center transition-ease duration-300">
          BOOK A DEMO
        </button>
      </div>
      <div className="flex flex-col items-center justify-center my-32 sm:my-40">
        <p className="max-w-xs md:max-w-md lg:max-w-lg min-h-24 text-center text-2xl font-regular leading-loose tracking-wide">
          We serve clients worldwide, providing specialised solutions to unique
          problems.
        </p>
      </div>
      <LandingIcons />
      <LandingWorkWithUs />
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="uppercase px-12 text-4xl sm:text-5xl tracking-wide sm:tracking-widest sm:max-w-4xl">
          Class leading innovation
        </h2>
        <p className="text-lg px-16 my-4 sm:max-w-2xl">
          We didn't say it, they did
        </p>
      </div>
      <ReviewCarousel />
      <img src={landingWorkshopImage} alt="" className="mix-blend-screen my-12 min-h-[20rem] min-w-[24rem] "/>
      <DronesCarousel/>
      <SoftwareAppsCarousel/>
    </div>
    
  )
}

export default Landing
