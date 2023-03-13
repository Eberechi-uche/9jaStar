import "./explore-music.route.css";
import { Carousel } from "../../components/carousel/Carousel.component";
import {
  CardLg,
  CardImage,
  CardRound,
} from "../../components/cards/Card.component";
import SliderCarousel, {
  SliderCarouselItem,
} from "../../components/slider/SliderCarousel.component";
import artists from "../../../src/artist.json";
import albums from "../../../src/albums.json";
import mood from "../../../src/mood.json";

export const ExploreMusic = () => {
  return (
    <>
      <div className="explore-music-wrapper">
        <header className="explore-header-container">
          <SliderCarousel>
            <SliderCarouselItem>
              <img src="images/wizkid.jpg" alt="wizkid" className="img-fill" />
            </SliderCarouselItem>
            <SliderCarouselItem>
              <img src="images/asa.webp" alt="wizkid" className="img-fill" />
            </SliderCarouselItem>
            <SliderCarouselItem>
              <img src="images/cavemen.png" alt="wizkid" className="img-fill" />
            </SliderCarouselItem>
          </SliderCarousel>
        </header>
        <main className="explore-music-items">
          <Carousel title={"Trending Release"}>
            {albums.map((element, index) => (
              <CardLg
                key={index}
                image={element["album-art"]}
                heading={element["artist-name"]}
                text={element.title}
              />
            ))}
          </Carousel>
          <Carousel title={"upcoming events"}>
            <CardLg
              image={"images/jon-bellion.png"}
              heading={"Jon Bellion"}
              text={"Date: july 1"}
            />
          </Carousel>
          <Carousel title={"What Is Your Genre?"}>
            {mood.map(({ image, mood }, index) => (
              <CardImage key={index} image={image} heading={mood} />
            ))}
          </Carousel>
          <Carousel title={"Top Trending Artist"}>
            {artists.map((element, index) => (
              <CardRound key={index} artistId={element} />
            ))}
          </Carousel>
        </main>
      </div>
    </>
  );
};

export const ExploreMusicHeader = () => {
  return (
    <div className="explore-music-container">
      <h2>Up coming concerts </h2>
      <div className="header-img-container">
        <img src="images/test-image.JPG" alt="yoda" />
      </div>
    </div>
  );
};
