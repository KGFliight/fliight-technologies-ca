import phoenixDrawing from '../assets/images/Phoenix-line.svg';

function AracePhoenixProductTechnical() {
  return (
    <div className="pb-8 bg-white">
      <img
        src={phoenixDrawing}
        alt="Arace Phoenix Drawing"
        className="pt-16 md:px-32 md:pt-16 flex justify-center w-full"
      />
      <div className="m-4 md:m-8 leading-loose tracking-wide px-8 md:px-20">
        <h3 className="uppercase text-ft-black text-3xl md:text-5xl my-4">
          Technical Specs
        </h3>
        <div className="flex flex-col md:flex-row my-2">
          <div className="flex-1 mr-2 md:mr-8">
            <div className="uppercase text-ft-black text-2xl md:text-4xl my-4">Dimensions
              <div className="bg-ft-white p-4 my-2 flex text-lg normal-case rounded mt-6 font-light font-['Inter'] items-center">
                <div className="flex-1">Wingspan</div>
                <div className="flex-1 ml-8">2.29 m</div>
              </div>
            </div>
          </div>
          <div className="flex-1 mr-2 md:mr-8">
            <div className="uppercase text-ft-black text-2xl md:text-4xl my-4">Weight
              <div className="bg-ft-white p-4 my-2 flex text-lg normal-case rounded mt-6 font-light font-['Inter'] items-center">
                <div className="flex-1">Maximum Takeoff Weight</div>
                <div className="flex-1 ml-8">12.5 kg</div>
              </div>
              <div className="bg-ft-white p-4 my-2 flex text-lg normal-case rounded font-light font-['Inter'] items-center">
                <div className="flex-1">Maximum Payload Capacity</div>
                <div className="flex-1 ml-8">2 kg</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row my-2">
          <div className="flex-1 mr-2 md:mr-8">
            <div className="uppercase text-ft-black text-2xl md:text-4xl my-4">Performance
              <div className="bg-ft-white p-4 my-2 flex text-lg normal-case rounded mt-6 font-light font-['Inter'] items-center">
                <div className="flex-1">Maximum Flight Time</div>
                <div className="flex-1 ml-8">Up to 6 hours (350 min)</div>
              </div>
              <div className="bg-ft-white p-4 my-2 flex text-lg normal-case rounded font-light font-['Inter'] items-center">
                <div className="flex-1">Most Efficient Cruise Speed</div>
                <div className="flex-1 ml-8">16 m/s</div>
              </div>
              <div className="bg-ft-white p-4 my-2 flex text-lg normal-case rounded font-light font-['Inter'] items-center">
                <div className="flex-1">Maximum Speed</div>
                <div className="flex-1 ml-8">32 m/s</div>
              </div>
              <div className="bg-ft-white p-4 my-2 flex text-lg normal-case rounded font-light font-['Inter'] items-center">
                <div className="flex-1">Maximum Altitude</div>
                <div className="flex-1 ml-8">5,000 m AMSL</div>
              </div>
            </div>
          </div>
          <div className="flex-1 mr-2 md:mr-8">
            <div className="uppercase text-ft-black text-2xl md:text-4xl my-4">Other
              <div className="bg-ft-white p-4 my-2 flex text-lg normal-case rounded mt-6 font-light font-['Inter'] items-center">
                <div className="flex-1">Wind resistance at ground level</div>
                <div className="flex-1 ml-8">14 m/s</div>
              </div>
              <div className="bg-ft-white p-4 my-2 flex text-lg normal-case rounded font-light font-['Inter'] items-center">
                <div className="flex-1">Power</div>
                <div className="flex-1 ml-8">100% Electric</div>
              </div>
              <div className="bg-ft-white p-4 my-2 flex text-lg normal-case rounded font-light font-['Inter'] items-center">
                <div className="flex-1">Take-off & Landing Area</div>
                <div className="flex-1 ml-8">5x5m clear area (VTOL)</div>
              </div>
              <div className="bg-ft-white p-4 my-2 flex text-lg normal-case rounded font-light font-['Inter'] items-center">
                <div className="flex-1">Autonomy</div>
                <div className="flex-1 ml-8">Full autonomous capabilities with high-end components</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AracePhoenixProductTechnical; 