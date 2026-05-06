import React from "react";
import { useState } from "react";

const State = () => {
  const [content, setContent] = useState({
    artist: "Asake",
    song: "basquiat",
    streams: "1 billion all time streams",
    imgContent: "classApp/src/assets/hero.png",
  });

  const Bigwiz = () => {
    setContent({
      artist: "Wizkid",
      song: "Kese",
      streams: "20 million monthly streams",
    });
  };
  const Beyonce = () => {
    setContent({
      artist: "Beyonce",
      song: "Hold up",
      streams: "100 million monthly streams",
    });
  };
  const FrankOcean = () => {
    setContent({
      artist: "Frank ocean",
      song: "Nights",
      streams: "1.2 billion all time streams",
    });
  };
  const Asake = () => {
    setContent({
      artist: "MR M$NEY ft. J Hus",
      song: "Gold",
      streams: "200 million all time streams",
    });
  };

  return (
    <React.Fragment>
      <h3>hi hello</h3>

      <h2>Artist: {content.artist}</h2>
      <h1>Song: {content.song}</h1>

      <p>Streams: {content.streams}</p>

      <p>image:{content.imgContent} </p>

      <button onClick={Bigwiz}>Bigwiz</button>
      <br />
      <button onClick={Beyonce}>Beyonce</button>
      <br />
      <button onClick={FrankOcean}>Frank Ocean</button>
      <br />

      <button onClick={Asake}>MR M$NEY</button>
    </React.Fragment>
  );
};

export default State;
