import React from 'react';
import Barcode from 'react-barcode';

export default function Tcard() {
  return (
    <div className="flex flex-col items-center bg-dbg justify-center">
      <div className="max-w-md w-full mx-auto bg-gray-950 rounded-3xl">
        <div className="flex flex-col">
          <div className="bg-fbg relative drop-shadow-2xl rounded-3xl p-4 m-2">
            <div className="flex-none sm:flex">
              <div className="relative h-32 w-32 sm:mb-0 mb-3 hidden">
                {/* Placeholder for any image or icon */}
              </div>
              <div className="flex-auto justify-between">
                <div className="flex items-center my-1">
                  <span className="mr-3 rounded-full bg-dbg w-8 h-8">
                    <img
                      src="https://image.winudf.com/v2/image1/Y29tLmJldHMuYWlyaW5kaWEudWlfaWNvbl8xNTU0NTM4MzcxXzA0Mw/icon.png?w=&fakeurl=1"
                      className="h-8 p-1"
                      alt="logo"
                    />
                  </span>
                  <h2 className="font-medium text-white/80">12 Jun</h2>
                </div>
              </div>
            </div>
            <div className=""></div>
            <div className="flex items-center">
              <div className="flex flex-col">
                <div className="w-full flex-none text-white font-bold leading-none">{user.fcity}</div>
              </div>
              <div className="flex flex-col mx-auto text-white">-</div>
              <div className="flex flex-col">
                <div className="w-full flex-none text-white font-bold leading-none">{user.tcity}</div>
              </div>
            </div>
            <div className="border-dashed border-b-2 border-gray-500 my-5 pt-5">
              <div className="absolute rounded-full w-5 h-5 bg-gray-950 -mt-2 -left-2"></div>
              <div className="absolute rounded-full w-5 h-5 bg-gray-950 -mt-2 -right-2"></div>
            </div>
            <div className="flex items-center mb-5 text-sm text-white/80">
              <div className="flex flex-col">
                <span className="text-[10px]">Bus Type</span>
                <div className="font-semibold text-white">{user.ubus}</div>
              </div>
              <div className="flex flex-col ml-auto">
                <span className="text-[10px]">Seat Number</span>
                <div className="font-semibold text-white text-right">{user.useat}</div>
              </div>
            </div>
            <div className="flex items-center mb-4 text-white/80">
              <div className="flex flex-col ">
                <span className='text-[10px]'>Departure</span>
                <div className="font-semibold text-white">{user.utime}</div>
              </div>
              <div className="flex flex-col mx-auto text-sm"></div>
              <div className="flex flex-col text-sm">
                <span className='text-[10px] text-right'>Arrival</span>
                <div className="font-semibold text-white">2:00 PM</div>
              </div>
            </div>
            <div className="border-dashed border-gray-500 border-b-2">
              <div className="absolute rounded-full w-5 h-5 bg-gray-950 -mt-2 -left-2"></div>
              <div className="absolute rounded-full w-5 h-5 bg-gray-950 -mt-2 -right-2"></div>
            </div>
            <div className="flex items-center justify-center px-5 pt-3 text-sm text-white/80">
              <Barcode value="hello" height={50} background='#211f21' lineColor="white"  displayValue={false} /> {/* Replace "barcode" with your actual barcode value */}
              <p className="text-[8px] text-slate-400 text-right">
                  order id : {user.uorder.substring(4)}
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
