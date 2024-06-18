import React from "react";
import HeaderNav from "./HeaderNav";


export default function More() {
  return (
    <div className="bg-dbg h-screen">
      <div className="bg-fbg">
      <HeaderNav title="Explore" />
      <div className=" bg-dbg rounded-t-3xl text-white">
      <div className="grid grid-cols-3 gap-2 px-3 pt-3 ">
        <div className=" rounded-2xl h-24 flex justify-center items-center  col-span-2 bg-yellow-800/90 ">Parcel Service</div>
        <div className=" rounded-2xl h-24 flex justify-center items-center  bg-rose-800/80">Offers</div>
        <div className=" rounded-2xl h-24 flex justify-center items-center  bg-sky-800">Fleet</div>
        <div className=" rounded-2xl h-24 flex justify-center items-center  col-span-2 bg-emerald-800/50">Image Gallery</div>
      </div>
      </div>
    </div>
    </div>
  );
}
