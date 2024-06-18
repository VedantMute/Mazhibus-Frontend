import React from 'react';

const RouteInfo = ({ fromCity, toCity, selectedDate, price }) => {
  
  return (
    <div>
      <p>From: {fromCity}</p>
      <p>To: {toCity}</p>
      <p>Date: {selectedDate}</p>
      <p>Price: {price}</p>
      
    </div>
  );
};

export default RouteInfo;
