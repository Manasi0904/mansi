import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!!!
        </h3>
      </div>

      <ul className="text-sm md:text-xl space-y-3">
        {/* Email */}
        <li className="flex gap-2 items-center hover:text-gray-300 transition">
          <MdOutlineEmail size={20} />
          <a
            href="mailto:utkarshjoshi13@gmail.com"
            className="hover:underline"
          >
            utkarshjoshi13@gmail.com
          </a>
        </li>

        {/* LinkedIn */}
        <li className="flex gap-2 items-center hover:text-gray-300 transition">
          <CiLinkedin size={22} />
          <a
            href="https://www.linkedin.com/in/utkarsh-joshi-b4b707321"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            linkedin.com/in/utkarsh-joshi
          </a>
        </li>

        {/* Contact Number */}
        <li className="flex gap-2 items-center hover:text-gray-300 transition">
          <FaPhoneAlt size={18} />
          <a href="tel:+919317002000" className="hover:underline">
            +91 9317002000
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
