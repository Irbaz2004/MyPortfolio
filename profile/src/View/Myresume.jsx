import React from 'react'
import '../Style/resume.css'
import {ArrowOutwardOutlined} from '@mui/icons-material'


export default function Myresume() {
    const handleNavigationnexion = () => {
        window.open('https://nexionconnects.in/', '_blank');
      };
      const handleNavigationhelppme = () => {
        window.open('https://github.com/Irbaz2004', '_blank');
      };
      const handleNavigationaspira = () => {
        window.open('https://aspirasys.com/', '_blank');
      };
  return (
    <>
    <div className="resume">
        <div className="circle">
        
        <h6>*</h6>

        </div>
        <div className="resumedata">
            <h4 className='resume-h4'>My Resume</h4>
            <h2 className='resume-h2'>Real <span>Problem Solution</span><br />Experience</h2>

            <div className="experience">
                <div className="icon"onClick={handleNavigationnexion}><ArrowOutwardOutlined/></div>
                <div className="experience-item">
                    <h3>2024-Present</h3>
                    <h4>Technical Support</h4>
                    <h5>nexionconnects</h5>
                </div>
                
                <div className="icon"onClick={handleNavigationaspira}><ArrowOutwardOutlined/></div>
                <div className="experience-item">
                    <h3>3-Months (Intern)</h3>
                    <h4>Backend Developer</h4>
                    <h5>AspiraSys</h5>
                </div>
                
                <div className="icon"onClick={handleNavigationhelppme}><ArrowOutwardOutlined/></div>
                <div className="experience-item">
                    <h3>2024-Present</h3>
                    <h4>Technical Support Team Lead</h4>
                    <h5>Helppme.in</h5>
                </div>
            </div>
        </div>
    </div>
      
    </>
  )
}
