import React, { createContext, useContext, useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';


export const UserContext = createContext();

export const User = ({ children }) => {

    const [name, setName] = useState('light');
    const [selectedImage, setSelectedImage] = useState(null);

    // Context değerlerini sağla
    const contextValues = {
        name,
        setName,
        selectedImage,
        setSelectedImage
    };

    return (
        <UserContext.Provider value={contextValues}>
            {children}
        </UserContext.Provider>
    );
};