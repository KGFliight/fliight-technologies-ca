import '../App.css'
import deltaquad from '../assets/images/logos/deltaquad.png'
import dji from '../assets/images/logos/dji.png'
import hover from '../assets/images/logos/hover.png'
import unleash from '../assets/images/logos/unleash.png'
import pypervision from '../assets/images/logos/pypervision.png'
import infravision from '../assets/images/logos/infravision.png'
import perenti from '../assets/images/logos/perenti.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

function LandingLogos() {
  return (
    <div className="flex flex-col justify-center items-center my-20 md:my-4">
      <ul className="flex flex-col lg:flex-row lg:gap-8 justify-center items-center gap-8">
        <li
          className="w-60 h-40 items-center justify-center flex"
          data-aos-delay="0"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-offset="0"
          data-aos-duration="300"
        >
          <img src={infravision} alt="Infravision Logo" />
        </li>
        <li
          className="w-60 h-40 items-center justify-center flex"
          data-aos-delay="0"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-offset="0"
          data-aos-duration="300"
        >
          <img src={perenti} alt="Perenti Logo" />
        </li>
        <li
          className="w-60 h-40 items-center justify-center flex"
          data-aos-delay="0"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-offset="0"
          data-aos-duration="300"
        >
          <img src={pypervision} alt="Pypervision Logo" />
        </li>

        <li
          className="w-60 h-40 items-center justify-center flex"
          data-aos-delay="0"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-offset="0"
          data-aos-duration="300"
        >
          <img src={hover} alt="Hover logo" />
        </li>
        <li
          className="w-60 h-40 items-center justify-center flex"
          data-aos-delay="0"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-offset="0"
          data-aos-duration="300"
        >
          <img src={unleash} alt="Unleash logo" />
        </li>
      </ul>
    </div>
  )
}

export default LandingLogos
