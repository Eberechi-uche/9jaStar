import { useLocation } from "react-router-dom";
import "./carousel.syles.css";

export const Carousel = ({ children, title }) => {
  const loaction = useLocation();

  return (
    <>
      <div
        className={`carousel-wrapper ${
          loaction.pathname !== "/explore-music"
            ? "carousel-color-dark"
            : "carousel-color-light "
        }  `}
      >
        <h3>{title}</h3>
        <div className="carousel-item-container">{children}</div>
      </div>
    </>
  );
};
