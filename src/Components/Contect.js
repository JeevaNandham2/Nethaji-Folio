import React from 'react';
import { Element } from 'react-scroll';
import IconButton from '@mui/material/IconButton';

import contactimg from '../assets/img/original-f8068a9b6ddef20464e34e6d2ff4d8d0.gif';
import message from '../assets/img/gmail-removebg-preview.png';
import facebook from '../assets/img/Linkedin.png';
import call from '../assets/img/call-removebg-preview.png';
import instagram from '../assets/img/instagram-removebg-preview.png';

const Contactmy = () => {
  return (
    <Element className="contact" id="contact">
      <div className="contact__content">
        <h1 className="contact__title">Contact Me 📞</h1>
        <p className="contact__subtitle">
          Whether you want to discuss a project or just say hi, I'm open to chat!
        </p>

        <div className="contact__info">
          <h2 className="contact__number">+91-8870459670</h2>
          <h3 className="contact__email">
            <a href="mailto:nethaji1283@gmail.com">nethaji1283@gmail.com</a>
          </h3>
        </div>

        <div className="contact__details">
          <p className="contact__email-info">
            You can reach me via email or through the contact options below:
          </p>
        </div>

        <div className="contact__social">
          <a href="mailto:nethaji1283@gmail.com" aria-label="Email">
            <IconButton className="contact__icon email">
              <img src={message} className="contact__image icon-img" alt="message" />
          
            </IconButton>
          </a>
          <a href="tel:+918870459670" aria-label="Call me">
            <IconButton className="contact__icon call">
              <img src={call} className="contact__image icon-img" alt="call" />
              
            </IconButton>
          </a>
          <a
            href="https://www.linkedin.com/in/nethaji-k-3999a6355"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <IconButton className="contact__icon facebook">
              <img src={facebook} className="contact__image icon-img" alt="facebook" />
              
            </IconButton>
          </a>
          <a
            href="https://www.instagram.com/noisy_cuts/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <IconButton className="contact__icon instagram">
              <img src={instagram} className="contact__image icon-img" alt="instagram" />
              
            </IconButton>
          </a>
        </div>

        <div className="contact__image-container">
          <img src={contactimg} className="contact__image" alt="Contact Illustration" />
        </div>
      </div>
    </Element>
  );
};

export default Contactmy;
