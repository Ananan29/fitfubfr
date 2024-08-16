import React,{useState} from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Navigationbar from './components/Navigationbar/Navigationbar';
import Homebanner1 from './components/Homebanner1/Homebanner1';
import Homebanner2 from './components/Homebanner2/Homebanner2';
import Page from './Workout/Page';
import ReportPage from './report/ReportPage';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { Swiper } from 'swiper/react';
import Front from './components/Swiper/Swiper';
import ProfileForm from './Profile/ProfileForm';
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";
import Toggle from "./Toggle";
import { useDarkMode } from "./useDarkMode";
import { createContext} from "react";
import ReactSwitch from "react-switch";
import Bottom from './components/Bottom/Bottom';
import Home1 from './components/Home1/Home1';
import Home2 from './components/Home2/Home2';
import Home3 from './components/Home3/Home3';
import Home4 from './components/Home4/Home4';

export const ThemeContext = createContext({
  theme: 'light', // Initial theme value
  toggleTheme: () => {}, // Initial toggle function
});

export default function App() {
  // const [theme, toggleTheme] = useDarkMode("light");
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <div className='App' id={theme}>
    <BrowserRouter>
    {/* <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}> */}
        <Navigationbar /><br/>
        <Routes
         id={theme}
         >
          <Route path="/about" element={
          // <About />
          <>
            <br/>
          <About /> 
          <Home4/>
          </>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reports" element={<Homebanner1 />} />
          <Route path="/workouts" element={
          // <Homebanner2 />
          <>
             <Homebanner2 />
             <Home3/>
            </>} />
          <Route path="/profile" element={<ProfileForm />} />
  
          <Route path="/" element={
            <>
               {/* <Front/> */}
              {/* <Homebanner1 /> */}
              {/* <Homebanner2 /> */}
              <Home1/>
              <br/>
              <br/>
              <Home2/>
              {/* <Home3/> */}
              <br/>
              {/* <Home4/> */}
              <br/>
              <Front/>
            </>
          } />
          <Route path="/workout/:type" element={<Page />} />
          <Route path="/report/:name" element={<ReportPage />} />
        </Routes>
        {/* hello
        <Footer/> */}
        <ToastContainer />
        {/* <GlobalStyles /> */}
        {/* <Toggle onToggle={toggleTheme}>Toggle theme</Toggle> */}
    {/* </ThemeProvider> */}
    <br/>
    </BrowserRouter>
    </div>
    </ThemeContext.Provider>
  );
}
