import "./explore-music.route.css";
import { Carousel } from "../../components/carousel/Carousel.component";
import {
  CardLg,
  CardImage,
  CardRound,
} from "../../components/cards/Card.component";
export const ExploreMusic = () => {
  return (
    <>
      <div className="explore-music-wrapper">
        <header className="explore-music-header">
          <ExploreMusicHeader />
        </header>
        <Carousel title={"Top Trending Artist"}>
          <CardLg />
          <CardLg />
          <CardLg />
          <CardLg />
        </Carousel>
        <Carousel title={"Your Library"}>
          <CardLg />
          <CardLg />
          <CardLg />
          <CardLg />
        </Carousel>
        <Carousel title={"What Is Your Mood?"}>
          <CardImage />
          <CardImage />
          <CardImage />
          <CardImage />
          <CardImage />
          <CardImage />
        </Carousel>
        <Carousel title={"Top Trending Artist"}>
          <CardRound />
          <CardRound />
          <CardRound />
          <CardRound />
        </Carousel>
      </div>
    </>
  );
};

export const ExploreMusicHeader = () => {
  return (
    <div className="explore-music-container">
      <h2>Keep Listening </h2>
      <div className="header-img-container">
        <img src="images/test-image.JPG" alt="yoda" />
      </div>
    </div>
  );
};
