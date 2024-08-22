import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({ text: '#000', background: '#FFF' });

  const setThemeColors = (textColor, backgroundColor) => {
    setTheme({ text: textColor, background: backgroundColor });
  };

  return (
    <ThemeContext.Provider value={{ theme, setThemeColors }}>
      {children}
    </ThemeContext.Provider>
  );
};
