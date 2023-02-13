import { useEffect, useState, createContext } from 'react';

export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem('darkMode')) || false
  );
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => { 
    localStorage.setItem('darkMode', darkMode)
  }, [darkMode])

  return (
    <DarkModeContextProvider value={{darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContextProvider>
  )
};
