import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <h3>About Us</h3>
      <div className="content">
        <div className="content-left">
          {/* Left content */}
          <p>
            Our mission is to provide a revolutionary platform for students to
            discover, explore, and choose their ideal universities. We believe in
            empowering individuals through education and guiding them on their
            academic journey.
          </p>
        </div>
        <div className="content-right">
          <p>
            Welcome to UniGuide, a dynamic hub
            where education transforms into empowerment.
            Our dedicated team is on a mission to redefine the
            educational journey for African students, paving the
            way for a brighter future through higher education.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
