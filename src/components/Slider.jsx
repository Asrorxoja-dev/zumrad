import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import zumradArt from "../assets/zumradImg.jpg";

const Slider = () => {
  const cards = [
    {
      title: "Matematika",
      image: zumradArt,
    },
    {
      title: "Fizika",
      image: zumradArt,
    },
    {
      title: "Ingliz tili",
      image: zumradArt,
    },
    {
      title: "Biologiya",
      image: zumradArt,
    },
    {
      title: "Kimyo",
      image: zumradArt,
    },
    {
      title: "Tarix",
      image: zumradArt,
    },
    {
      title: "Huquqshunoslik",

      image: zumradArt,
    },
    {
      title: "Geografiya",

      image: zumradArt,
    },
    {
      title: "Kores tili",
      image: zumradArt,
    },
    {
      title: "Nemis tili",
      image: zumradArt,
    },
    {
      title: "Turk tili",
      image: zumradArt,
    },
    {
      title: "IT sohasi",
      image: zumradArt,
    },
    {
      title: "Motivation treninglar",
      image: zumradArt,
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div id="category" className="container mx-auto px-4 py-8">
      <h2 className="text-2xl lg:text-4xl text-blue-900 font-bold mt-10  mb-8">
        Bizda mavjud yo'nalishlar
      </h2>
      <Carousel
        responsive={responsive}
        customLeftArrow={
          <FaChevronLeft className="absolute cursor-pointer left-0 z-10 p-2 h-10 w-10 bg-white rounded-full shadow-md focus:outline-none" />
        }
        customRightArrow={
          <FaChevronRight className="absolute cursor-pointer right-0 z-10 p-2 h-10 w-10 bg-white rounded-full shadow-md focus:outline-none" />
        }
        infinite
        autoPlay
        autoPlaySpeed={3000}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-30-px"
      >
        {cards.map((card, index) => (
          <div key={index} className="card flex-none ">
            <div className="card-body bg-white  rounded-lg shadow-custom p-4">
              <img src={card.image} className=" object-cover rounded" />
              <h2 className="text-xl text-center font-sans font-bold mb-2">
                {card.title}
              </h2>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
