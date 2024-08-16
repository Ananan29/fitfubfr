import React, { useState, useEffect } from "react";
import "./Homebanner2.css";
import { useNavigate } from "react-router-dom";
import config from "./../../config";

const Homebanner2 = () => {
    const [workouts, setworkouts] = useState([]);
    const navigate = useNavigate();
    const [data, setData] = useState()
    const getWorkouts = async () => {
        // Simulate fetching data
        const data = [
          {
            type: "Chest",
            imageUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
            durationInMin: 30
          },
          {
            type: "Abs",
            imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzJTIwd29ya291dHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            durationInMin: 90
          },
          {
            type: "Shoulder",
            imageUrl: "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
            durationInMin: 40
          },
          {
            type: "Back",
            imageUrl: "https://images.unsplash.com/photo-1603287681836-b174ce5074c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFjayUyMHdvcmtvdXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            durationInMin: 70
          },
          {
            type: "Biceps",
            imageUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
            durationInMin: 50
          },
          {
            type: "Triceps",
            imageUrl: "https://images.unsplash.com/photo-1530822847156-5df684ec5ee1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJpY2Vwc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            durationInMin: 60
          },
    
          {
            type: "Legs",
            imageUrl: "https://images.unsplash.com/photo-1434608519344-49d77a699e1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGVnJTIwd29ya291dHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            durationInMin: 80
          },
    
          {
            type: "Cardio",
            imageUrl: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyZGlvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            durationInMin: 100
          },
          {
            type: "Forearms",
            imageUrl: "https://images.unsplash.com/photo-1591940742878-13aba4b7a34e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9yZWFybXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            durationInMin: 110
          }
        ];
        setworkouts(data);
    };

    useEffect(() => {
        getWorkouts();
    }, []);

    const scroll = (direction) => {
        const container = document.querySelector('.carousel');
        const scrollAmount = direction === 'left' ? -300 : 300;
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    };
    const getData = async () => {
      fetch(config.API_BASE_URL + '/workoutplans/workouts',{ 
        method: 'GET',
        credentials: 'include',
      })
      .then (res => res.json())
      .then (data => {
          // console.log(data)
        if (data.ok) {
          setworkouts(data.data)
          // console.log("data.data",data.data)
        }
        else {
          setworkouts([])
        }
     })
    .catch(err => { 
      console.log(err)
      setworkouts ([])
    })
    }
    useEffect(() => {
      getData()
      if(data){
        // console.log("data[0].exercises[0].imageURL",data[7].
        // // name
        // imageURL

        // // .imageUrl
        // // .exercises
        // // [0].imageURL
        // )
      }
      // if (data.ok) {
      //   setData(data.data)
      //   console.log("data.data",data.data)
      // }
    }, [data])
    // data.forEach(item => {
    //   console.log("url",item.imageUrl)
    // });
    return (
        <div className="carousel-container">
            <h1 className="mainhead1">Workouts</h1>
            <div className="carousel">
                {
                // workouts.map((item, index) => (
                //     <div
                //         key={index}
                //         className="carousel-item"
                //         style={{ backgroundImage: `url(${item.imageUrl})` }}
                //         onClick={() => navigate(`/workout/${item.type}`)}
                //     >
                //         <div className="carousel-item-content">
                //             <h2>{item.type}</h2>
                //             <p>{item.durationInMin} min</p>
                //         </div>
                //     </div>
                // ))
                workouts && workouts.map((item, index) => {
                  return (
                    <div key={index} >
                      <div className="carousel-item"
                        style={{
                          backgroundImage: `url(${item.imageURL})`,
                        }}
                        onClick={() => {navigate(`/workout/${item.name}`)
                        }}
                      >
                        <div className="carousel-item-content">
                          <h2>{item.name}</h2>
                          <p>{item.durationInMin} min</p>
                        </div>
                      </div>
                    </div>
                  )
                })
                }
            </div>
            <button className="carousel-button left" onClick={() => scroll('left')}>❮</button>
            <button className="carousel-button right" onClick={() => scroll('right')}>❯</button>
        </div>
    );
};

export default Homebanner2;
