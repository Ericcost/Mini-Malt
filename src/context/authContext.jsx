import { useEffect, useState, createContext } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('user')) || false
  );
  
  const login = () => {
    // TO DO
    setCurrentUser({ id:1, name: 'John Doe', profile_picture: 'src/assets/atr.png'});
  };

  useEffect(() => { 
    localStorage.setItem('user', JSON.stringify(currentUser));
  }, [currentUser])

  return (
    <AuthContextProvider value={{ currentUser, login }}>
      {children}
    </AuthContextProvider>
  )
};
