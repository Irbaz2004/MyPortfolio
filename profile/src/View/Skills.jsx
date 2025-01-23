import React from 'react';
import css from '../assets/css-3.png';
import html from '../assets/html-5.png';
import js from '../assets/js.png';
import bootstrap from '../assets/media.png';
import node from '../assets/nodejs.png';
import postgre from '../assets/postgresql.png';
import python from '../assets/python.png';
import reactLogo from '../assets/react.png';

import { ArrowForwardIosOutlined } from '@mui/icons-material';
import '../Style/Skills.css';

export default function Skills() {
  return (
    <>
      <div className="skill">
        <div className="skill-content">
          <h4 className='skill-h4'>My Skills</h4>
          <h2 className='skills-h2'>
            Let's Explore Popular <span>Skills & Experience</span>
          </h2>
          <p>
            Here are some of the skills I have acquired over the years. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, similique?
          </p>
          <button className="skill-button">
            Learn More <ArrowForwardIosOutlined className="arrow-icon" />
          </button>
        </div>

        <div className="skill-image">
          <div className="image-row">
            <div className="image-col">
              <img src={reactLogo} className="skill-logo" alt="React" />
              <p>React</p>
              <p className="skill-percentage">80%</p>
            </div>
            <div className="image-col">
              <img src={node} className="skill-logo" alt="Node.js" />
              <p>Node.js</p>
              <p className="skill-percentage">85%</p>
            </div>
            <div className="image-col">
              <img src={python} className="skill-logo" alt="Python" />
              <p>Python</p>
              <p className="skill-percentage">80%</p>
            </div>
            <div className="image-col">
              <img src={js} className="skill-logo" alt="JavaScript" />
              <p>JavaScript</p>
              <p className="skill-percentage">80%</p>
            </div>
          </div>
          <div className="image-row">
            <div className="image-col">
              <img src={html} className="skill-logo" alt="HTML/CSS" />
              <p>HTML</p>
              <p className="skill-percentage">95%</p>
            </div>
            <div className="image-col">
              <img src={bootstrap} className="skill-logo" alt="Bootstrap" />
              <p>Bootstrap</p>
              <p className="skill-percentage">90%</p>
            </div>
            <div className="image-col">
              <img src={postgre} className="skill-logo postgre" alt="PostgreSQL" />
              <p>PostgreSQL</p>
              <p className="skill-percentage">70%</p>
            </div>
            <div className="image-col">
              <img src={css} className="skill-logo" alt="CSS" />
              <p>CSS</p>
              <p className="skill-percentage">90%</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
