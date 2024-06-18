import React from 'react';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';

export default function BottomBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100vw" }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={handleChange}
        sx={{
          bgcolor: 'rgb(30 41 59)', // Background color
          color: 'white' // Text color
        }}
      >
        <BottomNavigationAction
          component={NavLink}
          to="/"
          label="Home"
          icon={<HomeIcon sx={{ color: value === 0 ? 'rgb(3 105 161)' : 'white' }} />} // Icon color
          sx={{ color: 'white' }} // Text color
        />
        <BottomNavigationAction
          component={NavLink}
          to="/tickets"
          label="Tickets"
          icon={<ConfirmationNumberIcon sx={{ color: value === 1 ? 'rgb(3 105 161)' : 'white' }} />} // Icon color
          sx={{ color: 'white' }} // Text color
        />
        <BottomNavigationAction
          component={NavLink}
          to="/accounts"
          label="Account"
          icon={<AccountCircleIcon sx={{ color: value === 2 ? 'rgb(3 105 161)' : 'white' }} />} // Icon color
          sx={{ color: 'white' }} // Text color
        />
      
        <BottomNavigationAction
          component={NavLink}
          to="/explore"
          label="Explore"
          icon={<ExploreIcon sx={{ color: value === 3 ? 'rgb(3 105 161)' : 'white' }} />} // Icon color
          sx={{ color: 'white' }} // Text color
        />
        
      </BottomNavigation>
    </Box>
  );
}
