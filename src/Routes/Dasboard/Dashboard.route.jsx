import "./dashboard.route.css";
import { CardImage, CardLg } from "../../components/cards/Card.component";
import { useParams } from "react-router-dom";
import artists from "../../../src/artist.json";
import { Link } from "react-router-dom";
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

  const { name, listens, mainImage, about } = artists.find(
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
          <div className="dashboard-bio-text">
            <p>{about}</p>
          </div>
          <div>
            <Carousel>
              <Link to={"/fan-request"}>
                <CardImage
                  image={"/images/dashboard-image1.png"}
                  heading={"Fan Request"}
                />
              </Link>

              <CardImage
                image={"/images/dashboard-image2.png"}
                heading={"Support"}
              />
              <Link to={"/partner-with-us"}>
                <CardImage
                  image={"/images/dashboard-image3.png"}
                  heading={"Partner"}
                />
              </Link>
            </Carousel>
          </div>
          <div>
            <Carousel title={"Most Listened"}>
              <CardLg
                text={name}
                heading={"God dey"}
                image={"/images/ml1.jpg"}
              />
              <CardLg
                text={name}
                heading={"God dey"}
                image={"/images/ml2.jpg"}
              />
              <CardLg
                text={name}
                heading={"God dey"}
                image={"/images/ml3.png"}
              />
              <CardLg
                text={name}
                heading={"God dey"}
                image={"/images/ml4.png"}
              />
            </Carousel>
          </div>
          <div>
            <Carousel title={`featured ${name}`}>
              <CardLg
                text={name}
                heading={"God dey"}
                image={"/images/ft1.jpg"}
              />
              <CardLg
                text={name}
                heading={"God dey"}
                image={"/images/ft2.png"}
              />
              <CardLg
                text={name}
                heading={"God dey"}
                image={"/images/ft3.png"}
              />
              <CardLg
                text={name}
                heading={"God dey"}
                image={"/images/ft4.jpg"}
              />
            </Carousel>
          </div>
        </div>
      </div>
      <div className="dashboard-footer">
        <div className="dashboard-image-container bg-image-one">
          <div className="dashboard-text-container">
            <h2 className="bg-green"> media mentions</h2>
          </div>
          <div>
            <h2>Best Upcoming Artist</h2>
            <p> GRAN News</p>
          </div>
        </div>
        <div className="dashboard-image-container bg-image-two">
          <div>
            <h2 className="bg-green"> Awards</h2>
          </div>
          <div>
            <h2>Fast Growing Musician</h2>
          </div>
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
