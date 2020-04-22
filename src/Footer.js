import React from 'react';
import githubLogo from './assets/github-logo.png';
import linkedinLogo from './assets/linkedin-logo.png';
import './Footer.css';

function Footer() {
  return (
    <div className="foot-container">
      <a
        className="logo-link"
        href="https://github.com/imgeorge220"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={githubLogo} className="logo-link" alt="logo" />
      </a>
      <a
        className="logo-link"
        href="https://www.linkedin.com/in/george-gruner-2787431a5/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedinLogo} className="logo-link" alt="logo" />
      </a>
      <br />
      <a
        className="footer-link"
        href="mailto:imgeorge220@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        imgeorge220@gmail.com
      </a>
    </div>
  );
}

export default Footer;
