import React from "react";
import { Link } from "react-router-dom";

const Navlinks = () => {
  return (
    <React.Fragment>
      <h3>Learning using react dom..</h3>
      <Link to={"/"}>Home</Link>
      <Link to={"/Chat"}>Chat</Link>
      <Link to={"/Socialmedia"}>Social Media</Link>
      <Link to={"/About"}>About</Link>
    </React.Fragment>
  );
};

export default Navlinks;
