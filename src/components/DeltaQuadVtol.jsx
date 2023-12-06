import map from '../assets/images/dq-vtol-map.jpeg'
import cargo from '../assets/images/dq-vtol-cargo.jpeg'
import view from '../assets/images/dq-vtol-view.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'

function DeltaQuadVtol() {
  const options = [
    {
      heading: 'View',
      subHeading: 'Surveillance & reconnaissance',
      points: [
        'Thermal/IR & RGB',
        'Flight time of up to 110 minutes',
        'autonomous object tracking',
        '360° gimbal & 80x zoom',
        'Live HD video up to 50 KM',
      ],
      image: view,
    },
    {
      heading: 'Map',
      subHeading: 'inspection, mapping & surveying',
      points: [
        'RGB, Multispectral & Thermal/IR',
        'Flight time of up to 110 minutes',
        'Coverage up to 1200HA (3000AC)',
        '61 megapixel camera',
        'Real-time HD Video',
      ],
      image: map,
    },
    {
      heading: 'Cargo',
      subHeading: 'transportation or custom payloads',
      points: [
        'Flight time of up to 2 hours',
        'Full 1.2kg payload available',
        'Payload drop mechanism',
        'Customisations possible',
        'Live FPV Video',
      ],
      image: cargo,
    },
  ]

  return (
    <div className="m-12 md:mx-20 ">
      <div className="">
        <h3 className="text-4xl md:text-5xl uppercase tracking-widest font-medium my-12">
          The complete VTOL Solution
        </h3>
        <p className="tracking-wide leading-loose font-light font-['Inter']">
          Available in three field tested configurations to support your
          organisations unique requirements.
        </p>
        <p className="tracking-wide leading-loose font-light font-['Inter']">
          Select the best system for your needs and let our team take care of
          the rest.
        </p>
      </div>
      <div className="tracking-wide leading-loose text-center flex items-center justify-center mt-16 mb-6">
        <div className="border-b border-ft-dark-grey h-0.5 w-[40%]"></div>
        <span className="mx-12">Options</span>
        <div className="border-b border-ft-dark-grey h-0.5 w-[40%]"></div>
      </div>
      <div className="">
        <ul className="flex flex-col md:flex-row justify-between tracking-wide leading-loose mb-12 text-sm md:text-lg">
          {options.map((option, index) => (
            <li key={index} className="sm:p-4">
              <img
                src={option.image}
                alt={`${option.heading} image`}
                className="w-[380px] h-[380px] inline-flex rounded"
              />
              <h4 className="uppercase text-3xl md:text-4xl leading-10 font-medium my-6">
                #{option.heading}
              </h4>
              <h5 className="uppercase text-xl font-semibold leading-7 my-6">
                {option.subHeading}
              </h5>
              <ul className="flex flex-col mb-20 font-light font-['Inter']">
                {option.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="py-2">
                    <FontAwesomeIcon
                      icon={faAnglesRight}
                      className="text-ft-red pr-4"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default DeltaQuadVtol
