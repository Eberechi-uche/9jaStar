import { Home } from "./Routes/Home/Home.route";
import { Routes, Route } from "react-router-dom";
import { ExploreMusic } from "./Routes/ExploreMusic/ExploreMusic.route";
import { Dashboard } from "./Routes/Dasboard/Dashboard.route";
import { Login } from "./Routes/Auths/Login";
import { SignUp } from "./Routes/Auths/SignUp";
import { FanRequest } from "./Routes/FanRequest/FanRequest";
import SectionsLayout from "./components/Layout/SectionLayout/Section.layout";
import PartnerWithus from "./Routes/PartnerWithUs/PartnerWithus";
import HomeLayout from "./components/Layout/HomeSectionLayout/HomeLayout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/explore-music" element={<ExploreMusic />} />
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<SectionsLayout />}>
          <Route path="/partner-with-us" element={<PartnerWithus />} />
          <Route path="/fan-request" element={<FanRequest />} />
          <Route path="/explore-music/:artistId" element={<Dashboard />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
