import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";
import Toggle from "./Toggle";
import { useDarkMode } from "./useDarkMode";

const Appp = () => {
  const [theme, toggleTheme] = useDarkMode("light");

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Toggle onToggle={toggleTheme}>Toggle theme</Toggle>
    </ThemeProvider>
  );
};

export default Appp;
