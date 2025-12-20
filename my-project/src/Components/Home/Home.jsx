import React from "react";
import avatarImg from "../../assets/image1.jpeg";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div
      id="home"
      className="text-white flex flex-col md:flex-row justify-center items-center min-h-screen px-8 md:px-20 py-12
        bg-gradient-to-br from-blue-900 to-[#7A8FD9]"
    >
      <div className="md:w-2/4 md:pr-16 flex flex-col justify-center">
        <h1 className="text-3xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4">
          <TextChange />
        </h1>

        <p className="text-base md:text-xl tracking-wide mb-6 max-w-xl">
          People are at the heart of every successful product. With a passion for 
          Product Management and precision in strategy, I aim to build products 
          that thrive on empathy, innovation, and meaningful impact.
        </p>

        <div className="flex gap-6">
          <a
            href="#contact"
            className="text-white bg-[#5A6DC3] py-3 px-7 rounded-full text-base font-semibold 
              shadow-lg transition transform hover:scale-105 hover:bg-[#7A8FD9]"
          >
            Contact Me
          </a>

          <a
            href="https://drive.google.com/file/d/1TCydiiBCLhw_zFBfhuCrGqOYr7vY5AZz/view"
            className="text-white bg-[#5A6DC3] py-3 px-7 rounded-full text-base font-semibold 
              shadow-lg transition transform hover:scale-105 hover:bg-[#7A8FD9]"
          >
            Resume
          </a>
        </div>
      </div>

      <div className="mt-12 md:mt-0 md:w-2/4 flex justify-center">
        <img
          className="w-64 md:w-96 rounded-3xl shadow-2xl object-cover"
          src={avatarImg}
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Home;