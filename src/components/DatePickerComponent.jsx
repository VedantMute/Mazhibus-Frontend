import React, { useState, useEffect, useRef } from 'react';

const DatePickerComponent = ({ onDateChange }) => {
    const [selectedDate, setSelectedDate] = useState('');
    const dateInputRef = useRef(null);

    // Set default date to today's date on component mount
    useEffect(() => {
        if (!selectedDate) {
            const today = new Date().toISOString().split('T')[0];
            setSelectedDate(today);
            onDateChange(today);
        }
    }, [selectedDate, onDateChange]);

    const handleDateChange = (e) => {
        const newDate = e.target.value;
        setSelectedDate(newDate);
        onDateChange(newDate);
    };

    const openDatePicker = () => {
        if (dateInputRef.current) {
            dateInputRef.current.showPicker(); // Use showPicker() to open the date picker
        }
    };

    // Format the date to display only the date and month in "1 May" format
    const formatDate = (dateString) => {
        const options = { day: 'numeric', month: 'short' };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', options).replace(' ', ' ');
    };

    const formattedDate = selectedDate ? formatDate(selectedDate) : '';

    return (
        <div className="mt-4 text-white border rounded-md px-4 h-14 lg:w-36 flex align-middle items-center w-28">
            <input
                ref={dateInputRef}
                type="date"
                value={selectedDate}
                onChange={handleDateChange}
                className="hidden" // hide the input element
            />
            <span className="mr-2">{formattedDate}</span>
            <svg
                onClick={openDatePicker}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-calendar-days cursor-pointer"
            >
                <path d="M8 2v4" />
                <path d="M16 2v4" />
                <rect width="18" height="18" x="3" y="4" rx="2" />
                <path d="M3 10h18" />
                <path d="M8 14h.01" />
                <path d="M12 14h.01" />
                <path d="M16 14h.01" />
                <path d="M8 18h.01" />
                <path d="M12 18h.01" />
                <path d="M16 18h.01" />
            </svg>
        </div>
    );
};

export default DatePickerComponent;
