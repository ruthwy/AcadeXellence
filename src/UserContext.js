import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Initialize user ID state with a default value from localStorage (if available)
  const [userId, setUserId] = useState(() => localStorage.getItem('userId') || '');

  // Effect to persist the user ID in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('userId', userId);
  }, [userId]);

  return (
    <UserContext.Provider value={{ userId, setUserId }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};