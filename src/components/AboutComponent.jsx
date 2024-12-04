import fliightCrew from '../assets/images/thefliightcrew_cropped.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import john from '../assets/images/john.jpg'
import kihan from '../assets/images/kihan.jpeg'
import '../App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'


function AboutComponent() {
  AOS.init()

  return (
    <div className="flex-1 flex flex-col">
      <h1
        className="text-6xl md:text-7xl font-medium leading sm:leading tracking-widest mt-32 py-16 mx-10 justify-center flex uppercase "
        data-aos="fade-down-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="0"
        data-aos-offset="0"
        data-aos-mirror="true"
        data-aos-duration="600"
      >
        About Us: The Fliight Crew
      </h1>
      <h2
        className="flex flex-col items-center mb-8 md:mb-20 md:my-12 font-['Inter'] font-light text-lg leading-loose tracking-wide mx-10"
        data-aos="fade-down-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="150"
        data-aos-offset="0"
        data-aos-mirror="true"
        data-aos-duration="600"
      >
        Who we are, what we do, and why we do it
      </h2>
      <div className="w-screen 2xl:flex 2xl:justify-center flex">
        <img
          src={fliightCrew}
          className="image-container w-full object-scale-down object-bottom"
        />
      </div>
      <div className="flex flex-col items-center flex-1 p-6 md:my-12">
        <div className=" md:mx-20 mx-0 p-6">
          <h3
            className="uppercase text-5xl tracking-widest text-left my-8 "
            data-aos="fade-down-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
            data-aos-mirror="true"
            data-aos-duration="600"
          >
            Our approach to UAVs
          </h3>
          <p
            className="my-8 max-w-[960px] font-['Inter'] font-light"
            data-aos="fade-down-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="0"
            data-aos-offset="0"
            data-aos-mirror="true"
            data-aos-duration="600"
          >
            UAVs are platforms, designed to provide data and insights that save
            your organisation time and money all while reducing the risk to
            personnel. At the end of the day, they are only as useful as the
            data you get out. We understand this and that&apos;s why we provide
            solutions tailored to your needs and are with you for the entire
            journey, to ensure your investment is a success.
          </p>
          <div
            className="flex flex-col sm:flex-row my-12 justify-between lg:max-w-[960px] xl:max-w-[1200px]"
            data-aos="fade-down-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="0"
            data-aos-offset="0"
            data-aos-mirror="true"
            data-aos-duration="600"
          >
            <div className="">
              <ul className="font-['Inter'] font-light">
                <li className="my-8 flex  items-start leading-loose tracking-wide">
                  <FontAwesomeIcon
                    icon={faAnglesRight}
                    className="text-ft-red py-2 pr-4"
                  />{' '}
                  We provide packages for a range of budgets
                </li>
                <li className="my-8 flex items-start leading-loose tracking-wide">
                  <FontAwesomeIcon
                    icon={faAnglesRight}
                    className="text-ft-red py-2 pr-4"
                  />{' '}
                  We provide rigorous after-sales support
                </li>
                <li className="my-8 flex items-start leading-loose tracking-wide">
                  <FontAwesomeIcon
                    icon={faAnglesRight}
                    className="text-ft-red py-2 pr-4"
                  />{' '}
                  We are able to develop custom integrations where the market is
                  currently lacking
                </li>
              </ul>
            </div>
            <div>
              <ul className="font-['Inter'] font-light">
                <li className="sm:my-8 flex items-start leading-loose tracking-wide">
                  <FontAwesomeIcon
                    icon={faAnglesRight}
                    className="text-ft-red py-2 pr-4"
                  />{' '}
                  We have access to a large number of industry experts to get
                  you the answers and support you need
                </li>
                <li className="my-8 flex items-start leading-loose tracking-wide">
                  <FontAwesomeIcon
                    icon={faAnglesRight}
                    className="text-ft-red py-2 pr-4"
                  />{' '}
                  We only work with proven suppliers, time is too precious to
                  waste
                </li>
              </ul>
            </div>
          </div>
          <div className="my-24">
            <h3
              className="uppercase text-5xl tracking-widest text-left my-8 "
              data-aos="fade-down-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="0"
              data-aos-offset="0"
              data-aos-mirror="true"
              data-aos-duration="600"
            >
              Our Future
            </h3>
            <p
              className="max-w-[960px] font-['Inter'] font-light"
              data-aos="fade-down-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="0"
              data-aos-offset="0"
              data-aos-mirror="true"
              data-aos-duration="600"
            >
              We aim to push Australian UAV technologies to the bleeding edge
              globally. We don&apos;t just do sales and support. We are constantly
              looking for opportunities to develop products and packages that
              solve real world problems. If you&apos;re interested in joining the
              Fliight Crew and changing the world - don&apos;t hesitate to reach out!
            </p>
          </div>

          <h3 className="uppercase text-5xl tracking-widest text-left my-8 ">
            Meet the founders
          </h3>
          <div className="flex flex-col sm:items-center lg:items-start lg:flex-row lg:justify-between my-20 font-['Inter'] font-light ">
            <div className="max-w-[368px] lg:min-w-[xl] lg:max-w-2xl pr-8 mt-0 flex-1">
              <div className="aspect-w-9 aspect-h-16 image-container z-50">
                <img src={kihan} alt="Khan Garcia" className="w-full h-auto" />
              </div>

              <div className="my-8">
                <p className="my-2 text-3xl leading-loose tracking-wide">
                  Kihan Garcia
                </p>
                <p className="my-2 text-xl leading-loose tracking-wide">
                  CEO & Founder
                </p>
                <p className="my-4 leading-loose tracking-wide">
                  Kihan is a mechanical engineer with a passion for design,
                  production and delivery of integrated systems. As CEO, Kihan
                  takes a hands-on approach to managing customer and partner
                  interactions. Aligning technology, project needs and output
                  requirements with project constraints. His practical drone
                  experience in the industry provides valuable insight into
                  market needs and trends. Kihan has extensive experience
                  integrating hardware and software solutions with the correct
                  workflows in order to deliver high-value end-to-end solutions
                  to customers.
                  <br />
                  If you want to get the job done, look no further.
                </p>
                <span className="hover:opacity-50 transition duration-300">
                  <a
                    href="https://www.linkedin.com/in/kihan-garcia-892543124/"
                    target="_blank"
                    rel="noreferrer"
                    className="leading-loose tracking-wide font-['rajdhani'] font-medium inline-flex items-center"
                  >
                    Connect{' '}
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="text-ft-red text-2xl pl-2 rounded"
                    />
                  </a>
                </span>
              </div>
            </div>
            <div className="max-w-[368px] lg:min-w-[xl] lg:max-w-2xl mt-24 pr-8 flex-1">
              <div className="aspect-w-9 aspect-h-16 image-container z-50">
                <img src={john} alt="Jonathan Clark" className="w-full h-auto rounded" />
              </div>
              <div className="my-8">
                <p className="my-2 text-3xl leading-loose tracking-wide">
                  Jonathan Clark
                </p>
                <p className="my-2 text-xl leading-loose tracking-wide">
                  R&D Manager & Founder
                </p>
                <p className="my-4 leading-loose tracking-wide">
                  With over six years at the forefront of Aerial technologies,
                  Jonathan specializes in the development and deployment of
                  cutting-edge solutions including heavy-lift RPAS and VTOL
                  UAVs. His work spans from initial concept through to
                  full-scale production, focusing on custom payloads, remote
                  sensors, and integrated software solutions. Jonathan&apos;s
                  expertise in CAD, programming, and precision manufacturing
                  along with his leadership in project management ensures that
                  projects transition seamlessly from prototype to market-ready
                  products, consistently meeting the complex needs of our
                  clients.
                </p>
                <span className="hover:opacity-50 transition duration-300">
                  <a
                    href="https://www.linkedin.com/in/jonathan-clark-7814b3112/"
                    target="_blank"
                    rel="noreferrer"
                    className="leading-loose tracking-wide font-['rajdhani'] font-medium inline-flex items-center"
                  >
                    Connect{' '}
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="text-ft-red text-2xl pl-2 rounded"
                    />
                  </a>
                </span>
              </div>
            </div>
          </div>
          {/*<div className="mt-40 my-12 max-w-screen">
            <p className="text-4xl leading-10 tracking-wide text-center justify-center my-20 lg:mx-60">
              We serve clients worldwide, providing specialised solutions to unique problems
            </p>
            <LandingIcons />
            <p className="text-4xl leading-10 tracking-wide  text-center justify-center md:mx-40 my-20">
              Partners
            </p>
            <PartnerLogos />
  </div>*/}
        </div>
      </div>
    </div>
  )
}

export default AboutComponent
