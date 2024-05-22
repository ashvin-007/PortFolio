import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import pic from "../../public/ashvin2.webp";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto  px-4 md:px-20 my-20"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="font-bold">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              {/* <span className="text-red-700 font-bold"> Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              ></ReactTyped>
            </div>
            <br />
            <p className="text-sm md:text-md  text-justify">
              Welcome to my corner of the web! I'm Ashvin, a passionate web
              developer with a knack for crafting beautiful, functional, and
              user-friendly websites. With a solid foundation in front-end
              development and a growing proficiency in back-end technologies
              like PHP, I'm excited to showcase my skills and embark on new
              coding adventures.
            </p>
            <br />
            {/* Social Media Icons */}
            <div className="flex flex-col md:flex-row items-center  justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold text-center">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a
                      href="https://www.instagram.com/ashvin_parmar_007/"
                      target="blank"
                    >
                      <FaInstagram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/Mr_Ashvin_007" target="blank">
                      <FaTelegram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/ashvin-parmar-629b02280/"
                      target="blank"
                    >
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/ashvin-007/" target="blank">
                      <FaGithub className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold">Currently Working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-xl md:text-2xl  hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <SiExpress className="text-xl md:text-2xl  hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <FaReact className="text-xl md:text-2xl  hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <FaNode className="text-xl md:text-2xl  hover:scale-110 duration-200 rounded-full border-[2px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              alt="image"
              className="rounded-full md:w-[450px] md:h-[450px]"
            />
          </div>
        </div>
        <br />
        <hr />
      </div>
    </>
  );
}

export default Home;
