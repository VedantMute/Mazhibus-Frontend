import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          backgroundColor: '#1C1E25',
          color: 'white',
        },
        option: {
          color: 'white',
          '&[data-focus="true"]': {
            backgroundColor: 'grey',
          },
          '&[aria-selected="true"]': {
            backgroundColor: 'grey',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
            borderBottom: '1px solid white',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderBottom: '1px solid white',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderBottom: '1px solid #0c4a6e',
          },
          '& .MuiInputBase-input': {
            color: 'white',
          },
          '& .MuiInputLabel-root': {
            color: 'white',
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: 'blue',
          },
          '& .MuiAutocomplete-inputRoot': {
            color: 'white',
          },
          borderRadius: 0,
        },
      },
    },
  },
});

export default function SearchInput({ salute, onInputChange }) {
  const [inputValue, setInputValue] = React.useState('');

  const handleInputChange = (event, newInputValue) => {
    setInputValue(newInputValue);
    onInputChange(newInputValue);  // Call the parent callback
  };

  return (
    <ThemeProvider theme={theme}>
      <div className='mt-4'>
        <Stack spacing={2} sx={{ width: 300 }}>
          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={top100Films.map((option) => option.title)}
            onInputChange={handleInputChange}
            renderInput={(params) => (
              <TextField
                {...params}
                label={salute}
                InputProps={{
                  ...params.InputProps,
                  type: 'search',
                }}
                sx={{
                  '& .MuiInputBase-input': {
                    color: 'white', // Input text color
                  },
                  '& .MuiInputLabel-root': {
                    color: 'white', // Placeholder text color
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white', // Border color
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white', // Border color on hover
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white', // Border color when focused
                  },
                }}
              />
            )}
          />
        </Stack>
      </div>
    </ThemeProvider>
  );
}
const top100Films = [
  { title: 'Ahmednagar' },
  { title: 'Akola' },
  { title: 'Amravati' },
  { title: 'Aurangabad' },
  { title: 'Beed' },
  { title: 'Bhandara' },
  { title: 'Buldhana' },
  { title: 'Chandrapur' },
  { title: 'Dhule' },
  { title: 'Gadchiroli' },
  { title: 'Gondia' },
  { title: 'Hingoli' },
  { title: 'Jalgaon' },
  { title: 'Jalna' },
  { title: 'Kolhapur' },
  { title: 'Latur' },
  { title: 'Mumbai' },
  { title: 'Mumbai Suburban' },
  { title: 'Nagpur' },
  { title: 'Nanded' },
  { title: 'Nandurbar' },
  { title: 'Nashik' },
  { title: 'Osmanabad' },
  { title: 'Palghar' },
  { title: 'Parbhani' },
  { title: 'Pune' },
  { title: 'Raigad' },
  { title: 'Ratnagiri' },
  { title: 'Sangli' },
  { title: 'Satara' },
  { title: 'Sindhudurg' },
  { title: 'Solapur' },
  { title: 'Thane' },
  { title: 'Wardha' },
  { title: 'Washim' },
  { title: 'Yavatmal' },
];
