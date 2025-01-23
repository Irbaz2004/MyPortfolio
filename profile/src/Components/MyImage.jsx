import React from 'react'
import {LinkedIn,ExposureOutlined} from '@mui/icons-material'
import Image from '../assets/profile1.png'
export default function MyImage() {
  const handleNavigation = () => {
    window.open('https://www.linkedin.com/in/irbaz-ahmed-s-a6bba4332/', '_blank');
  };
  const handleNavigationgithub = () => {
    window.open('https://github.com/Irbaz2004', '_blank');
  };
  return (
    <>
      <div className="myimage">
        <div className="developer"onClick={handleNavigation}>
         <LinkedIn/> <p>Let's Connect</p>
        </div>
        
        <img src={Image} alt="Profile Pic" className='my' />
        <div className="developer1"onClick={handleNavigationgithub}>
         <ExposureOutlined/> <p>Repository</p>
        </div>
      </div>
    </>
  )
}