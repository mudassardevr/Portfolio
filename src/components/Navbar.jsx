import React, { useState } from "react";

const navItems = [
  {
    icon: "🏠",
    label: "Home",
    id: "home",
    hoverColor: "group-hover:text-orange-500",
    hoverBg: "group-hover:bg-orange-500",
    arrowColor: "group-hover:text-orange-400",
  },
  {
    icon: "💼",
    label: "Projects",
    id: "projects",
    hoverColor: "group-hover:text-blue-500",
    hoverBg: "group-hover:bg-blue-500",
    arrowColor: "group-hover:text-blue-400",
  },
  {
    icon: "👤",
    label: "Contact",
    id: "contact",
    hoverColor: "group-hover:text-green-500",
    hoverBg: "group-hover:bg-green-500",
    arrowColor: "group-hover:text-green-400",
  },
  {
    icon: "📝",
    label: "Education",
    id: "education",
    hoverColor: "group-hover:text-green-500",
    hoverBg: "group-hover:bg-green-500",
    arrowColor: "group-hover:text-green-400",
  },
  {
    icon: "📝",
    label: "Skills",
    id: "skills",
    hoverColor: "group-hover:text-purple-500",
    hoverBg: "group-hover:bg-purple-500",
    arrowColor: "group-hover:text-purple-400",
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);

  // scroll animation
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    const offset = 80;

    const y = element.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top: y, behavior: "smooth" });
    close(); // close menu after click 🔥
  };

  return (
    <>
      <nav className="h-14.25 flex items-center justify-between shadow-sm p-4">
        {/* -----logo------------ */}
        <div className="flex">
          <h1 className="text-6xl font-bold text-[#0396FF] ">M</h1>
          <div className="flex-col items-center ">
            <span className="text-[25px] -ml-1 text-[#00001A]">Codes</span>
            <p>udassar</p>
          </div>
        </div>

        {/* --------------desktop top menu---------- */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="text-gray-700 hover:text-black font-medium transition hover:cursor-pointer"
            >
              {item.label}
              
              
            </button>
          ))}
        </div>

        {/* --- HAMBURGUR ----------- */}
        <button
          onClick={toggle}
          className="w-9 h-9 bg-gray-900 rounded-xl flex flex-col gap-1.25 items-center justify-center md:hidden"
          aria-label="Toggle menu"
        >
          {/* Bar 1 */}
          <span
            className={`block h-0.5 w-4 bg-white rounded-full transition-all duration-300 origin-center
              ${isOpen ? "translate-y-1.75 rotate-45" : ""}`}
          />
          {/* Bar 2 */}
          <span
            className={`block h-0.5 w-4 bg-white rounded-full transition-all duration-300
              ${isOpen ? "opacity-0 scale-x-0" : ""}`}
          />
          {/* Bar 3 */}
          <span
            className={`block h-0.5 w-4 bg-white rounded-full transition-all duration-300 origin-center
              ${isOpen ? "-translate-y-1.75 -rotate-45" : ""}`}
          />
        </button>
      </nav>
      {/*----- Backdrop------ */}
      <div
        onClick={close}
        className={`fixed inset-0 z-40 bg-black/45 transition-opacity duration-300
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      {/* ----------------Bottom Sheet ----------*/}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl px-6 pt-3 pb-10 shadow-2xl
          transition-transform duration-400 ease-[cubic-bezier(0.32,0.72,0,1)]
          ${isOpen ? "translate-y-0" : "translate-y-full"}`}
      >
        {/* Handle */}
        <div className="w-10 h-1 bg-gray-200 rounded-full mx-auto mb-5" />

        {/* ----------- Nav List ----------------*/}
        <nav className="flex flex-col">
          {navItems.map((item, i) => (
            <button
              onClick={() => handleScroll(item.id)}
              className={`flex items-center justify-between py-4 border-b border-gray-100 group
                transition-all duration-300
                ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
              style={{ transitionDelay: isOpen ? `${0.07 + i * 0.06}s` : "0s" }}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-8 h-8 bg-gray-100 rounded-xl flex items-center justify-center text-base transition-colors duration-200 ${item.hoverBg}`}
                >
                  {item.icon}
                </span>
                <span
                  className={`font-semibold text-gray-800 transition-colors duration-200 ${item.hoverColor}`}
                >
                  {item.label}
                </span>
              </div>
              <span
                className={`text-gray-300 transition-colors duration-200 ${item.arrowColor}`}
              >
                →
              </span>
            </button>
          ))}

          {/* ------------ Download Resume Button ----------------- */}
          <a
            href="/Resume/Mudasar_khan.pdf" download
            className={`mt-5 w-full bg-gray-900 text-white font-semibold py-4 rounded-2xl
              hover:bg-orange-500 duration-300 text-center
              transition-all
              ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
            style={{ transitionDelay: isOpen ? "0.31s" : "0s" }}
          >
            Download Resume ↓
          </a>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
