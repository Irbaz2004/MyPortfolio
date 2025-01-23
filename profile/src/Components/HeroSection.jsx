import React from 'react';
import Irbaz from '../assets/profile1.png';
import resume from '../assets/Irbaz Resume Original.pdf'
import { ArrowForwardIosOutlined } from '@mui/icons-material';
import Nav from './Nav';
import '../Style/Hero.css';

export default function HeroSection() {
  const handleNavigation = () => {
    window.open('https://www.linkedin.com/in/irbaz-ahmed-s-a6bba4332/', '_blank');
  };
  return (
    <div className="Hero-section">
      <div className="about">
        <h3>Hello, I'm</h3>
        <span className="highlighted-name">S Irbaz Ahmed</span>
        <h2 className="title">Software Engineer</h2>
        <p className="short-detail">
          A passionate software engineer specializing in Full-Stack Development and Data Science. I create user-friendly, responsive, and visually appealing applications that bring ideas to life.
        </p>
        <div className="button">
          <button onClick={handleNavigation}>Hire Me</button>
          <a href={resume} className="download-cv"download='Irbaz Ahmed CV.pdf'>
            Download CV <ArrowForwardIosOutlined className="arrow-icon" />
          </a>
        </div>
      </div>
      <div className="image">
        <div className="design"></div>
        <img
          src={Irbaz}
          alt="Irbaz Ahmed - Software Engineer"
        />
      </div>
      <div className="data">
        <div className="data1">
          <h3 className="data-number">1+</h3>
          <span className="data-label">Years of Experience</span>
        </div>
        <div className="data2">
          <h3 className="data-number">10+</h3>
          <span className="data-label">Projects Completed</span>
        </div>
        <div className="data3">
          <h3 className="data-number">95%</h3>
          <span className="data-label">Client Satisfaction</span>
        </div>
      </div>
      <Nav />
    </div>
  );
}