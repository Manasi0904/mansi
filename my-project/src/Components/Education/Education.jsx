import React from "react";
import { FaUniversity, FaGraduationCap, FaSchool } from "react-icons/fa";

const Education = () => {
  return (
    <div id="Education" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold mb-8">
        Education
      </h1>

      <div className="flex flex-col gap-6">
        {/* MBA */}
        <div className="flex gap-6 bg-slate-950 bg-opacity-45 rounded-lg p-4 items-center">
          <FaGraduationCap color="#FFD700" size={50} />
          <span className="text-white">
            <h2 className="text-lg md:text-2xl font-semibold">
              MBA – HR & Product Management 
            </h2>
            <p className="text-sm md:text-base font-thin">
              Lovely Professional University, Phagwara, Punjab 
            </p>
            <p className="text-sm md:text-base font-thin">Aug 2024 – June 2026</p>
          </span>
        </div>

        {/* B.Tech */}
        <div className="flex gap-6 bg-slate-950 bg-opacity-45 rounded-lg p-4 items-center">
          <FaUniversity color="#4B9CD3" size={50} />
          <span className="text-white">
            <h2 className="text-lg md:text-2xl font-semibold">
              B.Tech – Mechanical Engineering
            </h2>
            <p className="text-sm md:text-base font-thin">
              Chitkara University, Rajpura, Punjab 
            </p>
            <p className="text-sm md:text-base font-thin">Jul 2020 – Jul 2023 </p>
          </span>
        </div>

        {/* Diploma */}
        <div className="flex gap-6 bg-slate-950 bg-opacity-45 rounded-lg p-4 items-center">
          <FaSchool color="#FF6347" size={50} />
          <span className="text-white">
            <h2 className="text-lg md:text-2xl font-semibold">
              Diploma – Mechanical Engineering
            </h2>
            <p className="text-sm md:text-base font-thin">
              Bhai Gurdas Polytechnic College, Sangrur, Punjab
            </p>
            <p className="text-sm md:text-base font-thin">July 2017 – July 2020 </p>
          </span>
        </div>

        {/* Matriculation */}
        <div className="flex gap-6 bg-slate-950 bg-opacity-45 rounded-lg p-4 items-center">
          <FaSchool color="#32CD32" size={50} />
          <span className="text-white">
            <h2 className="text-lg md:text-2xl font-semibold">
              Matriculation (Class 10) – CBSE
            </h2>
            <p className="text-sm md:text-base font-thin">Takshila School</p>
            <p className="text-sm md:text-base font-thin">Year of Completion: 2017</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Education;
