import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchInput from "./SearchInput";
import DatePickerComponent from './DatePickerComponent';
import logo from '../assets/logo.png'
import banner from '../assets/banner.png'
import { useAuth0 } from '@auth0/auth0-react';


export default function HomePage() {
    const [fromCity, setFromCity] = useState('');
    const [toCity, setToCity] = useState('');
    const [selectedDate, setSelectedDate] = useState('');

    const { user, isAuthenticated } = useAuth0();

    const navigate = useNavigate();

    if (!isAuthenticated) {
        return navigate('/welcome');
    }


    const handleFromCityChange = (newFromCity) => {
        setFromCity(newFromCity);
    };

    const handleToCityChange = (newToCity) => {
        setToCity(newToCity);
    };

    const handleDateChange = (date) => {
        // console.log("Date changed to:", date); // Debugging log
        setSelectedDate(date);
    };

    const formatDate = (dateString) => {
        const options = { day: 'numeric', month: 'short' };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', options).replace(' ', ' ');
    };

    const formattedDate = selectedDate ? formatDate(selectedDate) : '';

    return (
        <>
            <div className='h-screen  bg-dbg'>

            <div className='p-2 bg-fbg'>
                <div
                    style={{
                        background: 'linear-gradient(to right, #E8762F 12%, #F8EAAB 35%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontSize: '24px',
                        paddingLeft: '10px',
                        paddingTop: '6px'
                    }}
                >
                    <p className='flex align-middle h-12'>
                        <img src={logo} alt="" />
                        <div className='text-[14px] pl-3 mt-3'>Mazhibus</div>
                    </p>
                </div>
            </div>
             
            <img  className='h-32 w-screen bg-contain object-cover' src={banner} alt="" />
            
            <div className="bg-fbg pb-8 lg:rounded-b-3xl rounded-b-3xl">
                <div className="w-screen lg:flex flex-row justify-center align-middle gap-4">
                    <div className="flex justify-center">
                        <SearchInput salute="From" onInputChange={handleFromCityChange} />
                    </div>
                    <div className="flex justify-center">
                        <SearchInput salute="Going To" onInputChange={handleToCityChange} />
                    </div>
                    <div className="flex justify-center gap-4 align-middle px-3">
                        <DatePickerComponent onDateChange={handleDateChange} />
                        <Link to="/selectBus" state={{ fromCity, toCity, selectedDate: formattedDate }}>
                            <button className="mt-4 text-white bg-sky-950 rounded-xl px-10 h-14 lg:w-32 w-[170px] hover:bg-slate-700">
                                Search
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}
