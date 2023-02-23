import "./navbar.styles.css";
import { PlayIcon } from "../../svg/PlayIcon.svg";
import { HamburgerIcon } from "../../svg/Hamburger.svg";
import { NavLink, Outlet } from "react-router-dom";
import { useState, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () => {
    setShowNav(!showNav);
  };

  let activeStyle = {
    color: "#5ebb3b",
  };

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
      <div className="outlet-container">
        <Outlet></Outlet>
      </div>
      <div className="footer-wrapper">
        <Footer />
      </div>
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
  const navSlide = useRef();
  let activeStyle = {
    color: "#5ebb3b",
  };

  useLayoutEffect(() => {
    gsap.to(navSlide.current, {
      transition: "all 0.1s ease-out",
      translateX: "70",
    });
  }, []);
  return (
    <div className="nav-dropdown" ref={navSlide}>
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
