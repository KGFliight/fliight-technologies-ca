import '../App.css'

import barminco from '../assets/images/logos/barminco.png'
import bhpbilliton from '../assets/images/logos/bhpbilliton.png'
import hover from '../assets/images/logos/hover.png'
import infravision from '../assets/images/logos/infravision.png'
import perenti from '../assets/images/logos/perenti.png'
import powercor from '../assets/images/logos/powercor.png'
import pypervision from '../assets/images/logos/pypervision.png'
import unleash from '../assets/images/logos/unleash.png'
import worley from '../assets/images/logos/worley.png'

import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

function LandingLogos() {
  return (
    <div className="flex flex-col justify-center items-center my-20 md:my-20">
      <ul className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
        <li
          className="w-40 h-20 md:w-60 md:h-40 items-center justify-center flex"
          data-aos-delay="50"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-offset="0"
          data-aos-duration="300"
        >
          <img src={infravision} alt="Infravision Logo" />
        </li>
        <li
          className="w-40 h-20 md:w-60 md:h-40 items-center justify-center flex"
          data-aos-delay="100"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-offset="0"
          data-aos-duration="300"
        >
          <img src={perenti} alt="Perenti Logo" />
        </li>
        <li
          className="w-40 h-20 md:w-60 md:h-40 items-center justify-center flex"
          data-aos-delay="150"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-offset="0"
          data-aos-duration="300"
        >
          <img src={pypervision} alt="Pypervision Logo" />
        </li>

        <li
          className="w-40 h-20 md:w-60 md:h-40 items-center justify-center flex"
          data-aos-delay="200"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-offset="0"
          data-aos-duration="300"
        >
          <img src={hover} alt="Hover logo" />
        </li>
        <li
          className="w-40 h-20 md:w-60 md:h-40 items-center justify-center flex"
          data-aos-delay="250"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-offset="0"
          data-aos-duration="300"
        >
          <img src={unleash} alt="Unleash logo" />
        </li>
        <li
          className="w-40 h-20 md:w-60 md:h-40 items-center justify-center flex"
          data-aos-delay="300"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-offset="0"
          data-aos-duration="300"
        >
          <img src={barminco} alt="barminco logo" />
        </li>
        <li
          className="w-40 h-20 md:w-60 md:h-40 items-center justify-center flex"
          data-aos-delay="350"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-offset="0"
          data-aos-duration="300"
        >
          <img src={bhpbilliton} alt="bhpbilliton logo" />
        </li>
        <li
          className="w-40 h-20 md:w-60 md:h-40 items-center justify-center flex"
          data-aos-delay="400"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-offset="0"
          data-aos-duration="300"
        >
          <img src={powercor} alt="Unleash logo" />
        </li>
        <li
          className="w-40 h-20 md:w-60 md:h-40 items-center justify-center flex"
          data-aos-delay="450"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-offset="0"
          data-aos-duration="300"
        >
          <img src={worley} alt="worley logo" />
        </li>
       
      </ul>
    </div>
  )
}

export default LandingLogos
