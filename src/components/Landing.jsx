import '../App.css'

function Landing() {
  return (
    <div className="w-screen h-screen flex-col justify-start items-start inline-flex gap-7">
      <p className="vertical-align p-8 lg:p-0 lg:ml-48 w-fit h-fit text-5xl md:text-7xl font-rajdhani font-regular uppercase leading-20 tracking-widest text-ft-white items-center">
      UAV SOLUTIONS
      <br/>
      CUSTOMISED TO
      <br/>
      WORK FOR YOU
      <br/>
      <span className="ml-4 h-60 text-2xl font-rajdhani font-regular uppercase leading-20 tracking-widest text-ft-white">
      > WATCH VIDEO
      </span>
      </p>
      <br/>
      <span className="vertical-align p-8 lg:p-0 w-80 lg:ml-48 mt-[32rem] md:mt-[32rem] 2xl:mt-[38rem] sm:w-[28rem] lg:h-20 text-lg font-rajdhani font-thin leading-20 tracking-wide text-ft-white">
      We are a Wollongong based engineering firm at the forefront of design, manufacture and modification of custom Unmanned Aerial Vehicles (UAV's)
      </span>
      <div className="bg-deltaquad h-[32rem] md:h-screen 2xl:max-w-[2428px] lg:max-w-[1920px] sm:max-w-[960px] lg:min-w-[512px] sm:min-w-[512px] bg-cover p-24 w-screen flex justify-start items-start mt-44 md:mt-12 lg:ml-60">
      </div>
    </div>
  )
}

export default Landing;