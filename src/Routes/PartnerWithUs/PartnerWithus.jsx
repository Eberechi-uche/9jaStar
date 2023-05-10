import { Carousel } from "../../components/carousel/Carousel.component";
import { CardLgHome } from "../../components/cards/Card.component";
import { useState } from "react";

const PartnerWithus = () => {
  const [view, setView] = useState("message");
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
        id="send-mail"
      >
        <h3>Partner with us today</h3>
        <p> send us an Email</p>
      </div>
      <div className="fan-request-form-wrapper">
        <div className="fan-request-form-container">
          {view === "message" && (
            <div className="FRcomponent-form-wrapper">
              <form className="FRcomponent-input-wrapper">
                <div className="FRcomponent-input-container">
                  <label> Full name</label>
                  <input placeholder="Full name" />
                  <label> Email</label>
                  <input placeholder="Email" />
                  <label />
                  <textarea placeholder="Your message" className="mg-20" />
                </div>
                <div className="FRcomponent-btn-container">
                  <button
                    className="btn btn-round FRbtn"
                    onClick={() => {
                      setView("recieved");
                    }}
                  >
                    Send Request
                  </button>
                </div>
              </form>
            </div>
          )}
          {view === "recieved" && (
            <div>
              <h2>Thank you !</h2>
            </div>
          )}
        </div>
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
          Our Partner With Us seeks to promote upcoming musicians <br />
          to showcase their talent to the world We are eager to collaborate with
          you for any event, Endorsement, signing of rising talents nomination
          and awards. Partner with us today to inspire musical creativity and
          empower growth.
        </p>
        <a href="#send-mail" className="hide">
          <button className="btn bg-tertiary-purple btn-round text-col-white">
            Partner with us
          </button>
        </a>
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
        Our Partner With Us seeks to promote upcoming musicians <br />
        to showcase their talent to the world We are eager to collaborate with
        you for any event, Endorsement, signing of rising talents nomination and
        awards. Partner with us today to inspire musical creativity and empower
        growth.
      </p>

      <a href="#send-mail" className="visible-on-mobile">
        <button className="btn bg-tertiary-purple btn-round text-col-white">
          Partner with us
        </button>
      </a>
    </div>
  );
};
