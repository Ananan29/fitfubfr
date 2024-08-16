import React from 'react'
import './Home1.css'
const Home1 = () => {
    const imageUrl =
    "https://img.freepik.com/premium-photo/watch-with-dumbbells-barbell-mat-sports-3d-rendering-illustration-retro-wave-style_499459-574.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721692800&semt=ais_user";

  const jsx = {
    backgroundImage: `url(${imageUrl})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPaddingLeft: "0"
  };
  return (
    <div className="wrapper" style={jsx}>
          <h1> Welcome to FitHub </h1>
          <h3>"Your Hub for Fitness and Health"</h3>
    </div>
  )
}

export default Home1
