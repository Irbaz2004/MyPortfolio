import React, { useEffect, useRef } from "react";
import AboutContent from "../Components/AboutContent";
import MyImage from "../Components/MyImage";
import "../Style/About.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
  const aboutRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate AboutContent
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate MyImage
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <>
      <div className="about-page" ref={aboutRef}>
        <div className="About-content" ref={contentRef}>
          <AboutContent />
        </div>
        <div className="My-image" ref={imageRef}>
          <MyImage />
        </div>
      </div>
    </>
  );
}
