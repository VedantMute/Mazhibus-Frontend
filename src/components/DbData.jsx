// DbData.jsx

import React from 'react';
import { useLocation } from 'react-router-dom';

export default function DbData() {
    const location = useLocation();
    const { fromCity, toCity, selectedDate, selectedSeats, orderId, time, code, bus, emailid } = location.state || {};

    console.log("Props received in DbData:", location.state); // Log props received
    
    return (
        <div>
            <p>Database Data</p>
            <p>From City: {fromCity}</p>
            <p>To City: {toCity}</p>
            <p>Selected Date: {selectedDate}</p>
            <p>Selected Seats: {selectedSeats}</p>
            <p>Order ID: {orderId}</p>
            <p>Time: {time}</p>
            <p>Code: {code}</p>
            <p>Bus: {bus}</p>
            <p>Email ID: {emailid}</p>
        </div>
    );
}
