import React from "react";
import AboutImg from "../../assets/image2.jpeg";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="scroll-mt-32 p-10 md:p-24 text-white bg-gradient-to-br from-black/60 to-black/30 backdrop-blur-xl shadow-2xl rounded-3xl border border-white/10 mx-5 md:mx-20"
    >
      <div className="md:flex items-start gap-12">

        {/* LEFT SIDE IMAGE */}
        <div className="md:w-1/2 flex justify-center">
          <img
            className="h-80 w-80 md:h-[420px] md:w-[420px] object-cover rounded-3xl shadow-2xl border border-white/10 hover:scale-105 duration-300"
            src={AboutImg}
            alt="About"
          />
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="md:w-1/2 space-y-8">

          {/* HEADING */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide">
              About Me
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#7fa8ff] to-[#465697] rounded-full mt-2"></div>
          </div>

          {/* ABOUT PARAGRAPH */}
          <p className="text-md md:text-lg leading-relaxed text-gray-200">
            I am a hardworking and dedicated individual with a strong passion for
            learning and personal growth. As an HR and Product Management student,
            I strive to understand people, solve problems, and build meaningful
            experiences. I also guide students on developing confidence, a
            positive mindset, and long-term motivation.
            <br /><br />
            My goal is to inspire others while growing into impactful roles in HR,
            product management, and people development.
          </p>

          {/* DIVIDER */}
          <div className="border-t border-white/10"></div>

          {/* POINTS SECTION */}
          <ul className="space-y-5">
            <li className="flex gap-3">
              <IoArrowForward size={22} className="mt-1 text-[#7fa8ff]" />
              <span className="text-gray-300 text-sm md:text-md">
                Strong passion for continuous personal and professional growth.
              </span>
            </li>
            <li className="flex gap-3">
              <IoArrowForward size={22} className="mt-1 text-[#7fa8ff]" />
              <span className="text-gray-300 text-sm md:text-md">
                Skilled at motivating students & building positive mindset habits.
              </span>
            </li>
            <li className="flex gap-3">
              <IoArrowForward size={22} className="mt-1 text-[#7fa8ff]" />
              <span className="text-gray-300 text-sm md:text-md">
                Interest in HR, People Operations, Product Strategy & User Behavior.
              </span>
            </li>
            <li className="flex gap-3">
              <IoArrowForward size={22} className="mt-1 text-[#7fa8ff]" />
              <span className="text-gray-300 text-sm md:text-md">
                Strong communication, empathy, and leadership qualities.
              </span>
            </li>
            <li className="flex gap-3">
              <IoArrowForward size={22} className="mt-1 text-[#7fa8ff]" />
              <span className="text-gray-300 text-sm md:text-md">
                Passionate about understanding people & improving human experiences.
              </span>
            </li>
          </ul>

        </div>
      </div>
    </div>
  );
};

export default About;
