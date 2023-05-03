import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../../navbar/Navbar.component";

import "./SectionLayout.css";

const SectionsLayout = () => {
  return (
    <>
      <div className="section-layout-wrapper">
        <div className="section-layout-container">
          <Navbar />
          <div className="outlet-container">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};
export default SectionsLayout;
