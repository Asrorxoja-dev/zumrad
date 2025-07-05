import { useRef } from "react";
import useInView from "../hooks/useInView";
import AnimatedComponent from "./AnimatedComponent";
import { motion } from "framer-motion";
import englishTeacher from "../assets/englishTeacher.png";
import koreysTeacher from "../assets/koreysTeacher.png";
import matematikaTeacher from "../assets/matematikaTeacher.png";
import huquqTeacher from "../assets/huquqTeacher.png";
const instructors = [
  {
    name: "Sodiqov Bahodirjon",
    title: "Matematika fanidan o'qituvchi",
    image: matematikaTeacher,
  },
  {
    name: "Ergashev Sarvarjon",
    title: "Ingliz tili fanidan o'qituvchi",
    image: englishTeacher,
  },
  {
    name: "Turaqulov Javohir ",
    title: "Koreys tili fanidan o'qituvchi",
    image: koreysTeacher,
  },
  {
    name: "Abduraximov Abror",
    title: "Huquq fanidan o'qituvchi",
    image: huquqTeacher,
  },
];

const Teachers = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      id="teacher"
      ref={ref}
      className="container mx-auto mt-10 lg:mt-20 p-2 mb-10"
    >
      <h2 className="text-2xl lg:text-4xl text-blue-900 font-bold mt-10  mb-20 ml-5 lg:ml-0  ">
        Bizning Ustozlarimiz
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {instructors.map((instructor, index) => (
          <AnimatedComponent key={index} isInView={isInView}>
            <div className="max-w-sm card bg-white rounded-lg shadow-lg p-6 text-center cursor-pointer">
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <div className="card">
                <h3 className="text-xl font-semibold mb-2">
                  {instructor.name}
                </h3>
                <p className="text-blue-900 mb-4">{instructor.title}</p>
              </div>
            </div>
          </AnimatedComponent>
        ))}
      </div>
    </div>
  );
};
export default Teachers;
