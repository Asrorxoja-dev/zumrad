import { animate } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

function AboutEdu({ from, to, label }) {
  const nodeRef = useRef();
  const [reachedTarget, setReachedTarget] = useState(false);

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: 3,
      onUpdate(value) {
        if (value >= 10 && value <= 600) {
          setReachedTarget(true);
          node.textContent = value.toFixed() + "+";
        } else {
          setReachedTarget(false);
          node.textContent = value.toFixed();
        }
      },
    });

    return () => controls.stop();
  }, [from, to]);

  return (
    <div className="text-center items-center">
      <p
        className={`text-blue-900 mx-auto text-[35px] lg:text-[70px] font-bold ${
          reachedTarget ? "transition-class" : ""
        }`}
        ref={nodeRef}
      />
      <p className="text-blue-900 mx-auto mt-0 lg:mt-[-20px] mb-2 text-[17px] lg:text-[30px] font-semibold">
        {label}
      </p>
    </div>
  );
}

export default function App() {
  return (
    <div className="grid grid-cols-3 mt-10  mx-2 lg:mx-0 rounded-2xl bg-blue-100">
      <AboutEdu from={5} to={20} label="Kurslar" />
      <AboutEdu from={5} to={20} label="Ustozlar" />
      <AboutEdu from={200} to={500} label="O'quvchilar" />
    </div>
  );
}
