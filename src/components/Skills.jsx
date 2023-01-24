import react from "../assets/skills/react.svg";
import vite from "../assets/skills/vite.svg";
import cpp from "../assets/skills/cpp.png";
import js from "../assets/skills/js.svg";
import python from "../assets/skills/python.svg";
import tensorflow from "../assets/skills/tensorflow.svg";
const Skills = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="">
        <img className="p-2" src={js} alt="" />
      </div>
      <div className="">
        <img className="p-2" src={react} alt="" />
      </div>
      <div className="">
        <img className="p-2" src={cpp} alt="" />
      </div>
      <div className="">
        <img className="p-2" src={python} alt="" />
      </div>
      <div className="">
        <img className="p-2" src={tensorflow} alt="" />
      </div>
    </div>
  );
};

export default Skills;
