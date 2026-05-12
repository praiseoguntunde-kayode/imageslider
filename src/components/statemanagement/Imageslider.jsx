import React from "react";

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = React.useState(0);

  const minus = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const add = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length,
    );
  };

  let images = [
    "/assets/images/hero1.png",
    "/assets/images/hero2.png",
    "/assets/images/hero3.png",
    "/assets/images/hero4.png",
  ];
  return (
    <React.Fragment>
      <h2>Using state management and image sliding</h2>

      <div>
        <img src={images[currentImage]} alt="Image slider" height={150} />
      </div>

      <div>
        <button onClick={minus}>
          <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>
        </button>

        <button onClick={add}>
          <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
        </button>
      </div>
    </React.Fragment>
  );
};

export default ImageSlider;