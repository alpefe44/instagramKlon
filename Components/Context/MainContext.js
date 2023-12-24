import React, { createContext, useContext, useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';



export const MyContext = createContext();

export const MainContext = ({ children }) => {

    const [theme, setTheme] = useState('light');

    // Context değerlerini sağla
    const contextValues = {
        theme,
        setTheme
    };

    return (
        <MyContext.Provider value={contextValues}>
            {children}
        </MyContext.Provider>
    );
};