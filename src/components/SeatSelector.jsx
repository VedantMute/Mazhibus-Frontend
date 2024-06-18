import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SeatSelector = () => {
  const [seats, setSeats] = useState(null); // Define state for seats
  const [seatArray, setSeatArray] = useState([]); // Define state for seatArray

  useEffect(() => {
    const fetchSelectedSeats = async () => {
      try {
        const response = await axios.get("http://localhost:5000/get-selected-seats?fcity=Aurangabad&tcity=Nagpur&udate=7 Jun&utime=10:00");
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

  return (
    <div>
      <h2>Seat Selector</h2>
      {seats && (
        <div>
          <h3>Selected Seats:</h3>
          <ul>
            {seats.map((seat, index) => (
              <li key={index}>{seat.useat}</li> 
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SeatSelector;
