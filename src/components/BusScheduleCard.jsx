import React from 'react';

function BusScheduleCard({ fromCity, toCity, departureTime, arrivalTime, stops, amenities, busType, price }) {
  return (
    <div className='px-5 py-2 m-2 mt-5 text-gray-200 bg-fbg rounded-xl lg:max-w-96 border-solid border-2 border-gray-700'>
      <div className="flex justify-between">
        <b>{departureTime}</b> 
        <div><p className='text-gray-500 text-[10px]'>4hr 30 min</p></div>
        <b>{arrivalTime}</b>
      </div>
      <div className="flex justify-between  text-sm">
        <p className='text-slate-300'>{fromCity}</p>
        <p className='text-slate-300'>{toCity}</p>
      </div>
      <div className="flex justify-between mt-2 pb-2">
        <p className='text-gray-500 text-[10px]'>Water bottle | Food</p>
        <p className='text-gray-500 text-[10px]'>{stops} stops | {amenities.join(', ')} </p>
      </div>
      <div className="flex justify-between pt-2 border-t border-slate-700">
        <b className='text-gray-200 '>&#x20B9; {price} </b>
        <p className={busType === 'E-SHIVAI' ? 'text-green-700' : (busType === 'SHIVSHAHI' ? 'text-orange-700' : '')}>{busType}</p>
      </div>
    </div>
  );
}

export default BusScheduleCard;
