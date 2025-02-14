import { createContext, useState } from 'react';

// Create the context
export const MyContext = createContext();

// Create a provider component
export const MyProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <MyContext.Provider value={{ count, setCount }}>
      {children}
    </MyContext.Provider>
  );
};
