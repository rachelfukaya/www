import React, { Component } from 'react';
import navbarLogo from '../static/img/navbar-logo.png';
import styled from 'styled-components';

const NavbarLink = styled.a`
  text-transform: uppercase;
  color: #b83e9f;
  font-weight: 700;
  padding: 1rem 1.5rem;
  &:hover {
    color: #df2d99 !important;
  }
`;

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand is-hidden-mobile">
            <a className="navbar-item" href="/">
              <img
                src={navbarLogo}
                alt="#StartupDetroit"
                width="27"
                height="36"
              />
            </a>
          </div>
          <div className="navbar-menu is-active">
            <div className="navbar-end">
              <NavbarLink className="navbar-item" href="#get-involved">
                Get Involved
              </NavbarLink>
              <NavbarLink className="navbar-item" href="#community">
                Community
              </NavbarLink>
              <NavbarLink className="navbar-item" href="#about">
                About
              </NavbarLink>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
