import React, { useEffect, useRef } from 'react';
import { Email, Call } from '@mui/icons-material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../Style/About.css';

export default function AboutContent() {
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Only enable animations for devices with larger screens
    if (window.innerWidth > 768) {
      // Target sections for animations
      const sections = aboutRef.current.querySelectorAll('.content, .specialist, .contact-info');

      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 }, // Initial state
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 95%', // Trigger animation earlier for mobile
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    } else {
      // Ensure all sections are visible by default on smaller screens
      const sections = aboutRef.current.querySelectorAll('.content, .specialist, .contact-info');
      sections.forEach((section) => {
        section.style.opacity = 1; // Make sure it's visible
        section.style.transform = 'translateY(0)'; // Reset any transforms
      });
    }
  }, []);

  return (
    <div ref={aboutRef} className="about-section">
      <div className="content">
        <h4 className="about-heading">About Me</h4>
        <h2 className="title about-h2">
          Empowering Digital Products with <span>Innovative Solutions</span>
        </h2>
        <p className="about-para">
          Hi, I'm S Irbaz Ahmed, a full-stack developer and data science enthusiast with a passion for innovation and
          problem-solving. I specialize in creating seamless and dynamic web experiences using modern technologies like
          React.js, Node.js, Python, and PostgreSQL. With a strong focus on intuitive design and data-driven
          decision-making, I aim to craft impactful digital solutions that leave a lasting impression.
        </p>
      </div>
      <div className="specialist">
        <h6>Full-Stack Development</h6>
        <h6>Data Science & Analysis</h6>
        <h6>Database Management</h6>
        <h6>API Development & Integration</h6>
      </div>
      <div className="contact-info">
        <div className="email">
          <Email className="contact-icon" />
          <p className="myemail">irbazahmeds20@gmail.com</p>
        </div>
        <div className="call">
          <Call className="contact-icon" />
          <p className="mynumber">+91 9363466343</p>
        </div>
      </div>
    </div>
  );
}
