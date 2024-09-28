import React from 'react';
import './Home.css'; // Your CSS file
import Imgi from './imgi.jsx';
import About from './About.jsx';

const Home = () => {
  return (
    <>
      <div className="mb">
        <div className='xn'>
          
          <h2>
  <span class="first-word">Tech-Society,</span> 
  <span class="second-word"> IIIT Bhubaneswar</span>
</h2>
<p>"We are on a mission to foster innovation and collaboration in the tech community.<br/> Our platform offers exciting opportunities for students, professionals, alumni,<br/>and tech enthusiasts to connect, learn, and grow together. Join us as we build a thriving<br/>ecosystem of technological excellence and creative problem-solving."</p>
<div className='ml-64 mt-2 mt-4 max-w-md  '>
          <a href="/About" role="button" class="inline-flex items-center rounded-full border-2 border-white-500 text-white-500 hover:border-white-500 hover:bg-white-400 hover:bg-opacity-10 hover:text-white focus:border-white-700 focus:text-white-700 active:bg-white-700 active:text-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0">
            Know more
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short ml-2 transition-colors" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
            </svg>
          </a>
        </div>

        
        
        </div>

      </div>
      <div className="fd">
      <section className="stats-section">
      <div className="container">
        <div className="stats-content">
          <div className="impact-text">
            <h2>Our impact in<br/> Numbers.</h2>
          </div>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">
                20k<span className="plus">+</span>
              </div>
              <h3>Students</h3>
            </div>
            <div className="stat-item">
              <div className="stat-number">
                2K<span className="plus">+</span>
              </div>
              <h3>Projects</h3>
            </div>
            <div className="stat-item">
              <div className="stat-number">
                250<span className="plus">+</span>
              </div>
              <h3>Mentors</h3>
            </div>
          </div>
        </div>
      </div>
    </section>


      </div>
      
    <div className="home3">
      
       <div className="home4">
 
        <div className="home5">
       
        <div class="section">
        <h2>About Us</h2>
        <h1>Tech-Society</h1>
        <p>The Tech Society engages with the campus community through six dedicated clubs, where we host a variety of sessions, including hands-on workshops, insightful lectures, and exciting competitions. It's a vibrant space for students to work on real-world projects, especially in open-source software (OSS).</p>
        <a href="./community" class="learn-more">Learn More_</a>
    </div>
        </div>
       </div>
        

        </div>
   

 
    <div className="initiatives-container">
      <h2 className="initiatives-title">Our Initiatives</h2>
      <h1 className="initiatives-heading">Empowering the next generation of coders.</h1>
      <button className="browse-button">Browse All Initiatives</button>
      
      <div className="initiatives-grid">
        <div className="initiative-card">
          <h3 className="initiative-title"> BEYOND BOUNDARIES</h3>
          <p className="initiative-description">Spreading the spirit of entrepreneurship!</p>
          <a href="#" className="learn-more">→</a>
        </div>
       
        <div className="initiative-card">
          <h3 className="initiative-title">HACKFEST</h3>
          <p className="initiative-description">An annual business model competition organized by Entrepreneurship Cell, IIT Kharagpur.</p>
          <a href="#" className="learn-more">→</a>
        </div>

        <div className="initiative-card">
          <h3 className="initiative-title">D<sup>3</sup></h3>
          <p className="initiative-description">Where we create awareness about entrepreneurship among the youth and support the local startup ecosystem.</p>
          <a href="#" className="learn-more">→</a>
        </div>
      </div>
    </div>
 
 

    
    </>
  );
};

export default Home;
