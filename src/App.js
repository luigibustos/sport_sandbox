import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Sports from "./Sports";
import NavBar from "./NavBar";
// import Related from "./Related";
import { Routes, Route } from "react-router-dom";
import RelatedSportCards from "./RelatedSports";
import SportsDetails from "./SportsDetails";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Sports />} />
        <Route path="/sportsdetails/:id" element={<SportsDetails />} />
        {/* <Route path="/related" element={<RelatedSportCards />} /> */}
      </Routes>
    </div>
  );
}

export default App;
