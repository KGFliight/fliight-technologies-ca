import React from 'react'
import workWorkshop from '../assets/images/work-workshop.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import kit from '../assets/images/review-users/kit.jpeg'
import '../App.css'
import LandingIcons from './LandingIcons'

function AboutComponent() {
  return (
    <div className="flex-1 flex flex-col">
      <h1 className="text-6xl md:text-7xl font-medium leading md:leading-10 tracking-widest mt-24 py-20 justify-center flex uppercase ">
        About
      </h1>
      <h2 className="flex flex-col items-center mb-8 md:mb-20 md:my-12 ">Subheading</h2>
      <div className="w-screen 2xl:flex 2xl:justify-center flex">
        <img
          src={workWorkshop}
          className="image-container w-full max-h-[600px] 2xl:max-h-[800px] object-scale-down object-bottom sm:object-cover"
        />
      </div>
      <div className="flex flex-col items-center flex-1 p-6 md:my-12">
        <div className=" md:mx-20 p-6">
          <h3 className="uppercase text-5xl tracking-widest text-left my-8 ">
            Our approach to UAV
          </h3>
          <p className="my-8 max-w-[960px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            placeat facere accusantium ad inventore explicabo dicta. Voluptates,
            mollitia modi! Quis in earum perspiciatis
          </p>
          <div className="flex flex-col sm:flex-row my-12 justify-between lg:max-w-[960px] xl:max-w-[1200px]">
            <div className="">
              <ul className="">
                <li className="my-8 flex  items-start leading-loose tracking-wide">
                  <FontAwesomeIcon
                    icon={faAnglesRight}
                    className="text-rose-700 p-2 pr-4"
                  />{' '}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li className="my-8 flex items-start leading-loose tracking-wide">
                  <FontAwesomeIcon
                    icon={faAnglesRight}
                    className="text-rose-700 p-2 pr-4"
                  />{' '}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li className="my-8 flex items-start leading-loose tracking-wide">
                  <FontAwesomeIcon
                    icon={faAnglesRight}
                    className="text-rose-700 p-2 pr-4"
                  />{' '}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
              </ul>
            </div>
            <div>
              <ul className="">
                <li className="my-8 flex items-start leading-loose tracking-wide">
                  <FontAwesomeIcon
                    icon={faAnglesRight}
                    className="text-rose-700 p-2 pr-4"
                  />{' '}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li className="my-8 flex items-start leading-loose tracking-wide">
                  <FontAwesomeIcon
                    icon={faAnglesRight}
                    className="text-rose-700 p-2 pr-4"
                  />{' '}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li className="my-8 flex items-start leading-loose tracking-wide">
                  <FontAwesomeIcon
                    icon={faAnglesRight}
                    className="text-rose-700 p-2 pr-4"
                  />{' '}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
              </ul>
            </div>
          </div>
          <div className="my-24">
            <h3 className="uppercase text-5xl tracking-widest text-left my-8 ">
              Our Future
            </h3>
            <p className="max-w-[960px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              ratione enim libero. Vitae asperiores molestiae neque adipisci ut
              corrupti officiis exercitationem, odio, recusandae necessitatibus
              perspiciatis pariatur sequi fuga cumque, quos quam eius ipsam qui.
              Quo ullam commodi eum aliquid inventore doloremque similique
              voluptates rem magni molestias officiis odit debitis, nobis
              pariatur repellat nihil ratione a sed, id, reiciendis neque eos.
              Esse reiciendis suscipit dolor reprehenderit nemo itaque
              laboriosam illo iure ad, rem adipisci sed fugit eaque, vero
              dolorem velit! Ex.
            </p>
          </div>

          <h3 className="uppercase text-5xl tracking-widest text-left my-8 ">
            Our people who make it happen
          </h3>
          <div className="flex flex-col sm:items-center lg:items-start lg:flex-row lg:justify-between max-w-[900px] my-20">
            <div className="max-w-[368px] mt-0">
              <div className="image-container z-50">
                <img src={kit} className="w-80 h-96" />
              </div>

              <div className="my-8">
                <p className="my-2 text-3xl leading-loose tracking-wide">Kihan Garcia</p>
                <p className="my-2 text-xl leading-loose tracking-wide">CEO</p>
                <p className="my-2 mb-4 leading-loose tracking-wide">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                  libero rerum est placeat obcaecati atque, dolorem architecto
                  molestiae suscipit, voluptatibus sapiente minima facere velit
                  nisi nemo omnis expedita sunt? Unde.
                </p>
                <span>
                  <a href="www.linkedin.com" className="leading-loose tracking-wide">Connect **</a>
                </span>
              </div>
            </div>
            <div className="max-w-[368px] mt-24">
              <div className="image-container z-50">
                <img src={kit} className="w-80 h-96" />
              </div>
              <div className="my-8">
                <p className="my-2 text-3xl leading-loose tracking-wide">Johnathan Clark</p>
                <p className="my-2 text-xl leading-loose tracking-wide">Research and Development Engineer</p>
                <p className="my-2 mb-4 leading-loose tracking-wide">
                Specialises in heavy lift RPAS, VTOL UAV's, custom payloads, and remote sensing. With a six-year journey that spans from project inception to mass production, Johnathan has honed his expertise in project management, CAD, and precision manufacturing, all while ensuring his clients achieve safer, more efficient, and cost-effective business operations.
                </p>
                <span>
                  <a href="www.linkedin.com" className="leading-loose tracking-wide">Connect **</a>
                </span>
              </div>
            </div>
          </div>
          <div className="mt-40 my-12">
          <p className="text-4xl  leading-10 tracking-wide  text-center justify-center max-w-[48rem] my-20 lg:mx-40">
            We serve clients worldwide, providing specialised solutions to
            unique problems
          </p>
          <LandingIcons/>
          <p className="text-4xl  leading-10 tracking-wide  text-center justify-center max-w-[48rem] md:mx-40 mt-40 my-20">
            Partners
          </p>
          <LandingIcons />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutComponent
