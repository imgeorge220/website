import React from 'react';
import gcgPhoto from './assets/pic-gcg.jpg';
import resume from './assets/resume.pdf';
import Footer from './Footer';
import Carousel from 'react-bootstrap/Carousel'
import './App.css';

function App() {
  return (
    <div className="site">
      <div className="spacer"></div>
      <img src={gcgPhoto} className="picture" alt="logo" />
      <div className="spacer"></div>
      <strong className="header-text">I'm George. A full-stack software<br /> 
      engineer in San Francisco, California.
      </strong> 
      <div className="spacer"></div>
      <Carousel className="portfolio">
        <Carousel.Item>
      <div className="portfolio-item">
      </div>
          <Carousel.Caption> 
            <h3><a 
              className="portfolio-link" 
              href={resume}
              target="_blank"
              rel="noopener noreferrer">Resume
            </a></h3>
            <p className="portfolio-text">Jump Off Campus</p>
            <p className="portfolio-text">Mueller Associates</p>
            <p className="portfolio-text">Javascript, Python, SQL, HTML, CSS</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
      <div className="portfolio-item">
      </div>
          <Carousel.Caption> 
            <h3><a
              className="portfolio-link"
              href="https://rlin-team.github.io/"
              target="_blank"
              rel="noopener noreferrer">rlin
            </a></h3>
            <p className="portfolio-text">Mobile app for aiding TBI patients in therapy</p>
            <p className="portfolio-text">Available on Apple app store</p>
            <p className="portfolio-text">React-Native, Firebase, Expo</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
      <div className="portfolio-item">
      </div>
          <Carousel.Caption> 
            <h3><a
              className="portfolio-link"
              href="https://github.com/imgeorge220/jobly"
              target="_blank"
              rel="noopener noreferrer">Jobly
            </a></h3>
            <p className="portfolio-text">Full Stack Job board</p>
            <p className="portfolio-text">Deployed on Heroku</p>
            <p className="portfolio-text">React, Express, PSQL</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Footer />
    </div>
  );
}

export default App;
