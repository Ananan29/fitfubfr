import React, { useState } from "react";
import "./Authopopup.css";
import logo from "../../assets/logo.jpeg";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { ToastContainer, toast } from "react-toastify";
import Input from '@mui/joy/Input';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { AiFillDelete, AiOutlineClose } from 'react-icons/ai';
import dayjs from 'dayjs';
import config from '../../config';
import GoogleAuth from "../GoogleAuth/GoogleAuth";
// import GoogleAuth from "../GoogleAuth/GoogleAuth";

const Authopopup = ({ setShowpopup ,loggedIn}) => {
    const [showsignup, setshowsignup] = useState(false);
    const [signupformData, setSignupFormData] = useState({
        name: '',
        email: '',
        password: '',
        weightInKg: 0.0,
        heightInCm: 0.0,
        goal: '',
        gender: '',
        dob: dayjs(),
        activityLevel: ''
    });
    const [loginformData, setLoginFormData] = useState({
        email: '',
        password: ''
    });

    const handleLogin = () => {
        fetch(`${config.API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginformData),
            credentials: 'include'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.ok) {
    
                toast.success(data.message);
                setShowpopup(false);
                // setisloggedin(true);
                // window.location.reload();
                // setisloggedin(true);
                loggedIn(true)
            } else {
                toast.error(data.message);
            }
        })
        .catch(err => {
            console.error(err);
        });
    };

    const handleSignup = () => {
        fetch(`${config.API_BASE_URL}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(signupformData),
            credentials: 'include'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.ok) {
                toast.success(data.message);
                setshowsignup(false);
            } else {
                toast.error(data.message);
            }
        })
        .catch(err => {
            console.error(err);
        });
    };

    return (
        <div className="popup">
            <button className='close' onClick={() => setShowpopup(false)}>
                <AiOutlineClose />
            </button>
            {showsignup ? (
                <div className="authform">
                    <div className="left">
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className="right">
                        <h1>Signup to become a freak</h1>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            handleSignup();
                        }}>
                            <Input
                                color="warning"
                                placeholder="Name"
                                size="lg"
                                variant="solid"
                                value={signupformData.name}
                                onChange={(e) => setSignupFormData({ ...signupformData, name: e.target.value })}
                            />
                            <Input
                                color="warning"
                                placeholder="Email"
                                size="lg"
                                variant="solid"
                                value={signupformData.email}
                                onChange={(e) => setSignupFormData({ ...signupformData, email: e.target.value })}
                            />
                            <Input
                                color="warning"
                                placeholder="Password"
                                size="lg"
                                variant="solid"
                                type="password"
                                value={signupformData.password}
                                onChange={(e) => setSignupFormData({ ...signupformData, password: e.target.value })}
                            />
                            <Input
                                color="warning"
                                size="lg"
                                variant="solid"
                                type="number"
                                placeholder='Weight in kg'
                                value={signupformData.weightInKg}
                                onChange={(e) => setSignupFormData({ ...signupformData, weightInKg: parseFloat(e.target.value) })}
                            />
                            <Select
                                color="warning"
                                placeholder="Activity Level"
                                size="lg"
                                variant="solid"
                                value={signupformData.activityLevel}
                                onChange={(event, newValue) => setSignupFormData({ ...signupformData, activityLevel: newValue })}
                            >
                                <Option value="sedentary">Sedentary</Option>
                                <Option value="light">Light</Option>
                                <Option value="moderate">Moderate</Option>
                                <Option value="active">Active</Option>
                                <Option value="veryActive">Very Active</Option>
                            </Select>
                            <Select
                                color="warning"
                                placeholder="Goal"
                                size="lg"
                                variant="solid"
                                value={signupformData.goal}
                                onChange={(event, newValue) => setSignupFormData({ ...signupformData, goal: newValue })}
                            >
                                <Option value="weightLoss">Lose</Option>
                                <Option value="weightMaintain">Maintain</Option>
                                <Option value="weightGain">Gain</Option>
                            </Select>
                            <Select
                                color="warning"
                                placeholder="Gender"
                                size="lg"
                                variant="solid"
                                value={signupformData.gender}
                                onChange={(event, newValue) => setSignupFormData({ ...signupformData, gender: newValue })}
                            >
                                <Option value="male">Male</Option>
                                <Option value="female">Female</Option>
                                <Option value="other">Other</Option>
                            </Select>
                            <label htmlFor="">Height (cm)</label>
                            <Input
                                color="warning"
                                size="lg"
                                variant="solid"
                                type="number"
                                placeholder='Height in cm'
                                value={signupformData.heightInCm}
                                onChange={(e) => setSignupFormData({ ...signupformData, heightInCm: parseFloat(e.target.value) })}
                            />
                            <label htmlFor="">Date of Birth</label>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DesktopDatePicker
                                    value={signupformData.dob}
                                    onChange={(newValue) => setSignupFormData({ ...signupformData, dob: newValue })}
                                    renderInput={(params) => <Input {...params} />}
                                />
                            </LocalizationProvider>
                            <button type="submit">Signup</button>
                        </form>
                        <p>Already have an account? <button onClick={() => setshowsignup(false)}>Login</button></p>
                    </div>
                </div>
            ) : (
                <div className="authform">
                    <div className="left">
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className="right">
                        <h1>Login to become a freak</h1>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            handleLogin();
                        }}>
                            <Input
                                color="warning"
                                placeholder="Email"
                                size="lg"
                                variant="solid"
                                value={loginformData.email}
                                onChange={(e) => setLoginFormData({ ...loginformData, email: e.target.value })}
                            />
                            <Input
                                color="warning"
                                placeholder="Password"
                                size="lg"
                                variant="solid"
                                type='password'
                                value={loginformData.password}
                                onChange={(e) => setLoginFormData({ ...loginformData, password: e.target.value })}
                            />
                            <button type="submit">Login</button>
                        </form>
                        <br></br>
                        <p>Don't have an account? <br/><button onClick={() => setshowsignup(true)}>Signup</button></p>
                       <GoogleAuth/>
                    </div>
                </div>
            )}
            <ToastContainer />
        </div>

    );
};

export default Authopopup;
