import React from "react";

const project = [
  {
    title: "Gallery App",
    desc: "A secure cloud-based gallery application built with React and Tailwind CSS, allowing users to upload, store, and manage images safely with organized descriptions and a responsive user interface.",
    tech: ["MERN stack", "tailwindcss", "MongoDB atlas", "REST API"],
    image: "/images/galleryApp.png",
    live: "https://gallery-frontend-amber.vercel.app/",
    github: "https://github.com/mudassardevr/gallery-frontend",
  },
  {
    title: "Task Manager App",
    desc: "A responsive task manager built with React and Tailwind CSS, allowing users to organize, track, and manage daily tasks efficiently.",
    tech: ["MERN stack", "Tailwindcss", "REST API"],
    image: "/images/taskManager.png",
    live: "https://mudassardevr.github.io/task-manager/",
    github: "https://github.com/mudassardevr/task-manager",
  },
  {
    title: "PlayStation ",
    desc: "A sleek cloud gaming platform inspired by PlayStation, allowing users to stream and play high-quality games instantly without downloads. Designed with a modern UI and smooth user experience.",
    tech: ["Tailwindcss"],
    image: "/images/playstation.png",
    live: "https://mudassardevr.github.io/Playstation/",
    github: "https://github.com/mudassardevr/Playstation",
  },
];

function Projects() {
  return (
    <>
      <div className="mb-5">
        <div className="text-3xl font-bold text-center">Projects</div>

        <div className=" border-gray-800 rounded-xl py-10 px-5">
          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {project.map((project, index) => (
              <div
                key={index}
                className="bg-[#0b0f1a] border border-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
              >
                {/* Image */}
                <div className="h-40 flex justify-center items-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-white text-lg font-semibold">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm mt-2">{project.desc}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tech.map((item, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-md"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center gap-3 mt-4">
                    <a
                      href={project.live}
                      className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-3 py-1 rounded-md"
                    >
                      View Project
                    </a>

                    <a
                      href={project.github}
                      className="text-gray-400 hover:text-white"
                    >
                      GitHub ↗
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
