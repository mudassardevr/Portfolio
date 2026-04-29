import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const navLinks = ["Home", "Projects", "Skills","Education", "Contact"];
const stackLinks = ["React", "Node.js", "MongoDB", "Express", "Tailwind"];


function Footer() {

  return (
    <>
  

    <footer className="bg-[#0a0a0a] text-[#e8e4dc] rounded-2xl overflow-hidden font-[Syne]">

      {/* TOP */}
      <div className="grid md:grid-cols-3 border-b border-[#222]">

        {/* BRAND */}
        <div className="p-10 border-r border-[#222] flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight">
              MUD<span className="text-[#c8f060]">.</span>
            </h1>
            <p className="text-xs mt-3 font-mono text-[#555] uppercase tracking-widest">
              MERN Developer · Hyderabad
            </p>
          </div>

          <a
            href="mailto:mudasarks116@email.com"
            className="mt-8 inline-flex items-center gap-3 border border-[#333] px-5 py-2 rounded-full text-sm hover:bg-[#c8f060] hover:text-black transition"
          >
            <span className="w-4 h-4 flex items-center justify-center rounded-full bg-[#c8f060] text-black text-[10px]">
              ↗
            </span>
            Let’s work together
          </a>
        </div>

        {/* NAV */}
        <div className="p-10 border-r border-[#222]">
          <p className="text-[10px] font-mono uppercase tracking-widest text-[#444] mb-6">
            Navigate
          </p>

          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="flex items-center gap-2 text-[#888] hover:text-white transition"
                >
                  <span className="w-1 h-1 bg-[#c8f060] rounded-full opacity-0 hover:opacity-100"></span>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* STACK */}
        <div className="p-10">
          <p className="text-[10px] font-mono uppercase tracking-widest text-[#444] mb-6">
            Stack
          </p>

          <ul className="space-y-3">
            {stackLinks.map((item) => (
              <li key={item}>
                <span className="flex items-center gap-2 text-[#888]">
                  <span className="w-1 h-1 bg-[#c8f060] rounded-full"></span>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* MARQUEE (needs small custom CSS) */}
      <div className="border-y border-[#222] overflow-hidden py-3 bg-[#0d0d0d]">
        <div className="marquee flex whitespace-nowrap w-max ">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex shrink-0">
              {[
                "Full Stack Developer",
                "MERN Stack",
                "React & Node",
                "Open to Work",
                "Clean Code",
              ].map((text) => (
                <span key={text} className="px-8 text-xs font-mono text-[#333] uppercase tracking-widest">
                  {text} <span className="text-[#c8f060]">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-6">

        <p className="text-xs font-mono text-[#444]">
          © 2026 <span className="text-[#c8f060]">Mudassar</span>
        </p>

        <div className="flex items-center gap-2 text-xs font-mono text-[#444]">
          <span className="w-2 h-2 bg-[#c8f060] rounded-full animate-pulse"></span>
          Available for hire
        </div>

        <div className="flex gap-3">
          <a className="social-btn" href='https://github.com/mudassardevr'><FaGithub /></a>
          <a className="social-btn" href='https://www.linkedin.com/in/mudasar-khan-40b78436b/'><FaLinkedin /></a>
          <a className="social-btn" href='mailto:mudasarks116@email.com'><MdEmail /></a>
        </div>
      </div>
    </footer>
    </>

  )
}

export default Footer