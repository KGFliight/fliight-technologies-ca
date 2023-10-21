import deltaQuad from '../assets/images/icons/deltaquad.png'

function Footer() {
  return (
    <footer className="border-ft-dark-grey">
      <div className="px-12 py-8 mt-8 border">
      <h2 className="uppercase text-4xl sm:text-5xl tracking-wide sm:tracking-widest sm:max-w-4xl">
        READY FOR TAKEOFF?
      </h2>
      <p className="w-full text-left text-lg my-4 sm:max-w-2xl">
        Our friendly Fliight Crew is here to discuss your needs, no strings
        attached. Let's navigate solving your problem together.
      </p>
      <div className="gap-3 py-2 justify-center items-center flex-col flex">
        <button className="bg-rose-700 uppercase rounded-3xl py-2 w-72 h-8 sm:w-44 min-h-[2.75rem] text-base font-semibold leading-tight tracking-widest">
          Contact us
        </button>
        <button className="bg-gray-700 uppercase rounded-3xl py-3 w-72 h-8 sm:w-44 min-h-[2.75rem] text-base font-semibold leading-tight tracking-widest">
          Book a demo
        </button>
      </div>
      <div className="flex my-4 w-full ">
        <div className="flex flex-col w-[50%]">
          <span className="uppercase my-4 text-sm leading-relaxed font-semibold">
            Drones
          </span>
          <ul className="text-sm leading-loose tracking-wide font-normal">
            <li>DeltaQuad Pro</li>
            <li>DeltaQuad Evo</li>
          </ul>
        </div>
        <div className="flex flex-col w-[50%] ml-[4rem]  leading-loose tracking-wide">
          <span className="uppercase my-4 text-sm leading-relaxed font-semibold">
            Software
          </span>
          <ul className="text-sm leading-loose tracking-wide font-normal">
            <li>AeroWhere</li>
            <li>Argus</li>
          </ul>
        </div>
      </div>
      <div>
        <img src={deltaQuad} alt="deltaQuad" className="w-60 mt-8 mb-2" />
        <span className="text-sm font-normal leading-relaxed tracking-wide text-ft-grey">
          |&nbsp;&nbsp; Fliight Technologies is proud to be the official
          Australian DeltaQuad Distributor
        </span>
      </div>
      </div>
      <div className="flex flex-col bg-ft-dark-grey w-screen mb-8 p-4 gap-3">
        <span>+(61) 429 279 876</span>
        <span>Wollongong, Australia</span>
        <span>info@fliight.com.au</span>
      </div>
    </footer>
  )
}

export default Footer
