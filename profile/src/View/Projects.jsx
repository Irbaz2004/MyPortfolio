import React from 'react';
import '../Style/Projects.css';
import ProjectImage from '../Components/Project_Image';
import ProjectContent from '../Components/Project_Content';
import savor from '../assets/savor speactaron project image.png';
import rescipe from '../assets/Recipe project image.png';
import lbc from '../assets/LBC project image.png';
import ics from '../assets/iruzcallspace.png';

export default function Projects() {
  const projects = [
    {
      id: 1,
      image: savor,
      title: 'Savor Spectrum',
      subtitle: 'Restaurant',
      description:
        'A restaurant website that allows users to browse and order food, juices, cakes, desserts, and more with ease.',
        link: 'https://savourspectrum.pages.dev/',
        
    },
    {
      id: 2,
      image: rescipe,
      title: 'Rescipe Talk',
      subtitle: 'Recipe Finder',
      description:
        'An intuitive recipe finder platform that helps users discover recipes using a food API for quick and personalized results.',
        link: 'https://recipestalk.vercel.app/',
    },
    {
      id: 3,
      image: lbc,
      title: 'LBC - Leather Bound Creation',
      subtitle: 'E-commerce',
      description:
        'An e-commerce website offering premium leather products, enabling users to shop for high-quality leather items online.',
        link: 'https://lbc-5mco.vercel.app/',
    },
    {
      id: 4,
      image: ics,
      title: 'Online Video Call Website',
      subtitle: 'Video Call Platform',
      description:
        'A modern video call website utilizing ZEGOCLOUD API for seamless online video communication and meetings.',
        link: 'https://vcall-lovat.vercel.app/',
    },
  ];
  

  return (
    <div className="project">
      {/* Header Section */}
      <h4 className="project-h4">Latest Projects</h4>
      <h2 className='project-h2'>
        Explore My Popular <span>Projects</span>
      </h2>

      {/* Project List */}
      {projects.map((project, index) => {
        const flexDirection = index % 2 === 0 ? 'row' : 'row-reverse'; // Alternating layout
        return (
          <div
            className="project-showcase"
            key={project.id}
            style={{ flexDirection }}
          >
            <ProjectImage image={project.image} />
            <ProjectContent
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              githubLink={project.link}
            />
          </div>
        );
      })}

    
    </div>
  );
}
