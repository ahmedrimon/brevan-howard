import React from 'react';
import './Nabar.css';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';

/* font-awesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link to="#" className="navbar-brand">
          <img src={logo} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* <span className="navbar-toggler-icon"></span> */}
          <FontAwesomeIcon style={{ color: '#fff' }} icon={faHamburger} />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="#" className="nav-link" aria-current="page">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link" aria-current="page">
                Culture
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link" aria-current="page">
                Careers
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link" aria-current="page">
                Contact
              </Link>
            </li>
            <li className="nav-item mx-3">
              <div className="line"></div>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link" aria-current="page">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
