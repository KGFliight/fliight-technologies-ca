import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

function DeltaQuadProBanner({ title, imageSrc, subheading, className = '', isPhoenix = false }) {
  return (
    <div className={`flex flex-col justify-center items-center min-h-[100vh] w-full bg-white pt-16 ${className}`}>
      {/* pt-16 ensures space for nav bar if sticky/fixed */}
      <div className="flex flex-col items-center mb-4 mx-4 md:mx-8">
        <h1
          className={`text-5xl md:text-7xl font-medium leading-tight md:leading-[1.1] tracking-widest mt-2 md:mt-4 mb-2 uppercase text-ft-black text-center`}
          data-aos="fade-down-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="0"
          data-aos-offset="0"
          data-aos-mirror="true"
          data-aos-duration="600"
        >
          {title}
        </h1>
        <p
          className={'text-ft-black text-center font-light font-[\'Inter\']'}
          data-aos="fade-down-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
          data-aos-mirror="true"
          data-aos-duration="900"
        >
          {subheading}
        </p>
      </div>
      <div className="flex justify-center bg-white border border-white w-full">
        <img
          src={imageSrc}
          className={`px-4 my-4 h-auto md:px-20 lg:h-80 xl:h-[360px] 2xl:h-[400px] max-w-full object-contain`}
          data-aos="fade-down-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="900"
          data-aos-offset="0"
          data-aos-mirror="true"
          data-aos-duration="1200"
        />
      </div>
    </div>
  )
}

export default DeltaQuadProBanner
