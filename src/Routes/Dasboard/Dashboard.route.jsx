import "./dashboard.route.css";
import { CardImage, CardLg } from "../../components/cards/Card.component";
import { useParams } from "react-router-dom";
import artists from "../../../src/artist.json";
import { Carousel } from "../../components/carousel/Carousel.component";
export const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <DashboardHeader />
    </div>
  );
};
export const DashboardHeader = () => {
  const { artistId } = useParams();

  const { name, listens, mainImage } = artists.find(
    (element) => element.name.toLowerCase() === artistId.toLowerCase()
  );

  return (
    <>
      <div>
        <div className="dashboard-wrapper">
          <div className={"dashboard-header"}>
            <div className="dashboard-header-text">
              <div className="dashboard-deco-image left">
                <img src={"/images/dashboardbg2.png"} alt={"svg"} />
                <img src={"/images/dashboardbg.png"} alt={"svg"} />
              </div>
              <div className="dashboard-deco-image right">
                <img src={"/images/dashboardbg.png"} alt={"svg"} />
                <img src={"/images/dashboardbg2.png"} alt={"svg"} />
              </div>

              <h2>{name}</h2>
              <p> {listens} monnthly listerner</p>
            </div>
            <div className="dashboard-header-image">
              <img alt={"asana"} src={mainImage} />
              <button className="btn btn-dashboard"> Request fan</button>
            </div>
          </div>
          <div>
            <p>
              Asana is a free spirit who is unapologetically herself. She is
              passionate about her art and sees the world in a different way
              than most people. She is curious and adventurous, always seeking
              out new experiences and inspiration for her work. At the same
              time, she can be fiercely independent and stubborn, refusing to
              compromise her vision for anyone.
            </p>
          </div>
          <div>
            <Carousel title={"Most Listened"}>
              <CardLg text={name} heading={"God dey"} />
              <CardLg text={name} heading={"God dey"} />
              <CardLg text={name} heading={"God dey"} />
              <CardLg text={name} heading={"God dey"} />
              <CardLg text={name} heading={"God dey"} />
            </Carousel>
          </div>
          <div>
            <Carousel title={`featured ${name}`}>
              <CardLg text={name} heading={"God dey"} />
              <CardLg text={name} heading={"God dey"} />
              <CardLg text={name} heading={"God dey"} />
              <CardLg text={name} heading={"God dey"} />
              <CardLg text={name} heading={"God dey"} />
            </Carousel>
          </div>
          <div>
            <Carousel>
              <CardImage
                image={"/images/dashboard-image1.png"}
                heading={"Fan Request"}
              />
              <CardImage
                image={"/images/dashboard-image2.png"}
                heading={"Support"}
              />
              <CardImage
                image={"/images/dashboard-image3.png"}
                heading={"Partner"}
              />
            </Carousel>
          </div>
        </div>
      </div>
      <div className="dashboard-footer">
        <div>
          <img alt={"media-mentions"} src="/images/dashboard-footer.png" />
        </div>
        <div>
          <img alt={"media-mentions"} src={"/images/dashboard-footer2.png"} />
        </div>
      </div>
    </>
  );
};
export const DashboardCard = ({ title, image }) => {
  return (
    <div className="cardImage-container-dashboard block">
      <img src={image} alt="yoda" />
      <div className="cardImage-text-dashboard">
        {title !== "" && <h3 className="bg-black mg-10">{title}</h3>}
      </div>
    </div>
  );
};
