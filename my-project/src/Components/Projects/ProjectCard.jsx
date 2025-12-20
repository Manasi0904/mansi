import React from "react";
import { IoArrowForward } from "react-icons/io5";

const ProjectCard = ({ title, main, points, image }) => {
  return (
    <div className="w-full bg-[#0c0e19] bg-opacity-40 border border-white/10 
    shadow-xl shadow-black/40 rounded-3xl backdrop-blur-xl p-6 md:p-10">

      <div className="flex flex-col md:flex-row gap-10 items-start">

        {/* LEFT SIDE IMAGE */}
        <img
          src={image}
          alt=""
          className="w-full md:w-2/5 h-72 md:h-80 object-cover rounded-2xl shadow-lg"
        />

        {/* RIGHT SIDE CONTENT */}
        <div className="flex flex-col md:w-3/5">
          <h3 className="text-xl md:text-3xl font-bold mb-4">{title}</h3>

          <p className="text-sm md:text-lg text-gray-300 leading-relaxed mb-4">
            {main}
          </p>

          <ul className="space-y-3 mt-2">
            {points?.map((point, index) => (
              <li key={index} className="flex gap-3">
                <IoArrowForward size={22} className="text-[#7fa8ff] mt-1" />
                <span className="text-gray-300 text-sm md:text-md">{point}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;
