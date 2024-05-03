import LandingIcons from './LandingLogos'
import LandingWorkWithUs from './LandingWorkWithUs'
import ReviewCarousel from './ReviewCarousel'
import DronesCarousel from './DronesCarousel'
import LandingModal from './LandingModal'
import landingWorkshopImage from '../assets/images/landing-workshop-image.jpeg'
import landingWorkWithImage from '../assets/images/work-workshop.jpeg'
// import SoftwareAppsCarousel from './SoftwareAppsCarousel'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { MobileMenuContext } from './MobileMenuContext'
import { ModalContext } from './LandingModalContext'
import CustomCursor from '../components/CustomCursor'
import { useState, useEffect } from 'react'
import PartnerLogos from './PartnerLogos'

import AOS from 'aos'
import 'aos/dist/aos.css'

function Landing() {
  AOS.init()
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext)
  const { isMobileMenuOpen } = useContext(MobileMenuContext)

  const toggleModal = () => {
    setModal(!modal)
    setIsModalOpen(!isModalOpen)
  }

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY })
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="flex flex-col">
      <CustomCursor position={cursorPosition} />
      <div
        className="flex flex-col justify-start items-start flex-grow gap-7"
        style={{ height: 'calc(100dvh - 4rem)' }}
      >
        <div className="">
          <div
            className="vertical-align mt-24 px-12 sm:pt-12 sm:p-0 sm:ml-16 md:ml-24 lg:ml-36 w-5/6 overflow-visible h-fit text-5xl sm:text-7xl font-rajdhani font-regular uppercase leading-20 tracking-widest text-ft-white items-center transition-ease duration-300 z-50"
            data-aos="fade-down-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="0"
            data-aos-offset="0"
            data-aos-mirror="true"
            data-aos-duration="600"
          >
            <div
              className={`${
                isModalOpen ? 'blur-sm' : ''
              } transition duration-700`}
            >
              UAV SOLUTIONS
              <br />
              WORKING FOR YOU
            </div>
            {/*<div
              className="md:ml-4 h-60 text-sm md:text-lg lg:text-2xl font-rajdhani font-regular uppercase leading-20 tracking-widest text-ft-white transition-ease duration-300 mt-4"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="600"
              data-aos-offset="0"
              data-aos-duration="1200"
            >
              <a
                href="https://youtu.be/dQw4w9WgXcQ?si=IfFy6pI1SNqksBtc"
                target="_blank"
                rel="noreferrer noopener"
              >
                <div className="flex items-center gap-2 hover:opacity-50 transition duration-300 ">
                  <img
                    src={playButton}
                    className="h-[68px] w-[68px] xl:h-[103px] xl:w-[103px]"
                  />{' '}
                  WATCH VIDEO
                </div>
              </a>
  </div>*/}{' '}
            <LandingModal />
          </div>
        </div>
        <br />
        <div
          className="vertical-align absolute-bottom mb-4 sm:mb-14 p-12 sm:p-0 lg:p-0 w-full sm:ml-16 md:ml-24 lg:ml-36 max-sm:mt-[28rem] sm:mt-[36rem] md:mt-[36rem] lg:mt-[40rem] sm:w-[30rem] text-normal font-rajdhani font-light leading-20 tracking-wide  text-ft-white transition-ease duration-300 font-['Inter'] z-40"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="0"
          data-aos-offset="0"
          data-aos-duration="900"
        >
          <div
            className={`${
              isModalOpen ? 'blur-sm' : ''
            } transition duration-700`}
          >
            A Wollongong based company.
            <br />
            Providing integrated drones solutions to enterprise and government
            clients.
          </div>
        </div>

        <div className="bg-deltaquad min-h-[50%] sm:min-h-[66%] md:min-h-[75%] max-h-screen xl:min-h-screen max-w-full min-w-full bg-cover flex justify-start items-start mt-44 xl:mt-[-3rem] ml-auto transition-ease duration-300"></div>
        {!isMobileMenuOpen && (
          <NavLink to="/request-demo">
            <button
              className="fixed-bottom w-full md:hidden bg-ft-red min-h-[2.rem] px-5 py-2 inline-flex justify-center items-center transition-ease duration-300"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="0"
              data-aos-offset="0"
              data-aos-duration="300"
            >
              BOOK A DEMO
            </button>
          </NavLink>
        )}
      </div>
      <LandingWorkWithUs />
      <div className="my-16">
        <div className="flex flex-col items-center justify-center my-32 sm:mt-28 sm:mb-16">
          <p
            className="max-w-xs md:max-w-md lg:max-w-3xl min-h-24 text-center text-2xl font-regular leading-loose tracking-wide md:text-4xl md:leading-10 md:font-medium"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in"
            data-aos-delay="0"
            data-aos-offset="0"
            data-aos-duration="300"
          >
            We serve clients worldwide, providing specialised solutions to
            unique problems.
          </p>
        </div>
        <LandingIcons />
      </div>
      {/*<LandingWorkWithUs />*/}
      <div
        className="sm:my-40"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in"
        data-aos-delay="0"
        data-aos-offset="0"
        data-aos-duration="300"
      >
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="uppercase px-12 text-4xl sm:text-5xl tracking-wide font-medium sm:tracking-widest sm:max-w-4xl">
            Class leading innovation
          </h2>
          <p className="text-lg px-16 my-4 sm:max-w-2xl font-light tracking-wide font-['Inter']">
            We didn&apos;t say it, they did
          </p>
        </div>

        <ReviewCarousel />
      </div>
      <div className="my-20 sm:my-0 sm:mb-20">
        <img
          src={landingWorkshopImage}
          alt=""
          className="mix-blend-screen bg-neutral-800 object-contain w-screen"
        />
      </div>
      <DronesCarousel />
      <div className="h-24"></div>
      {/*<SoftwareAppsCarousel />*/}
      <div className="my-16">
        <div className="flex flex-col items-center justify-center my-32 sm:mt-28 sm:mb-16">
          <h2
            className="uppercase font-medium my-16 md:my-8 px-14 text-4xl sm:text-5xl tracking-wide leading-10 sm:tracking-widest sm:max-w-4xl"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in"
            data-aos-delay="0"
            data-aos-offset="0"
            data-aos-duration="600"
          >
            Partners
          </h2>
          <p
            className="max-w-xs md:max-w-md lg:max-w-3xl min-h-24 text-center text-xl font-regular leading-loose tracking-wide md:text-2xl md:leading-10 md:font-medium"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in"
            data-aos-delay="0"
            data-aos-offset="0"
            data-aos-duration="300"
          >
            We work with the best suppliers in the world to ensure your
            project is a success.
          </p>
        </div>
        <PartnerLogos />
      </div>
      <div className="flex flex-col justify-center items-start 2xl:items-center w-screen lg:pl-32">
        <div className="relative mx-8 md:mx-16 lg:mx-0 md:min-h-[300px] md:min-w-[300px] z-50 my-4">
          <div className="flex flex-col xl:flex-row md:p-12">
            <div
              className="image-container flex justify-center mx-6 my-12 md:my-16 md:w-[600px]"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in"
              data-aos-delay="0"
              data-aos-offset="0"
              data-aos-duration="300"
            >
              <img
                src={landingWorkWithImage}
                alt=""
                className="min-h-auto mx-16 md:w-[600px] image-container md:h-[600px] 2xl:max-h-[800px] md:object-none md:object-left-bottom rounded"
              />
            </div>
            <div className="flex flex-col md:justify-center md:items-start xl:p-12 xl:w-[38rem]">
              <h2
                className="uppercase px-6 my-8 sm:text-5xl tracking-wide leading-10 sm:tracking-widest sm:max-w-4xl text-5xl"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in"
                data-aos-delay="0"
                data-aos-offset="0"
                data-aos-duration="300"
              >
                Work with a team leading the way in for uav innovation.
              </h2>
              <p
                className="leading-normal tracking-wide px-6 my-4 lg:max-w-2xl text-xl font-light font-['Inter']"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in"
                data-aos-delay="0"
                data-aos-offset="0"
                data-aos-duration="300"
              >
                Our team have been passionate about drones and UAV&apos;s right
                through their evolution. Today, they are among the world&apos;s
                foremost experts in UAV engineering and custom system development
              </p>
              <div className="max-md:flex max-md:justify-center">
                <button className="bg-ft-dark-grey uppercase rounded-3xl flex items-center justify-center w-72 h-8 sm:w-44 min-h-[2.75rem] text-base font-semibold leading-tight tracking-widest my-8 md:mx-6 hover:opacity-90 hover:bg-black duration-300">
                  <NavLink to="/about">About us</NavLink>
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-6 mb-2"></div>
        </div>
      </div>
    </div>
  )
}

export default Landing
