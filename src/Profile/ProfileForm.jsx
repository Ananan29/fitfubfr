// import React, { useState, useEffect } from 'react';
// // import api from '../services/api';
// import config from "./../../config"
// import "./ProfileForm.css"
// const ProfileForm = () => {
//     const [profileData, setProfileData] = useState({
//         name: '',
//         email: '',
//         password: '',
//         age: '',
//         height: '',
//         weight: '',
//         weightGoal: '',
//     });

//     // useEffect(() => {
//     //     // Fetch the user's profile data when the component mounts
//     //     const fetchProfileData = async () => {
//     //         try {
//     //             const response = await api.get(`${config.API_BASE_URL}/profile`);
//     //             setProfileData(response.data);
//     //         } catch (error) {
//     //             console.error('Error fetching profile data', error);
//     //         }
//     //     };

//     //     fetchProfileData();
//     // }, []);

//     // const handleChange = (e) => {
//     //     setProfileData({
//     //         ...profileData,
//     //         [e.target.name]: e.target.value
//     //     });
//     // };

//     // const handleSubmit = async (e) => {
//     //     e.preventDefault();
//     //     try {
//     //         const response = await api.put(`${config.API_BASE_URL}/profileData`);
//     //         alert('Profile updated successfully!');
//     //     } catch (error) {
//     //         console.error('Error updating profile', error);
//     //     }
//     // };
//     useEffect(() => {
//         const fetchProfileData = async () => {
//             try {
//                 const response = await fetch(`${config.API_BASE_URL}/profile`, {
//                     method: 'GET',
//                     credentials: 'include',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                 });
//                 const data = await response.json();
//                 setProfileData(data);
//             } catch (error) {
//                 console.error('Error fetching profile data', error);
//             }
//         };

//         fetchProfileData();
//     }, []);

//     const handleChange = (e) => {
//         setProfileData({
//             ...profileData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await fetch(`${config.API_BASE_URL}/profile`, {
//                 method: 'PUT',
//                 credentials: 'include',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(profileData),
//             });
//             if (response.ok) {
//                 alert('Profile updated successfully!');
//             } else {
//                 console.error('Error updating profile');
//             }
//         } catch (error) {
//             console.error('Error updating profile', error);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input type="text" name="name" value={profileData.name} onChange={handleChange} placeholder="Name" required />
//             <input type="email" name="email" value={profileData.email} onChange={handleChange} placeholder="Email" required />
//             <input type="password" name="password" value={profileData.password} onChange={handleChange} placeholder="Password" required />
//             <input type="number" name="age" value={profileData.age} onChange={handleChange} placeholder="Age" />
//             <input type="number" name="height" value={profileData.height} onChange={handleChange} placeholder="Height (cm)" />
//             <input type="number" name="weight" value={profileData.weight} onChange={handleChange} placeholder="Weight (kg)" />
//             <select name="weightGoal" value={profileData.weightGoal} onChange={handleChange}>
//                 <option value="gain">Gain Weight</option>
//                 <option value="lose">Lose Weight</option>
//             </select>
//             <button type="submit">Update Profile</button>
//         </form>
//     );
// };

// export default ProfileForm;

import React, { useState, useEffect } from 'react';
import config from "../config";
import "./ProfileForm.css";
import dayjs, { Dayjs } from "dayjs";
const Profile = () => {
    const [profileData, setProfileData] = useState({
        name: '',
        email: '',
        password: '',
        age: '',
        height: '',
        weight: '',
        weightGoal: '',
        gender:'',
        dob:'',
        activityLevel:''
    });
    const [data, setdata] = useState({name: "",
        password: "",
        email: "",
        weight: "",
        height: "",
        gender: "",
        dob: "",
        goal: "",
        activityLevel: "",
        })

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const response = await fetch(`${config.API_BASE_URL}/profile`, {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const data = await response.json();
                setProfileData(data);
            } catch (error) {
                console.error('Error fetching profile data', error);
            }
        };

        fetchProfileData();
    }, []);

    const handleChange = (event) => {
        // const [name,value]=event.target
        setProfileData({
            ...profileData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${config.API_BASE_URL}/profile`, {
                method: 'PUT',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(profileData),
            });
            if (response.ok) {
                alert('Profile updated successfully!');
            } else {
                console.error('Error updating profile');
            }
            
        } catch (error) {
            console.error('Error updating profile', error);
        }
    };

    const getdata=()=>{
        // fetch(`${config.API_BASE_URL}/calorieintake/deletecalorieintake`,{
        //     method:"GET",
        //     headers:{
        //       "Content-Type":"application/json",
        //     },
        //     credentials:"include",
        //     body:JSON.stringify({
        //       name:item.item, //name item
        //       date:item.date
        //     })
        //   })
        //   .then(res=>res.json())
        //   .then(data=>{
        //     if(data.ok){
        //       // console.log(data.data,"calorie intake item deleted successfully")
        //       toast.success("calorie intake item deleted successfully")
        //       getcalorieintake()
        //       setchangemade(true);
        //     }
        //     else{
        //       toast.error("error in deleting calorie intake")
        //     }
        //   })
        //   .catch(err=>{
        //     toast.error("error in deleting calorie intake");
        //     console.log(err);
        //   })
    //     fetch(config.API_BASE_URL + '/report/getreport',{ 
    //     method: 'GET',
    //     credentials: 'include',
    //   })
    //   .then (res => res.json())
    //   .then (data => {
    //       console.log(data)
    //     if (data.ok) {
    //       setdata(data.data)
    //     }
    //     else {
    //       setdata([])
    //     }
    //  })
    // .catch(err => { 
    //   console.log(err);
    //   setdata([])
    // })
        fetch(`${config.API_BASE_URL}/profile/getdata`,{
            method:"GET",
            headers:{
              "Content-Type":"application/json",
            },
            credentials:"include",
            // body:JSON.stringify({
            // //   name:item.item, //name item
            // //   date:item.date
            // name: name,
            // password: password,
            // email: email,
            // weight: weight,
            // height: height,
            // gender: gender,
            // dob: dob,
            // goal: goal,
            // activityLevel: activityLevel,
            // })
          })
          .then(res=>res.json())
          .then(data=>{
            setdata(data)
            console.log(data)
            if(data.ok){
              // console.log(data.data,"calorie intake item deleted successfully")
            //   toast.success("calorie intake item deleted successfully")
              console.log("data",data)
            }
            else{
            //   toast.error("error in deleting calorie intake")
            console.log("error",data)
            }
          })
          .catch(err=>{
            // toast.error("error in deleting calorie intake");
            console.log(err);
        })
    }
    useEffect(()=>{
        getdata();
        console.log(data)
    },[])
    return (
        <div className='profileoutlet'>
            <form onSubmit={handleSubmit} className="profile-form">
                <div className={"b"}>
                    <p className={"p"}> Name </p>
                    <input id="name" type="text" name="name" value={profileData.name} onChange={handleChange} placeholder={data.name} required />
                </div>
                <div className={"b"}>
                <p className={"p"}> Email </p><input id="email" type="email" name="email" value={profileData.email} onChange={handleChange} placeholder={data.email} required />
                </div>
                <div className={"b"}>
                <p className={"p"}> Password </p><input id="password" type="password" name="password" value={profileData.password} onChange={handleChange} placeholder={"*******"} required />
                </div>
                <div className={"b"}>
                <p className={"p"}> Age </p><input id="age" type="number" name="age" value={profileData.age} onChange={handleChange} placeholder={
                    // dayjs()-
                    data.age} />                </div>
                <div className={"b"}>
                <p className={"p"}> Height </p><input id="height" type="number" name="height" value={profileData.height} onChange={handleChange} placeholder={data.height} />
                </div>
                <div className={"b"}>
                <p className={"p"}> Weight </p><input id="weight" type="number" name="weight" value={profileData.weight} onChange={handleChange} placeholder={data.weight} />
                </div>
                <div>
                <select id="goal" name="goal" value={profileData.goal} onChange={handleChange}>
                <option value="gain">Gain Weight</option>
                    <option value="maintain">Maintain Weight</option>
                    <option value="lose">Lose Weight</option>
                </select>
                <select id="gender" name="gender" value={profileData.gender} onChange={handleChange}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="prefertonotsay">prefer to not say</option>
                </select>
                <select id="activitylevel" name="activitylevel" value={profileData.activitylevel} onChange={handleChange}>
                    <option value="sedentary">Sedentary</option>
                    <option value="light">Light</option>
                    <option value="moderate">Moderate</option>
                    <option value="active">Active</option>
                    <option value="veryActive">Very Active</option>
                </select>
                <button type="submit">Update Profile</button>
                </div>
                
                
                    
            </form>
            {/* <div className='profile-form'>
                info
            </div> */}
        </div>
    );
};

export default Profile;
