import "./navbar.styles.css";
import { PlayIcon } from "../../svg/PlayIcon.svg";
import { HamburgerIcon } from "../../svg/Hamburger.svg";
import { NavLink } from "react-router-dom";
import { useState, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../Utils/firebase/firebase.utils";
import { signOut } from "@firebase/auth";
import { CardProfile } from "../cards/Card.component";
import { useLocation } from "react-router-dom";
import {
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillFacebook,
} from "react-icons/ai";

let linkColor;
export const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const location = useLocation();
  linkColor =
    location.pathname !== "/" && location.pathname !== "/explore-music"
      ? "link-section"
      : "link";

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  let activeStyle = {
    color: "#5ebb3b",
  };

  return (
    <div className="layout">
      <nav className="nav ">
        <NavLink to="/" className={linkColor}>
          <img
            className="text-col-white logo"
            src="/images/9jaLogo.svg"
            alt="logo"
          />
        </NavLink>

        <div className="toggle-icon" onClick={toggleNav}>
          <Icon />
          <HamburgerIcon />
        </div>
        {showNav && <NavDropDown handleClick={toggleNav} />}
        <div className="nav-item ">
          <ul className="fl fl-row wd-100 ">
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className={linkColor}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/explore-music"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className={linkColor}
              >
                Expolore Music
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/fan-request"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className={linkColor}
              >
                Fan request
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/partner-with-us"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className={linkColor}
              >
                Partner With us
              </NavLink>
            </li>
            <li>
              <Icon />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export const Header = ({ children }) => {
  return (
    <>
      <header className="header-container">{children}</header>
    </>
  );
};

export const Icon = () => {
  const [user] = useAuthState(auth);

  let activeStyle = {
    color: "#5ebb3b",
  };
  const view = !user ? (
    <>
      <NavLink
        to="/login"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        className={linkColor}
      >
        <div className="join-btn">
          <p> Join</p>
          <div className="svg-round">
            <PlayIcon />
          </div>
        </div>
      </NavLink>
    </>
  ) : (
    <div
      className="join-btn"
      onClick={() => {
        signOut(auth);
      }}
    >
      <p> Log out</p>
      <div className="svg-round">
        <CardProfile image="images/user.jpg" />
      </div>
    </div>
  );
  return <>{view}</>;
};

export const NavDropDown = ({ handleClick }) => {
  const navSlide = useRef();
  let activeStyle = {
    color: "#5ebb3b",
  };

  useLayoutEffect(() => {
    gsap.from(navSlide.current, {
      transition: "all 0.3s ease-out",
    });
  }, []);

  return (
    <div className="nav-dropdown" ref={navSlide}>
      <div className="nav-close-btn" onClick={handleClick}>
        &#x2715;
      </div>
      <ul className="fl fl-col">
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className={linkColor}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/explore-music"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className={linkColor}
          >
            Explore Music
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/fan-request"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className={linkColor}
          >
            Fan request
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/partner-with-us"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className={linkColor}
          >
            Partner With us
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export const Footer = () => {
  const footer = useRef();
  let activeStyle = {
    color: "#5ebb3b",
  };
  return (
    <div className="footer-container" ref={footer}>
      <ul className="footer-list">
        <li>
          <NavLink to="/" className={"link"}>
            <img
              className="text-col-white logo"
              src="/images/9jaLogo.svg"
              alt="logo"
            />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/explore-music"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className={"link"}
          >
            Explore Music
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/fan-request"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className={"link"}
          >
            Fan request
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/partner-with-us"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className={"link"}
          >
            Partner With us
          </NavLink>
        </li>
        <li>Get support</li>
      </ul>
      <ul className="footer-list footer-socials">
        <li>
          <AiFillInstagram size={"1.5em"} />
        </li>
        <li>
          <AiFillTwitterSquare size={"1.5em"} />
        </li>
        <li>
          <AiFillFacebook size={"1.5em"} />
        </li>
      </ul>
    </div>
  );
};
