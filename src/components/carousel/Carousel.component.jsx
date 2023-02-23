import "./carousel.syles.css";
import { useState } from "react";

export const Carousel = ({ children }) => {
  const [slide, setSlide] = useState(1);
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};
