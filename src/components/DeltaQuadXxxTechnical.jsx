import React from 'react';
import evoDrawing from '../assets/images/evo-drawing.jpeg';


function DeltaQuadXxxTechnical() {
  return (
    <div className="pl-8 md:pl-20 pb-8 bg-white">
      <img
        src={evoDrawing}
        alt="Evo Drawing"
        className="px-8 py-8 md:px-32 md:py-16 flex justify-center w-full"
      />
      <div className="m-4 md:m-8">
        <h3 className="uppercase text-ft-black text-3xl md:text-5xl my-8">
          Technical specs
        </h3>
        <div className="flex flex-col md:flex-row my-2">
          <div className="flex-1 mr-2 md:mr-8">
            <div className="uppercase text-ft-black text-2xl md:text-4xl my-4">
              Dimensions
              <div className="bg-ft-grey p-2 my-2 flex text-lg md:text-xl normal-case rounded">
                <div className="flex-1 ">Wingspan</div>
                <div className="flex-1">269cm</div>
              </div>
              <div className="bg-ft-grey p-2 my-2 flex text-lg md:text-xl normal-case rounded">
                <div className="flex-1">Payload bay (cm)</div>
                <div className="flex-1">20 * 20 * 10</div>
              </div>
            </div>
          </div>
          <div className="flex-1 mr-2 md:mr-8">
            <div className="uppercase text-ft-black text-2xl md:text-4xl my-4">
              Weight
              <div className="bg-ft-grey p-2 my-2 flex text-lg md:text-xl normal-case rounded">
                <div className="flex-1">Maximum Takeoff Weight</div>
                <div className="flex-1">9kg</div>
              </div>
              <div className="bg-ft-grey p-2 my-2 flex text-lg md:text-xl normal-case rounded">
                <div className="flex-1">Airtime</div>
                <div className="flex-1">6kg</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row my-2">
          <div className="flex-1 mr-2 md:mr-8">
            <div className="uppercase text-ft-black text-2xl md:text-4xl my-4">
              Single Battery performance
              <div className="bg-ft-grey p-2 my-2 flex text-lg md:text-xl normal-case rounded">
                <div className="flex-1">Maximum Flight Time</div>
                <div className="flex-1">3 hours</div>
              </div>
              <div className="bg-ft-grey p-2 my-2 flex text-lg md:text-xl normal-case rounded">
                <div className="flex-1">Maximum Flight Range</div>
                <div className="flex-1">170 km</div>
              </div>
              <div className="bg-ft-grey p-2 my-2 flex text-lg md:text-xl normal-case rounded">
                <div className="flex-1">Payload capacity</div>
                <div className="flex-1">3 kg</div>
              </div>
            </div>
          </div>
          <div className="flex-1 mr-2 md:mr-8">
            <div className="uppercase text-ft-black text-2xl md:text-4xl my-4">
              Dual Battery performance
              <div className="bg-ft-grey p-2 my-2 flex text-lg md:text-xl normal-case rounded">
                <div className="flex-1">Maximum Flight Time</div>
                <div className="flex-1">4.5 hours</div>
              </div>
              <div className="bg-ft-grey p-2 my-2 flex text-lg md:text-xl normal-case rounded">
                <div className="flex-1">Maximum Flight Range</div>
                <div className="flex-1">280 km</div>
              </div>
              <div className="bg-ft-grey p-2 my-2 flex text-lg md:text-xl normal-case rounded">
                <div className="flex-1">Payload Capacity</div>
                <div className="flex-1">1 kg</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeltaQuadXxxTechnical;
