import React, { useState, useEffect, useRef } from 'react';
import {
  RoofingOutlined,
  PersonOutlineOutlined,
  SettingsOutlined,
  DesignServicesOutlined,
  SourceOutlined,
  EmailOutlined,
} from '@mui/icons-material';
import { gsap } from 'gsap';
import '../Style/Nav.css';

export default function Nav() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navRef = useRef(null);

  const navItems = [
    { id: 0, icon: <RoofingOutlined />, label: 'Home', section: 'home' },
    { id: 1, icon: <PersonOutlineOutlined />, label: 'About', section: 'about' },
    { id: 2, icon: <SettingsOutlined />, label: 'Services', section: 'services' },
    { id: 3, icon: <DesignServicesOutlined />, label: 'Skills', section: 'skills' },
    { id: 4, icon: <SourceOutlined />, label: 'Projects', section: 'projects' },
    { id: 5, icon: <EmailOutlined />, label: 'Contact', section: 'contact' },
  ];

  const handleScroll = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleKeyDown = (e, id, section) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setActiveIndex(id);
      handleScroll(section);
    }
  };

  // Add hover animation using GSAP
  useEffect(() => {
    const navElements = navRef.current?.children;

    if (navElements) {
      Array.from(navElements).forEach((item) => {
        const icon = item.querySelector('svg');
        const label = item.querySelector('.nav-label');

        gsap.fromTo(
          item,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.2 }
        );

        item.addEventListener('mouseenter', () => {
          gsap.to(icon, { scale: 1.3, duration: 0.3, ease: 'power2.out' });
          gsap.to(label, { opacity: 1, x: 10, duration: 0.3 });
        });

        item.addEventListener('mouseleave', () => {
          gsap.to(icon, { scale: 1, duration: 0.3 });
          gsap.to(label, { opacity: 0, x: 0, duration: 0.3 });
        });
      });
    }
  }, []);

  return (
    <nav>
      <ul className="nav-ul" ref={navRef}>
        {navItems.map((item) => (
          <li
            key={item.id}
            className={activeIndex === item.id ? 'active' : ''}
            onClick={() => {
              setActiveIndex(item.id);
              handleScroll(item.section);
            }}
            onKeyDown={(e) => handleKeyDown(e, item.id, item.section)}
            tabIndex={0} // Make focusable
            aria-label={item.label} // Screen reader support
          >
            {item.icon}
            <span className="nav-label">{item.label}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
