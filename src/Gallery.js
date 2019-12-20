import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ImgOne from "./img/1.jpg";
import ImgTwo from "./img/2.jpg";
import ImgThree from "./img/3.jpg";
import ImgFour from "./img/4.jpg";
import ImgFive from "./img/5.jpg";
import ImgSix from "./img/6.jpg";
import ImgSeven from "./img/7.jpg";
import ImgEight from "./img/8.jpg";
import ImgNine from "./img/9.jpg";
import ImgTen from "./img/10.jpg";
import ImgEleven from "./img/11.jpg";
import ImgTwelve from "./img/12.jpg";
import ImgThirteen from "./img/13.jpg";
import "./Gallery.css";

const Gallery = () => {
  const handleOnDragStart = e => e.preventDefault();
  return (
    <AliceCarousel mouseDragEnabled>
      <div className="ImgCon">
        <img
          src={ImgOne}
          onDragStart={handleOnDragStart}
          className="yours-custom-class"
        />
      </div>
      <div className="ImgCon">
        <img
          src={ImgTwo}
          onDragStart={handleOnDragStart}
          className="yours-custom-class"
        />
      </div>

      <div className="ImgCon">
        <img
          src={ImgFour}
          onDragStart={handleOnDragStart}
          className="yours-custom-class"
        />
      </div>
      <div className="ImgCon">
        <img
          src={ImgFive}
          onDragStart={handleOnDragStart}
          className="yours-custom-class"
        />
      </div>
      <div className="ImgCon">
        <img
          src={ImgSix}
          onDragStart={handleOnDragStart}
          className="yours-custom-class"
        />
      </div>
      <div className="ImgCon">
        <img
          src={ImgSeven}
          onDragStart={handleOnDragStart}
          className="yours-custom-class"
        />
      </div>
      <div className="ImgCon">
        <img
          src={ImgEight}
          onDragStart={handleOnDragStart}
          className="yours-custom-class"
        />
      </div>
      <div className="ImgCon">
        <img
          src={ImgNine}
          onDragStart={handleOnDragStart}
          className="yours-custom-class"
        />
      </div>
      <div className="ImgCon">
        <img
          src={ImgTen}
          onDragStart={handleOnDragStart}
          className="yours-custom-class"
        />
      </div>

      <div className="ImgCon">
        <img
          src={ImgTwelve}
          onDragStart={handleOnDragStart}
          className="yours-custom-class"
        />
      </div>
      <div className="ImgCon">
        <img
          src={ImgThree}
          onDragStart={handleOnDragStart}
          className="yours-custom-class"
        />
      </div>
      <div className="ImgCon">
        <img
          src={ImgThirteen}
          onDragStart={handleOnDragStart}
          className="yours-custom-class"
        />
      </div>
    </AliceCarousel>
  );
};
export default Gallery;
