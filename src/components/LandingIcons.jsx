import '../App.css'
import deltaquad from '../assets/images/logos/deltaquad.png'
import dji from '../assets/images/logos/dji.png'
import hover from '../assets/images/logos/hover.png'
import unleash from '../assets/images/logos/unleash.png'
import pypervision from '../assets/images/logos/pypervision.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

function LandingIcons() {
  return (
    <div className="flex flex-col justify-center items-center my-20 md:my-4 grayscale">
      <ul className="flex flex-col lg:flex-row lg:gap-16 justify-center items-center gap-8">
        <li
          className="w-40 h-20 items-center justify-center flex"
          data-aos-delay="0"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-offset="0"
          data-aos-duration="300"
        >
          <img src={pypervision} alt="pypervision logo" />
        </li>
        <li
          className="w-40 h-20 items-center justify-center flex"
          data-aos-delay="0"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-offset="0"
          data-aos-duration="300"
        >
          <img src={hover} alt="hover logo" />
        </li>
        <li
          className="w-40 h-20 items-center justify-center flex"
          data-aos-delay="0"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-offset="0"
          data-aos-duration="300"
        >
          <img src={unleash} alt="pypervision logo" />
        </li>

        <li
          className="w-40 h-20 items-center justify-center flex"
          data-aos-delay="0"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-offset="0"
          data-aos-duration="300"
        >
          <img src={dji} alt="dji logo" />
        </li>
        <li
          className="w-40 h-20 items-center justify-center flex"
          data-aos-delay="0"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-offset="0"
          data-aos-duration="300"
        >
          <img src={deltaquad} alt="deltaquad logo" />
        </li>
      </ul>
    </div>
  )
}

export default LandingIcons
