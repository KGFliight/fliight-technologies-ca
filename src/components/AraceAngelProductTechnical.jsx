import araceAngelDrawing from '../assets/images/arace-angel-5.png';


function AraceAngelProductTechnical() {
  return (
    <div className="pb-8 bg-white">
      <img
        src={araceAngelDrawing}
        alt="Arace Angel Drawing"
        className="pt-16 md:px-32 md:pt-16 flex justify-center w-full"
      />
      <div className="m-4 md:m-8 leading-loose tracking-wide px-8 md:px-20">
        <h3 className="uppercase text-ft-black text-3xl md:text-5xl my-4">
          Technical Specs
        </h3>
        <div className="flex flex-col md:flex-row my-2">
          <div className="flex-1 mr-2 md:mr-8">
            <div className="uppercase text-ft-black text-2xl md:text-4xl my-4">
              Dimensions
              <div className="bg-ft-white p-4 my-2 flex text-lg normal-case rounded mt-6 font-light font-['Inter'] items-center">
                <div className="flex-1 ">Diagonal Size (Props Folded)</div>
                <div className="flex-1 ml-8">82cm</div>
              </div>
              <div className="bg-ft-white p-4 my-2 flex text-lg normal-case rounded font-light font-['Inter'] items-center">
                <div className="flex-1">Landing & Takeoff Area</div>
                <div className="flex-1 ml-8">1m x 1m</div>
              </div>
            </div>
          </div>
          <div className="flex-1 mr-2 md:mr-8">
            <div className="uppercase text-ft-black text-2xl md:text-4xl my-4">
              Weight
              <div className="bg-ft-white p-4 my-2 flex text-lg normal-case rounded mt-6 font-light font-['Inter'] items-center">
                <div className="flex-1">Maximum Takeoff Weight</div>
                <div className="flex-1 ml-8">6kg</div>
              </div>
              <div className="bg-ft-white p-4 my-2 flex text-lg normal-case rounded font-light font-['Inter'] items-center">
                <div className="flex-1">Airframe Weight</div>
                <div className="flex-1 ml-8">4.1kg</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row my-2">
          <div className="flex-1 mr-2 md:mr-8">
            <div className="uppercase text-ft-black text-2xl md:text-4xl my-4">
              Single Battery performance
              <div className="bg-ft-white p-4 my-2 flex text-lg normal-case rounded mt-6 font-light font-['Inter'] items-center">
                <div className="flex-1">Maximum Flight Time</div>
                <div className="flex-1 ml-8">100 mins @ 0.5kg Payload</div>
              </div>
              <div className="bg-ft-white p-4 my-2 flex text-lg normal-case rounded font-light font-['Inter'] items-center">
                <div className="flex-1">Maximum Flight Path Length</div>
                <div className="flex-1 ml-8">64km</div>
              </div>
              <div className="bg-ft-white p-4 my-2 flex text-lg normal-case rounded font-light font-['Inter'] items-center">
                <div className="flex-1">Controller Range</div>
                <div className="flex-1 ml-8">20km</div>
              </div>
              <div className="bg-ft-white p-4 my-2 flex text-lg normal-case rounded font-light font-['Inter'] items-center">
                <div className="flex-1">Payload capacity</div>
                <div className="flex-1 ml-8">1.9kg</div>
              </div>
            </div>
          </div>
          <div className="flex-1 mr-2 md:mr-8">
          </div>
        </div>
      </div>
    </div>
  );
}

export default AraceAngelProductTechnical;
