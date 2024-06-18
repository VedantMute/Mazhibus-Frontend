import React, { createContext, useState } from 'react';

export const CityContext = createContext();

export const CityProvider = ({ children }) => {
    const [fromCity, setFromCity] = useState('');
    const [toCity, setToCity] = useState('');

    return (
        <CityContext.Provider value={{ fromCity, setFromCity, toCity, setToCity }}>
            {children}
        </CityContext.Provider>
    );
};
