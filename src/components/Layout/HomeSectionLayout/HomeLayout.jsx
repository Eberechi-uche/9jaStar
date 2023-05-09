import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../../navbar/Navbar.component";
import "./HomeLayout.css";

const HomeLayout = () => {
  return (
    <div className="home-layout-wrapper">
      <div className="home-layout-container">
        <Navbar />
        <div className="outlet-container">
          <div className="outlet-children">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default HomeLayout;
