import "./navbar.styles.css";
import { PlayIcon } from "../../svg/PlayIcon.svg";
import { HamburgerIcon } from "../../svg/Hamburger.svg";
import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () => {
    setShowNav(!showNav);
  };

  let activeStyle = {
    color: "#5ebb3b",
  };
  let activeClassName = "link";
  return (
    <>
      <nav className="nav">
        <NavLink to="/home">
          <p className="text-col-white">9jaStar</p>
        </NavLink>
        <div className="toggle-icon" onClick={toggleNav}>
          <HamburgerIcon />
          {showNav && <NavDropDown />}
        </div>
        <div className="nav-item">
          <ul className="fl fl-row wd-100">
            <li>
              <NavLink
                to="/home"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/explore-music"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Expolore Music
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/fan-request"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Fan request
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/partner-with-us"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Partner With us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/listen-now"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <Play />
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet></Outlet>
      <Footer />
    </>
  );
};
export const Header = ({ children }) => {
  return (
    <>
      <header className="header-container">{children}</header>
    </>
  );
};
export const Play = () => {
  return (
    <div className="logo">
      <a href=""> listen now</a>
      <div className="svg-round">
        <PlayIcon />
      </div>
    </div>
  );
};

export const NavDropDown = () => {
  let activeStyle = {
    color: "#5ebb3b",
  };
  return (
    <div className="nav-dropdown">
      <ul className="fl fl-col">
        <li>
          <NavLink
            to="/home"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/explore-music"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Expolore Music
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/fan-request"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Fan request
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/partner-with-us"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Partner With us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/listen-now"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <Play />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-link-container">
        <div>9jaStar</div>
        <ul className="footer-list">
          <li>Explore Music</li>
          <li> community</li>
          <li>Partney with us</li>
          <li>Get support</li>
          <li>usefull links</li>
        </ul>
      </div>
      <div>
        <ul className="footer-list">
          <li>instagram</li>
          <li> twitter</li>
          <li> facebook</li>
        </ul>
      </div>
    </footer>
  );
};
