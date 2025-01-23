import React from 'react';

export default function ProjectImage({ image }) {
  
  return (
    <div className="projectimage">
      <img src={image} alt="Project" />
    </div>
  );
}
