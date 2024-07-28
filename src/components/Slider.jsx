import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Slider = () => {
  const cards = [
    {
     title:"Matematika",
      image: "https://via.placeholder.com/300",
    },
    {
     title:"Fizika",
      image: "https://via.placeholder.com/300",
    },
    {
        title:"Ingliz tili",
      image: "https://via.placeholder.com/300",
    },
    {
    title:"Biologiya",
      image: "https://via.placeholder.com/300",
    },
    {
    title:"Kimyo",
      image: "https://via.placeholder.com/300",
    },
    {
    title:"Tarix",
      image: "https://via.placeholder.com/300",
    },
    {
        title:"Huquqshunoslik",

      image: "https://via.placeholder.com/300",
    },
    {
        title:"Geografiya",

      image: "https://via.placeholder.com/300",
    },
    {
        title:"Kores tili",
      image: "https://via.placeholder.com/300",
    },
    {
        title:"Nemis tili",
      image: "https://via.placeholder.com/300",
    },
    {
        title:"Turk tili",
      image: "https://via.placeholder.com/300",
    },
    {
        title:"IT sohasi",
      image: "https://via.placeholder.com/300",
    },
    {
        title:"Motivation treninglar",
      image: "https://via.placeholder.com/300",
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
              <img
                src={card.image}
                className="h-64 w-96 object-cover rounded"
              />
              <h2 className="text-xl text-center font-sans font-bold mb-2">{card.title}</h2>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;