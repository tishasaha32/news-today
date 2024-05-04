import { createContext, useState } from "react";
export const DarkModeContext = createContext();
export const DarkModeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <DarkModeContext.Provider value={{ handleDarkMode, darkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
