import '../App.css'
import deltaquad from '../assets/images/icons/deltaquad.png'
import dji from '../assets/images/icons/dji.png'
import hover from '../assets/images/icons/hover.png'
import unleash from '../assets/images/icons/unleash.png'
import pypervision from '../assets/images/icons/pypervision.png'

function LandingIcons() {
  return (
    <div className="flex flex-col justify-center items-center my-20 md:my-4 grayscale">
      <ul className="flex flex-col lg:flex-row lg:gap-16 justify-center items-center gap-8">
      <li className="w-40 h-20 items-center justify-center flex">
          <img src={pypervision} alt="pypervision logo" />
        </li>
        <li className="w-40 h-20 items-center justify-center flex">
          <img src={hover} alt="hover logo" />
        </li>
        <li className="w-40 h-20 items-center justify-center flex">
          <img src={unleash} alt="pypervision logo" />
        </li>
       
        <li className="w-40 h-20 items-center justify-center flex">
          <img src={dji} alt="dji logo" />
        </li>
        <li className="w-40 h-20 items-center justify-center flex">
          <img src={deltaquad} alt="deltaquad logo" />
        </li>
        
        
      </ul>
    </div>
  )
}

export default LandingIcons
