import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Sports from "./Sports";
import NavBar from "./NavBar";
import Related from "./Related";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Sports />} />
        <Route path="/related" element={<Related />} />
      </Routes>
    </div>
  );
}

export default App;
