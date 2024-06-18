import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import BusScheduleCard from "../components/BusScheduleCard";
import loading from "../assets/loading.gif"

const busSchedules = [
  {
    id: 1,
    fromCity: "Pune",
    toCity: "Aurangabad",
    schedules: [
      { departureTime: "19:00", arrivalTime: "23:30" },
      { departureTime: "11:30", arrivalTime: "16:00" },
      { departureTime: "13:00", arrivalTime: "17:30" },
    ],
    stops: 7,
    amenities: ["non-AC"],
    busType: "Ordinary Bus",
    price:  300,
    ucode: "01",
  },
  {
    id: 2,
    fromCity: "Mumbai",
    toCity: "Pune",
    schedules: [
      { departureTime: "06:00", arrivalTime: "08:30" },
      { departureTime: "08:30", arrivalTime: "11:00" },
      { departureTime: "11:00", arrivalTime: "13:30" },
      { departureTime: "13:30", arrivalTime: "16:00" },
      { departureTime: "16:00", arrivalTime: "18:30" },
      { departureTime: "18:30", arrivalTime: "21:00" },
    ],
    stops: 1,
    amenities: ["AC"],
    busType: "SHIVSHAHI",
    price: 350,
    ucode: "02",
  },
  {
    id: 3,
    fromCity: "Aurangabad",
    toCity: "Nagpur",
    schedules: [
      { departureTime: "05:00", arrivalTime: "16:00" },
      { departureTime: "07:30", arrivalTime: "18:30" },
      { departureTime: "10:00", arrivalTime: "21:00" },
      { departureTime: "12:30", arrivalTime: "23:30" },
      { departureTime: "15:00", arrivalTime: "02:00" },
      { departureTime: "17:30", arrivalTime: "04:30" },
    ],
    stops: 4,
    amenities: ["AC"],
    busType: "E-SHIVAI",
    price: 750,
    ucode: "03",  
  },
  {
    id: 4,
    fromCity: "Pune",
    toCity: "Aurangabad",
    schedules: [
      { departureTime: "11:45", arrivalTime: "16:15" },
      { departureTime: "13:15", arrivalTime: "17:45" },
      { departureTime: "14:45", arrivalTime: "19:15" },
      { departureTime: "16:15", arrivalTime: "20:45" },
      { departureTime: "17:45", arrivalTime: "22:15" },
      { departureTime: "19:15", arrivalTime: "23:45" },
    ],
    stops: 2,
    amenities: ["AC"],
    busType: "SHIVSHAHI",
    price:   100,
    ucode: "04",  
  },
  {
    id: 5,
    fromCity: "Pune",
    toCity: "Aurangabad",
    schedules: [
      { "departureTime": "11:55", "arrivalTime": "16:25" },
      { "departureTime": "13:25", "arrivalTime": "17:55" },
      { "departureTime": "14:55", "arrivalTime": "19:25" },
      { "departureTime": "16:25", "arrivalTime": "20:55" },
      { "departureTime": "17:55", "arrivalTime": "22:25" },
      { "departureTime": "19:25", "arrivalTime": "23:55" },
    ],
    stops: 2,
    amenities: ["AC"],
    busType: "E-SHIVAI",
    price:   500,
    ucode: "05",  
  },
  
  
  // Add more bus schedules as needed
];

export default function BusSearch() {
  const location = useLocation();
  const { fromCity, toCity, selectedDate } = location.state || {};

  // Handle cases where state might be undefined
  if (!fromCity ||!toCity) {
    return <>
    <div>Invalid search parameters. Please go back and try again.</div></>;
  }

  // Filter the bus schedules based on the search parameters
  const filteredSchedules = busSchedules
   .filter(
      (schedule) => schedule.fromCity === fromCity && schedule.toCity === toCity
    )
   .flatMap((schedule) =>
      schedule.schedules.map((time, index) => ({
       ...schedule,
        departureTime: time.departureTime,
        arrivalTime: time.arrivalTime,
        scheduleId: `${schedule.id}-${index}`,
      }))
    )
   .sort((a, b) => {
      const [aHours, aMinutes] = a.departureTime.split(":").map(Number);
      const [bHours, bMinutes] = b.departureTime.split(":").map(Number);
      return aHours * 60 + aMinutes - (bHours * 60 + bMinutes);
    });

  const [loadingState, setLoadingState] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingState(false);
    }, 2000); // 2 seconds
  }, []);

  return (
    <div className="bg-fbg">
      <div className="flex text-white justify-center align-middle p-8">
        <Link to="/">
          <div className="p-2 absolute left-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-circle-arrow-left"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M16 12H8" />
              <path d="m12 8-4 4 4 4" />
            </svg>
          </div>
        </Link>
        <div className="px-6 py-1">
          {fromCity} - {toCity}
          <br />
          <p className="text-[14px] text-center mt-1 text-gray-400">{selectedDate}</p>
        </div>
      </div>
      <div className="bg-slate-800 rounded-t-3xl pt-[2px] pb-24">
        {loadingState? (
          <div className="h-screen">
            <div className="flex justify-center p-8 ">
            <img src={loading} alt="Loading..." />
          </div>
            <p className="text-lg text-center">Loading...</p>
          </div>
        ) : (
          filteredSchedules.length > 0? (
            filteredSchedules.map((schedule) => (
              <Link to="/seat" state={{ fromCity, toCity, selectedDate, price: schedule.price, time: schedule.departureTime, code: schedule.ucode , bus:schedule.busType}}>
                <BusScheduleCard
                  key={schedule.scheduleId}
                  fromCity={schedule.fromCity}
                  toCity={schedule.toCity}
                  departureTime={schedule.departureTime}
                  arrivalTime={schedule.arrivalTime}
                  stops={schedule.stops}
                  amenities={schedule.amenities}
                  busType={schedule.busType}
                  price={schedule.price}
                />
              </Link>
            ))
          ) : (
            <div className="text-center p-8">
              Shit Yaar! <br />
              No Buses found.
            </div>
          )
        )}
      </div>
    </div>
  );
}