import React, { useEffect } from 'react';
import axios from 'axios';

const SendData = ({ name, emailid, fcity, tcity, udate, useat, utime, ubus, uorder }) => {
  useEffect(() => {
    console.log('Props received in SendData:', { name, emailid,fcity, tcity, udate, useat, utime, ubus, uorder });

    const sendDataToAPI = async () => {
      const payload = {
        name,
        emailid,
        fcity,
        tcity, 
        udate, 
        useat: Array.isArray(useat) ? useat.join(', ') : useat,
        utime, 
        ubus, 
        uorder,
        
      };

      console.log('Payload being sent:', payload);

      try {
        const response = await axios.post('https://mazhibus.onrender.com/add-user', payload);
        console.log('Response data:', response.data);
        alert('User added successfully');
      } catch (error) {
        console.error('There was an error adding the user!', error);
      }
    };

    sendDataToAPI(); // Trigger API call when component mounts or when props change
  }, [name, emailid, fcity, tcity, udate, useat, utime, ubus, uorder]); // Re-run effect when props change

  return (
    <div>

    </div>
  );
};

export default SendData;
