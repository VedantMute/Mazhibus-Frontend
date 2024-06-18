import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Barcode from 'react-barcode';

const GetTicketDetails = ({ emailId }) => {
  const [userDetails, setUserDetails] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(-1);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(
          `https://mazhibus.onrender.com/get-user-details?emailid=${emailId}`
        );
        // Sort userDetails by udate in descending order
        const sortedUserDetails = response.data.sort((a, b) => {
          return new Date(b.udate) - new Date(a.udate);
        });
        setUserDetails(sortedUserDetails);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, [emailId]);

  const handleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };
  const generateBarcodeValue = (user) => {
    // Create a unique string by concatenating the relevant fields
    return `${user.useat}|`;
  };
  return (
    <div>
      <div>
        {userDetails.length > 0 ? (
          userDetails.map((user, index) => (
            <div key={index}>
              <div className="flex flex-col items-center mt-2 mb-4 bg-dbg rounded-3xl justify-center">
                <div className="max-w-md w-[94vw]  mx-auto bg-gray-950 rounded-md">
                  <div className="flex flex-col">
                    <div className="bg-fbg relative drop-shadow-2xl rounded-md p-4 m-1">
                      <div className="flex-none sm:flex">
                        <div className="relative h-32 w-32 sm:mb-0 mb-3 hidden">
                          {/* Placeholder for any image or icon */}
                        </div>
                        <div className="flex-auto justify-between">
                          <div className="flex items-center my-1">
                            
                            <h2 className="font-medium text-white/80">{user.udate}</h2>
                          </div>
                        </div>
                      </div>
                      <div className=""></div>
                      <div className="flex items-center pb-2">
                        <div className="flex flex-col">
                          <div className="w-full flex-none text-white font-bold leading-none">{user.fcity}</div>
                        </div>
                        <div className="flex flex-col mx-auto text-white">-</div>
                        <div className="flex flex-col">
                          <div className="w-full flex-none text-white font-bold leading-none">{user.tcity}</div>
                        </div>
                      </div>
                      {expandedIndex === index ? (
                        <div className="transition-all duration-300 ease-in-out">
                          {/* Expanded details */}
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
                              <div className="font-semibold text-white">00:00</div>
                            </div>
                          </div>
                          <div className="border-dashed border-gray-500 border-b-2">
                            <div className="absolute rounded-full w-5 h-5 bg-gray-950 -mt-2 -left-2"></div>
                            <div className="absolute rounded-full w-5 h-5 bg-gray-950 -mt-2 -right-2"></div>
                          </div>
                          <div className="flex items-center justify-center px-5 pt-3 text-sm text-white/80">
                            <Barcode value={generateBarcodeValue(user)} height={50} background='#211f21' lineColor="white" displayValue={false} /> {/* Replace "barcode" with your actual barcode value */}
                            
                          </div>
                          <p className="text-[8px] text-slate-400 text-center">
                              order id : {user.uorder.substring(4)}
                            </p>
                        </div>
                      ) : (
                        <button
                          onClick={() => handleExpand(index)}
                          className="text-sky-200 
                          mt-2 text-[10px] w-full pb-1 absolute bottom-0 left-2 "
                        >
                          View details 
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Fetching tickets........</p>
        )}
      </div>
    </div>
  );
};

GetTicketDetails.propTypes = {
  emailId: PropTypes.string.isRequired,
};

export default GetTicketDetails;
