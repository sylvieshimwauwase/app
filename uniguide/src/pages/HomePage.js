import React from 'react';
import './HomePage.css';
import Button from '../components/Button';
import Header from '../components/Header';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';

const HomePage = () => {
  /*const handleLoginClick = () => {
    console.log('Login clicked');
  }*/

  return (
    <div className="home-page">
      <Header />
      <div className="sections">
        <div className="section1">
          <div className="paragraphs">
            <p className='txt1'>Discover  Your Perfect University Here</p>
            <p className='txt2'>Explore a world of educational opportunities tailored to your preferences and find the ideal academic path that suits your goals. Start your educational journey today!</p>
          </div>
          <div className="image-student">
            <img src="/student.png" alt=""/>
          </div>
        </div>
        <Button label="Apply Now" className="apply-now-btn"/>
      </div>
      <div className='section2'>
          <div className="paragraph-1">
              <p>Uncover the story behind
              UniGuide's educational
              revolution. Meet the minds
              shaping a transformative
              platform. Your academic
              adventure starts here — ready to
              explore?</p>
          </div>
          <div className="paragraph-2">
              <p>We elevate your education
              experience as we redefine how
              African students discover
              universities. Explore personalized
              searches, compare institutions,
              and unveil a world of scholarship
              opportunities.</p>
          </div>
        </div>
        <Button label="Start exploring" className="start-exploring-btn"/>
      <AboutUs />
      <Footer />
    </div>
  );
};

export default HomePage;
