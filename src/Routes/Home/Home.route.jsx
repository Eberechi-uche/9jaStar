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
import SliderCarousel, {
  SliderCarouselItem,
} from "../../components/slider/SliderCarousel.component";

export const Home = () => {
  return (
    <div className="home-header">
      <Header>
        <Hero />
      </Header>

      <div className="logo-container">
        <img src="/images/homepageLogo.webp" alt={"logo"} />
      </div>

      <SectionLayout>
        <SectionText>
          With 9jastar you get to know the artists who are changing the game and
          making waves with their incredible talent. They are the voices that
          inspire us, the sounds that move us, and the beats that make us dance.
          From rising stars to music legends, our website is dedicated to
          promoting these amazing artists and giving them the recognition they
          deserve.
        </SectionText>
        <SectionImage image={"/images/iPhone 12 Mini.png"} />
        <Link to={"/explore-music"}>
          <button className="btn bg-tertiary-purple btn-round text-col-white visible-on-mobile">
            Get started
          </button>
        </Link>
      </SectionLayout>
      <div className="home-text">
        <h2> why choose us</h2>
        <Carousel>
          <CardLgHome
            image={"/images/laddyholdingPhone.webp"}
            heading={"free uploads"}
          >
            Upload up to 1000+ songs for free. Get your release album uploaded
            for your music lovers
          </CardLgHome>
          <CardLgHome
            image={"/images/laddywithheadphone.png"}
            heading={"Great Audience reach"}
          >
            Our fast growing platform makes it easier to expand and enhance your
            reach
          </CardLgHome>
          <CardLgHome
            image={"/images/manwithphone.webp"}
            heading={"features that work"}
          >
            With the goal of empowering artists. 9Jaster gives you more ways of
            supporting the artist you love with more social feature
          </CardLgHome>
        </Carousel>
      </div>

      <section className="testimony-header-container">
        <div className="testimony-text">
          <h3 className="mg-10">WHAT OUR ARTIST SAY</h3>
        </div>

        <SliderCarousel>
          <SliderCarouselItem>
            <Users name={"Raya, 22"} image={"/images/Raya.webp"} />
          </SliderCarouselItem>
          <SliderCarouselItem>
            <Users name={"Gold, 35"} image={"/images/afroLady.webp"} />
          </SliderCarouselItem>
          <SliderCarouselItem>
            <Users name={"John, 19"} image={"images/fanRequestimage3.png"} />
          </SliderCarouselItem>
        </SliderCarousel>
      </section>
    </div>
  );
};

export const Hero = () => {
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
        <h1 className="text-col-white">
          GET THAT VISIBILITY NEEDED AS AN UPCOMING ARTIST WITH 9JASTAR
        </h1>
        <p className="text-col-grey-light hide">
          We believe that music has the power to bring people <br /> together
          and create positive change in the world. <br /> Through our website,
          we aim to spread the joy of music <br /> and connect fans with the
          artists they love.
        </p>
        <Link to={"/explore-music"} className="hide">
          <button className="btn bg-tertiary-purple btn-round text-col-white">
            Get started
          </button>
        </Link>
      </div>
      <div className="image-container-wrapper ">
        <div className="image-container right-item">
          <img src="/images/female-homepage.webp" alt="singer" />
        </div>
        <div className="image-container left-item">
          <img src="/images/heroImage-male.webp" alt="artist" />
        </div>
      </div>
      <p className="text-col-grey-light visible-on-mobile">
        We believe that music has the power to bring <br /> people together and
        create positive change in the <br /> world. Through our website, we aim
        to spread the <br /> joy of music and connect fans with the artists they
        love.
      </p>
      <Link to={"/explore-music"} className="visible-on-mobile">
        <button className="btn bg-tertiary-purple btn-round text-col-white">
          Get started
        </button>
      </Link>
    </div>
  );
};
