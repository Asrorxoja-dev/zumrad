import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { API_URL } from "../../api";
import { useEffect } from "react";
import zumradlogo from "../assets/zumradImg.jpg";
function Courses() {
  const initialDisplayCount = 6;
  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { coursels, setCourses } = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/courses/all`)
      .then((response) => response.json())
      .then((data) => {
        setCourses(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      }, []);
  });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // const courses = [

  //   {
  //     title: "Peredilonka",
  //     image: "https://via.placeholder.com/300",
  //     rating: 4.5,
  //     price: "$100",
  //     category: "General",
  //   },
  //   {
  //     title: "Prezident maktablariga tayyorlov kurslari",
  //     image: "https://via.placeholder.com/300",
  //     rating: 4.7,
  //     price: "$150",
  //     category: "School Preparation",
  //   },
  //   {
  //     title: "Al-Xorazmiy,Mirzo Ulug’bek maktablariga tayyorlov kurslari",
  //     image: "https://via.placeholder.com/300",
  //     rating: 4.8,
  //     price: "$200",
  //     category: "School Preparation",
  //   },
  //   {
  //     title: "Ixtisoslashtirilgan maktablarga tayyorlov kurslari",
  //     image: "https://via.placeholder.com/300",
  //     rating: 4.9,
  //     price: "$180",
  //     category: "School Preparation",
  //   },
  //   {
  //     title: "Temurbeklar maktabiga tayyorlov kurslari",
  //     image: "https://via.placeholder.com/300",
  //     rating: 4.6,
  //     price: "$130",
  //     category: "School Preparation",
  //   },
  //   {
  //     title: "Maktabgacha tayyorlov kurslari",
  //     image: "https://via.placeholder.com/300",
  //     rating: 4.3,
  //     price: "$90",
  //     category: "Pre-School",
  //   },
  //   {
  //     title: "Mentalni arifmetika",
  //     image: "https://via.placeholder.com/300",
  //     rating: 4.7,
  //     price: "$110",
  //     category: "General",
  //   },
  //   {
  //     title: "Kompyuter savodxonligi",
  //     image: "https://via.placeholder.com/300",
  //     rating: 4.8,
  //     price: "$120",
  //     category: "IT",
  //   },
  //   {
  //     title: "Robatatexnika",
  //     image: "https://via.placeholder.com/300",
  //     rating: 4.5,
  //     price: "$110",
  //     category: "IT",
  //   },
  //   {
  //     title: "Tez o’qish",
  //     image: "https://via.placeholder.com/300",
  //     rating: 4.6,
  //     price: "$140",
  //     category: "General",
  //   },
  //   {
  //     title: "Tasviriy sa’nat",
  //     image: "https://via.placeholder.com/300",
  //     rating: 4.4,
  //     price: "$95",
  //     category: "General",
  //   },
  //   {
  //     title: "Bolalar uchun psixolig ko’rigi",
  //     image: "https://via.placeholder.com/300",
  //     rating: 4.9,
  //     price: "$210",
  //     category: "General",
  //   },
  // ];
  const courses = [
    {
      title: "Peredilonka",
      image: zumradlogo,
    },
    {
      title: "Prezident maktablariga tayyorlov kurslari",
      image: zumradlogo,
    },
    {
      title: "Al-Xorazmiy,Mirzo Ulug’bek maktablariga tayyorlov kurslari",
      image: zumradlogo,
    },
    {
      title: "Ixtisoslashtirilgan maktablarga tayyorlov kurslari",
      image: zumradlogo,
    },
    {
      title: "Temurbeklar maktabiga tayyorlov kurslari",
      image: zumradlogo,
    },
    {
      title: "Maktabgacha tayyorlov kurslari",
      image: zumradlogo,
    },
    {
      title: "Mentalni arifmetika",
      image: zumradlogo,
    },
    {
      title: "Kompyuter savodxonligi",
      image: zumradlogo,
    },
    {
      title: "Robatatexnika",
      image: zumradlogo,
    },
    {
      title: "Tez o’qish",
      image: zumradlogo,
    },
    {
      title: "Tasviriy sa’nat",
      image: zumradlogo,
    },
    {
      title: "Bolalar uchun psixolig ko’rigi",
      image: zumradlogo,
    },
  ];

  const handleShowAll = () => {
    setShowAll(true);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setShowAll(false);
  };

  const filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  const displayedCourses = showAll
    ? filteredCourses
    : filteredCourses.slice(0, initialDisplayCount);

  return (
    <div id="courses" className="mt-20 px-4" ref={ref}>
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2>
            <p className="text-blue-900 font-bold text-xl lg:text-4xl">
              Bolalar uchun kurslar
            </p>
          </h2>
        </div>
        {/* <div>
          <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="mr-10 text-white bg-blue-800 rounded py-1 px-4 m-1">
              <h2 className='font-sans font-bold'>Saralash</h2>
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li><a onClick={() => handleCategoryChange('All')}>All</a></li>
              <li><a onClick={() => handleCategoryChange('IT')}>IT sohasi</a></li>
              <li><a onClick={() => handleCategoryChange('School Preparation')}>Hususiy maktablarga tayyorlov</a></li>
              <li><a onClick={() => handleCategoryChange('Pre-School')}>Maktabgacha tayyorlov</a></li>
              <li><a onClick={() => handleCategoryChange('General')}>Va boshqalar</a></li>
            </ul>
          </div>
        </div> */}
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 mb-10">
        {displayedCourses.map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="card bg-base-150 cursor-pointer shadow-xl h-[470px]">
              <figure>
                <img
                  className="w-[400px] h-[300px] object-cover"
                  width={300}
                  height={200}
                  src={course.image}
                />
              </figure>
              <div className="card p-3">
                <div className="flex justify-between mb-5 items-center">
                  <div>
                    <h2 className="text-center justify-content-center mx-20 pt-10 font-sans font-semibold text-[18px]">
                      {course.title}
                    </h2>
                  </div>
                </div>
                <p className="text-slate-400">{course.description}</p>
                <div className="flex justify-end items-center">
                  <span className="text-blue-900 font-semibold">
                    {course.price}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {!showAll && filteredCourses.length > initialDisplayCount && (
        <div className="flex justify-center lg:justify-end mr-0 mb-10 lg:mr-10 mt-0">
          <h2
            className="cursor-pointer text-blue-800 font-sans font-bold text-[15px]"
            onClick={handleShowAll}
          >
            Barchasini ko'rish
          </h2>
        </div>
      )}
    </div>
  );
}

export default Courses;
