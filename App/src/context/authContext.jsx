import { useEffect, useState, createContext } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  );
  
  const login = () => {
    // TO DO
    setCurrentUser({ 
      id:1,
      name: 'R Kenee',
      profilePic: 'src/assets/mars.png',
      });
  };

  useEffect(() => { 
    localStorage.setItem('user', JSON.stringify(currentUser));
  }, [currentUser])

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  )
};
