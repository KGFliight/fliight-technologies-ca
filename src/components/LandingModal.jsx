import playButton from '../assets/images/icons/playbutton.svg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { ModalContext } from './LandingModalContext'

function LandingModal() {
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext)
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
    setIsModalOpen(!isModalOpen)
  }

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
    })
  }, [])

  return (
    <div>
      <div
        className="md:ml-4 text-sm md:text-lg lg:text-2xl font-rajdhani font-regular uppercase leading-20 tracking-widest text-ft-white transition-ease duration-300 mt-4 w-full"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="600"
        data-aos-offset="0"
        data-aos-duration="900"
      >
        <div>
          <button
            onClick={toggleModal}
            className="flex items-center gap-2 hover:opacity-50 transition duration-700 w-fit mt-8 sm:mt-16"
          >
            <div
              className={`${
                isModalOpen ? 'blur-sm' : ''
              } transition duration-700`}
            >
              <img
                src={playButton}
                className="h-[68px] w-[68px] xl:h-[72px] xl:w-[72px]"
                alt="Play"
              />
            </div>
            <div
              className={`${
                isModalOpen ? 'blur-sm' : ''
              } transition duration-700`}
            >
              WATCH VIDEO
            </div>
          </button>

          {modal && (
            <div className="fixed inset-0 bg-ft-black bg-opacity-0 flex justify-center items-center max-sm:mt-28 ml-[-4rem]  max-sm:w-screen">
              <div className="modal bg-transparent p-2 ml-[4rem] sm:p-4 rounded-lg shadow-lg relative md:mx-10   max-sm:w-screen">
                <button
                  onClick={toggleModal}
                  className="max-sm:right-2 absolute top-2 right-2 text-ft-red text-2xl bg-ft-white border-ft-red rounded px-2 py-1 hover:bg-ft-red hover:text-ft-grey transition active:bg-ft-white duration-300 z-[500] max-sm:top-2 shadow-lg"
                  data-aos="fade-in"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="300"
                >
                  <FontAwesomeIcon icon={faTimes} className="" />
                </button>
                <div className="aspect-w-16 aspect-h-9 z-40 max-lg:pt-12">
                  <div style={{padding:'56.25% 0 0 0',position:'relative'}}>
                    <iframe src="https://player.vimeo.com/video/1100952513?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} title="Phoenix Reveal (2)"></iframe>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default LandingModal
