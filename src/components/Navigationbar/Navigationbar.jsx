// import React,{useEffect, useState} from "react";
// import "./Navigationbar.css";
// import {IoIosBody} from "react-icons/io";
// import logo from "../../assets/purplestar.png"
// import Authopopup from "../Authopopup/Authopopup";
// import { Link } from "react-router-dom";
// import Appp from "../../Appp";
// // import { ThemeContext } from "@emotion/react";
// // import { useTheme } from '../ThemeContext/ThemeContext';


// const Navigationbar = () => {
//   const [isloggedin,setisloggedin]=useState()
//   const [showpopup, setShowpopup] = useState(false)
//   // const { theme, toggleTheme } = useTheme(false);
//   useEffect(()=>{
//     console.log(isloggedin)
//   },[isloggedin])
//   const loggedIn =(x) =>{
//     console.log("loggedIn",x)
//     setisloggedin(true)
//   }
//   return (
//     <nav>
//       <img src={logo} alt="logo" className="img"/>
//       <Link to="/" className="a">Home</Link>
//       <Link to="/about" className="a">About</Link>
//       <Link to="/contact" className="a">Contact</Link>
//       <Link to="/reports" className="a">Reports</Link>
//       <Link to="/workouts" className="a">Workouts</Link>
//       <Link to="/profile" className="a"><IoIosBody/></Link>
//       {
//         isloggedin?
//         <button className="btn">Logout</button>:
//         <button onClick={() => {
//           setShowpopup(true)
//         }}>Login</button>
//       }
//       {
//         showpopup&& <Authopopup setShowpopup={setShowpopup} loggedIn={loggedIn}/>
//         // <h1 className="mainhead1">Login page</h1>
//       }
      
//             {/* <Appp/> */}

      
//         {/* <button onClick={toggleTheme}>
//         Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
//       </button> */}
      
      
//     </nav>
//   )
// }

// export default Navigationbar
import React,{useEffect, useState, useContext} from "react";
import "./Navigationbar.css";
import {IoIosBody} from "react-icons/io";
import logo from "../../assets/logo2.png";
import hamburger from "../../assets/hamburger.svg";
import Authopopup from "../Authopopup/Authopopup";
import {NavLink } from "react-router-dom";
import Appp from "../../Appp";
import { ThemeContext } from '../../App';
import ReactSwitch from "react-switch";
// import { ThemeContext } from "@emotion/react";
// import { useTheme } from '../ThemeContext/ThemeContext';
import config from "./../../config"

const Navigationbar = () => {
  const [isloggedin,setisloggedin]=useState(false)
  const [showpopup, setShowpopup] = useState(false)

  const checklogin=()=>{
    fetch(config.API_BASE_URL+"/auth/checklogin",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        // body: JSON.stringify(signupformData),
        credentials: 'include'
    }).then(res=>res.json())
    .then(resp=>(
      // console.log(resp.ok)&&
      // if(resp=="true"){
      //   setisloggedin(true);
      // }
      resp.ok?setisloggedin(true):setisloggedin(false)
      // &&console.log("isloggedin",isloggedin)
      ))
  };

  checklogin();

  const logout=()=>{
    // setisloggedin(false)
    fetch(config.API_BASE_URL+"/auth/logout",{
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      // body: JSON.stringify(signupformData),
      credentials: 'include'
  }).then(res=>res.json())
  .then(resp=>(
    // console.log(resp.ok)
    setisloggedin(false)))
    window.location.reload(false);
  }

  const 
  // login
  reloadsavefunc=()=>{
    // setShowpopup(true)
    window.location.reload(false);
  }

  // const [theme, setTheme] = useState("light");
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [showNavbar, setShowNavbar] = useState(false);
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  useEffect(()=>{
    console.log(isloggedin)
  },[isloggedin])

  // const loggedIn =(x) =>{
  //   console.log("loggedIn",x)
  //   setisloggedin(true)
  // }
  return (
    <div className="navbar">
      <div className="nav-logo border">
      <div className="logo"></div>
      </div>
      <div className={`section border ${showNavbar ? 'show' : ''}`}>
          <NavLink to="/" className="a" >Home</NavLink>
          <NavLink to="/about" className="a" >About</NavLink>
          <NavLink to="/contact" className="a" >Contact</NavLink>
          <NavLink to="/reports" className="a" >Reports</NavLink>
          <NavLink to="/workouts" className="a" >Workouts</NavLink>
          <NavLink to="/profile" className="a" ><IoIosBody/></NavLink>
      </div>
      <div className="menu-icon" onClick={handleShowNavbar}>
        <img src={hamburger} alt="hamburger" className="img"/>
      </div>
      <div className="buttons border">
      <div className="nav-btn">
      {
        isloggedin?
        <button className="nb" onClick={logout}>Logout</button>:
        <button className="nb" onClick={() => {
          setShowpopup(true)
        }}>Login</button>
      }
      {
        showpopup&& <Authopopup setShowpopup={setShowpopup} reloadfunc={reloadsavefunc} />
        // <h1 className="mainhead1">Login page</h1>
      }
      </div>
      <div className="toggle">
      <ReactSwitch onChange={toggleTheme} onColor="#7734e7" offColor="#7734e7" checked={theme === "dark"} />
      </div>
      </div>
    </div>
  )
}

export default Navigationbar