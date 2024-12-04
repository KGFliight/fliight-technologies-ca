import resultsThumbnail from '../assets/images/results-thumbnail-1.jpg'
import '../App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function AraceAngelProductElevated() {
  AOS.init()

  return (
    <div className="m-12 md:m-20">
      <div className="mb-20">
        <h2
          className="text-4xl md:text-5xl uppercase tracking-widest font-medium my-0"
          data-aos="fade-down-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="0"
          data-aos-offset="0"
          data-aos-mirror="true"
          data-aos-duration="600"
        >
          Elevated by Arace GCS
        </h2>
        <p
          className="tracking-wide leading-loose my-1 text-lg font-light font-['Inter']"
          data-aos="fade-down-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="0"
          data-aos-offset="0"
          data-aos-mirror="true"
          data-aos-duration="600"
        >
          Optimised for Enterprise and Government Operations
        </p>
        <p
          className="tracking-wide leading-loose my-6 text-lg font-light font-['Inter']"
          data-aos="fade-down-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="0"
          data-aos-offset="0"
          data-aos-mirror="true"
          data-aos-duration="600"
        >
          AGCS builds upon the industry-standard QGroundControl with enhanced
          features tailored to the needs of enterprise and government clients.
          Designed to optimise safety and operational awareness, AGCS delivers
          unmatched performance and reliability.
        </p>
        <div
          className="flex flex-col lg:flex-row items-center gap-8 my-10"
          data-aos="fade-down-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="0"
          data-aos-offset="0"
          data-aos-mirror="true"
          data-aos-duration="600"
        >
          {/* List Items Section */}
          <div className="w-full lg:w-1/2 lg:pr-8">
            <p className="text-lg font-bold font-['Inter']">Key Features:</p>
            <ul className="list-disc list-inside mt-2 ml-4 text-lg leading-loose tracking-wide font-light font-['Inter']">
              <li className="flex items-start mb-2">
                <FontAwesomeIcon
                  icon={faPlus}
                  className="text-ft-red mr-4 mt-2.5 text-lg"
                />
                
                  Intuitive Wind Visualisation: Easily monitor wind speed and
                  direction with a user-friendly widget.
  
              </li>
              <li className="flex items-start mb-2">
                <FontAwesomeIcon
                  icon={faPlus}
                  className="text-ft-red mr-4 mt-2.5 text-lg"
                />
                Accurate Time-to-RTH Calculation: Includes wind considerations
                for precise Return-To-Home (RTH) estimations.
              </li>
              <li className="flex items-start mb-2">
                <FontAwesomeIcon
                  icon={faPlus}
                  className="text-ft-red mr-4 mt-2.5 text-lg"
                />
                Enhanced Fail-Safe Systems: Additional safety protocols
                integrated directly into the flight control system.
              </li>
            </ul>
            <p className="text-lg font-bold font-['Inter'] mt-16">
              Coming Soon:
            </p>
            <ul className="list-disc list-inside mt-2 ml-4 text-lg leading-loose tracking-wide font-light font-['Inter']">
            <li className="flex items-start mb-2">
                <FontAwesomeIcon
                  icon={faPlus}
                  className="text-ft-red mr-4 mt-2.5 text-lg"
                />
                Automatic Log Sync: Simplify post-flight data management with
                seamless log synchronization.
              </li>
              <li className="flex items-start mb-2">
                <FontAwesomeIcon
                  icon={faPlus}
                  className="text-ft-red mr-4 mt-2.5 text-lg"
                />
                Real-Time Telemetry Streaming: Stream telemetry data directly to
                third-party systems for enhanced situational awareness.
              </li>
            </ul>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center my-6">
            <div className="z-50">
              <div className="image-container m-0 my-0">
                <img
                  src={resultsThumbnail}
                  alt="Arace Angel"
                  className="w-96 max-w-96 md:w-[540px] md:max-w-[540px] xl:w-[640px] xl:max-w-[640px] object-contain lg:object-fit rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AraceAngelProductElevated
