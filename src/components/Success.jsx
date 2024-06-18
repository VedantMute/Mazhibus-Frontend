import React from "react";
import { Link, useLocation } from "react-router-dom";
import successgif from "../assets/success.gif";
import { useAuth0 } from "@auth0/auth0-react";
import HeaderNav from "./HeaderNav";
import { ConfirmEmailSend } from "./ConfirmEmailSend";
import SendData from "../database/SendData";

export default function Success() {
  const location = useLocation();
  const { user, isAuthenticated } = useAuth0();
  const { fromCity, toCity, selectedDate, selectedSeats, orderId, time, code, bus } = location.state || {};

  const message = `From: ${fromCity}\nTo: ${toCity}\nOn: ${selectedDate}\nSelected Seats: ${selectedSeats}\nYour Order ID: ${orderId}`;

  let name = "";
  let emailid = "";

  if (isAuthenticated) {
    name = user.name;
    emailid = user.email;
  }

  console.log('Props being passed to SendData:', { name, emailid, selectedDate, selectedSeats });

  return (
    <>
      <div className="h-screen bg-fbg">
        <HeaderNav title="Booking" />
        <div className="py-14 max-w-lg mx-auto bg-dbg rounded-3xl">
          <div className="flex justify-center ">
            <img src={successgif} alt="Success" />
          </div>
          <p className="text-center mt-5 text-gray-300">Ticket Booked Successfully</p>
          <div className="text-center mt-5 bg-fbg text-white rounded-3xl  m-2">
            <div className="bg-yellow-800 p-4 rounded-3xl flex justify-between px-8">
              <div className="text-3xl font-extrabold w-24 border-r-2 border-r-gray-900 border-dashed px-4">
                {selectedDate}
              </div>
              <div className="w-96 mt-5 text-2xl">{time}</div>
            </div>
            <div className="flex justify-center mt-4 pb-2 font-extrabold">
              {fromCity} - {toCity}
            </div>
            <div className="flex justify-center mt-1 p-2 rounded-b-3xl">
              {bus} - {selectedSeats}
            </div>
          </div>
          <div className="ml-5 mt-10 bg text-center text-[10px] text-gray-300">
            <p>
              Order ID: {orderId} , {code} <br /> Email sent to: {emailid}
            </p>
          </div>
          {isAuthenticated && (
            <ConfirmEmailSend name={name} emailid={emailid} message={message} />
          )}
         
          <SendData name={name} emailid={emailid} fcity={fromCity} tcity={toCity} udate={selectedDate} useat={selectedSeats} utime={time} ubus={bus} uorder={orderId}/>
        </div>
      </div>
    </>
  );
}
