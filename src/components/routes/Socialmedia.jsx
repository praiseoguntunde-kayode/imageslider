import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Landingpage";
import Navlinks from "./Navlinks";
import Chat from "./Chat";
import About from "./About";
import ImageSlider from "../statemanagement/Imageslider";

const Socialmedia = () => {
  return (
    <div>
      <h3>Social Media Page</h3>
      <ImageSlider />
    </div>
  );
};

export default Socialmedia;
