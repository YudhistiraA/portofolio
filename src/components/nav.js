import React from "react";
import { FaAlignJustify } from "react-icons/fa";
import {Link} from 'react-scroll'
const Nav = () => {
  const [state, setState] = React.useState(true);
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <ul className="navbar__left">
            <div className="navbar__left-logo">
              <img src="/images/logo.png" alt="logo" />
            </div>
          </ul>
          {state ? (
            <ul className="navbar__right">
              <li>
              <Link  to="Home" spy={true} smooth={true}>Home</Link>
              </li>
              <li>
                <a href="https://github.com/YudhistiraA?tab=repositories">Git</a>
              </li>
              <li>
              <Link  to="service" spy={true} smooth={true}>Portofolio</Link>
              </li>
              <li>
              <Link  to="contact" spy={true} smooth={true}>Contact</Link>
              </li>
              <li>
              <Link  to="about" spy={true} smooth={true}>About</Link>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="toggle" onClick={() => setState(!state)}>
        <FaAlignJustify />
      </div>
    </nav>
  );
};

export default Nav;