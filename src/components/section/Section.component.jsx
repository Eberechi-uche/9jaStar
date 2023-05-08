import "../section/section.styles.css";

export const SectionLayout = ({ children }) => {
  return (
    <div className="section-container gd ">
      <div className="section-child-container gd-col-2">{children}</div>
    </div>
  );
};

export const SectionText = ({ children }) => {
  return (
    <>
      <div className="section-text-container ">
        <h2
          style={{
            margin: " 10px 0px",
          }}
        >
          DISCOVER RISING TALENTS
        </h2>
        <p> {children}</p>
        <button className="btn btn-round text-col-white bg-tertiary-purple btn-wd-fit-content hide">
          Learn more
        </button>
      </div>
    </>
  );
};

export const SectionImage = ({ image }) => {
  return (
    <>
      <div className="section-image-container ">
        <img src={image} alt="cell-phone" />
      </div>
    </>
  );
};
export const Users = () => {
  return (
    <div className="user-testimony-wrapper ">
      <img
        src="/images/music.svg"
        alt="music icon"
        className="music-icon user-icon-top"
      />
      <img
        src="/images/music.svg"
        alt="music icon"
        className="music-icon user-icon-bottom"
      />
      <div className="user-testimony-container">
        <h3 className="mg-10">Our Artists Says</h3>
        <p>
          I am a undergraduate and a artist <br /> and since i found this
          platform my life has changed. i got signed in to one of the best
          <br />
          record label in Nigeria and my audience reach has surpassed all thanks
          to 9jastar
        </p>
        <div className="user-details-container">
          <img src="/images/Raya.webp" alt="user profile"></img>
          <p> Reya, 22</p>
          <p>Artist</p>
        </div>
      </div>
    </div>
  );
};
