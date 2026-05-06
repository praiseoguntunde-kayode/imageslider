import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./components/routes/Landingpage";
import Navlinks from "./components/routes/Navlinks";
import Chat from "./components/routes/Chat";
import About from "./components/routes/About";
import Socialmedia from "./components/routes/Socialmedia";

const App = () => {
  return (
    <BrowserRouter>
      <Navlinks />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/About" element={<About />} />
        <Route path="/Socialmedia" element={<Socialmedia />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
