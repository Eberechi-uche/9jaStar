import { Link } from "react-router-dom";
import { Carousel } from "../../components/carousel/Carousel.component";
import { CardLgHome } from "../../components/cards/Card.component";

const PartnerWithus = () => {
  return (
    <>
      <PartnerWithUsHero />
      <div className="home-text">
        <h2>WHY YOU SHOULD PARTNER WITH US</h2>
        <Carousel>
          <CardLgHome
            children={
              " Live events and stage performance from talented rising stars"
            }
            image={"/images/partnerWithUsCard.png"}
          />
          <CardLgHome
            children={" Signing of rising talents into a record label"}
            image={"/images/partnerWithUsCard2.png"}
          />
          <CardLgHome
            children={" Endorsement deal"}
            image={"/images/partnerWithUsCard3.png"}
          />
          <CardLgHome
            children={" Nomination and awards for rising talent"}
            image={"/images/partnerWithUsCard4.png"}
          />
        </Carousel>
      </div>
      <div
        className="partner-with-us-section"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100px",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "0.9em",
        }}
      >
        <h3>Partner with us today</h3>
        <p> send us an Email</p>
      </div>
    </>
  );
};
export default PartnerWithus;
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
          Join us today and <br />
          experience the <br />
          future of music!
        </h1>
        <p className="hide">
          Our Partner With Us feature that lets you connect and <br />
          collaborate with fellow music enthusiasts from around the <br />
          world. So, whether you're a solo artist or part of a band, come <br />
          join our community and take your music to new heights!
        </p>
        <Link to={"/login"} className="hide">
          <button className="btn bg-tertiary-purple btn-round text-col-white">
            Partner with us
          </button>
        </Link>
      </div>
      <div className="image-container-wrapper ">
        <div className="image-container right-item image-container-purple">
          <img src="/images/partnerWithUs1.png" alt="singer" />
        </div>
        <div className="image-container left-item image-container-purple">
          <img src="/images/partnerWithUs2.png" alt="artist" />
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
          Partner with us
        </button>
      </Link>
    </div>
  );
};
