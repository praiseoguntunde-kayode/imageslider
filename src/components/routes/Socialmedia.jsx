import React, { useEffect } from "react";
import ImageSlider from "../statemanagement/Imageslider";
import UseEffect1 from "../UsingUseEffect/UseEffect1";

const Socialmedia = () => {
  useEffect(() => {
    document.title = "Social Media Page";
  }, []);
  return (
    <div>
      <h3>Social Media Page</h3>
      <ImageSlider />
    </div>
  );
};

export default Socialmedia;
