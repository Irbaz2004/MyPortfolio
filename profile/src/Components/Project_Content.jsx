import React from 'react';
import { ArrowOutwardOutlined } from '@mui/icons-material';

export default function ProjectContent({ title, subtitle, description, githubLink }) {
  return (
    <div className="project-content">
      <h4>{title}</h4>
      <h2 className="project-content-h2">{subtitle}</h2>
      <p>{description}</p>
      <div className="icon">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <ArrowOutwardOutlined style={{ cursor: 'pointer', fontSize: '24px' }} />
        </a>
      </div>
    </div>
  );
}
