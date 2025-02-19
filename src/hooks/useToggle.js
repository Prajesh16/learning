import { useState } from 'react';

// Custom hook for toggling state
const useToggle = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const toggle = () => setIsOpen(!isOpen);
  return [isOpen, toggle];
};

export default useToggle;
