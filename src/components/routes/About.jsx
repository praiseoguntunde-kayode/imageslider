import React, { useEffect } from "react";
import UseEffect1 from "../UsingUseEffect/UseEffect1";

const About = () => {
  useEffect(() => {
    document.title = "About Us Page";
  }, []);
  return (
    <div>
      <h3>Get to know more about us?</h3>
      <UseEffect1 />
    </div>
  );
};

export default About;
