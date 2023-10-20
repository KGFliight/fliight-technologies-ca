import '../App.css'

function Landing() {
  return (
    <div className="w-screen h-screen flex-col justify-start items-start inline-flex gap-7">
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
      <span className="vertical-align p-8 ml-4 lg:p-0 w-80 sm:ml-32 md:ml-32 lg:ml-40 mt-[28rem] sm:mt-[40rem] lg:mt-[40rem] sm:w-[28rem] lg:h-20 text-sm sm:text-md md:text-lg font-rajdhani font-thin leading-20 tracking-wide  text-ft-white">
      We are a Wollongong based engineering firm at the forefront of design, manufacture and modification of custom Unmanned Aerial Vehicles (UAV's)
      </span>
      <div className="bg-deltaquad h-1/4 sm:h-1/3 lg:h-2/3 xl:h-screen lg:max-h-full max-w-[780px] md:max-w-[1366px] lg:max-w-full bg-cover w-screen flex justify-start items-start mt-56 md:mt-56 lg:mt-0 ml-auto">
      </div>
    </div>
  )
}

export default Landing;