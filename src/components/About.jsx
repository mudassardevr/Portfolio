import React from "react";
import { motion } from "framer-motion";

function About({ src = "/images/profileImage.jpg", name = "Mudassar" }) {
  return (
    <>
      <div className="p-4 md:flex items-center md:justify-center">
        {/* ------photoFrame-------- */}
        <div className="left">
          <div className="flex items-center justify-center p-20">
            <div
              className="relative bg-white p-3 pb-10 rounded-sm w-44 -rotate-2 transition-all duration-300 ease-in-out  hover:rotate-0 hover:scale-105 hover:shadow-[6px_10px_30px_rgba(0,0,0,0.2)]"
              style={{ boxShadow: "3px 6px 24px rgba(0,0,0,0.15)" }}
            >
              {/* tape */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-4 bg-yellow-200/80 rounded-sm rotate-1 shadow-sm" />

              {/* photo */}
              <div className="w-full h-40 overflow-hidden bg-gray-100">
                <img
                  src={src}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* name */}
              <p className="text-center text-sm text-gray-500 mt-3 font-mono tracking-widest lowercase">
                {name}
              </p>
            </div>
          </div>
        </div>
        {/* ----------PARAGRAPH--------- */}
        <div className="right">
          <p className="text-xl">HI,</p>
          <p className="text-2xl">
            I'm{" "}
            <span className="text-[#0396FF]">
              <strong>Mudassar khan</strong>
            </span>
          </p>
          {/* <p className="text-2xl"><strong>FULL STACK DEVELOPER</strong></p> */}
          <motion.h1
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: ["inset(0 100% 0 0)", "inset(0 0% 0 0)"] }}
            transition={{
              duration: 2,
              ease: "easeOut",
              repeat: Infinity,
              repeatDelay: 2,
            }}
            className="text-2xl inline-block"
          >
            <strong>FULL STACK DEVELOPER</strong>
          </motion.h1>
          <p className="max-w-2xl mx-auto leading-relaxed ">
            {" "}
            A BCA student and MERN Stack Developer. I build responsive web apps
            using React, Tailwind, Node.js, and MongoDB. I enjoy solving
            real-world problems and continuously improving my skills.
          </p>
          <div className="flex gap-4 justify-center md:justify-start mt-2">
            <a
              href="/Resume/Mudasar_khan.pdf"
              download
              className="px-6 py-2 bg-black text-white rounded-lg shadow-md hover:scale-105 transition-all duration-300"
            >
              ⬇ Download Resume
            </a>

            <a
              href="/Resume/Mudasar_khan.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-black rounded-lg hover:bg-black hover:text-white transition-all duration-300"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
