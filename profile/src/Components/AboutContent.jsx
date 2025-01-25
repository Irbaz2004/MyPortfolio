import React, { useEffect, useRef } from 'react';
import { Email, Call } from '@mui/icons-material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../Style/About.css';

export default function AboutContent() {
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = aboutRef.current.querySelectorAll('.content, .specialist, .contact-info');

    // GSAP Animations for Desktop View
    const desktopAnimation = () => {
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    };

    // GSAP Animations for Mobile View
    const mobileAnimation = () => {
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, x: 30 }, // Slight horizontal slide-in for mobile
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    };

    // Apply animations based on screen size
    if (window.innerWidth > 768) {
      desktopAnimation();
    } else {
      mobileAnimation();
    }

    // Cleanup ScrollTrigger instances on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
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
