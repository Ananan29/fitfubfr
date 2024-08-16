// import React from 'react';
// import './About.css'; // Import a CSS file for styling (optional)

// const About = () => {
//   return (
//     <div className="about-container" style={{color: "black"}}>
//       <h1>About Us</h1>
//       <p>
//         Welcome to FitLife, your ultimate destination for fitness and wellness! Our mission is to empower individuals to lead healthier lives through expert advice, engaging content, and personalized training programs.
//       </p>
//       <p>
//         Our team consists of certified trainers, nutritionists, and wellness experts who are passionate about helping you achieve your fitness goals. Whether you're a beginner or a seasoned athlete, we have the resources and support you need to succeed.
//       </p>
//       <p>
//         At FitLife, we believe in a holistic approach to fitness. We offer a variety of resources including workout plans, nutritional guidance, and motivational content to keep you on track.
//       </p>
//       <p>
//         Join our community and start your journey towards a healthier, happier you!
//       </p>
//     </div>
//   );
// };

// export default About;
import './About.css'; // Import a CSS file for styling (optional)

const About = () => {
  const imageUrl =
    "https://img.freepik.com/premium-photo/trainers-with-mobile-phone-wooden-table_93675-48877.jpg";

    const jsx = {
      backgroundImage: `url(${imageUrl})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPaddingLeft: "0"
    };

    return (
    <div className="about-container" style={jsx} >
      <h1>About Us</h1>
      <br/>
      <p id="p">
       Welcome to FITHUB, your go-to source for fitness inspiration, education, and community. Our mission is to empower individuals to live healthier, more active lives by providing expert guidance, practical advice, and a supportive community.
      </p>
      <br/>
      <p id="p">
       At FITHUB, we believe that fitness is for everyone, regardless of age, size, or experience level. Whether you're just starting out or looking to take your training to the next level, we're here to help you achieve your goals.
      </p>
      <br/>
      <p id="p1">
       Join us on the journey to better health and well-being.
      </p>
      <p id="p2">
      Together, let's make fitness a lifelong adventure!
      </p>
      <br/>

    </div>
  );
};

export default About;