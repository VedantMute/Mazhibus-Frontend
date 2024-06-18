import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import logo from '../assets/logo.png'
import steering from '../assets/wheel.png'
import HeaderNav from './HeaderNav';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

const SeatSelect = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { fromCity, toCity, selectedDate, price, time, code, bus } = location.state || {};
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [orderId, setOrderId] = useState(null);
  const user = useAuth0();
  const [seats, setSeats] = useState(null); // Define state for seats
  const [seatArray, setSeatArray] = useState([]); // Define state for seatArray

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const toggleSeatSelection = (seatNumber) => {
    if (seatArray.includes(seatNumber)) {
      return; // Do nothing if seat is already booked
    }

    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      if (selectedSeats.length < 4) {
        setSelectedSeats([...selectedSeats, seatNumber]);
      } else {
        alert('You can only select up to 4 seats.');
      }
    }
  };

  const generateSeatNumber = (index) => {
    const row = Math.floor(index / 4) + 1; 
    const seatNumber = (index % 4) + 1; 
    return `S${row}${seatNumber}`;
  };
 
 const handlePayment = async () => {
  
  const options = {
    key: import.meta.env.VITE_RPAY, 
    amount: selectedSeats.length * price * 100, // Amount in paisa
    currency: 'INR',
    name: 'Mazhi Bus',
    description: 'Payment for ticket boking',
    image: logo,
    prefill: {
      name: user.name,
      email: user.email,
      contact: '9999999999',
    },
    handler: (response) => {
      const { razorpay_payment_id } = response;
      setOrderId(razorpay_payment_id);
      navigate('/success', { state: {fromCity, toCity, selectedDate, selectedSeats, orderId: razorpay_payment_id, time, code, bus } });
    },
    modal: {
      ondismiss: function () {
        console.log('Payment form closed');
      },
    },
  };

  const rzp = new window.Razorpay(options);
  rzp.on('payment.failed', function (response) {
    console.error('Payment Failed:', response.error);
  });

  rzp.open();
};

useEffect(() => {
  const fetchSelectedSeats = async () => {
    try {
      const response = await axios.get(`https://mazhibus.onrender.com/get-selected-seats?fcity=${fromCity}&tcity=${toCity}&udate=${selectedDate}&utime=${time}`);
      setSeats(response.data); // Update seats state with response data
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching selected seats:', error);
    }
  };

  fetchSelectedSeats(); // Call the function to fetch selected seats when component mounts
}, []); // Empty dependency array ensures this effect runs only once on mount

useEffect(() => {
  if (seats) {
    let seatNumbers = [];
    seats.forEach(seat => {
      if (seat.useat.includes(',')) {
        seatNumbers = [...seatNumbers, ...seat.useat.split(',').map(s => s.trim())];
      } else {
        seatNumbers.push(seat.useat);
      }
    });
    setSeatArray(seatNumbers);
  }
}, [seats]);

console.log("Seat Array:", seatArray);


  const totalPrice = selectedSeats.length * price;

  return (
    <div className="bg-fbg rounded-b-lg">
      <HeaderNav title="Select Seats"/>
      <div className="text-center text-[14px] text-gray-300 pb-3">
        {fromCity} - {toCity} <br /> {selectedDate}, {time}
      </div>
      <div className="bg-slate-800 rounded-t-3xl pb-44">
        {/* Selected Seats display */}
        {selectedSeats.length > 0 && (
          <div className="bg-green-500 rounded-t-xl text-[12px] text-black p-2 text-center mb-4">
            Selected Seats: {selectedSeats.join(', ')}
          </div>
        )}
        {/* Seats grid */}
        <div className="grid grid-cols-4 lg:gap-4 gap-2 text-center pt-4 max-w-2xl mx-auto lg:pr-8 pl-4 mt-3 ">
          <div className="h-10 w-44"></div>
          <div className="h-10 w-1"></div>
          <div className="h-10 w-1"></div>
          <div className="h-8 w-8 "><img src={steering}   alt="steering wheel" /></div>
        </div>
        <div className="flex justify-center gap-[10vw] pt-4">
          {/* First 20 seats */}
          <div className="grid grid-cols-2 lg:gap-4 gap-2 text-center">
            {[...Array(20)].map((_, index) => {
              const seatNumber = generateSeatNumber(index);
              // Check if seat is booked
              const isBooked = seatArray.includes(seatNumber);
              return (
                <div
                  key={index}
                  className={`h-10 w-14 rounded-xl cursor-pointer ${
                    selectedSeats.includes(seatNumber)
                      ? 'bg-green-500'
                      : isBooked
                        ? 'bg-slate-700' // Change color if booked
                        : 'bg-slate-400/80'
                  }`}
                  onClick={() => toggleSeatSelection(seatNumber)}
                  style={{ pointerEvents: isBooked ? 'none' : 'auto' }} // Disable click if booked
                >
                  {seatNumber}
                </div>
              );
            })}
          </div>
          {/* Next 20 seats */}
          <div className="grid grid-cols-2 lg:gap-4 gap-2 text-center">
            {[...Array(20)].map((_, index) => {
              const seatNumber = generateSeatNumber(index + 20);
              const isBooked = seatArray.includes(seatNumber);
              return (
                <div
                  key={index}
                  className={`h-10 w-14 rounded-xl cursor-pointer ${
                    selectedSeats.includes(seatNumber)
                      ? 'bg-green-500'
                      : isBooked
                        ? 'bg-slate-700'
                        : 'bg-slate-400/80'
                  }`}
                  onClick={() => toggleSeatSelection(seatNumber)}
                  style={{ pointerEvents: isBooked ? 'none' : 'auto' }} // Disable click if booked
                >
                  {seatNumber}
                </div>
              );
            })}
          </div>
        </div>
        <p className="text-center mt-4 text-[8px] text-white">---- End of seats ----</p>
        {/* Payment success message */}
        {orderId && <p>Payment Successful! Order ID: {orderId}</p>}
        {/* Payment button */}
        {selectedSeats.length > 0 && (
          <div className="max-w-2xl mx-auto">
            <div className="fixed bottom-16 w-screen text-white bg-fbg py-4 px-6 max-w-2xl mx-auto rounded-t-xl">
              <div className="flex justify-between">
                <p className="pt-1">
                  <b>&#x20B9; {totalPrice}/-</b>
                  <span className="text-gray-500 text-[12px] ml-6">
                    {selectedSeats.length} x {price}/-
                  </span>
                </p>
                <Button  variant="contained" onClick={handlePayment}>
                  Pay
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SeatSelect;
