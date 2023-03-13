import "./Home.styles.css";
import { Header } from "../../components/navbar/Navbar.component";
import { Link } from "react-router-dom";
import {
  SectionImage,
  SectionText,
  SectionLayout,
  Users,
} from "../../components/section/Section.component";
import { Carousel } from "../../components/carousel/Carousel.component";
import { CardLgHome } from "../../components/cards/Card.component";

export const Home = () => {
  return (
    <div className="home-header">
      <Header>
        <Hero />
      </Header>

      <SectionLayout>
        <SectionText>
          With 9jastar you get to know the artists who are changing the game and
          making waves with their incredible talent. They are the voices that
          inspire us, the sounds that move us, and the beats that make us dance.
          From rising stars to music legends, our website is dedicated to
          promoting these amazing artists and giving them the recognition they
          deserve.
        </SectionText>
        <SectionImage />
      </SectionLayout>
      <div className="home-text">
        <h2> why choose us</h2>
        <Carousel>
          <CardLgHome image={"images/dance.jpg"} heading={"free uploads"}>
            upload up to 100 songs
          </CardLgHome>
          <CardLgHome
            image={"images/dance.jpg"}
            heading={"Great Audience reach"}
          >
            "our fast growing platform makes it easier to expand and enhance
            your reach"
          </CardLgHome>
          <CardLgHome image={"images/dance.jpg"} heading={"features that work"}>
            with the goal of empowering artist, 9jastar gives you more ways of
            supporting the artist you love with more social features
          </CardLgHome>
        </Carousel>
      </div>

      <Users />
    </div>
  );
};

export const Hero = () => {
  return (
    <div className="hero-container gd gd-col-2 ">
      <div className="text-container">
        <h1 className="text-col-white">
          GET THAT VISIBILITY NEEDED AS AN UPCOMING ARTIST WITH 9JASTAR
        </h1>
        <p className="text-col-grey-light">
          We believe that music has the power to bring people together and
          create positive change in the world. Through our website, we aim to
          spread the joy of music and connect fans with the artists they love.
        </p>
        <Link to={"/login"}>
          <button className="btn bg-tertiary-purple btn-round text-col-white">
            Get started
          </button>
        </Link>
      </div>
      <div className="image-container-wrapper">
        <div className="image-container">
          <img src="images/singer.jpg" alt="singer" />
        </div>
        <div className="image-container top-item">
          <img src="images/home-artist.jpg" alt="artist" />
        </div>
      </div>
    </div>
  );
};
