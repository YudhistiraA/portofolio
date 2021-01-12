import React from "react";
import {Link} from 'react-scroll'
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGithub
 
} from "react-icons/fa";
const Banner = () => {
  const [state] = React.useState({
    title: "I am yudhistira arya",
    text:
      "i,m yudhistira, professional web developer with long time \
    experience in this field​",
    image: "/images/dd.png",
  });
  return (
    <header className="header" id="home">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <ul className="header__ul">
                  <li>
                  <a href="https://www.facebook.com/yudhistira.arya.184/"> <FaFacebookF  class='social-icon-link ' /></a>
                   
                  </li>
                  <li>
                  <a href="https://www.linkedin.com/in/arya-rajasa-6856b5201/"> <FaLinkedinIn class='social-icon-link '/></a>
                   
                  </li>
                 
                  <li>
                  <a href="https://www.instagram.com/yu_arya02/"> <FaInstagram  class='social-icon-link ' /></a>
                   
                  </li>
                  <li>
                  <a href="https://github.com/YudhistiraA"> <FaGithub  class='social-icon-link ' /></a>
                   
                  </li>
                </ul>
                <h1>{state.title}</h1>
                <p>{state.text}</p>
                <div className="header__buttons">
                  
                  <Link  className="btn btn-outline"  to="service" spy={true} smooth={true}>Portofolio</Link>
                  &nbsp;&nbsp;&nbsp;
                  
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner__img">
              <img src={state.image} alt="man" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;