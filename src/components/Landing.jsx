import '../App.css'
import LandingIcons from './LandingIcons';

function Landing() {
  return (
    <div className="flex flex-col">
    <div className="flex flex-col justify-start items-start w-screen flex-grow gap-7" style={{ height: 'calc(100vh - 4rem)' }}>
      <p className="vertical-align p-4 mt-4 md:mt-24 ml-8 sm:ml-16 md:ml-24 lg:ml-40 w-3/4 overflow-visible lg:w-1/3 h-fit text-4xl sm:text-7xl font-rajdhani font-regular uppercase leading-20 tracking-widest text-ft-white items-center">
      UAV SOLUTIONS
      CUSTOMISED TO
      WORK FOR YOU
      <br/>
      <span className="ml-4 h-60 text-sm md:text-lg lg:text-2xl font-rajdhani font-regular uppercase leading-20 tracking-widest text-ft-white">
      > WATCH VIDEO
      </span>
      </p>
      <br/>
      <span className="vertical-align p-8 ml-4 lg:p-0 w-80 sm:ml-32 md:ml-32 lg:ml-40 mt-[25rem] sm:mt-[40rem] lg:mt-[40rem] sm:w-[28rem] lg:h-20 text-sm sm:text-md md:text-lg font-rajdhani font-thin leading-20 tracking-wide  text-ft-white">
      We are a Wollongong based engineering firm at the forefront of design, manufacture and modification of custom Unmanned Aerial Vehicles (UAV's)
      </span>
      <div className="bg-deltaquad h-1/4 sm:h-1/3 lg:h-2/3 xl:h-screen lg:max-h-full max-w-[780px] md:max-w-[1366px] lg:max-w-full bg-cover w-screen flex justify-start items-start mt-56 md:mt-56 lg:mt-0 ml-auto">
      </div>
      
      <button className="fixed-bottom w-full md:hidden bg-rose-700 h-10 px-5 py-2 inline-flex justify-center items-center">
        BOOK A DEMO
      </button>
      </div>
      <div className="flex flex-col items-center justify-center my-40 sm:my-80">
        <p className="w-80 h-24 text-center text-2xl font-regular leading-loose tracking-wide">We serve clients worldwide, providing specialised solutions to unique problems.</p>
      </div>
      <LandingIcons/>
    </div>
  )
}

export default Landing;