import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';
import Logo from '../images/logo.svg';

class Navbar extends Component {
  state = {
    isOpen: false
  };

  handelToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={Logo} alt="Blender Transformation logo" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handelToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? 'nav-links show-nav' : 'nav-links'}
          >
            <li>
              <Link to="/">Főoldal</Link>
            </li>
            <li>
              <Link to="/events">Naptár</Link>
            </li>
            <li>
              <Link to="/rooms">Eseménynapló</Link>
            </li>
            <li>
              <Link to="/contact">Munkabeosztás</Link>
            </li>
            <li>
              <Link to="/payment">Apartmanok kiadhatósága</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
