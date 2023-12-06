import iconDrone from '../assets/images/icon-drone.png'

function DeltaQuadProInfo() {
  return (
    <div className="m-8 md:m-20">
      <div className="mb-24">
        <h2 className="text-5xl uppercase tracking-widest font-medium my-12">Introduction Heading</h2>
        <p className="tracking-wide leading-loose my-6"> 
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
          molestiae dignissimos deserunt accusantium amet officia! Nisi
          similique, ea amet hic assumenda, doloribus temporibus ipsa obcaecati
          natus quasi architecto officiis distinctio quaerat fugiat, perferendis
          minima earum. Pariatur aliquid quae mollitia quas.
        </p>
      </div>
      <div className="mb-24">
        <h3 className="text-5xl uppercase tracking-widest font-medium my-12">Game changing technology</h3>
        <ul className="tracking-wide leading-loose my-6 text-sm md:text-lg">
          <li className="bg-ft-dark-grey p-2 m-2">
          <img
              src={iconDrone}
              alt="drone icon"
              className="w-[40px] h-[40px] m-2 inline-flex "
            />
            {' '}
            Up to 150 KM Flight Distance</li>
          <li className="bg-ft-dark-grey p-2 m-2">
          <img
              src={iconDrone}
              alt="drone icon"
              className="w-[40px] h-[40px] m-2 inline-flex "
            />
            {' '}Full Automation</li>
          <li className="bg-ft-dark-grey p-2 m-2">
          <img
              src={iconDrone}
              alt="drone icon"
              className="w-[40px] h-[40px] m-2 inline-flex "
            />
            {' '}Redundant Communication links</li>
          <li className="bg-ft-dark-grey p-2 m-2">
          <img
              src={iconDrone}
              alt="drone icon"
              className="w-[40px] h-[40px] m-2 inline-flex "
            />
            {' '}Local Support and SLA</li>
          <li className="bg-ft-dark-grey p-2 m-2">
          <img
              src={iconDrone}
              alt="drone icon"
              className="w-[40px] h-[40px] m-2 inline-flex "
            />
            {' '}1 Minute field assembly</li>
          <li className="bg-ft-dark-grey p-2 m-2">
          <img
              src={iconDrone}
              alt="drone icon"
              className="w-[40px] h-[40px] m-2 inline-flex "
            />
            {' '}1.2kg Payload capacity</li>
          <li className="bg-ft-dark-grey p-2 m-2">
          <img
              src={iconDrone}
              alt="drone icon"
              className="w-[40px] h-[40px] m-2 inline-flex "
            />
            {' '}Fly in Rain or Snow</li>
        </ul>
      </div>
      <div className="mb-20">
        <h3 className="text-5xl uppercase tracking-widest font-medium my-12">End-to-end deployment packages</h3>
        <p className="tracking-wide leading-loose my-6">
          Let us enable your vision for long range drone (RPAS) operations via our turnkey offerings with:
        </p>
        <ul className="tracking-wide leading-loose my-6 text-sm md:text-lg">
          <li className="bg-ft-dark-grey p-2 m-2">
          <img
              src={iconDrone}
              alt="drone icon"
              className="w-[40px] h-[40px] m-2 inline-flex "
            />
            {' '}
            Support and warranty</li>
          <li className="bg-ft-dark-grey p-2 m-2">
          <img
              src={iconDrone}
              alt="drone icon"
              className="w-[40px] h-[40px] m-2 inline-flex "
            />
            {' '}Certified Training</li>
          <li className="bg-ft-dark-grey p-2 m-2">
          <img
              src={iconDrone}
              alt="drone icon"
              className="w-[40px] h-[40px] m-2 inline-flex "
            />
            {' '}Regulatory compliance packages</li>
          <li className="bg-ft-dark-grey p-2 m-2">
          <img
              src={iconDrone}
              alt="drone icon"
              className="w-[40px] h-[40px] m-2 inline-flex "
            />
            {' '}Data processing and management</li>
          
        </ul>
      </div>
    </div>
  )
}

export default DeltaQuadProInfo
