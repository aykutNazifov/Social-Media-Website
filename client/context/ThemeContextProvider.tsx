import { createContext, useState } from "react";

interface IThemeContext {
  darkMode: boolean;
  togleDarkMode: () => void;
}

export const ThemeContext = createContext<IThemeContext>(null);

const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  const togleDarkMode = () => setDarkMode(!darkMode);
  return (
    <ThemeContext.Provider value={{ darkMode, togleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
