import "./explore-music.route.css";
import {
  CardLg,
  CardImage,
  CardRound,
} from "../../components/cards/Card.component";
export const ExploreMusic = () => {
  return (
    <header className="explore-music-header">
      <ExploreMusicHeader />
      <CardLg />
      <CardImage />
      <CardRound />
    </header>
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
