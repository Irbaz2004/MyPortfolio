import React, { useEffect, useRef } from 'react';
import { LinkedIn, ExposureOutlined } from '@mui/icons-material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from '../assets/profile1.png';
import '../Style/About.css';

export default function MyImage() {
  const myImageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animating the profile image
    gsap.fromTo(
      myImageRef.current.querySelector('.my'),
      { opacity: 0, scale: 0.5 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: myImageRef.current.querySelector('.my'),
          start: 'top 80%',
        },
      }
    );

    // Animating the LinkedIn and GitHub icons
    gsap.fromTo(
      myImageRef.current.querySelectorAll('.developer, .developer1'),
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: myImageRef.current,
          start: 'top 90%',
        },
      }
    );
  }, []);

  const handleNavigation = () => {
    window.open('https://www.linkedin.com/in/irbaz-ahmed-s-a6bba4332/', '_blank');
  };

  const handleNavigationgithub = () => {
    window.open('https://github.com/Irbaz2004', '_blank');
  };

  return (
    <div ref={myImageRef} className="myimage">
      <div className="developer" onClick={handleNavigation}>
        <LinkedIn/>
        <p>Let's Connect</p>
      </div>

      <img src={Image} alt="Profile Pic" className="my" />

      <div className="developer1" onClick={handleNavigationgithub}>
        <ExposureOutlined/>
        <p>Repository</p>
      </div>
    </div>
  );
}
