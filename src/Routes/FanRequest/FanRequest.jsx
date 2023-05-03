import { Link } from "react-router-dom";
import "./FanRequest.styles.css";
import { CardLgHome } from "../../components/cards/Card.component";
import { Carousel } from "../../components/carousel/Carousel.component";

export const FanRequest = () => {
  return (
    <>
      <div className="fan-request-flow-wrapper">
        <PartnerWithUsHero />
        <div className="home-text">
          <h2>BENEFITS OF A FAN REQUEST</h2>
          <Carousel>
            <CardLgHome text={" body"} image={"/images/fanRequestimage1.png"} />
            <CardLgHome text={" body"} image={"/images/fanRequestimage2.png"} />
            <CardLgHome text={" body"} image={"/images/fanRequestimage3.png"} />
          </Carousel>
        </div>
      </div>
    </>
  );
};

const PartnerWithUsHero = () => {
  return (
    <div className="hero-container  gd-col-2 ">
      <img
        src="/images/music.svg"
        alt="music icon"
        className="music-icon left-icon"
      />
      <img
        src="/images/music.svg"
        alt="music icon"
        className="music-icon right-icon"
      />
      <div className="text-container">
        <h1>
          CREATE MAGICAL MUSIC <br />
          MOMENT WITH YOUR <br />
          FAVOURITE ARTIST
        </h1>
        <p className="hide">
          With our fan request feature you can now make your music <br />
          moments even more special by requesting personalized <br />
          shoutouts from your favourite artists, just for you and your loved
          <br />
          ones on special occasions. Request your favourite song now <br /> and
          let's make some sensational music memories together!
        </p>
        <Link to={"/login"} className="hide">
          <button className="btn bg-tertiary-purple btn-round text-col-white">
            Send a request
          </button>
        </Link>
      </div>
      <div className="image-container-wrapper ">
        <div className="image-container right-item">
          <img src="/images/fanRequestHero1.png" alt="singer" />
        </div>
        <div className="image-container left-item">
          <img src="/images/fanRequestHero2.png" alt="artist" />
        </div>
      </div>
      <p className=" visible-on-mobile text-fan-request">
        With our fan request feature you can now make your music <br />
        moments even more special by requesting personalized <br />
        shoutouts from your favourite artists, just for you and your loved
        <br />
        ones on special occasions. Request your favourite song now <br /> and
        let's make some sensational music memories together!
      </p>
      <Link to={"/login"} className="visible-on-mobile">
        <button className="btn bg-tertiary-purple btn-round text-col-white">
          Get started
        </button>
      </Link>
    </div>
  );
};
