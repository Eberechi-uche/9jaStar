import "./card.styles.css";
import { Link } from "react-router-dom";
export const ScrollLayout = ({ children, title }) => {
  return (
    <div className="scroll-layout">
      <div>
        <h2>{title}</h2>
      </div>
      {children}
    </div>
  );
};

export const CardLg = ({ image, heading, text, color }) => {
  return (
    <div className={`cardLg-container ${color}`}>
      <div className="cardLg-image-container">
        <img src={image} alt={text}></img>
      </div>
      <div>
        <h4>{heading}</h4>
        <p className="text-col-grey-light">{text}</p>
      </div>
    </div>
  );
};
export const CardImage = ({ image, heading, onClick, link }) => {
  return (
    <div className="cardImage-container" onClick={onClick}>
      <img src={image} alt={heading} />
      <div className="cardImage-text">
        <h3>{heading}</h3>
      </div>
    </div>
  );
};
export const CardRound = ({ artistId }) => {
  const { mainImage, id, name } = artistId;
  return (
    <div className="cardRound-wrapper">
      <Link to={`/explore-music/${id}`} className="link">
        <div className="cardRound-container">
          <img src={mainImage} alt={name} />
        </div>
        <div>
          <h4>{name}</h4>
        </div>
      </Link>
    </div>
  );
};

export const CardProfile = ({ image }) => {
  return (
    <div className="cardRound-container-sm">
      <img src={image} alt={"profile"} />
    </div>
  );
};
export const CardLgHome = ({ image, children, heading }) => {
  return (
    <div className="cardLg-wrapper-home">
      <div className="cardLg-container-home">
        <div className="cardLg-image-container-home">
          <img src={image} alt="sectionimage" />
          <div className="cardImage-text-home">
            <p>{heading}</p>
          </div>
        </div>
        <div className="cardLg-text-container-home">
          <p>{children}</p>
        </div>
      </div>
    </div>
  );
};
