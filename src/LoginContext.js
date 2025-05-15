import { createContext, useContext, useState, useEffect } from 'react';

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isMember, setIsMember] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('userToken');
    setIsMember(!!token);
  }, []);

  return (
    <LoginContext.Provider value={{ isMember, setIsMember }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);
