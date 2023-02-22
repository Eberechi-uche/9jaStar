import "./card.styles.css";

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

export const CardLg = () => {
  return (
    <div className="cardLg-container">
      <div className="cardLg-image-container">
        <img src="images/test-image.JPG" alt="yoda"></img>
      </div>
      <div>
        <h3>God Dey</h3>
        <p className="text-col-grey-light">Lumina</p>
      </div>
    </div>
  );
};
export const CardImage = ({ cardtitle }) => {
  return (
    <div className="cardImage-container">
      <img src="images/test-image.JPG" alt="yoda"></img>
      <div className="cardImage-text">
        <h3>WORK OUT</h3>
      </div>
    </div>
  );
};
export const CardRound = () => {
  return (
    <div className="cardRound-wrapper">
      <div className="cardRound-container">
        <img src="images/test-image.JPG" alt="yoda"></img>
      </div>
      <div>
        <p>Lola</p>
      </div>
    </div>
  );
};
