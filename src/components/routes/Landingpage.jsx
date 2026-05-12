import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import UseEffect1 from "../UsingUseEffect/UseEffect1";
const Landingpage = () => {
  useEffect(() => {
    document.title = "Landing Page";
  }, []);
  return (
    <React.Fragment>
      <h1>Welcome to our website</h1>
      <p>
        We are glad to have you here. Please explore our website and let us know
        if you have any questions.
      </p>
      <p></p>
    </React.Fragment>
  );
};

export default Landingpage;
