import '../App.css'
import LandingIcons from './LandingIcons';

function Landing() {
  return (
    <div className="flex flex-col">
    <div className="flex flex-col justify-start items-start w-screen flex-grow gap-7" style={{ height: 'calc(100vh - 4rem)' }}>
      <p className="vertical-align p-4 mt-20 md:mt-40 ml-8 sm:ml-16 md:ml-24 lg:ml-40 w-3/4 overflow-visible lg:w-1/3 h-fit text-4xl sm:text-7xl font-rajdhani font-regular uppercase leading-20 tracking-widest text-ft-white items-center transition-ease duration-300">
      UAV SOLUTIONS
      CUSTOMISED TO
      WORK FOR YOU
      <br/>
      <span className="ml-4 h-60 text-sm md:text-lg lg:text-2xl font-rajdhani font-regular uppercase leading-20 tracking-widest text-ft-white transition-ease duration-300">
      > WATCH VIDEO
      </span>
      </p>
      <br/>
      <span className="vertical-align py-8 px-16 lg:p-0 w-full sm:ml-16 lg:ml-40 mt-[25rem] sm:mt-[36rem] md:mt-[36rem] lg:mt-[40rem] sm:w-[28rem] text-md sm:text-md md:text-lg font-rajdhani font-thin leading-20 tracking-wide  text-ft-white transition-ease duration-300">
      We are a Wollongong based engineering firm at the forefront of design, manufacture and modification of custom Unmanned Aerial Vehicles (UAV's)
      </span>
      <div className="bg-deltaquad h-1/3 sm:h-1/2 lg:h-2/3 xl:h-screen lg:max-h-full max-w-[780px] md:max-w-[1366px] lg:max-w-full bg-cover w-screen flex justify-start items-start mt-44 md:mt-56 ml-auto transition-ease duration-300">
      </div>
      
      <button className="fixed-bottom w-full md:hidden bg-rose-700 h-10 px-5 py-2 inline-flex justify-center items-center transition-ease duration-300">
        BOOK A DEMO
      </button>
      </div>
      <div className="flex flex-col items-center justify-center my-40 sm:my-80">
        <p className="w-80 sm:w-1/2 lg:w-1/3 h-24 text-center text-2xl font-regular leading-loose tracking-wide">We serve clients worldwide, providing specialised solutions to unique problems.</p>
      </div>
      <LandingIcons/>
    </div>
  )
}

export default Landing;