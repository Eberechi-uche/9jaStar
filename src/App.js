import { Home, Hero } from "./Routes/Home/Home.route";
import { Header, Navbar } from "./components/navbar/Navbar.component";
import { Routes, Route } from "react-router-dom";
import { ExploreMusic } from "./Routes/ExploreMusic/ExploreMusic.route";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/explore-music" element={<ExploreMusic />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
