import React, { useEffect } from "react";

const UseEffect1 = () => {
  useEffect(() => {
    document.title = "About Us Page";
  }, []);
  return (
    <React.Fragment>
      <h1>UseEffect1 Using Side Effects on our Codebase</h1>
    </React.Fragment>
  );
};
export default UseEffect1;
