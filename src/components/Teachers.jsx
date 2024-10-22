import { useRef } from "react";
import useInView from "../hooks/useInView";
import AnimatedComponent from "./AnimatedComponent";
import { motion } from "framer-motion";


const instructors = [
  {
    name: "John Mark",
    title: "Senior Developer",
    quote: "Education will be for you what you want it to be",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Lora Shrof",
    title: "Marketing Lead",
    quote: "Knowledge has to be improved, challenged, and increased constantly, or it vanishes",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Zeng Chin",
    title: "Data Analyst at Meta",
    quote: "To know that we know what we know, and to know that we do not know what we do not",
    image: "https://via.placeholder.com/150",
  },
];

const Teachers = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div id='teacher' ref={ref} className="container mx-auto mt-10 lg:mt-20 p-2 mb-10">
      <h2 className="text-2xl lg:text-4xl text-blue-900 font-bold mt-10  mb-20 ml-5 lg:ml-0  ">Bizning Ustozlarimiz</h2>
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
                <h3 className="text-xl font-semibold mb-2">{instructor.name}</h3>
                <p className="text-blue-900 mb-4">{instructor.title}</p>
                <p className="text-gray-600 italic">"{instructor.quote}"</p>
              </div>
            </div>
          </AnimatedComponent>
        ))}
      </div>
    </div>
  );
};
export default Teachers;
