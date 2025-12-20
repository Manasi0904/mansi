import React from "react";
import { 
  FaCss3, FaFigma, FaHtml5, FaJs, FaReact, 
  FaBuilding, FaMotorcycle, FaTruck, FaTools, FaCogs, FaGitAlt, FaPython 
} from "react-icons/fa";
import { 
  SiRedis, SiMongodb, SiTailwindcss, SiBootstrap
} from "react-icons/si";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">

        {/* ICON GRID */}
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">

          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>

          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>

          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>

          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>

          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaFigma color="#F24E1E" size={50} />
          </span>

          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>

          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiRedis color="#FF4438" size={50} />
          </span>

          {/* NEW ICONS */}
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiTailwindcss color="#38BDF8" size={50} />
          </span>

          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiBootstrap color="#7952B3" size={50} />
          </span>

          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaGitAlt color="#F34F29" size={50} />
          </span>

{/* 
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMicrosoftexcel color="#217346" size={50} />
          </span>

          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiSlack color="#611f69" size={50} />
          </span>

          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiTableau color="#E97627" size={50} />
          </span>

          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiCanva color="#00C4CC" size={50} />
          </span>

          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaPython color="#3776AB" size={50} />
          </span> */}

        </div> 

        {/* EXPERIENCE CARDS */}
        <div className="flex flex-col gap-4">

          {/* Shadowfax */}
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <FaTruck color="#00BFFF" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Shadowfax Operation Intern, Shadowfax Technology PVT LTD</h2>
              <p className="text-sm leading-tight font-thin">Sept 2025 – Dec 2025</p>
              <ul className="text-sm p-2">
                <li>- Managed the overall supply chain process to ensure smooth operations at all times.</li>
                <li>- Managed daily delivery operations and ensured smooth process flow.</li>
                <li>- Hired and onboarded new delivery riders across multiple locations.</li>
                <li>- Monitored rider performance and optimized route allocation.</li>
              </ul>
            </span>
          </div>

          {/* Zomato */}
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <FaBuilding color="#FF2D55" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Zomato Ninja, Zomato</h2>
              <p className="text-sm leading-tight font-thin">Apr 2025 – Jul 2025</p>
              <ul className="text-sm p-2">
                <li>- Managed the overall supply chain process to ensure smooth operations at all times.</li>
                <li>- Expanded Zomato’s presence by onboarding new restaurants and hotels in key tourist areas.</li>
                <li>- Built strong ties with restaurant owners and streamlined their platform listings.</li>
              </ul>
            </span>
          </div>

          {/* Piaggio */}
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <FaMotorcycle color="#FFA500" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Project Trainee, Piaggio Vehicle PVT LTD</h2>
              <p className="text-sm leading-tight font-thin">Jun 2023 – Mar 2024</p>
              <ul className="text-sm p-2">
                <li>- Accurately draw a duct layout with help of AutoCAD.</li>
                <li>- Managed the overall supply chain process to ensure smooth operations at all times.</li>
                <li>- Efficient ductwork for newly constructed buildings has been planned.</li>
              </ul>
            </span>
          </div>

          {/* HVAC Intern */}
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <FaTools color="#00FF7F" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">HVAC Intern, Vertex Consulting Engineers</h2>
              <p className="text-sm leading-tight font-thin">Jan 2022 – May 2022</p>
              <ul className="text-sm p-2">
                <li>- Managed the overall supply chain process to ensure smooth operations at all times.</li>
                <li>- Efficient ductwork for newly constructed buildings has been planned.</li>
                <li>- Accurately draw a duct layout with help of Autocad.</li>
              </ul>
            </span>
          </div>

          {/* Powertrain Engineering */}
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <FaCogs color="#FFD700" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Powertrain Engineering Internships, Standard Corporation India LTD</h2>
              <p className="text-sm leading-tight font-thin">Jul 2022 – Nov 2022</p>
              <ul className="text-sm p-2">
                <li>- Managed the overall supply chain process to ensure smooth operations at all times.</li>
                <li>- Assembled and inspected parts of the engine to ensure good fit and working.</li>
                <li>- Troubleshot issues with the team to improve assembly quality and performance.</li>
              </ul>
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Experience;
