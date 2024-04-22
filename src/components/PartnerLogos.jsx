import '../App.css'

import arace from '../assets/images/logos/partner-logos/arace.png'
import ascent from '../assets/images/logos/partner-logos/ascent.png'
import deltaquad from '../assets/images/logos/partner-logos/deltaquad.png'
import dji from '../assets/images/logos/partner-logos/dji.png'
import freespace from '../assets/images/logos/partner-logos/freespace.png'
import freespace1 from '../assets/images/logos/partner-logos/freespace1.png'
import nextvision from '../assets/images/logos/partner-logos/nextvision.png'
import rajant from '../assets/images/logos/partner-logos/rajant.png'
import rockRobotic from '../assets/images/logos/partner-logos/rock_robotic.png'

import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

function PartnerLogos() {
  return (
    <div className="flex flex-col justify-center items-center my-20 md:my-20">
      <ul className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center items-center">
        <li
          className="w-40 h-20 md:w-60 md:h-40 items-center justify-center flex"
          data-aos-delay="50"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-offset="0"
          data-aos-duration="300"
        >
          <img src={arace} alt="arace Logo" />
        </li>
        <li
          className="w-40 h-20 md:w-60 md:h-40 items-center justify-center flex"
          data-aos-delay="100"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-offset="0"
          data-aos-duration="300"
        >
          <img src={ascent} alt="ascent Logo" />
        </li>
        <li
          className="w-40 h-20 md:w-60 md:h-40 items-center justify-center flex"
          data-aos-delay="150"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-offset="0"
          data-aos-duration="300"
        >
          <img src={deltaquad} alt="deltaquad Logo" />
        </li>

        <li
          className="w-40 h-20 md:w-60 md:h-40 items-center justify-center flex"
          data-aos-delay="200"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-offset="0"
          data-aos-duration="300"
        >
          <img src={dji} alt="dji logo" />
        </li>
        <li
          className="w-40 h-20 md:w-60 md:h-40 items-center justify-center flex"
          data-aos-delay="250"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-offset="0"
          data-aos-duration="300"
        >
          <img src={freespace} alt="freespace logo" />
        </li>
        <li
          className="w-40 h-20 md:w-60 md:h-40 items-center justify-center flex"
          data-aos-delay="300"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-offset="0"
          data-aos-duration="300"
        >
          <img src={nextvision} alt="nextvision logo" />
        </li>
        <li
          className="w-40 h-20 md:w-60 md:h-40 items-center justify-center flex"
          data-aos-delay="350"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-offset="0"
          data-aos-duration="300"
        >
          <img src={rajant} alt="rajant logo" />
        </li>
        <li
          className="w-40 h-20 md:w-60 md:h-40 items-center justify-center flex"
          data-aos-delay="400"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-offset="0"
          data-aos-duration="300"
        >
          <img src={rockRobotic} alt="rock robotic logo" />
        </li>
       
      </ul>
    </div>
  )
}

export default PartnerLogos
