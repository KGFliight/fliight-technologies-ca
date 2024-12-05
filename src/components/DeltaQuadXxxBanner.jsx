import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

function DeltaQuadProBanner({ title, imageSrc, subheading }) {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-screen border bg-white">
      <div className="flex flex-col items-center mb-12 mx-8">
        <h1
          className="text-6xl md:text-7xl font-medium leading md:leading-10 tracking-widest mt-24 py-20 justify-center flex uppercase  text-ft-black text-center"
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
          className="text-ft-black text-center font-light font-['Inter']"
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
      <div className="flex justify-center bg-white border border-white">
        <img
          src={imageSrc}
          className="px-4 my-8 h-auto md:px-20 lg:h-80 xl:h-[360px] 2xl:h-[400px]"
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
