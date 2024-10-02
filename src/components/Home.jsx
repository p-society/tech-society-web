import React from 'react';
import './Home.css'; // Your CSS file
import image1 from '../assets/img7.png'
import image2 from '../assets/app_session.png'
const Home = () => {
  return (
    <>
      <div className="home">
      <div className="overlay-text">
    <h1>Welcome to the <strong>Best</strong> Technical club,</h1>
    <h1><strong>Tech</strong> Society IIIT-Bh!</h1>
  </div>
      </div>
      <div className="tech-society-container">
        {/* First section - Little bit about us */}
        <div className="about-us-section">
          <div className="image-section">
            <img
        src={image2}
              alt="Speaker"
              className="about-us-image"
            />
          </div>
          <div className="text-section">
            <h2><span className='mb'>Little</span> bit about us...</h2>
            <p>
              The Tech Society engages with the campus community through 6
              dedicated clubs, where we host a variety of sessions, including
              hands-on workshops, insightful lectures, and exciting competitions.
              It's a vibrant space for students to explore their interests,
              develop new skills, and work on real-world projects, especially in
              open-source software (OSS). Whether you're interested in coding,
              design, or innovation, the society provides the perfect platform to
              learn, collaborate, and shine.
            </p>
          </div>
        </div>

        {/* Second section - Code, Learn, Inspire */}
        <div className="code-learn-inspire-section">
          <div className="text-section">
            <h2><span className='mb'>Code</span>, Learn, Inspire</h2>
            <p>
              Our projects focus on learning and mastering code while inspiring
              the next generation of students. Through Open Source Software (OSS)
              projects, we provide opportunities for hands-on experience,
              collaboration, and mentorship. By working together on real-world
              solutions, we help juniors enhance their skills and build a
              foundation for future success in tech.
            </p>
          </div>
          <div className="image-section">
            <img
              src={image1}
              alt="Tech Society Projects"
              className="projects-image"
            />
          </div>
        </div>
        <div className='mx-auto text-center'>
          <h1 className='text-white font text-4xl'><span className='font-bold'>Join</span> us</h1>
          <p className='text-2xl text-white mt-2'>Dive into exciting projects, enhance your coding skills, and inspire others through open-source contributions. Join us today to start your journey in technology and make a difference!</p>
        </div>
      </div>
    </>
  );
};

export default Home;
