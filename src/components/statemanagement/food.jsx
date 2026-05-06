import React from "react";
import { useState } from "react";

const Food = () => {
  const [dish, setDish] = useState({
    foodname: "Chicken Wrap",
    foodingredients:
      "wheat tortillas, lettuce, tomatoes, chicken, dressing, cucumber",
    timetaken: "10 minutes",
  });

  const Nativerice = () => {
    setDish({
      foodname: "Native rice",
      foodingredients: "rice, palmoil, pepper, fish, meat",
      timetaken: "40 minutes",
    });
  };
  const Doughnuts = () => {
    setDish({
      foodname: "Donut",
      foodingredients: "flour, egg, yeast, oil, butter, sugar, milk, vanilla",
      timetaken: "1 hour",
    });
  };
  const egusi = () => {
    setDish ({
      foodname: "Egusi soup",
      foodingredients:
        "Grounded melon seeds, palmoil, ugwu, pepper, meat, fish, locust beans",
      timetaken: "20 minutes",
    });
  };
  const Chickenwrap = () => {
    setDish({
      foodname: "Chicken Wrap",
      foodingredients:
        "wheat tortillas, lettuce, tomatoes, chicken, dressing, cucumber",
      timetaken: "10 minutes",
    });
  };

  return (
    <React.Fragment>
      <h3>hi hello</h3>

      <h2>Food Name: {dish.foodname}</h2>
      <h3>Food Ingredeitns: {dish.foodingredients}</h3>

      <p>Time Taken: {dish.timetaken}</p>

      <button onClick={Chickenwrap}>Chicken Wrap</button>
      <br />
      <button onClick={Nativerice}>Native Rice</button>
      <br />
      <button onClick={egusi}>Egusi Soup</button>
      <br />

      <button onClick={Doughnuts}>Doughnuts</button>
    </React.Fragment>
  );
};

export default Food;
