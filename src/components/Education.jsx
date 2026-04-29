import React from "react";

const educationData = [
  {
    year: "2026 — Present",
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Girraj Govt.college Nizamabad — 4th Semester Completed",
    desc: "Pursuing a Bachelor of Computer Applications with a strong foundation in software development and data structures. Alongside academics, actively building MERN stack applications to gain hands-on experience in full-stack development.",
    tags: [
      "JavaScript",
      "React",
      "Node.js",
      "MongoDB",
      "Data Structures",
      "Tailwind",
    ],
    active: true,
  },
  {
    year: "2026 - Present",
    degree: "MERN Stack Development",
    school: "Self-Taught — Project-Based Learning",
    desc: "Built full-stack applications including a Task Tracker, Notes App, Gallery App & Chat App. Deep focus on REST APIs, JWT Auth, and deployment.",
    tags: ["Express.js", "Mongoose", "JWT", "Tailwind CSS", "Socket.io"],
    active: true,
  },
  {
    year: "2024",
    degree: "Intermediate (BiPC)",
    school: "Sri Kakatiya Jr. College, Nizamabad",
    desc: "Completed HTML/CSS portfolio projects, vanilla JS apps, and React single-page applications. Established deep understanding of web fundamentals.",
    tags: [],
  },
  {
    year: "2022",
    degree: "Higher Secondary Education",
    school: "GOVT H S ,KHALEEL WADI, NIZAMABAD",
    desc: "Strong academic foundation in Computer Science, logic, and sciences.",
    tags: ["Biology", "History", "Physics", "Computer Science"],
  },
];

function Education() {
  return (
    <>
      <div className="text-3xl font-bold text-center">Education</div>

      <section className="bg-[#f8fdf8] text-[#f0ede8] min-h-screen py-16 px-5 flex justify-center">
        <div className="max-w-205 w-full">
          {/* Tag */}
          <span className="text-[11px] uppercase tracking-[0.14em] text-gray-500 border border-[#333] px-4 py-1 rounded-full inline-block mb-5">
            Education
          </span>

          {/* Heading */}
          <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-2 text-black">
            My learning <span className="italic text-[#5DCAA5]">journey</span>
          </h1>

          <p className="text-sm text-gray-500 mb-14 font-light">
            Degrees, certifications & skills acquired along the way.
          </p>

          {/* Timeline */}
          <div className="relative pl-10">
            {/* Line */}
            <div className="absolute left-2 top-2 bottom-2 w-px bg-[#222]" />

            {educationData.map((item, index) => (
              <div
                key={index}
                className="relative mb-10 opacity-0 -translate-x-5 animate-slideIn"
                style={{
                  animationDelay: `${index * 0.15}s`,
                  animationFillMode: "forwards",
                }}
              >
                {/* Dot */}
                <div
                  className={`absolute -left-8.5 top-2 w-4 h-4 rounded-full border-2 
                ${item.active ? "bg-[#1D9E75] shadow-[0_0_0_4px_rgba(29,158,117,0.15)]" : "bg-[#0e0e0e] border-[#1D9E75]"}`}
                />

                {/* Card */}
                <div className="bg-[#161616] border border-[#252525] rounded-xl p-5 transition hover:translate-x-1 hover:border-[#333]">
                  {/* Year */}
                  <div className="flex justify-end mb-2">
                    <span className="text-[11px] uppercase tracking-wider text-[#c8f060] bg-[#1D9E7520] px-3 py-1 rounded-full">
                      {item.year}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="font-serif text-lg font-bold mb-1">
                    {item.degree}
                  </h3>

                  <p className="text-sm text-[#888] mb-2">{item.school}</p>

                  <p className="text-sm text-gray-400 leading-relaxed font-light">
                    {item.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs text-gray-500 bg-[#1a1a1a] border border-[#2a2a2a] px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-12">
            {[
              { num: "5+", label: "Projects Built" },
              { num: "5th", label: "Semester (BCA)" },
              { num: "MERN", label: "Stack Focus" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-[#0a0a0a] border border-[#222] rounded-lg p-5 text-center opacity-0 translate-y-3 animate-fadeUp"
                style={{
                  animationDelay: `${0.65 + i * 0.1}s`,
                  animationFillMode: "forwards",
                }}
              >
                <p className="font-serif text-3xl text-[#c8f060] font-bold">
                  {stat.num}
                </p>
                <p className="text-xs text-gray-500 font-light">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Education;
