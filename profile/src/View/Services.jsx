import React from 'react';
import { ArrowOutwardOutlined } from '@mui/icons-material';
import '../Style/Services.css';

export default function Services() {
  return (
    <>
      <div className="services">
        <h4 className="heading-service">Popular Services</h4>
        <h2 className="service-h2">
          My <span>Special Services</span> For Your Business Development
        </h2>
        <div className="service">
          {/* First Column */}
          <div className="service-column">
            <div className="service-data">
              <h3>01.</h3>
              <h5>Web Development</h5>
              <p className="service-detail">Creating modern, responsive websites for your needs.</p>
              <div className="icon">
                <ArrowOutwardOutlined />
              </div>
            </div>
            <div className="service-data">
              <h3>02.</h3>
              <h5>Backend Development</h5>
              <p className="service-detail">Building scalable and secure backend systems.</p>
              <div className="icon">
                <ArrowOutwardOutlined />
              </div>
            </div>
            <div className="service-data">
              <h3>03.</h3>
              <h5>Data Analysis</h5>
              <p className="service-detail">Transforming data into actionable insights.</p>
              <div className="icon">
                <ArrowOutwardOutlined />
              </div>
            </div>
          </div>

          {/* Second Column */}
          <div className="service-column">
            <div className="service-data">
              <h3>04.</h3>
              <h5>Machine Learning Solutions</h5>
              <p className="service-detail">Developing intelligent, predictive models.</p>
              <div className="icon">
                <ArrowOutwardOutlined />
              </div>
            </div>
            <div className="service-data">
              <h3>05.</h3>
              <h5>API Integration</h5>
              <p className="service-detail">Seamlessly integrating APIs for added functionality.</p>
              <div className="icon">
                <ArrowOutwardOutlined />
              </div>
            </div>
            <div className="service-data">
              <h3>06.</h3>
              <h5>Technical Support & Maintenance</h5>
              <p className="service-detail">Providing reliable support for your systems.</p>
              <div className="icon">
                <ArrowOutwardOutlined />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
