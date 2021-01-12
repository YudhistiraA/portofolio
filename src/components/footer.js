import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaGithub
} from "react-icons/fa";

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
       
        Langkah Menuju Kejayaan Adalah
        </p>
        <p className='footer-subscription-text'>
        Menundukan Kebiasaan Menunda Nunda 
        </p>
        
      </section>
      
      <section class='social-media'>
        <div class='social-media-wrap'>
      
          <small class='website-rights'>yudhistira arya © 2020</small>
          <div class='social-icons'>
          <a href="https://www.facebook.com/yudhistira.arya.184/"> <FaFacebookF  class='social-icon-link ' /></a>
          <a href="https://www.linkedin.com/in/arya-rajasa-6856b5201/"> <FaLinkedin class='social-icon-link '/></a>
            
          <a href="https://www.instagram.com/yu_arya02/"> <FaInstagram  class='social-icon-link ' /></a>
            
          <a href="https://github.com/YudhistiraA"> <FaGithub  class='social-icon-link ' /></a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;